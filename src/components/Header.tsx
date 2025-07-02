
import { useState } from 'react';
import { Search, Bell, User, Menu, X, BookOpen, Users, Trophy, Info, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login state
  const location = useLocation();
  
  // Navigation for non-logged-in users (landing page)
  const publicNavigation = [
    { name: 'À propos', href: '/about', icon: Info },
    { name: 'Cours', href: '/catalog', icon: BookOpen },
    { name: 'Communauté', href: '/community', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  // Navigation for logged-in users
  const privateNavigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Trophy },
    { name: 'Cours', href: '/catalog', icon: BookOpen },
    { name: 'Communauté', href: '/community', icon: Users },
  ];

  const navigation = isLoggedIn ? privateNavigation : publicNavigation;

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-heading font-bold text-gray-900">
              Design<span className="text-primary">Master</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Search - Hidden on mobile and only for logged-in users */}
            {isLoggedIn && (
              <div className="hidden sm:block relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Rechercher un cours..."
                  className="pl-10 w-64 bg-gray-50 border-gray-200 focus:ring-primary/20"
                />
              </div>
            )}

            {isLoggedIn ? (
              // Logged-in user actions
              <>
                {/* Notifications */}
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </Button>

                {/* Profile */}
                <Button variant="ghost" size="sm">
                  <User className="w-5 h-5" />
                </Button>
              </>
            ) : (
              // Public user actions (login/register buttons)
              <div className="hidden md:flex items-center space-x-3">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsLoggedIn(true)} // Mock login
                >
                  Connexion
                </Button>
                <Button 
                  size="sm"
                  onClick={() => setIsLoggedIn(true)} // Mock login
                >
                  S'inscrire
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile auth buttons for non-logged-in users */}
              {!isLoggedIn && (
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <Button 
                    variant="ghost" 
                    className="justify-start"
                    onClick={() => {
                      setIsLoggedIn(true);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Connexion
                  </Button>
                  <Button 
                    className="justify-start"
                    onClick={() => {
                      setIsLoggedIn(true);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    S'inscrire
                  </Button>
                </div>
              )}
            </div>
            
            {/* Mobile Search for logged-in users */}
            {isLoggedIn && (
              <div className="mt-4 relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Rechercher un cours..."
                  className="pl-10 bg-gray-50 border-gray-200"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
