import React from 'react';
import SimpleForm from './SimpleForm';
import ShipmentForm from './shipmentForm';
import Payment from '@/app/payment/page';

function FormsPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Forms Page</h1>

      {/* SignIn Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        {/* Add your existing SignIn form code here */}
        <SimpleForm />
      </div>

      {/* Shipment Tracking Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Shipment Tracking</h2>
        {/* Add your existing Shipment Tracking form code here */}
        <ShipmentForm />
      </div>

      {/* Payment Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Payment Form</h2>
        {/* Add your existing Payment form code here */}
        <Payment />
      </div>
    </div>
  );
}

export default FormsPage;
