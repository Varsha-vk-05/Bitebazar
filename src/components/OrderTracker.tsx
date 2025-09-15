import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, Truck, MapPin } from 'lucide-react';

interface Order {
  id: string;
  status: string;
  created_at: string;
  total_amount: number;
  payment_method: string;
  delivery_address: string;
  items: any[];
}

interface OrderTrackerProps {
  orderId: string;
}

export const OrderTracker: React.FC<OrderTrackerProps> = ({ orderId }) => {
  const [order, setOrder] = useState<Order | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const orderSteps = [
    { id: 'confirmed', label: 'Order Confirmed', icon: CheckCircle },
    { id: 'preparing', label: 'Preparing Food', icon: Clock },
    { id: 'ready', label: 'Ready for Pickup', icon: CheckCircle },
    { id: 'out_for_delivery', label: 'Out for Delivery', icon: Truck },
    { id: 'delivered', label: 'Delivered', icon: MapPin }
  ];

  useEffect(() => {
    // Simulate order tracking
    const simulateOrderProgress = () => {
      const steps = ['confirmed', 'preparing', 'ready', 'out_for_delivery', 'delivered'];
      let stepIndex = 0;

      const interval = setInterval(() => {
        if (stepIndex < steps.length) {
          setCurrentStep(stepIndex);
          stepIndex++;
        } else {
          clearInterval(interval);
        }
      }, 30000); // Update every 30 seconds

      return () => clearInterval(interval);
    };

    simulateOrderProgress();
  }, [orderId]);

  const getEstimatedTime = () => {
    const baseTime = 45; // 45 minutes base delivery time
    const stepTime = baseTime - (currentStep * 10);
    return Math.max(stepTime, 5);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-800">Order Tracking</h3>
        <span className="text-sm text-gray-600">Order #{orderId.slice(-8)}</span>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-5 h-5 text-orange-600" />
          <span className="font-medium text-gray-800">
            Estimated delivery: {getEstimatedTime()} minutes
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-orange-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / orderSteps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-4">
        {orderSteps.map((step, index) => {
          const StepIcon = step.icon;
          const isCompleted = index <= currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={step.id} className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isCompleted 
                  ? 'bg-green-500 text-white' 
                  : isCurrent 
                    ? 'bg-orange-600 text-white animate-pulse' 
                    : 'bg-gray-200 text-gray-400'
              }`}>
                <StepIcon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className={`font-medium ${
                  isCompleted ? 'text-green-600' : isCurrent ? 'text-orange-600' : 'text-gray-400'
                }`}>
                  {step.label}
                </p>
                {isCurrent && (
                  <p className="text-sm text-gray-600">In progress...</p>
                )}
                {isCompleted && index < currentStep && (
                  <p className="text-sm text-green-600">Completed</p>
                )}
              </div>
              {isCompleted && (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-orange-50 rounded-lg">
        <p className="text-sm text-orange-800">
          <strong>Delivery Partner:</strong> Raj Kumar • <strong>Phone:</strong> +91 98765 43210
        </p>
        <p className="text-xs text-orange-600 mt-1">
          You can contact your delivery partner once the order is out for delivery.
        </p>
      </div>
    </div>
  );
};