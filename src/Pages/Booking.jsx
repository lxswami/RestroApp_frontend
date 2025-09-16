import React, { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    period: "AM",
    partySize: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      className="relative bg-cover bg-center py-12 px-4 flex justify-center items-center"
      style={{ backgroundImage: "url('https://restro-lake.vercel.app/static/media/bg5.4415973cd4bdf20f31fc.jpg')" }}
    >
      <div className="max-w-lg mx-auto rounded-xl p-6 md:p-10 shadow-xl border border-gray-500">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Booking</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-200 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:border-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-200 mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:border-white focus:outline-none"
            />
          </div>
          <div className="flex space-x-2">
            <div className="flex-1">
              <label className="block text-gray-200 mb-1">Time</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:border-white focus:outline-none"
              >
                <option value="">Select Hr</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div className="flex-none">
              <label className="block text-gray-200 mb-1 invisible">Period</label>
              <select
                name="period"
                value={formData.period}
                onChange={handleChange}
                className="px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:border-white focus:outline-none"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-gray-200 mb-1">Party Size</label>
            <input
              type="number"
              name="partySize"
              placeholder="Number of Members"
              value={formData.partySize}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:border-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-200 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:border-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-200 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:border-white focus:outline-none"
            />
          </div>
        </div>

        <button
          className="mt-6 w-full bg-black text-white py-3 rounded-md border border-gray-600 hover:bg-gray-900 transition"
        >
          BOOK NOW
        </button>
      </div>
    </section>
  );
}
