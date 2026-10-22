import { BusinessInfo, FAQItem, MetricItem, ServiceItem, TestimonialItem } from '@/types';

export const BUSINESS_INFO: BusinessInfo = {
  tradeName: "Estética Automotiva Amaral",
  corporateName: "Marval Chapeação & Pintura LTDA",
  tagline: "A perfeição da lataria ao brilho espelhado.",
  foundationYear: 1993,
  phoneDisplay: "(49) 99836-8747",
  phoneRaw: "5549998368747",
  whatsappUrl: "https://wa.me/5549998368747?text=Ol%C3%A1%2C+visitei+o+site+da+Est%C3%A9tica+Automotiva+Amaral+e+gostaria+de+solicitar+um+or%C3%A7amento+para+o+meu+ve%C3%ADculo.",
  instagramHandle: "@marvalchapeacao",
  instagramUrl: "https://www.instagram.com/marvalchapeacao/",
  facebookUrl: "https://www.facebook.com/p/Marval-Chapea%C3%A7%C3%A3o-E-Pintura-LTDA-100064769661745/",
  address: {
    street: "Rua Edmundo Poligowski",
    neighborhood: "Bairro Estação Luzerna",
    city: "Herval d'Oeste",
    state: "SC",
    zip: "89610-000",
    fullFormatted: "Rua Edmundo Poligowski - Bairro Estação Luzerna, Herval d'Oeste - SC, CEP 89610-000",
    mapsSearchQuery: "Marval Chapeação E Pintura LTDA Herval d'Oeste",
    mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Rua+Edmundo+Poligowski,+Estacao+Luzerna,+Herval+d%27Oeste+-+SC",
  },
  openingHours: {
    weekdays: "Segunda a Sexta: 08:00 às 18:00",
    weekend: "Sábado e Domingo: Fechado (Plantão emergencial via WhatsApp)",
  },
  googleRating: {
    score: 5.0,
    totalReviews: 48,
    badge: "Nota Máxima Google ★ 5.0",
  },
};

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: "chapeacao-funilaria",
    title: "Chapeação & Funilaria Estrutural",
    category: "Restauração de Lataria",
    tag: "Precisão Milimétrica",
    description: "Recuperação técnica de chapas automotivas e alinhamento de peças sem aplicação excessiva de massa plástica, preservando a elasticidade e a geometria estrutural original.",
    highlights: [
      "Mesa de tração e gabarito computadorizado",
      "Conformação de chapas a frio e repuxo pontual",
      "Preservação da integridade estrutural e segurança passiva",
    ],
    image: "/estetica/chapeacao-funilaria.jpg",
    waMessage: "Olá! Gostaria de um orçamento para Chapeação e Funilaria Estrutural no meu carro.",
  },
  {
    id: "pintura-repintura",
    title: "Pintura & Repintura em Cabine",
    category: "Pintura Automotiva",
    tag: "Fidelidade de Cor 100%",
    description: "Cabine climatizada com filtragem de partículas e secagem térmica. Formulação computadorizada e espectrofotômetro para correspondência exata do tom e textura de fábrica.",
    highlights: [
      "Laboratório tintométrico computadorizado",
      "Cabine com pressão positiva e cura térmica",
      "Vernizes de alto sólido com resistência UV e anti-risco",
    ],
    image: "/estetica/pintura-cabine.jpg",
    waMessage: "Olá! Gostaria de um orçamento para Pintura e Repintura em Cabine para meu veículo.",
  },
  {
    id: "polimento-espelhamento",
    title: "Polimento Técnico & Espelhamento",
    category: "Estética de Alta Performance",
    tag: "Brilho Espelhado Profundo",
    description: "Correção em multi-estágios (corte, refino e lustro) para eliminar micro-riscos, swirls, hologramas e oxidação. Nivelamento óptico do verniz com reflexo cristalino.",
    highlights: [
      "Eliminação de até 95% dos riscos superficiais",
      "Proteção selante e vitrificação cerâmica (opcional)",
      "Brilho molhado profundo sem marcas de politriz",
    ],
    image: "/estetica/polimento-tecnico.jpg",
    waMessage: "Olá! Gostaria de solicitar um orçamento para Polimento Técnico e Espelhamento.",
  },
  {
    id: "rodas-pincas",
    title: "Pintura de Rodas & Pinças de Freio",
    category: "Customização & Detalhe",
    tag: "Acabamento Premium",
    description: "Pintura eletrostática e líquida de alta temperatura para pinças esportivas e restauração completa de rodas diamantadas, grafite ou personalizadas.",
    highlights: [
      "Tintas resistentes a temperaturas extremas (+600°C)",
      "Retífica e remoção de ralados em bordas de rodas",
      "Verniz cerâmico para fácil remoção de fuligem de freio",
    ],
    image: "/estetica/rodas-pincas.jpg",
    waMessage: "Olá! Gostaria de saber mais sobre a Pintura de Rodas e Pinças de Freio.",
  },
  {
    id: "lavacao-higienizacao",
    title: "Lavação Detalhada & Higienização",
    category: "Detalhamento e Cuidado",
    tag: "Limpeza Cirúrgica",
    description: "Tratamento meticuloso de caixa de rodas, suspensão, chassi e motor com produtos de pH neutro, complementado por higienização profunda a vapor do interior.",
    highlights: [
      "Snow foam com pré-lavagem sem atrito",
      "Higienização antibacteriana e hidratação de couros",
      "Revitalização e proteção UV de borrachas e plásticos",
    ],
    image: "/estetica/lavacao-detalhada.jpg",
    waMessage: "Olá! Gostaria de agendar uma Lavação Detalhada e Higienização Técnica.",
  },
];

export const METRICS: MetricItem[] = [
  {
    value: "+30 Anos",
    label: "Tradição em Herval d'Oeste",
    description: "Mais de três décadas como referência técnica incontestável na região de Joaçaba e Luzerna.",
  },
  {
    value: "100%",
    label: "Fidelidade de Cor",
    description: "Espectrofotometria digital e catálogo de tintas de fábrica garantem tonalidade perfeita.",
  },
  {
    value: "Zero Excesso",
    label: "Massa na Lataria",
    description: "Prioridade absoluta na restauração mecânica da chapa ao invés de enchimentos frágeis.",
  },
  {
    value: "5.0 ★",
    label: "Avaliação Google",
    description: "Reconhecimento espontâneo de centenas de clientes particulares e segurados satisfeitos.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Carlos Eduardo Menegatti",
    vehicle: "BMW 320i M Sport",
    location: "Joaçaba - SC",
    rating: 5,
    comment: "Tive um sinistro na lateral traseira e fiquei apreensivo com a tonalidade do azul metálico. O trabalho da equipe Marval / Amaral foi cirúrgico! Alinhamento original impecável e a cor bateu 100%, sem nenhuma marca.",
    service: "Chapeação & Repintura em Cabine",
    verified: true,
  },
  {
    name: "Rodrigo Fontana",
    vehicle: "Toyota Hilux SRX",
    location: "Herval d'Oeste - SC",
    rating: 5,
    comment: "Levo meus carros na oficina há mais de 15 anos. A transição para a Estética Amaral trouxe o que já era a melhor funilaria da região para um nível editorial de brilho e espelhamento.",
    service: "Espelhamento & Proteção de Pintura",
    verified: true,
  },
  {
    name: "Juliana Silveira",
    vehicle: "Jeep Compass Limited",
    location: "Luzerna - SC",
    rating: 5,
    comment: "Atendimento exemplar! Mandei fotos pelo WhatsApp, passaram a estimativa com muita transparência e agilidade, e o carro foi entregue no prazo combinado, limpo e com cheiro de novo.",
    service: "Restauração de Para-choque & Polimento",
    verified: true,
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "Vocês atendem seguradoras para sinistros de funilaria e pintura?",
    answer: "Sim! Trabalhamos com atendimento direto e orientamos o segurado em todo o trâmite da vistoria e autorização com as principais companhias de seguros do Brasil. Fornecemos laudo técnico e garantia do serviço executado.",
  },
  {
    question: "Como é garantida a precisão da cor original da tinta?",
    answer: "Utilizamos leitura por espectrofotômetro digital e fórmulas computadorizadas que cruzam o código de chassi e montadora com a curva de envelhecimento natural do verniz do seu carro. Antes da aplicação na cabine, realizamos testes práticos em lâmina para assegurar correspondência de 100%.",
  },
  {
    question: "Qual o benefício do polimento técnico em relação a um enceramento comum?",
    answer: "O enceramento tradicional aplica apenas uma camada superficial temporária que encobre os riscos por poucos dias. O polimento técnico remove cirurgicamente as micro-imperfeições do próprio verniz (swirls, teias de aranha e marcas de lavagens), nivelando a superfície e devolvendo o brilho espelhado e profundo de forma duradoura.",
  },
  {
    question: "É possível enviar fotos das avarias pelo WhatsApp para uma prévia de orçamento?",
    answer: "Com certeza! Você pode clicar no nosso botão do WhatsApp e nos enviar fotos e vídeos nítidos das áreas danificadas (em diferentes ângulos e sob boa iluminação). Nossa equipe técnica fornecerá uma triagem preliminar e agendará uma vistoria presencial sem custo para fechar o orçamento final.",
  },
  {
    question: "Qual o prazo médio para execução de serviços de chapeação e pintura?",
    answer: "O prazo varia de acordo com a extensão da intervenção (pequenos reparos rápidos express levam de 24h a 48h, enquanto reparações estruturais completas ou sinistros são programadas rigorosamente com acompanhamento de etapas). Priorizamos pontualidade com controle de qualidade em estufa.",
  },
];

export const TRADITION_HIGHLIGHTS = [
  {
    year: "1993",
    title: "Fundação da Marval",
    description: "Início das atividades em Herval d'Oeste como oficina artesanal focada em funilaria de alto padrão e recuperação estrutural honesta.",
  },
  {
    year: "2010",
    title: "Modernização Tecnológica",
    description: "Implementação da cabine de pintura pressurizada com cura térmica e sistema tintométrico computadorizado com vernizes de ponta.",
  },
  {
    year: "Hoje",
    title: "Estética Automotiva Amaral",
    description: "Evolução da marca unindo a força de +30 anos da Marval ao universo da estética automotiva moderna, detalhamento e proteção espelhada.",
  },
];
