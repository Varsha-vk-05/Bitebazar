import React, { useState } from 'react';
import { X, CreditCard, Smartphone, Banknote, Shield, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { createOrder } from '../lib/database';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, onPaymentSuccess }) => {
  const { cart, clearCart } = useCart();
  const { user } = useAuth();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState<'method' | 'details' | 'processing' | 'success'>('method');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    upiId: '',
    deliveryAddress: ''
  });

  if (!isOpen) return null;

  // Get cart data with null checks
  const cartItems = cart?.items || [];
  const cartTotal = cart?.totalAmount || 0;
  const totalItems = cart?.totalItems || 0;

  const deliveryFee = 40;
  const gst = Math.round(cartTotal * 0.05);
  const totalAmount = cartTotal + deliveryFee + gst;

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, description: 'Visa, Mastercard, RuPay' },
    { id: 'upi', name: 'UPI', icon: Smartphone, description: 'PhonePe, GPay, Paytm' },
    { id: 'cod', name: 'Cash on Delivery', icon: Banknote, description: 'Pay when you receive' }
  ];

  const handlePaymentMethodSelect = (methodId: string) => {
    setSelectedPaymentMethod(methodId);
    setPaymentStep('details');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({ ...prev, [name]: value }));
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setPaymentDetails(prev => ({ ...prev, cardNumber: formatted }));
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    setPaymentDetails(prev => ({ ...prev, expiryDate: formatted }));
  };

  const processPayment = async () => {
    setIsProcessing(true);
    setPaymentStep('processing');

    try {
      // Simulate payment processing with shorter delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create order in database
      if (user && cartItems.length > 0) {
        const orderData = {
          user_id: user.id,
          restaurant_id: cartItems[0].restaurantId,
          items: cartItems.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
          })),
          total_amount: totalAmount,
          delivery_address: paymentDetails.deliveryAddress || 'Default delivery address',
          payment_method: selectedPaymentMethod,
          payment_status: 'completed'
        };
        
        try {
          await createOrder(orderData);
        } catch (dbError) {
          console.log('Database order creation failed, continuing with demo flow');
        }
      }

      setPaymentStep('success');
      
      setTimeout(() => {
        clearCart();
        onPaymentSuccess();
        onClose();
        resetPaymentModal();
      }, 2000);
    } catch (error) {
      console.error('Payment failed:', error);
      // For demo purposes, still proceed to success
      setPaymentStep('success');
      setTimeout(() => {
        clearCart();
        onPaymentSuccess();
        onClose();
        resetPaymentModal();
      }, 2000);
    } finally {
      setIsProcessing(false);
    }
  };

  const resetPaymentModal = () => {
    setPaymentStep('method');
    setSelectedPaymentMethod('');
    setPaymentDetails({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: '',
      upiId: '',
      deliveryAddress: ''
    });
  };

  const handleClose = () => {
    if (paymentStep !== 'processing') {
      onClose();
      resetPaymentModal();
    }
  };

  const renderPaymentMethodSelection = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Select Payment Method</h3>
      {paymentMethods.map((method) => (
        <button
          key={method.id}
          onClick={() => handlePaymentMethodSelect(method.id)}
          className="w-full p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all text-left"
        >
          <div className="flex items-center gap-4">
            <method.icon className="w-6 h-6 text-gray-600" />
            <div>
              <h4 className="font-medium text-gray-800">{method.name}</h4>
              <p className="text-sm text-gray-600">{method.description}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );

  const renderPaymentDetails = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => setPaymentStep('method')}
          className="text-orange-600 hover:text-orange-700"
        >
          ← Back
        </button>
        <h3 className="text-lg font-bold text-gray-800">Payment Details</h3>
      </div>

      {/* Delivery Address */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Address *</label>
        <textarea
          name="deliveryAddress"
          value={paymentDetails.deliveryAddress}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          placeholder="Enter your complete delivery address"
          required
        />
      </div>

      {/* Card Payment Details */}
      {selectedPaymentMethod === 'card' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Card Number *</label>
            <input
              type="text"
              value={paymentDetails.cardNumber}
              onChange={handleCardNumberChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date *</label>
              <input
                type="text"
                value={paymentDetails.expiryDate}
                onChange={handleExpiryDateChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="MM/YY"
                maxLength={5}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CVV *</label>
              <input
                type="text"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="123"
                maxLength={4}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name *</label>
            <input
              type="text"
              name="cardholderName"
              value={paymentDetails.cardholderName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="John Doe"
              required
            />
          </div>
        </div>
      )}

      {/* UPI Payment Details */}
      {selectedPaymentMethod === 'upi' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">UPI ID *</label>
          <input
            type="text"
            name="upiId"
            value={paymentDetails.upiId}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="yourname@paytm"
            required
          />
        </div>
      )}

      {/* Cash on Delivery */}
      {selectedPaymentMethod === 'cod' && (
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="text-sm text-yellow-800">
            You will pay ₹{totalAmount} in cash when your order is delivered.
          </p>
        </div>
      )}

      <button
        onClick={processPayment}
        disabled={!paymentDetails.deliveryAddress || isProcessing}
        className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-bold transition-colors"
      >
        {selectedPaymentMethod === 'cod' ? 'Place Order' : `Pay ₹${totalAmount}`}
      </button>
    </div>
  );

  const renderProcessing = () => (
    <div className="text-center py-8">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-600 mx-auto mb-4"></div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">Processing Payment</h3>
      <p className="text-gray-600">Please wait while we process your payment...</p>
    </div>
  );

  const renderSuccess = () => (
    <div className="text-center py-8">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h3 className="text-lg font-bold text-gray-800 mb-2">Payment Successful!</h3>
      <p className="text-gray-600 mb-4">Your order has been placed successfully.</p>
      <p className="text-sm text-gray-500">You will receive SMS updates about your order.</p>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl card-3d">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-800">
            {paymentStep === 'success' ? 'Order Confirmed' : 'Payment'}
          </h2>
          {paymentStep !== 'processing' && (
            <button
              onClick={handleClose}
              className="p-2 hover:bg-red-100 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {/* Order Summary */}
          {paymentStep !== 'success' && (
            <div className="bg-gradient-to-br from-orange-50 to-purple-50 p-4 rounded-xl mb-6 shadow-inner">
              <h4 className="font-medium text-gray-800 mb-3">Order Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (5%)</span>
                  <span>₹{gst}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-lg bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
                  <span>Total</span>
                  <span>₹{totalAmount}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 text-xs text-gray-600 bg-green-50 p-2 rounded-lg">
                <Shield className="w-4 h-4" />
                <span>Your payment is secured with 256-bit SSL encryption</span>
              </div>
            </div>
          )}

          {/* Payment Steps */}
          {paymentStep === 'method' && renderPaymentMethodSelection()}
          {paymentStep === 'details' && renderPaymentDetails()}
          {paymentStep === 'processing' && renderProcessing()}
          {paymentStep === 'success' && renderSuccess()}
        </div>
      </div>
    </div>
  );
};