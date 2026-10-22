'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_LIST, BUSINESS_INFO } from '@/data/amaral-data';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 bg-zinc-950 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
            <HelpCircle className="w-4 h-4 text-rose-500" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading">
            Perguntas Frequentes &{' '}
            <span className="italic font-light text-zinc-300">Garantias</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 max-w-xl mx-auto">
            Transparência absoluta sobre nossos métodos de restauração de lataria, garantia de pintura e atendimento a segurados.
          </p>
        </div>

        {/* Lista de Accordion */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="faq-item rounded-2xl bg-[#141417] border border-white/10 hover:border-white/20 transition-all duration-200 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white font-heading">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-zinc-300 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-rose-600/20 text-rose-400 border-rose-500/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-zinc-300/90 leading-relaxed border-t border-white/5 mt-2">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA complementar pós-FAQ */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Ficou com alguma dúvida específica?</h4>
            <p className="text-xs text-zinc-400">Nossa equipe técnica atende diretamente no WhatsApp com prontidão.</p>
          </div>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors shrink-0 shadow-lg shadow-rose-950/40"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com Técnico</span>
          </a>
        </div>

      </div>
    </section>
  );
}
