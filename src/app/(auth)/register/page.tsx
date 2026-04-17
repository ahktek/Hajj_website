"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual registration logic
    console.log("Registering with:", formData);
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="card-container w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-brand-green-900 dark:text-white">Create an Account</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Join Al Haramain Hajj for a premium spiritual journey.
          </p>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="input-label">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="input-field"
              placeholder="e.g. Abdullah Al Mamun"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label htmlFor="email" className="input-label">Email Address (Required)</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="input-field"
              placeholder="abdullah@example.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label htmlFor="phone" className="input-label">Phone Number (Optional)</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              pattern="^01[3-9]\d{8}$"
              title="Must be a valid Bangladeshi phone number (e.g. 01712345678)"
              className="input-field"
              placeholder="01XXXXXXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div>
            <label htmlFor="password" className="input-label">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="input-field"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Register Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-brand-green-600 hover:text-brand-green-500 dark:text-brand-green-400">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
