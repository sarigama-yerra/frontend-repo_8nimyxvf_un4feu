import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

export default function AboutContact() {
  const [form, setForm] = useState({ name: '', phone: '', business: '', city: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="about" className="w-full bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <AnimatedText text="We grew up in these markets. Now we’re building for them." className="text-2xl font-semibold" />
          <AnimatedText
            text="Gubera was founded by Pranavharshan and Praveen — cousins from Erode and San Francisco — to make India’s smallest businesses visible and creditworthy."
            className="mt-3 text-slate-600"
            stagger={0.02}
          />
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            <div>
              <AnimatedText text="Mission" className="font-semibold" />
              <AnimatedText text="To create India’s first voice-driven financial identity for every small business." className="mt-1 text-slate-600" stagger={0.02} />
            </div>
            <div>
              <AnimatedText text="Values" className="font-semibold" />
              <ul className="mt-1 space-y-1 text-slate-600">
                {['Local First', 'Privacy by Design', 'Financial Inclusion for All'].map((item) => (
                  <li key={item}>
                    <AnimatedText text={item} stagger={0.02} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <AnimatedText text="Contact" className="font-semibold" />
              <AnimatedText text="Want to partner with us? We’d love to hear from you." className="mt-1 text-slate-600" stagger={0.02} />
              <a href="#contact" className="mt-2 inline-block rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 hover:bg-slate-50">Contact the Team</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="join"
          className="mt-12 grid gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2"
        >
          <div>
            <AnimatedText text="Ready to grow your business with Gubera?" className="text-2xl font-semibold" />
            <AnimatedText text="Join our early access list or partner with us." className="mt-2 text-slate-600" stagger={0.02} />
            <AnimatedText text="Start building your credit graph today" className="mt-6 text-lg font-medium" stagger={0.02} />
            <a href="#join" className="mt-3 inline-block rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white hover:bg-emerald-700">Get Early Access</a>
          </div>

          <form id="contact" onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-slate-600">Name</label>
                <input name="name" value={form.name} onChange={onChange} required className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-600">Phone / WhatsApp</label>
                <input name="phone" value={form.phone} onChange={onChange} required className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="+91 ..." />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-slate-600">Business Name</label>
                <input name="business" value={form.business} onChange={onChange} required className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Store / Company" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-600">City / State</label>
                <input name="city" value={form.city} onChange={onChange} required className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Erode, TN" />
              </div>
            </div>
            <button type="submit" className="w-full rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white hover:bg-emerald-700">Submit</button>
            {submitted && (
              <p className="text-emerald-700">Thanks! We’ll be in touch shortly.</p>
            )}
          </form>
        </motion.div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 py-6 text-sm text-slate-500 sm:flex-row">
          <p>Privacy Policy | Terms | © 2025 Gubera Technologies</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-900">Twitter</a>
            <a href="#" className="hover:text-slate-900">LinkedIn</a>
            <a href="#" className="hover:text-slate-900">YouTube</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
