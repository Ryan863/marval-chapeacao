import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SpecialtiesGrid from '@/components/SpecialtiesGrid';
import TraditionSection from '@/components/TraditionSection';
import SocialProofSection from '@/components/SocialProofSection';
import FAQSection from '@/components/FAQSection';
import LocationSection from '@/components/LocationSection';
import FooterSection from '@/components/FooterSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-rose-600 selection:text-white">
      {/* Sticky Editorial Navbar */}
      <Navbar />

      {/* Hero Section (1ª Dobra em Tela Cheia com a imagem oficial e degradê) */}
      <HeroSection />

      {/* Catálogo Técnico de Especialidades (Inspirado no Max Color) */}
      <SpecialtiesGrid />

      {/* Tradição & Restauração Estrutural (+30 Anos Marval) */}
      <TraditionSection />

      {/* Prova Social, Métricas & Avaliações Google 5.0 */}
      <SocialProofSection />

      {/* FAQ & Quebra de Objeções (Accordion) */}
      <FAQSection />

      {/* Localização, Rota GPS Maps e Redes Oficiais */}
      <LocationSection />

      {/* Footer de Conversão */}
      <FooterSection />

      {/* Botão Flutuante de Alta Conversão WhatsApp */}
      <FloatingWhatsApp />
    </main>
  );
}
