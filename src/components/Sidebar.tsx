import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  TrendingUp, 
  Users, 
  Settings,
  CreditCard
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: CreditCard, label: 'POS', path: '/pos' },
    { icon: Package, label: 'Inventory', path: '/inventory' },
    { icon: TrendingUp, label: 'Sales', path: '/sales' },
    { icon: Users, label: 'Customers', path: '/customers' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className={`bg-gray-900 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <ShoppingCart className="w-8 h-8 text-blue-400" />
          {isOpen && <h1 className="text-xl font-bold">Codes-Cashier</h1>}
        </div>
      </div>
      
      <nav className="mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors ${
              location.pathname === item.path ? 'bg-blue-600 text-white' : ''
            }`}
          >
            <item.icon className="w-6 h-6" />
            {isOpen && <span className="ml-3">{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;