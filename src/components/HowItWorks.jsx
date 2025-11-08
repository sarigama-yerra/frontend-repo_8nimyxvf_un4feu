import React from 'react';
import { Mic, Gauge, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      icon: Mic,
      title: 'Speak',
      desc: 'Say your daily income and expenses — no typing needed.'
    },
    {
      icon: Gauge,
      title: 'Gubera Scores You',
      desc: 'AI analyzes your voice data and creates a verified financial profile.'
    },
    {
      icon: BadgeCheck,
      title: 'You Qualify',
      desc: 'Lenders use your Gubera Score to offer faster, easier credit.'
    }
  ];

  return (
    <section id="how" className="relative w-full bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-geist text-3xl font-semibold sm:text-4xl"
        >
          Voice in. Credit out.
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Simple, secure, and built for India’s small businesses.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h4 className="text-lg font-semibold">Security</h4>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>Data shared only with your consent</li>
              <li>Uses Account Aggregator APIs</li>
              <li>Encrypted and secure</li>
            </ul>
            <a href="#demo" className="mt-4 inline-block rounded-lg bg-emerald-500 px-4 py-2 font-medium text-white hover:bg-emerald-600">Try the Demo</a>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-lg italic text-slate-800">
              “I just talk to Gubera every evening — now I know my balance and credit score.”
            </p>
            <footer className="mt-3 text-sm text-slate-500">— Rajendran, Grocery Store, Erode</footer>
            <a href="#join" className="mt-4 inline-block rounded-lg border border-slate-200 bg-white px-4 py-2 font-medium text-slate-900 hover:bg-slate-50">Join the Waitlist</a>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
