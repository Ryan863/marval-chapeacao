import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { BUSINESS_INFO } from "@/data/amaral-data";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://esteticaamaral.com.br"),
  title: "Estética Automotiva Amaral | Chapeação, Pintura & Estética de Alto Padrão",
  description: "Mais de 30 anos de excelência em chapeação, alinhamento de lataria original, pintura em cabine com 100% fidelidade de cor e polimento técnico espelhado em Herval d'Oeste, SC.",
  keywords: [
    "Estética Automotiva Amaral",
    "Marval Chapeação e Pintura",
    "Chapeação Herval d'Oeste",
    "Funilaria e Pintura Herval d'Oeste",
    "Pintura Automotiva Joaçaba",
    "Estética Automotiva Luzerna",
    "Polimento Técnico",
    "Espelhamento Automotivo",
    "Recuperação de Lataria",
    "Cabine de Pintura",
  ],
  authors: [{ name: "Estética Automotiva Amaral" }],
  creator: "Marval Chapeação & Pintura LTDA",
  publisher: "Estética Automotiva Amaral",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Estética Automotiva Amaral | A perfeição da lataria ao brilho espelhado",
    description: "+30 Anos de tradição em chapeação e estética automotiva de alto padrão em Herval d'Oeste, Luzerna e Joaçaba.",
    url: "https://esteticaamaral.com.br",
    siteName: "Estética Automotiva Amaral",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/estetica/hero-amaral.jpg",
        width: 1200,
        height: 630,
        alt: "Estética Automotiva Amaral - Chapeação, Pintura e Detalhamento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estética Automotiva Amaral | Chapeação, Pintura & Estética de Alto Padrão",
    description: "+30 anos de excelência em chapeação e estética automotiva de alta performance.",
    images: ["/estetica/hero-amaral.jpg"],
  },
  alternates: {
    canonical: "https://esteticaamaral.com.br",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  "name": BUSINESS_INFO.tradeName,
  "legalName": BUSINESS_INFO.corporateName,
  "description": "Oficina especializada em chapeação, restauração de lataria, pintura automotiva em cabine e estética automotiva de alto padrão com mais de 30 anos de tradição.",
  "image": "https://esteticaamaral.com.br/estetica/hero-amaral.jpg",
  "telephone": "+55-49-99836-8747",
  "url": "https://esteticaamaral.com.br",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": BUSINESS_INFO.address.street,
    "addressLocality": BUSINESS_INFO.address.city,
    "addressRegion": BUSINESS_INFO.address.state,
    "postalCode": BUSINESS_INFO.address.zip,
    "addressCountry": "BR",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -27.1856,
    "longitude": -51.4984,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00",
    },
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "48",
    "bestRating": "5",
    "worstRating": "1",
  },
  "sameAs": [
    BUSINESS_INFO.instagramUrl,
    BUSINESS_INFO.facebookUrl,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-rose-600 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
