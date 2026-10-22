'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Award, Wrench, Clock, Check } from 'lucide-react';
import { TRADITION_HIGHLIGHTS, BUSINESS_INFO } from '@/data/amaral-data';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function TraditionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.tradition-fade', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="diferenciais"
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-zinc-950 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Fotografia Editorial & Badge de 30 Anos */}
          <div className="lg:col-span-6 tradition-fade">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 group">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                <Image
                  src="/estetica/chapeacao-funilaria.jpg"
                  alt="Mestre artesão em chapeação e recuperação de lataria automotiva na Marval / Estética Amaral"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
              </div>

              {/* Selo Flutuante de Tradição */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-rose-600 text-white shrink-0">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-heading">
                      Marval Chapeação & Pintura LTDA
                    </h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Fundada em 1993 • Mais de 30 anos preservando o valor e a segurança de veículos em Santa Catarina.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Narrativa Editorial e Linha do Tempo */}
          <div className="lg:col-span-6 space-y-8">
            <div className="tradition-fade">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
                <span>Engenharia & Tradição</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading leading-tight">
                A história por trás da{' '}
                <span className="italic font-light text-zinc-300">maior autoridade</span> regional.
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mt-4">
                Enquanto oficinas comuns recorrem a camadas excessivas de massa plástica para mascarar colisões, a <strong>Estética Automotiva Amaral (Marval)</strong> prioriza a arte do repuxo mecânico preciso, resgatando as linhas originais do veículo sem comprometer a estrutura do aço.
              </p>
            </div>

            {/* Linha do Tempo / Evolução */}
            <div className="tradition-fade space-y-4">
              {TRADITION_HIGHLIGHTS.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/15 transition-colors flex items-start gap-4"
                >
                  <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-rose-400 shrink-0 mt-0.5">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-heading">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Diferenciais em Lista */}
            <div className="tradition-fade grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                <Check className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Atendimento homologado para seguradoras</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                <Check className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Garantia técnica documentada</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                <Check className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Cabine de cura e filtragem estéril</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                <Check className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Laboratório de cores computadorizado</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
