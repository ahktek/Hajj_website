"use client";

import React, { useState } from 'react';

interface ManualPaymentFormProps {
  registrationId: string;
  amount: number;
}

const ManualPaymentForm = ({ registrationId, amount }: ManualPaymentFormProps) => {
  const [formData, setFormData] = useState({
    method: 'MANUAL',
    transactionId: '',
    receipt: null as File | null,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // In a real app, we would use FormData to upload the file to S3/Cloudinary
    // and then save the URL in the database.
    // Here we simulate the process.
    
    try {
      const response = await fetch('/api/payments/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          registrationId,
          amount,
          method: formData.method,
          transactionId: formData.transactionId,
          receiptUrl: 'https://placeholder.com/receipt.jpg', // Simulated upload
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-brand-green-50 p-6 rounded-lg border border-brand-green-500 text-center">
        <h4 className="text-brand-green-900 font-bold text-xl mb-2">Payment Submitted!</h4>
        <p className="text-brand-green-700 text-sm">
          Jazakallah! Our admin will verify your payment within 24 hours. 
          You will receive an SMS confirmation once verified.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h3 className="text-xl font-bold text-brand-green-950 mb-4">Submit Payment Information</h3>
      <p className="text-gray-600 text-sm mb-6">Please provide the details of your manual bank transfer or MFS payment.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
          <select
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-green-500"
            value={formData.method}
            onChange={(e) => setFormData({ ...formData, method: e.target.value })}
          >
            <option value="MANUAL">Bank Transfer (Manual)</option>
            <option value="BKASH">bKash</option>
            <option value="NAGAD">Nagad</option>
            <option value="ROCKET">Rocket</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Transaction ID / Reference</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-green-500"
            placeholder="TRX123456789"
            required
            value={formData.transactionId}
            onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Receipt (Photo/Screenshot)</label>
          <input
            type="file"
            accept="image/*"
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand-green-50 file:text-brand-green-700 hover:file:bg-brand-green-100"
            required
            onChange={(e) => setFormData({ ...formData, receipt: e.target.files?.[0] || null })}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full btn-primary py-3 font-bold"
        >
          {status === 'loading' ? 'Submitting...' : `SUBMIT PAYMENT (৳${amount.toLocaleString()})`}
        </button>
      </form>
    </div>
  );
};

export default ManualPaymentForm;
