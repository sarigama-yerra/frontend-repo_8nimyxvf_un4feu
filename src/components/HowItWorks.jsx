import React from 'react';
import { Mic, Gauge, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

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
        <AnimatedText
          text="Voice in. Credit out."
          className="text-center font-geist text-3xl font-semibold sm:text-4xl"
          delay={0.05}
          stagger={0.06}
        />
        <AnimatedText
          text="Simple, secure, and built for India’s small businesses."
          className="mx-auto mt-3 block max-w-2xl text-center text-slate-600"
          delay={0.2}
          stagger={0.03}
        />

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
              <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                <Icon className="h-6 w-6" />
              </div>
              <AnimatedText text={title} className="text-xl font-medium" stagger={0.04} />
              <AnimatedText text={desc} className="mt-2 text-slate-600" stagger={0.02} />
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
            <AnimatedText text="Security" className="text-lg font-semibold" />
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>
                <AnimatedText text="Data shared only with your consent" stagger={0.02} />
              </li>
              <li>
                <AnimatedText text="Uses Account Aggregator APIs" stagger={0.02} />
              </li>
              <li>
                <AnimatedText text="Encrypted and secure" stagger={0.02} />
              </li>
            </ul>
            <a href="#demo" className="mt-4 inline-block rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700">Try the Demo</a>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-lg italic text-slate-800">
              <AnimatedText text="“I just talk to Gubera every evening — now I know my balance and credit score.”" stagger={0.02} />
            </p>
            <footer className="mt-3 text-sm text-slate-500">
              <AnimatedText text="— Rajendran, Grocery Store, Erode" stagger={0.02} />
            </footer>
            <a href="#join" className="mt-4 inline-block rounded-lg border border-slate-200 bg-white px-4 py-2 font-medium text-slate-900 hover:bg-slate-50">Join the Waitlist</a>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
