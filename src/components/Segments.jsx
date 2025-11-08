import React from 'react';
import { motion } from 'framer-motion';

export default function Segments() {
  const card = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <motion.div
          variants={card}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
          transition={{ duration: 0.5 }}
          id="merchants"
          className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2"
        >
          <div>
            <h3 className="text-2xl font-semibold">Talk your way to better credit</h3>
            <p className="mt-2 text-slate-600">No paperwork. No English. No stress.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>Speak daily — Gubera records automatically</li>
              <li>Build your business credit score</li>
              <li>See how much credit you can qualify for</li>
              <li>Access verified lenders safely</li>
            </ul>
            <a href="#join" className="mt-6 inline-block rounded-lg bg-emerald-500 px-5 py-3 font-medium text-white hover:bg-emerald-600">Join Early Access</a>
          </div>
          <div className="grid place-items-center">
            <div className="aspect-[4/3] w-full max-w-md rounded-xl border border-slate-200 bg-gradient-to-br from-emerald-100 via-emerald-50 to-white p-6">
              <div className="flex h-full items-center justify-center text-center text-slate-600">
                <div>
                  <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-emerald-500/20" />
                  <p>App mock: mic icon + score bar</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={card}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          id="lenders"
          className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2"
        >
          <div>
            <h3 className="text-2xl font-semibold">Verified voice data for real underwriting</h3>
            <p className="mt-2 text-slate-600">Discover creditworthy MSMEs verified by voice and behavior.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>Pre-scored MSMEs with consent-based data</li>
              <li>Fraud detection and supplier verification</li>
              <li>OCEN-ready APIs</li>
              <li>Custom dashboards for loan officers</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block rounded-lg border border-slate-200 bg-white px-5 py-3 font-medium text-slate-900 hover:bg-slate-50">Partner with Gubera</a>
          </div>
          <div className="grid place-items-center">
            <div className="aspect-[4/3] w-full max-w-md rounded-xl border border-slate-200 bg-gradient-to-br from-white via-emerald-50 to-emerald-100 p-6">
              <div className="flex h-full items-center justify-center text-center text-slate-600">
                <p>Dashboard preview placeholder</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
