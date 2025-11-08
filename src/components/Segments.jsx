import React from 'react';

export default function Segments() {
  return (
    <section className="w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <div id="merchants" className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Talk your way to better credit</h3>
            <p className="mt-2 text-slate-300">No paperwork. No English. No stress.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              <li>Speak daily — Gubera records automatically</li>
              <li>Build your business credit score</li>
              <li>See how much credit you can qualify for</li>
              <li>Access verified lenders safely</li>
            </ul>
            <a href="#join" className="mt-6 inline-block rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-900 hover:bg-emerald-400">Join Early Access</a>
          </div>
          <div className="grid place-items-center">
            <div className="aspect-[4/3] w-full max-w-md rounded-xl border border-white/10 bg-gradient-to-br from-emerald-400/10 via-fuchsia-400/10 to-blue-400/10 p-6">
              <div className="flex h-full items-center justify-center text-center text-slate-300">
                <div>
                  <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-emerald-400/20" />
                  <p>App mock: mic icon + score bar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="lenders" className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Verified voice data for real underwriting</h3>
            <p className="mt-2 text-slate-300">Discover creditworthy MSMEs verified by voice and behavior.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              <li>Pre-scored MSMEs with consent-based data</li>
              <li>Fraud detection and supplier verification</li>
              <li>OCEN-ready APIs</li>
              <li>Custom dashboards for loan officers</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10">Partner with Gubera</a>
          </div>
          <div className="grid place-items-center">
            <div className="aspect-[4/3] w-full max-w-md rounded-xl border border-white/10 bg-gradient-to-br from-blue-400/10 via-fuchsia-400/10 to-emerald-400/10 p-6">
              <div className="flex h-full items-center justify-center text-center text-slate-300">
                <p>Dashboard preview placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
