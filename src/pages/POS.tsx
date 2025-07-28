import React, { useState } from 'react';
import ProductSearch from '../components/ProductSearch';
import Cart from '../components/Cart';
import PaymentModal from '../components/PaymentModal';
import { useCart } from '../contexts/CartContext';

const POS: React.FC = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const { getTotalAmount } = useCart();

  const handleCheckout = () => {
    setIsPaymentModalOpen(true);
  };

  return (
    <div className="flex-row-reverse grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
      <div className="lg:col-span-2">
        <ProductSearch />
      </div>
      
      <div className="lg:col-span-1">
        <Cart onCheckout={handleCheckout} />
      </div>

      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        total={getTotalAmount()}
      />
    </div>
  );
};

export default POS;