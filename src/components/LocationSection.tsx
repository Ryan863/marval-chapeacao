'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Navigation, Clock, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '@/components/icons/SocialIcons';
import { BUSINESS_INFO } from '@/data/amaral-data';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function LocationSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.location-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 35,
        opacity: 0,
        duration: 0.75,
        stagger: 0.15,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="localizacao"
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-[#09090b] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
            <MapPin className="w-4 h-4 text-rose-500" />
            <span>Sede Operacional</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading">
            Onde a perfeição{' '}
            <span className="italic font-light text-zinc-300">acontece.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed">
            Estrutura industrial própria e de fácil acesso para condutores de Herval d&apos;Oeste, Luzerna, Joaçaba e municípios vizinhos.
          </p>
        </div>

        {/* Card Dividido Elegante */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Coluna 1: Dados de Localização, Endereço e Ação GPS */}
          <div className="location-card lg:col-span-7 rounded-3xl bg-[#141417] border border-white/10 p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-8">
              
              {/* Bloco Endereço */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-rose-600/10 text-rose-400 shrink-0 border border-rose-500/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-1">
                    Endereço Oficial
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                    {BUSINESS_INFO.address.street}
                  </h3>
                  <p className="text-sm text-zinc-300 mt-1">
                    {BUSINESS_INFO.address.neighborhood} — {BUSINESS_INFO.address.city} - {BUSINESS_INFO.address.state}
                  </p>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    CEP: {BUSINESS_INFO.address.zip} • Fácil estacionamento e acesso para carretas e guinchos
                  </p>
                </div>
              </div>

              {/* Bloco Horários */}
              <div className="flex items-start gap-4 pt-6 border-t border-white/5">
                <div className="p-3.5 rounded-2xl bg-white/5 text-zinc-300 shrink-0 border border-white/10">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                    Horário de Atendimento
                  </span>
                  <p className="text-base font-semibold text-white">
                    {BUSINESS_INFO.openingHours.weekdays}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    {BUSINESS_INFO.openingHours.weekend}
                  </p>
                </div>
              </div>

              {/* Bloco Telefonia & Contato Direto */}
              <div className="flex items-start gap-4 pt-6 border-t border-white/5">
                <div className="p-3.5 rounded-2xl bg-white/5 text-zinc-300 shrink-0 border border-white/10">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                    Telefone & Vistoria Rápida
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-lg font-bold text-white hover:text-rose-400 transition-colors"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Plantão de atendimento e orçamentos via WhatsApp
                  </p>
                </div>
              </div>

            </div>

            {/* Ação Traçar Rota GPS */}
            <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
              <a
                href={BUSINESS_INFO.address.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-rose-950/50 hover:shadow-rose-600/25 active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Traçar Rota no Google Maps / Waze</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm tracking-wider uppercase border border-white/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Avisar Chegada</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Redes Sociais & Vistoria Presencial */}
          <div className="location-card lg:col-span-5 flex flex-col gap-6">
            
            {/* Card Instagram & Portfólio */}
            <div className="p-8 rounded-3xl bg-[#141417] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
                    <InstagramIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-zinc-400 font-mono">@marvalchapeacao</span>
                </div>
                <h4 className="text-lg font-bold text-white font-heading">
                  Acompanhe os Projetos no Instagram
                </h4>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Confira o antes e depois de restaurações de lataria, espelhamentos e pinturas em cabine atualizados semanalmente.
                </p>
              </div>

              <div className="mt-6">
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/10 transition-colors"
                >
                  <span>Acessar Instagram Oficial</span>
                  <ExternalLink className="w-4 h-4 text-zinc-400" />
                </a>
              </div>
            </div>

            {/* Card Facebook Institucional */}
            <div className="p-8 rounded-3xl bg-[#141417] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <FacebookIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-zinc-400 font-mono">Página Oficial</span>
                </div>
                <h4 className="text-lg font-bold text-white font-heading">
                  Marval Chapeação & Pintura no Facebook
                </h4>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Histórico e avaliações comunitárias dos mais de 30 anos de atuação da oficina em Herval d&apos;Oeste.
                </p>
              </div>

              <div className="mt-6">
                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/10 transition-colors"
                >
                  <span>Visitar Página no Facebook</span>
                  <ExternalLink className="w-4 h-4 text-zinc-400" />
                </a>
              </div>
            </div>

            {/* Região Atendida */}
            <div className="p-6 rounded-3xl bg-zinc-900/60 border border-white/5">
              <span className="text-[11px] font-bold text-rose-400 uppercase tracking-widest block mb-2">
                Atendimento Regional
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Atendemos clientes particulares, frotistas e segurados de <strong>Herval d&apos;Oeste, Luzerna, Joaçaba, Catanduvas, Erval Velho</strong> e toda a região do Meio-Oeste Catarinense.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
