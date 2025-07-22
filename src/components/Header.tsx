import React from 'react';
import { Menu, Bell, User, LogOut } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-100 rounded-full">
            <LogOut className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">خالد البقمي</p>
              <p className="text-sm text-gray-500">كاشير</p>
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
            <button className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-100 rounded-full">
            <Bell className="w-6 h-6" />
            </button>    
          </div>
          <h2 className="ml-4  text-2xl font-semibold text-gray-800">
            نظام نقاط البيع
          </h2>
        

        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;