'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MessageCircle, ShieldCheck, Sparkles, Award, Star, ArrowDown } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/amaral-data';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.2,
      })
        .from(
          '.hero-title',
          {
            y: 35,
            opacity: 0,
            duration: 0.9,
          },
          '-=0.4'
        )
        .from(
          '.hero-sub',
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          '.hero-ctas',
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          '-=0.4'
        )
        .from(
          '.hero-metrics',
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
          },
          '-=0.4'
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#09090b] pt-28 pb-8 lg:pb-12"
    >
      {/* Background Image Oficial em Alta Definição */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="/estetica/Gemini_Generated_Image_2cyq0a2cyq0a2cyq.jpg"
          alt="Estética Automotiva Amaral - Veículo de Alta Performance em Chapeação e Polimento"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center transform scale-[1.02] transition-transform duration-1000"
        />

        {/* Gradientes Direcionais de Contraste Editorial */}
        {/* Degradê horizontal: protege leitura dos textos do lado esquerdo para o centro */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-transparent" />
        
        {/* Degradê vertical: escurece a base para os micro-indicadores e o topo para a navbar */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/70" />

        {/* Brilho sutil esportivo vermelho no canto inferior direito */}
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Conteúdo Central da 1ª Dobra */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10">
        <div className="max-w-3xl">
          {/* Eyebrow Tag Técnica */}
          <div className="hero-badge inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-zinc-300">
              CHAPEAÇÃO, PINTURA & ESTÉTICA AUTOMOTIVA • HERVAL D&apos;OESTE - SC
            </span>
          </div>

          {/* H1 Editorial */}
          <h1 className="hero-title text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-heading mb-6">
            A perfeição da lataria ao brilho{' '}
            <span className="italic font-light text-zinc-300 underline decoration-rose-600/70 decoration-2 underline-offset-8">
              espelhado.
            </span>
          </h1>

          {/* Subtítulo Técnico e Persuasivo */}
          <p className="hero-sub text-base sm:text-lg lg:text-xl text-zinc-300/90 font-normal leading-relaxed max-w-2xl mb-9">
            Mais de <strong className="text-white font-semibold">30 anos de tradição</strong> combinando restauração de precisão na lataria, funilaria especializada e estética automotiva de alto padrão. O cuidado completo que devolve a originalidade de fábrica do seu veículo.
          </p>

          {/* Chamadas de Ação (CTAs) */}
          <div className="hero-ctas flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-cta"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-rose-950/50 hover:shadow-rose-600/25 hover:-translate-y-0.5 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
              <span>Fazer Orçamento pelo WhatsApp</span>
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-white font-semibold text-sm tracking-wider uppercase border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Conhecer Especialidades</span>
              <ArrowDown className="w-4 h-4 text-zinc-400 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Prova Rápida Google */}
          <div className="flex items-center gap-3 text-xs text-zinc-400 pt-2 border-t border-white/5 max-w-md">
            <div className="flex items-center text-amber-400 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-white">5.0 no Google</span>
            <span className="text-zinc-600">•</span>
            <span>Marval Chapeação & Pintura LTDA</span>
          </div>
        </div>
      </div>

      {/* Micro-indicadores (Barra Inferior Editorial) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-6">
        <div className="hero-metrics grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/10">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/50 border border-white/5 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white tracking-wide">+30 Anos</div>
              <div className="text-[11px] text-zinc-400">Tradição & Excelência</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/50 border border-white/5 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-zinc-800 text-zinc-200">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white tracking-wide">Cor de Fábrica</div>
              <div className="text-[11px] text-zinc-400">Pintura em Cabine Climatizada</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/50 border border-white/5 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white tracking-wide">Polimento Técnico</div>
              <div className="text-[11px] text-zinc-400">Brilho Espelhado e Correção</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/50 border border-white/5 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-zinc-800 text-amber-400">
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white tracking-wide">Avaliação 5.0</div>
              <div className="text-[11px] text-zinc-400">Máxima Reputação no Google</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
