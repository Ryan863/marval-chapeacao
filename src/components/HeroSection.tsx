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
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
          clearProps: 'all',
        },
      });

      tl.from('.hero-badge', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.1,
      })
        .from(
          '.hero-title',
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.4'
        )
        .from(
          '.hero-sub',
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          '-=0.4'
        )
        .from(
          '.hero-ctas',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.3'
        )
        .from(
          '.hero-metrics',
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
          },
          '-=0.3'
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
      {/* Background Photography Oficial com Visibilidade Garantida */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <Image
          src="/estetica/Gemini_Generated_Image_2cyq0a2cyq0a2cyq.jpg"
          alt="Estética Automotiva Amaral - Veículo Supercar em Chapeação e Polimento"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-[right_center] brightness-[0.98] contrast-[1.05]"
        />

        {/* Gradiente Lateral: preserva a leitura dos textos à esquerda e expõe o carro à direita */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#09090b] via-[#09090b]/85 md:via-[#09090b]/45 to-transparent" />
        
        {/* Gradiente vertical no mobile para garantir leitura sem cobrir o desktop */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#09090b] via-transparent to-transparent md:hidden" />

        {/* Fusão inferior suave para a próxima seção */}
        <div className="absolute bottom-0 left-0 right-0 h-36 z-[1] bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />

        {/* Vinheta superior sutil para destacar a Navbar */}
        <div className="absolute top-0 left-0 right-0 h-28 z-[1] bg-gradient-to-b from-[#09090b]/80 to-transparent" />
      </div>

      {/* Conteúdo Central da 1ª Dobra */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10 relative">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative pt-6">
        <div className="hero-metrics grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/10">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/70 border border-white/10 backdrop-blur-md">
            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white tracking-wide">+30 Anos</div>
              <div className="text-[11px] text-zinc-400">Tradição & Excelência</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/70 border border-white/10 backdrop-blur-md">
            <div className="p-2 rounded-lg bg-zinc-800 text-zinc-200">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white tracking-wide">Cor de Fábrica</div>
              <div className="text-[11px] text-zinc-400">Pintura em Cabine Climatizada</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/70 border border-white/10 backdrop-blur-md">
            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white tracking-wide">Polimento Técnico</div>
              <div className="text-[11px] text-zinc-400">Brilho Espelhado e Correção</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/70 border border-white/10 backdrop-blur-md">
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
