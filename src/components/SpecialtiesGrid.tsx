'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES_CATALOG, BUSINESS_INFO } from '@/data/amaral-data';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function SpecialtiesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 35,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="servicos"
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-[#09090b] border-t border-white/5 overflow-hidden"
    >
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-rose-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
              <span>Catálogo Técnico de Especialidades</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading">
              A precisão da funilaria ao{' '}
              <span className="italic font-light text-zinc-300">requinte estético.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 max-w-md leading-relaxed">
            Cada etapa é executada por especialistas com maquinário de padrão internacional, assegurando a originalidade e a máxima valorização de mercado do seu veículo.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_CATALOG.map((service) => {
            const waServiceUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
              service.waMessage
            )}`;

            return (
              <div
                key={service.id}
                id={service.id}
                className="service-card group rounded-2xl bg-[#141417] border border-white/10 hover:border-white/25 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60"
              >
                <div>
                  {/* Imagem do Serviço com Zoom no Hover */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-transparent to-black/20" />
                    
                    {/* Badge da Categoria / Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-semibold tracking-wider uppercase text-zinc-200">
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  {/* Detalhes do Card */}
                  <div className="p-6">
                    <span className="text-[11px] font-medium tracking-wider uppercase text-rose-400 block mb-1">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight font-heading mb-3 group-hover:text-zinc-100 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Destaques Técnicos */}
                    <ul className="space-y-2 mb-6 border-t border-white/5 pt-4">
                      {service.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Botão de Ação Direto para WhatsApp do Serviço */}
                <div className="px-6 pb-6 pt-0">
                  <a
                    href={waServiceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs tracking-wider uppercase border border-white/10 hover:border-white/20 transition-all duration-200 group-hover:bg-rose-600 group-hover:border-rose-600"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-rose-400 group-hover:text-white" />
                      Consultar no WhatsApp
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* Card Destaque de Conversão Direta (Inspirado no Card de Ação do Max Color) */}
          <div className="service-card rounded-2xl bg-gradient-to-br from-rose-950/80 via-zinc-900 to-[#141417] border border-rose-600/30 p-8 flex flex-col justify-between relative overflow-hidden group hover:border-rose-500/60 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600/20 border border-rose-500/40 text-[11px] font-bold tracking-widest uppercase text-rose-300 mb-6">
                <span>Avaliação Rápida</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight mb-4">
                Envie fotos das avarias do seu carro.
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                Tire fotos do amassado, risco ou detalhe da pintura pelo celular e envie agora mesmo. Nossa equipe técnica analisa preliminarmente e responde com agilidade.
              </p>

              <div className="space-y-3 mb-8 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span>Sem compromisso ou custo de avaliação</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span>Atendimento a particulares e segurados</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span>Resposta rápida no horário comercial</span>
                </div>
              </div>
            </div>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-rose-950/60 hover:shadow-rose-600/30 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Enviar Fotos pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
