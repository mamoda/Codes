import React, { useState } from 'react';
import { X, CreditCard, DollarSign, Smartphone, Printer } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, total }) => {
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card' | 'mobile'>('card');
  const [cashReceived, setCashReceived] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { clearCart } = useCart();

  const taxRate = 0.0825;
  const tax = total * taxRate;
  const finalTotal = total + tax;
  const change = paymentMethod === 'cash' ? Math.max(0, parseFloat(cashReceived) - finalTotal) : 0;

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    clearCart();
    setIsProcessing(false);
    onClose();
    
    // In a real app, you would process the payment here
    alert('Payment processed successfully!');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Payment</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-6">
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal:</span>
              <span className="text-gray-900">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax:</span>
              <span className="text-gray-900">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg pt-2 border-t border-gray-200">
              <span className="text-gray-900">Total:</span>
              <span className="text-gray-900">${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Payment Method</h3>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`p-3 rounded-lg border-2 flex flex-col items-center ${
                paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
            >
              <CreditCard className="w-6 h-6 mb-2" />
              <span className="text-sm">Card</span>
            </button>
            
            <button
              onClick={() => setPaymentMethod('cash')}
              className={`p-3 rounded-lg border-2 flex flex-col items-center ${
                paymentMethod === 'cash' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
            >
              <DollarSign className="w-6 h-6 mb-2" />
              <span className="text-sm">Cash</span>
            </button>
            
            <button
              onClick={() => setPaymentMethod('mobile')}
              className={`p-3 rounded-lg border-2 flex flex-col items-center ${
                paymentMethod === 'mobile' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
            >
              <Smartphone className="w-6 h-6 mb-2" />
              <span className="text-sm">Mobile</span>
            </button>
          </div>
        </div>

        {paymentMethod === 'cash' && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cash Received
            </label>
            <input
              type="number"
              step="0.01"
              value={cashReceived}
              onChange={(e) => setCashReceived(e.target.value)}
              placeholder="0.00"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {cashReceived && parseFloat(cashReceived) >= finalTotal && (
              <div className="mt-2 p-2 bg-green-50 rounded-lg">
                <span className="text-green-800 font-medium">
                  Change: ${change.toFixed(2)}
                </span>
              </div>
            )}
          </div>
        )}

        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handlePayment}
            disabled={isProcessing || (paymentMethod === 'cash' && parseFloat(cashReceived) < finalTotal)}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? 'Processing...' : 'Process Payment'}
          </button>
        </div>

        <button className="w-full mt-3 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center justify-center">
          <Printer className="w-4 h-4 mr-2" />
          Print Receipt
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;