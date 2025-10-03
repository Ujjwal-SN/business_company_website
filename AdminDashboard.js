import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiLogOut, 
  FiUsers, 
  FiPackage, 
  FiSettings, 
  FiHome, 
  FiMenu, 
  FiDollarSign,
  FiMail
} from 'react-icons/fi';
import { format } from 'date-fns';
import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';

// Premium Card Wrapper for glassmorphism effect
const PremiumCard = ({ children, className = "" }) => (
  <div className={`rounded-2xl shadow-xl bg-gradient-to-br from-white/80 to-blue-100/60 backdrop-blur-lg border border-blue-200/40 transition hover:scale-[1.02] ${className}`}>
    {children}
  </div>
);

// Reusable Components
const TableRow = ({ name, email, status }) => (
  <tr className="transition duration-200 hover:bg-blue-50/60">
    <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">{name}</td>
    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{email}</td>
    <td className="px-6 py-4 whitespace-nowrap">
      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full shadow ${
        status === 'Active' ? 'bg-gradient-to-r from-green-400 to-green-600 text-white' : 'bg-gradient-to-r from-red-400 to-red-600 text-white'
      }`}>
        {status}
      </span>
    </td>
    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
      <button className="text-blue-600 hover:text-blue-900 font-bold transition underline underline-offset-2">Edit</button>
    </td>
  </tr>
);

const StatCard = ({ title, value, change, icon: Icon, trend }) => (
  <PremiumCard className="p-6 flex flex-col justify-center items-center min-h-[160px]">
    <div className="flex items-center w-full">
      <div className="p-3 mr-4 text-white bg-gradient-to-tr from-blue-500 to-blue-700 rounded-full shadow-lg">
        <Icon className="w-7 h-7" />
      </div>
      <div className="flex-1">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">{title}</p>
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-2xl font-extrabold text-gray-900 drop-shadow-sm break-words">{value}</p>
          <span className={`text-xs font-bold ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>{change}</span>
        </div>
      </div>
    </div>
  </PremiumCard>
);

// Tab Components
function OverviewTab() {
  const users = useRealtimeUsers();
  const messages = useRealtimeMessages();
  const { activeUsers, pageViews } = useRealtimeAnalytics();
  return (
    <PremiumCard className="p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Active Users (Live)" value={activeUsers} change="" icon={FiUsers} trend="up" />
        <StatCard title="Total Users" value={users.length} change="" icon={FiUsers} trend="up" />
        <StatCard title="Total Messages" value={messages.length} change="" icon={FiMail} trend="up" />
        <StatCard title="Page Views" value={pageViews} change="" icon={FiHome} trend="up" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-4">Recent Users</h3>
          <ul className="space-y-2">
            {users.slice(0,5).map(user => (
              <li key={user.id} className="p-3 bg-blue-50 rounded-lg shadow border border-blue-100">
                <span className="font-bold text-blue-700">{user.name}</span> <span className="text-gray-500">({user.email})</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-4">Recent Messages</h3>
          <ul className="space-y-2">
            {messages.slice(0,5).map(msg => (
              <li key={msg.id} className="p-3 bg-blue-50 rounded-lg shadow border border-blue-100">
                <span className="font-bold text-blue-700">{msg.userName || 'Anonymous'}:</span> <span className="text-gray-700">{msg.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PremiumCard>
  );
}
function DashboardTab() {
  return (
    <div className="flex justify-center items-center w-full">
      <DashboardStats />
    </div>
  );
}
// Real-time Analytics Hook (Demo: Simulated, replace with Firebase Analytics API for production)
const useRealtimeAnalytics = () => {
  const [activeUsers, setActiveUsers] = useState(0);
  const [pageViews, setPageViews] = useState(0);

  useEffect(() => {
    // Simulate active users (Firebase Analytics does not provide real-time active users)
    const interval = setInterval(() => {
      setActiveUsers(Math.floor(Math.random() * 20) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Listen for page view events using Firebase Realtime Database (custom implementation)
    const pageViewsRef = ref(db, 'analytics/pageViews');
    const unsubscribe = onValue(pageViewsRef, (snapshot) => {
      const data = snapshot.val();
      setPageViews(data || 0);
    });
    return () => unsubscribe();
  }, []);

  return { activeUsers, pageViews };
};

// Dashboard Stats Component
function DashboardStats() {
  const { activeUsers, pageViews } = useRealtimeAnalytics();
  return (
    <div className="flex justify-center items-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
        <StatCard 
          title="Active Users (Live)" value={activeUsers} change="" 
          icon={FiUsers} trend="up" 
        />
        <StatCard 
          title="Page Views (Live)" value={pageViews} change="" 
          icon={FiHome} trend="up" 
        />
        <StatCard 
          title="Total Revenue" value="₹6,999" change="+8%" 
          icon={FiDollarSign} trend="up" 
        />
        <StatCard 
          title="Total Products" value="150" change="+5%" 
          icon={FiPackage} trend="up" 
        />
      </div>
    </div>
  );
}


const UsersTab = () => {
  const users = useRealtimeUsers();

  return (
    <PremiumCard className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-blue-700">Users</h2>
        <button className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow hover:scale-105 transition">+ Add User</button>
      </div>
      <div className="overflow-x-auto rounded-xl border border-blue-100 shadow">
        <table className="min-w-full divide-y divide-blue-100">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-6 py-3 text-xs font-bold tracking-wider text-left text-blue-700 uppercase">Name</th>
              <th className="px-6 py-3 text-xs font-bold tracking-wider text-left text-blue-700 uppercase">Email</th>
              <th className="px-6 py-3 text-xs font-bold tracking-wider text-left text-blue-700 uppercase">Status</th>
              <th className="px-6 py-3 text-xs font-bold tracking-wider text-left text-blue-700 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-blue-50">
            {users.length === 0 ? (
              <tr><td colSpan={4} className="text-center py-6 text-gray-400">No users found.</td></tr>
            ) : (
              users.map(user => (
                <TableRow key={user.id} name={user.name} email={user.email} status={user.status} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </PremiumCard>
  );
};

const ProductsTab = () => (
  <PremiumCard className="p-8 flex flex-col items-center justify-center min-h-[300px]">
    <h2 className="text-2xl font-bold text-blue-700 mb-4">Products</h2>
    <button className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow hover:scale-105 transition mb-8">+ Add Product</button>
    <div className="text-center text-gray-500 text-lg">
      <p>Product management coming soon</p>
      <div className="mt-6 flex justify-center gap-4">
        <span className="inline-block w-16 h-16 bg-blue-100 rounded-full animate-pulse"></span>
        <span className="inline-block w-16 h-16 bg-blue-200 rounded-full animate-pulse"></span>
      </div>
    </div>
  </PremiumCard>
);

const SettingsTab = () => (
  <PremiumCard className="p-8">
    <h2 className="mb-8 text-2xl font-bold text-blue-700">Settings</h2>
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold text-blue-600">Account Settings</h3>
        <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 shadow">
          <p className="text-sm text-gray-600">Update your account information and settings</p>
          <button className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow hover:scale-105 transition">Edit Account</button>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold text-blue-600">Preferences</h3>
        <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 shadow">
          <p className="text-sm text-gray-600">Customize your dashboard experience</p>
          <button className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow hover:scale-105 transition">Edit Preferences</button>
        </div>
      </div>
    </div>
  </PremiumCard>
);

// Enhanced background with animated gradient
const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-blue-100 via-white to-blue-300"></div>
);

// Custom Hook: Fetch users from Firebase Realtime Database
const useRealtimeUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = ref(db, 'users'); // 'users' is the node in your database
    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert object to array
        setUsers(Object.entries(data).map(([id, user]) => ({ id, ...user })));
      } else {
        setUsers([]);
      }
    });
    return () => unsubscribe();
  }, []);

  return users;
};

// Example: Fetch messages from Firebase Realtime Database
const useRealtimeMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = ref(db, 'messages'); // 'messages' is the node in your database
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setMessages(Object.entries(data).map(([id, msg]) => ({ id, ...msg })));
      } else {
        setMessages([]);
      }
    });
    return () => unsubscribe();
  }, []);

  return messages;
};

const MessagesTab = () => {
  const messages = useRealtimeMessages();

  return (
    <PremiumCard className="p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">User Messages</h2>
      <div className="space-y-4">
        {messages.length === 0 ? (
          <div className="text-gray-400 text-center">No messages found.</div>
        ) : (
          messages.map(msg => (
            <div key={msg.id} className="p-4 bg-blue-50 rounded-xl border border-blue-100 shadow">
              <div className="font-semibold text-blue-700 mb-1">{msg.name || 'Anonymous'}</div>
              <div className="text-gray-700 mb-1"><span className="font-semibold">Email:</span> {msg.email}</div>
              <div className="text-gray-700 mb-1"><span className="font-semibold">Company:</span> {msg.company}</div>
              <div className="text-gray-700 mb-1"><span className="font-semibold">Phone:</span> {msg.phone}</div>
              <div className="text-gray-700 mb-1"><span className="font-semibold">Service:</span> {msg.service}</div>
              <div className="text-gray-700 mb-1"><span className="font-semibold">Budget:</span> {msg.budget}</div>
              <div className="text-gray-700 mb-1"><span className="font-semibold">Timeline:</span> {msg.timeline}</div>
              <div className="text-gray-700 mb-2"><span className="font-semibold">Message:</span> {msg.message}</div>
              <div className="text-xs text-gray-400 mt-1">{msg.timestamp}</div>
            </div>
          ))
        )}
      </div>
    </PremiumCard>
  );
};

// Main Component
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const updateDate = () => setCurrentDate(format(new Date(), 'EEEE, MMMM d, yyyy'));
    updateDate();
    const timer = setInterval(updateDate, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const renderContent = useMemo(() => {
    switch (activeTab) {
      case 'overview': return <OverviewTab />;
      case 'users': return <UsersTab />;
      case 'products': return <ProductsTab />;
      case 'settings': return <SettingsTab />;
      case 'messages': return <MessagesTab />;
      case 'dashboard':
      default: return <DashboardTab />;
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <header className="lg:hidden bg-white/80 shadow backdrop-blur-lg border-b border-blue-100 relative z-50">
        <div className="flex items-center justify-between p-4 relative">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-blue-600 rounded-md hover:bg-blue-100 transition duration-300 ease-in-out z-50 focus:ring-2 focus:ring-blue-400"
            style={{ position: 'relative' }}
            aria-label="Open sidebar"
          >
            <FiMenu className="w-7 h-7 animate-bounce" />
          </button>
          <h1 className="text-xl font-bold text-blue-700 tracking-wide drop-shadow animate-fade-in">Admin Dashboard</h1>
          <div className="w-6" />
        </div>
      </header>
      <div className="flex">
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-white/90 shadow-xl transform ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 transition-transform duration-500 lg:static backdrop-blur-lg border-r border-blue-100`}
          style={{ top: mobileMenuOpen ? '56px' : '0', height: mobileMenuOpen ? 'calc(100vh - 56px)' : '100vh' }}
        >
          <div className="flex flex-col h-full">
            <div className="p-6 mt-24 border-b border-blue-100 animate-fade-in">
              <h2 className="text-2xl font-extrabold text-blue-700 tracking-wide flex items-center gap-2">
                <FiSettings className="w-6 h-6 text-blue-500 animate-spin-slow" />
                Admin Panel
              </h2>
              <p className="text-sm text-gray-500 animate-fade-in">Welcome back!</p>
            </div>
            <nav className="flex-1 p-4 space-y-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex items-center w-full px-4 py-2 text-left rounded-lg font-semibold transition duration-300 ease-in-out ${
                  activeTab === 'overview' ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 shadow-lg scale-105' : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                <FiHome className="mr-3 w-5 h-5 animate-fade-in" />
                Overview
              </button>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center w-full px-4 py-2 text-left rounded-lg font-semibold transition duration-300 ease-in-out ${
                  activeTab === 'dashboard' ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 shadow-lg scale-105' : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                <FiHome className="mr-3 w-5 h-5 animate-fade-in" />
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`flex items-center w-full px-4 py-2 text-left rounded-lg font-semibold transition duration-300 ease-in-out ${
                  activeTab === 'users' ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 shadow-lg scale-105' : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                <FiUsers className="mr-3 w-5 h-5 animate-fade-in" />
                Users
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`flex items-center w-full px-4 py-2 text-left rounded-lg font-semibold transition duration-300 ease-in-out ${
                  activeTab === 'products' ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 shadow-lg scale-105' : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                <FiPackage className="mr-3 w-5 h-5 animate-fade-in" />
                Products
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`flex items-center w-full px-4 py-2 text-left rounded-lg font-semibold transition duration-300 ease-in-out ${
                  activeTab === 'settings' ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 shadow-lg scale-105' : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                <FiSettings className="mr-3 w-5 h-5 animate-spin-slow" />
                Settings
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className={`flex items-center w-full px-4 py-2 text-left rounded-lg font-semibold transition duration-300 ease-in-out ${
                  activeTab === 'messages' ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 shadow-lg scale-105' : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                <FiMail className="mr-3 w-5 h-5 animate-fade-in" />
                Messages
              </button>
            </nav>
            <div className="p-6 border-t border-blue-100">
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 text-left text-red-600 rounded-lg font-semibold hover:bg-red-50 transition duration-300 ease-in-out"
              >
                <FiLogOut className="mr-3 w-5 h-5 animate-fade-in" />
                Logout
              </button>
            </div>
          </div>
        </aside>
        <main className="flex-1 min-h-screen lg:ml-64">
          <div className="p-8 lg:pl-8 mt-24 animate-fade-in">
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h1 className="text-3xl font-extrabold text-blue-700 tracking-wide drop-shadow mb-1 animate-fade-in">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h1>
                <p className="text-gray-500 font-medium animate-fade-in">{currentDate}</p>
              </div>
            </div>
            <div className="animate-fade-in">
              {renderContent}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;