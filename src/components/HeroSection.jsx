import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-white text-slate-900">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Non-blocking gradient veil for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.0)_0%,rgba(255,255,255,0.35)_55%,rgba(255,255,255,0.75)_100%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-20 text-center md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 px-4 py-1.5 text-emerald-700 shadow-sm"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <span className="text-sm">Voice-driven credit for MSMEs</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7, ease: 'easeOut' }}
          className="font-geist text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        >
          Credit that listens to your language
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
          className="mt-5 max-w-2xl text-balance text-lg text-slate-600 md:text-xl"
        >
          Gubera helps small business owners track cash flow and qualify for credit — simply by speaking in their local language.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#join"
            className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-base font-medium text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white"
          >
            Get Early Access
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#lenders"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-base font-medium text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-white"
          >
            I’m a Lender
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex items-center gap-2 text-slate-500"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-sm">Scroll to explore</span>
        </motion.div>

        {/* Visual trio */}
        <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            'Speak in Tamil / Hindi / Telugu',
            'Voice waveform captured securely',
            'Credit score builds automatically',
          ].map((t) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="rounded-xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur"
            >
              <p className="text-sm text-slate-700">{t}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
