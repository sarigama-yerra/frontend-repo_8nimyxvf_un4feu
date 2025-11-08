import React from 'react';
import { Mic, Gauge, BadgeCheck } from 'lucide-react';

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
    <section id="how" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-geist text-3xl font-semibold sm:text-4xl">Voice in. Credit out.</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
          Simple, secure, and built for India’s small businesses.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
              <div className="mb-4 inline-flex rounded-xl bg-emerald-500/10 p-3 text-emerald-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-medium text-xl">{title}</h3>
              <p className="mt-2 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#how" className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10">
            Learn How It Works
          </a>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-lg font-semibold">Security</h4>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>Data shared only with your consent</li>
              <li>Uses Account Aggregator APIs</li>
              <li>Encrypted and secure</li>
            </ul>
            <a href="#demo" className="mt-4 inline-block rounded-lg bg-emerald-500 px-4 py-2 font-medium text-slate-900 hover:bg-emerald-400">Try the Demo</a>
          </div>

          <blockquote className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-lg italic text-slate-200">
              “I just talk to Gubera every evening — now I know my balance and credit score.”
            </p>
            <footer className="mt-3 text-sm text-slate-400">— Rajendran, Grocery Store, Erode</footer>
            <a href="#join" className="mt-4 inline-block rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-medium text-white hover:bg-white/10">Join the Waitlist</a>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
