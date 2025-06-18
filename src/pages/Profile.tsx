import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Edit3, Save, X, Camera } from 'lucide-react';

const Profile: React.FC = () => {
  const { currentUser, userProfile, updateProfile, createProfile } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    address: '',
    bio: '',
    mobileNumber: ''
  });

  useEffect(() => {
    if (!currentUser) {
      navigate('/signin');
      return;
    }

    if (userProfile) {
      setFormData({
        name: userProfile.name || '',
        username: userProfile.username || '',
        address: userProfile.address || '',
        bio: userProfile.bio || '',
        mobileNumber: userProfile.mobileNumber || ''
      });
    } else {
      // If no profile exists, enable editing mode
      setIsEditing(true);
    }
  }, [currentUser, userProfile, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (userProfile) {
        await updateProfile(formData);
      } else {
        await createProfile(formData);
      }
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (userProfile) {
      setFormData({
        name: userProfile.name || '',
        username: userProfile.username || '',
        address: userProfile.address || '',
        bio: userProfile.bio || '',
        mobileNumber: userProfile.mobileNumber || ''
      });
      setIsEditing(false);
    }
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-8 py-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative group">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/30 group-hover:scale-105 transition-all duration-300">
                  <User className="w-16 h-16 text-white" />
                </div>
                <button className="absolute bottom-2 right-2 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 transition-all duration-300">
                  <Camera className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl font-bold mb-2">
                  {userProfile?.name || 'Complete Your Profile'}
                </h1>
                <p className="text-emerald-100 text-lg mb-4">
                  @{userProfile?.username || 'username'}
                </p>
                <p className="text-white/90">
                  {currentUser.email}
                </p>
              </div>
              <div className="flex space-x-3">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/30"
                  >
                    <Edit3 className="w-5 h-5" />
                    <span>Edit Profile</span>
                  </button>
                ) : (
                  <button
                    onClick={handleCancel}
                    className="flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/30"
                  >
                    <X className="w-5 h-5" />
                    <span>Cancel</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-500" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-3">
                        Username *
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-500 font-medium">@</span>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                          placeholder="your_username"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="mobileNumber" className="block text-sm font-semibold text-gray-700 mb-3">
                        Mobile Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-500" />
                        <input
                          type="tel"
                          id="mobileNumber"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                          placeholder="Enter your mobile number"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-3">
                        Address
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-4 w-5 h-5 text-emerald-500" />
                        <textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          rows={4}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                          placeholder="Enter your complete address"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="bio" className="block text-sm font-semibold text-gray-700 mb-3">
                        Bio
                      </label>
                      <div className="relative">
                        <Edit3 className="absolute left-4 top-4 w-5 h-5 text-emerald-500" />
                        <textarea
                          id="bio"
                          name="bio"
                          value={formData.bio}
                          onChange={handleChange}
                          rows={4}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                          placeholder="Tell us about yourself..."
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-8 py-3 rounded-xl hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transition-all duration-300 disabled:opacity-50 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {loading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <Save className="w-5 h-5" />
                    )}
                    <span>{loading ? 'Saving...' : 'Save Profile'}</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-8">
                {userProfile ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                        <div className="flex items-center space-x-3 mb-4">
                          <User className="w-6 h-6 text-emerald-600" />
                          <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-gray-600">Full Name</p>
                            <p className="font-semibold text-gray-900 text-lg">{userProfile.name}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Username</p>
                            <p className="font-semibold text-emerald-600 text-lg">@{userProfile.username}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Email</p>
                            <p className="font-medium text-gray-900">{userProfile.email}</p>
                          </div>
                        </div>
                      </div>

                      {userProfile.mobileNumber && (
                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
                          <div className="flex items-center space-x-3 mb-4">
                            <Phone className="w-6 h-6 text-teal-600" />
                            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Mobile Number</p>
                            <p className="font-semibold text-gray-900 text-lg">{userProfile.mobileNumber}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-6">
                      {userProfile.address && (
                        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100">
                          <div className="flex items-center space-x-3 mb-4">
                            <MapPin className="w-6 h-6 text-cyan-600" />
                            <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{userProfile.address}</p>
                        </div>
                      )}

                      {userProfile.bio && (
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                          <div className="flex items-center space-x-3 mb-4">
                            <Edit3 className="w-6 h-6 text-blue-600" />
                            <h3 className="text-lg font-semibold text-gray-900">Bio</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{userProfile.bio}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <User className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Complete Your Profile</h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      Add your personal information to get the most out of your MyBusiness experience.
                    </p>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-8 py-3 rounded-xl hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Create Profile
                    </button>
                  </div>
                )}

                {userProfile && (
                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Profile created: {userProfile.createdAt.toLocaleDateString()}</span>
                      <span>Last updated: {userProfile.updatedAt.toLocaleDateString()}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;