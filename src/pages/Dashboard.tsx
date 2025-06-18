import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, Mail, Shield, Trash2, AlertTriangle, CheckCircle, Edit, MessageCircle, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { currentUser, userProfile, logout, deleteAccount } = useAuth();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDeleteAccount = async () => {
    try {
      setLoading(true);
      await deleteAccount();
    } catch (error) {
      console.error('Failed to delete account:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const quickActions = [
    {
      title: 'Edit Profile',
      description: 'Update your personal information and preferences',
      icon: <Edit className="w-6 h-6" />,
      link: '/profile',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600'
    },
    {
      title: 'Join Community Chat',
      description: 'Connect with other users in real-time',
      icon: <MessageCircle className="w-6 h-6" />,
      link: '/chat',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600'
    },
    {
      title: 'Explore Services',
      description: 'Discover our web development and design services',
      icon: <Briefcase className="w-6 h-6" />,
      link: '/services',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-600'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-8 py-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/30">
                <User className="w-12 h-12" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl font-bold mb-2">
                  Welcome back, {userProfile?.name || 'User'}!
                </h1>
                <p className="text-emerald-100 text-lg">
                  {currentUser?.email}
                </p>
                {userProfile?.bio && (
                  <p className="text-white/90 mt-2">{userProfile.bio}</p>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Account Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <User className="w-6 h-6 mr-3 text-emerald-600" />
                    Account Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <Mail className="w-6 h-6 text-emerald-600" />
                        <div>
                          <p className="text-sm text-gray-600">Email Address</p>
                          <p className="font-semibold text-gray-900">{currentUser?.email}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <Shield className="w-6 h-6 text-teal-600" />
                        <div>
                          <p className="text-sm text-gray-600">Account Status</p>
                          <p className="font-semibold text-teal-600 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Verified
                          </p>
                        </div>
                      </div>
                    </div>

                    {userProfile?.username && (
                      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center space-x-3 mb-4">
                          <User className="w-6 h-6 text-cyan-600" />
                          <div>
                            <p className="text-sm text-gray-600">Username</p>
                            <p className="font-semibold text-gray-900">@{userProfile.username}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                        <div>
                          <p className="text-sm text-gray-600">Member Since</p>
                          <p className="font-semibold text-gray-900">
                            {currentUser?.metadata?.creationTime ? 
                              new Date(currentUser.metadata.creationTime).toLocaleDateString() : 
                              'Recently'
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Completion */}
                {!userProfile && (
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <AlertTriangle className="w-6 h-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-amber-800 mb-2">Complete Your Profile</h3>
                        <p className="text-amber-700 mb-4">
                          Add your personal information to get the most out of your MyBusiness experience.
                        </p>
                        <Link
                          to="/profile"
                          className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 font-medium"
                        >
                          Complete Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                  
                  <div className="space-y-4">
                    {quickActions.map((action, index) => (
                      <Link
                        key={index}
                        to={action.link}
                        className={`block p-6 ${action.bgColor} rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-opacity-20`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                            {action.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className={`font-semibold ${action.textColor} mb-2`}>{action.title}</h3>
                            <p className="text-gray-600 text-sm">{action.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Account Actions */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Actions</h3>
                  
                  <div className="space-y-3">
                    <button
                      onClick={handleLogout}
                      className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium"
                    >
                      Sign Out
                    </button>
                    
                    <button
                      onClick={() => setShowDeleteConfirm(true)}
                      className="w-full px-6 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all duration-300 flex items-center justify-center space-x-2 font-medium"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete Account</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Delete Account</h3>
                <p className="text-sm text-gray-600">This action cannot be undone</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              Are you sure you want to delete your account? All your data will be permanently removed from our servers.
            </p>
            
            <div className="flex space-x-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                disabled={loading}
                className="flex-1 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-300 disabled:opacity-50 font-medium"
              >
                {loading ? 'Deleting...' : 'Delete Account'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;