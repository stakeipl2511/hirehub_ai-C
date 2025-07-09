import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole] = useState('jobseeker'); // This would come from auth context
  const [notifications] = useState(3); // This would come from notification context

  const navigationItems = {
    jobseeker: [
      { label: 'Learn', path: '/course-detail-learning-interface', icon: 'BookOpen' },
      { label: 'AI Coach', path: '/ai-career-coach-chat-interface', icon: 'MessageCircle' },
      { label: 'Jobs', path: '/job-search-application-hub', icon: 'Briefcase' },
    ],
    recruiter: [
      { label: 'Dashboard', path: '/recruiter-dashboard-pipeline-management', icon: 'BarChart3' },
      { label: 'Candidates', path: '/candidate-profile-evaluation-interface', icon: 'Users' },
    ],
    admin: [
      { label: 'Admin', path: '/admin-dashboard-system-management', icon: 'Settings' },
    ]
  };

  const currentNavItems = navigationItems[userRole] || [];

  const handleNotificationClick = () => {
    // Handle notification center toggle
    console.log('Notification center clicked');
  };

  const handleProfileClick = () => {
    // Handle profile dropdown toggle
    console.log('Profile dropdown clicked');
  };

  const handleRoleSwitch = (newRole) => {
    // Handle role switching logic
    console.log('Switching to role:', newRole);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphic border-b border-white/20">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Icon name="Zap" size={20} color="white" />
          </div>
          <span className="text-xl font-semibold text-foreground">HireHub AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {currentNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 ${
                location.pathname === item.path
                  ? 'bg-primary/20 text-primary border border-primary/30' :'text-foreground hover:bg-white/10'
              }`}
            >
              <Icon name={item.icon} size={18} />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-3">
          {/* Search - Desktop Only */}
          <div className="hidden lg:block">
            <Button
              variant="ghost"
              size="icon"
              iconName="Search"
              onClick={() => console.log('Search clicked')}
              className="hover:bg-white/10"
            />
          </div>

          {/* Notifications */}
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              iconName="Bell"
              onClick={handleNotificationClick}
              className="hover:bg-white/10"
            />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-error text-error-foreground text-xs rounded-full flex items-center justify-center animate-pulse">
                {notifications}
              </span>
            )}
          </div>

          {/* User Profile */}
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              iconName="User"
              onClick={handleProfileClick}
              className="hover:bg-white/10"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              iconName={isMenuOpen ? "X" : "Menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-white/10"
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glassmorphic-surface border-t border-white/20">
          <nav className="px-4 py-3 space-y-2">
            {currentNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-primary/20 text-primary border border-primary/30' :'text-foreground hover:bg-white/10'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
            
            {/* Mobile Search */}
            <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-foreground hover:bg-white/10 transition-all duration-200 w-full">
              <Icon name="Search" size={20} />
              <span className="font-medium">Search</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;