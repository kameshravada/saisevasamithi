import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire to API / Netlify functions / Mantine form
    setSent(true);
  }

  return (
    <section id="contact" className="py-16 px-6 md:px-20 bg-amber-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm text-gray-700">Name</span>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 rounded-lg border"
            />
          </label>
          <label className="block">
            <span className="text-sm text-gray-700">Email</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 rounded-lg border"
            />
          </label>
          <label className="block">
            <span className="text-sm text-gray-700">Message</span>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-3 rounded-lg border"
            />
          </label>
          <button
            type="submit"
            className="bg-amber-600 text-white px-6 py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
        {sent && (
          <div className="mt-4 text-green-700">
            Thank you — we will get back to you soon.
          </div>
        )}
      </div>
    </section>
  );
}
