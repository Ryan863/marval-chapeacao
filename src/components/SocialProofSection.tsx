'use client';

import React from 'react';
import { Star, ShieldCheck, Quote, CheckCircle, ThumbsUp } from 'lucide-react';
import { METRICS, TESTIMONIALS, BUSINESS_INFO } from '@/data/amaral-data';

export default function SocialProofSection() {
  return (
    <section
      id="estetica"
      className="relative py-24 sm:py-32 bg-[#09090b] border-t border-white/5 overflow-hidden"
    >
      {/* Background glow sutil */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-rose-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bloco de Métricas Técnicas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#141417] border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight mb-2 flex items-center gap-2">
                {metric.value}
                {metric.value.includes('★') && (
                  <span className="text-amber-400 text-2xl">★</span>
                )}
              </div>
              <div className="text-sm font-bold text-rose-400 uppercase tracking-wider mb-2">
                {metric.label}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Título de Depoimentos & Prova Social */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-zinc-300 mb-4">
            <ShieldCheck className="w-4 h-4 text-rose-500" />
            <span>Reputação Inviolável</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading">
            Aprovado por quem exige o{' '}
            <span className="italic font-light text-zinc-300">melhor acabamento.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed">
            Proprietários particulares e clientes de seguradoras de Herval d&apos;Oeste, Joaçaba e Luzerna comprovam nosso padrão de entrega.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="testimonial-grid grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {TESTIMONIALS.map((test, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#141417] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-md"
            >
              <div>
                {/* Estrelas & Ícone de Aspas */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-zinc-700" />
                </div>

                {/* Comentário */}
                <p className="text-sm text-zinc-300 leading-relaxed mb-6 italic">
                  &ldquo;{test.comment}&rdquo;
                </p>
              </div>

              {/* Autor & Veículo */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white font-heading">
                      {test.name}
                    </h3>
                    <div className="text-xs text-rose-400 font-medium">
                      {test.vehicle} • <span className="text-zinc-500">{test.location}</span>
                    </div>
                  </div>
                  {test.verified && (
                    <span className="p-1 rounded-full bg-emerald-500/10 text-emerald-400" title="Cliente Verificado">
                      <CheckCircle className="w-4 h-4" />
                    </span>
                  )}
                </div>
                <div className="mt-2 text-[11px] text-zinc-500 font-mono">
                  Serviço: {test.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Faixa de Garantia & Google Review Banner */}
        <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <Star className="w-8 h-8 fill-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white font-heading">Google Reviews 5.0</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  NOTA MÁXIMA
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-1">
                Conhecida como Marval Chapeação e Pintura LTDA e Estética Amaral na plataforma Google Maps.
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider border border-white/10 transition-colors shadow-md"
          >
            <ThumbsUp className="w-4 h-4 text-rose-400" />
            <span>Fazer Parte dos Clientes Satisfeitos</span>
          </a>
        </div>

      </div>
    </section>
  );
}
