"use client";

import { useState } from "react";

export default function PreRegForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    passport: "",
    nid: "",
    package: "gold",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // API call to /api/pre-register goes here
      // const res = await fetch('/api/pre-register', { method: 'POST', body: JSON.stringify(formData) });
      
      // Simulating network request for mock setup
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card-container p-8 text-center bg-brand-green-50 dark:bg-gray-800 border-brand-green-500">
        <svg className="w-16 h-16 text-brand-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-2xl font-serif font-bold text-brand-green-900 dark:text-white mb-2">Registration Received</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Jazakallah Khair. Our representative will contact you shortly to process your booking.
        </p>
        <button onClick={() => setStatus("idle")} className="mt-6 btn-outline">
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div id="pre-register" className="card-container p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-brand-green-900 dark:text-white">Pre-Register Now</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Secure your spot for the upcoming Hajj season. No immediate payment required.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="fullName" className="input-label">Full Name (As per Passport)</label>
          <input
            id="fullName"
            type="text"
            required
            className="input-field"
            placeholder="Abdullah Al Mamun"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>

        <div>
          <label htmlFor="phone" className="input-label">Contact Number</label>
          <input
            id="phone"
            type="tel"
            required
            pattern="^01[3-9]\d{8}$"
            title="Must be a valid Bangladeshi phone number (e.g. 01712345678)"
            className="input-field"
            placeholder="01XXXXXXXXX"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="passport" className="input-label">Passport Number</label>
            <input
              id="passport"
              type="text"
              required
              className="input-field uppercase"
              placeholder="A12345678"
              value={formData.passport}
              onChange={(e) => setFormData({...formData, passport: e.target.value.toUpperCase()})}
            />
          </div>
          <div>
            <label htmlFor="nid" className="input-label">NID Number</label>
            <input
              id="nid"
              type="text"
              required
              pattern="^\d{10}|\d{13}|\d{17}$"
              title="Must be a valid 10, 13, or 17 digit NID"
              className="input-field"
              placeholder="1234567890"
              value={formData.nid}
              onChange={(e) => setFormData({...formData, nid: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label htmlFor="package" className="input-label">Interested Package</label>
          <select
            id="package"
            className="input-field"
            value={formData.package}
            onChange={(e) => setFormData({...formData, package: e.target.value})}
          >
            <option value="gold">Gold Package - Premium Hotel (Near Haram)</option>
            <option value="silver">Silver Package - Standard Hotel</option>
            <option value="economy">Economy Package - Budget Friendly</option>
          </select>
        </div>

        <button 
          type="submit" 
          disabled={status === "submitting"}
          className={`w-full ${status === "submitting" ? 'bg-gray-400 cursor-not-allowed' : 'btn-primary'}`}
        >
          {status === "submitting" ? "Submitting..." : "Submit Pre-Registration"}
        </button>
      </form>
    </div>
  );
}
