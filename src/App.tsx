import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import POS from './pages/POS';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';
import Customers from './pages/Customers';
import Settings from './pages/Settings';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { InventoryProvider } from './contexts/InventoryContext';
import LoginPage from './LoginPage';



function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <AuthProvider>
      <CartProvider>
        <InventoryProvider>
          <Router>
            <div className="flex flex-row-reverse h-screen bg-gray-100">
              <Sidebar isOpen={isSidebarOpen} />
              <div className="flex-1 flex flex-col overflow-hidden">
                <Header 
                  onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6  ">
                  <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/pos" element={<POS />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/sales" element={<Sales />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </main>
              </div>
            </div>
          </Router>
        </InventoryProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;