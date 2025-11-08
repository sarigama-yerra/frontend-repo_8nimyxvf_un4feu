import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil for contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.2)_0%,rgba(2,6,23,0.6)_55%,rgba(2,6,23,0.95)_100%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-28 lg:pt-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-sm text-emerald-300">Voice-driven credit for MSMEs</span>
        </div>

        <h1 className="font-geist text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Credit that listens to your language
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-lg text-slate-300 md:text-xl">
          Gubera helps small business owners track cash flow and qualify for credit — simply by speaking in their local language.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#join"
            className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-base font-medium text-slate-900 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Get Early Access
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#lenders"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-base font-medium text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-slate-300/30 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            I’m a Lender
          </a>
        </div>

        {/* Visual hint: merchant speaking → waveform → score rising */}
        <div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-300">Merchant speaks in Tamil / Hindi / Telugu</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-300">Voice waveform captured securely</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-300">Credit score builds automatically</p>
          </div>
        </div>
      </div>
    </section>
  );
}
