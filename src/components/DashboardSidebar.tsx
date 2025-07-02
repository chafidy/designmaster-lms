
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  TrendingUp, 
  Users, 
  Briefcase, 
  Home,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: 'Dashboard', href: '/dashboard', icon: Home },
    { title: 'Mes Cours', href: '/dashboard/courses', icon: BookOpen },
    { title: 'Progression', href: '/dashboard/progress', icon: TrendingUp },
    { title: 'Communauté', href: '/dashboard/community', icon: Users },
    { title: 'Portfolio', href: '/dashboard/portfolio', icon: Briefcase },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    } flex flex-col h-screen sticky top-0`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        {!isCollapsed && (
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-heading font-bold text-gray-900">
              Design<span className="text-primary">Master</span>
            </span>
          </Link>
        )}
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`mt-2 ${isCollapsed ? 'w-full' : 'ml-auto'}`}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </div>

        <Separator className="my-6" />

        {/* Settings */}
        <div className="space-y-2">
          <Link
            to="/dashboard/settings"
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/dashboard/settings')
                ? 'bg-primary/10 text-primary'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <Settings className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span>Paramètres</span>}
          </Link>
          
          <button className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 w-full transition-colors">
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span>Déconnexion</span>}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
