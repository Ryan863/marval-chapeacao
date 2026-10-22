'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle, ArrowUpRight, Heart, Shield, Phone, MapPin } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '@/components/icons/SocialIcons';
import { BUSINESS_INFO } from '@/data/amaral-data';

export default function FooterSection() {
  const currentYear = 2026;

  return (
    <footer className="relative bg-[#070709] border-t border-white/10 text-zinc-400 text-xs overflow-hidden">
      
      {/* Banner de Chamada Final de Conversão */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="relative rounded-3xl bg-gradient-to-r from-rose-950/60 via-zinc-900 to-zinc-950 border border-white/10 p-8 sm:p-14 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-[11px] font-bold uppercase tracking-widest text-rose-400 mb-4">
                <span>Vistoria e Orçamento Sem Custo</span>
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                Seu carro merece a restauração original com acabamento de estética.
              </h3>
              <p className="text-zinc-300 text-sm mt-3 leading-relaxed">
                Fale diretamente com os mestres em chapeação e pintura automotiva. Agende sua vistoria ou envie fotos das avarias agora mesmo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-rose-950/60 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Iniciar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Principal do Rodapé */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Coluna 1: Marca & Razão Social */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-white font-heading">
                ESTÉTICA AMARAL
              </span>
              <span className="text-[10px] tracking-[0.22em] uppercase text-zinc-400 font-semibold mt-0.5">
                MARVAL CHAPEAÇÃO & PINTURA LTDA
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Mais de três décadas como referência em chapeação, recuperação milimétrica de lataria, pintura automotiva em cabine de alta temperatura e estética detalhada em Santa Catarina.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors border border-white/5"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors border border-white/5"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors border border-white/5"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase text-xs font-heading mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Especialidades</a>
              </li>
              <li>
                <a href="#chapeacao" className="hover:text-white transition-colors">Chapeação & Funilaria</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">Tradição (+30 Anos)</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">Localização</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Especialidades */}
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase text-xs font-heading mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#chapeacao" className="hover:text-white transition-colors">Funilaria Estrutural</a>
              </li>
              <li>
                <a href="#pintura-repintura" className="hover:text-white transition-colors">Pintura em Cabine</a>
              </li>
              <li>
                <a href="#polimento-espelhamento" className="hover:text-white transition-colors">Polimento & Espelhamento</a>
              </li>
              <li>
                <a href="#rodas-pincas" className="hover:text-white transition-colors">Pintura de Rodas e Pinças</a>
              </li>
              <li>
                <a href="#lavacao-higienizacao" className="hover:text-white transition-colors">Lavação Detalhada</a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Sede */}
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase text-xs font-heading mb-4">
              Atendimento
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.fullFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-500 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-zinc-500">
                {BUSINESS_INFO.openingHours.weekdays}
              </div>
            </div>
          </div>

        </div>

        {/* Linha Inferior com Copyright e Créditos Institucionais */}
        <div className="pt-8 mt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {currentYear} {BUSINESS_INFO.tradeName} ({BUSINESS_INFO.corporateName}). Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Herval d&apos;Oeste - Santa Catarina</span>
            <span>•</span>
            <span className="text-zinc-400">Design Editorial CRO de Alto Padrão</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
