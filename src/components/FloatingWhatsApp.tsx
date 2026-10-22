'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/amaral-data';

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Atendimento WhatsApp Estética Automotiva Amaral"
      className="fixed bottom-5 right-5 z-50 flex items-center"
    >
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-auto sm:px-5 sm:h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/40 transition-transform active:scale-95 duration-200 border border-emerald-400/30"
      >
        {/* Pulsing indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300" />
        </span>

        <MessageCircle className="w-6 h-6 sm:mr-2.5 stroke-[2.2] shrink-0" />
        <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider">
          Orçamento WhatsApp
        </span>
      </a>
    </aside>
  );
}
