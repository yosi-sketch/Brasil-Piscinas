"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  ArrowRight,
  Star,
  Menu,
  X,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Waves,
  Flame,
  Droplets,
  Wrench,
  Bath,
  Sun,
  Camera,
  Navigation,
  Check,
  ExternalLink,
  MessageCircle,
  Hammer,
  Users,
  type LucideIcon,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Informações Oficiais — Brasil Piscinas (Belo Horizonte - MG)
const COMPANY_NAME = "Brasil Piscinas";
const COMPANY_FULL_NAME =
  "Brasil Piscinas • Construção, Reforma & Equipamentos em Belo Horizonte";
const BRAND_SUBTITLE =
  "Projetos personalizados, borda infinita, prainhas integradas, spas de hidromassagem, aquecimento solar e equipamentos completos com pontualidade comprovada e 4,8★ no Google.";

const WHATSAPP_NUMBER = "5531999220269";
const PHONE_DISPLAY = "(31) 99922-0269";
const LANDLINE_DISPLAY = "(31) 2520-7776";
const EMAIL_CONTACT = "contato@brasilpiscinas.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/brasilpiscinas/";
const INSTAGRAM_HANDLE = "@brasilpiscinas";
const LINKTREE_URL = "https://linktr.ee/brasilpiscinas";

const ADDRESS_DISPLAY =
  "Av. Francisco Negrão de Lima, 860 - Lj A - Pampulha, Belo Horizonte - MG, 31545-000";
const CITIES_SERVED =
  "Belo Horizonte, Pampulha, Nova Lima, Lagoa Santa, Contagem, Betim, Vespasiano, Santa Luzia, Sabará e toda Região Metropolitana de BH";

const GOOGLE_REVIEW_COUNT = "58";
const GOOGLE_RATING = "4.8";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Brasil+Piscinas+BH%0AC%C3%A9u+Azul+%C2%B7+Belo+Horizonte+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Francisco+Negr%C3%A3o+de+Lima%2C+860+-+Lj+A+-+Pampulha%2C+Belo+Horizonte+-+MG%2C+31545-000";
const WAZE_MAPS_URL =
  "https://waze.com/ul?q=Av+Francisco+Negrao+de+Lima+860+Pampulha+Belo+Horizonte+MG";

// Assets Oficiais da Brasil Piscinas
const LOGO_SRC = "/logo-brasil-piscinas.png";
const LOGO_ANAPP = "/logo-anapp.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de solicitar um orçamento para construção, reforma ou equipamentos de piscina com a Brasil Piscinas.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

// Interface dos Serviços da Brasil Piscinas
interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  badge: string;
  icon: LucideIcon;
  image: string;
  fullDesc: string;
  benefits: string[];
  ctaText: string;
  whatsappMessage: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "concreto-armado-borda-infinita",
    title: "Piscinas de Concreto Armado & Borda Infinita",
    shortDesc:
      "Engenharia estrutural de alto padrão para piscinas personalizadas, suspensas ou em terrenos declivosos, com efeito borda infinita e revestimentos nobres.",
    badge: "Engenharia de Alto Padrão",
    icon: Waves,
    image: "/piscina-obra-1.jpg",
    fullDesc:
      "A Brasil Piscinas é especialista em projetos desafiadores e imponentes de concreto armado. Desenvolvemos piscinas de borda infinita com visual deslumbrante, calculadas milimetricamente com ferragem dupla, impermeabilização de alta estanqueidade e revestimentos premium em pastilhas de porcelana, pedras Hijau ou mármore atérmico. Como relatam nossos clientes, transformamos sonhos complexos em obras perfeitamente concluídas.",
    benefits: [
      "Execução de borda infinita com espelho d'água perfeitamente nivelado",
      "Estrutura armada resistente para qualquer topografia e declive",
      "Impermeabilização técnica com testes rigorosos de estanqueidade",
      "Acompanhamento direto pelos gestores Alberto e Eudes em todas as fases",
    ],
    ctaText: "Solicitar Projeto em Concreto Armado",
    whatsappMessage:
      "Olá! Gostaria de um orçamento para construção de piscina em concreto armado / borda infinita com a Brasil Piscinas.",
  },
  {
    id: "piscinas-vinil",
    title: "Piscinas de Vinil & Troca de Bolsão",
    shortDesc:
      "Construção rápida, versátil e de excelente custo-benefício, além de troca especializada de bolsão com vácuo perfeito e estampas modernas.",
    badge: "Versatilidade & Rapidez",
    icon: Sparkles,
    image: "/piscina-obra-4.jpg",
    fullDesc:
      "As piscinas de vinil oferecem beleza incomparável, toque suave e rápida execução. Na Brasil Piscinas, executamos a alvenaria estrutural reforçada com manta amortecedora e vinil de alta espessura resistente a raios UV e químicos. Também somos referência na troca de vinil e substituição de bolsões antigos em Belo Horizonte e região metropolitana, restaurando sua piscina com máxima precisão.",
    benefits: [
      "Amplo catálogo de estampas contemporâneas imitando pastilhas e pedras",
      "Instalação com bomba de sucção a vácuo para acabamento sem rugas",
      "Economia estrutural e flexibilidade para curvas, prainhas e degraus",
      "Troca rápida de vinil antigo com assistência técnica especializada",
    ],
    ctaText: "Pedir Orçamento de Piscina de Vinil",
    whatsappMessage:
      "Olá! Tenho interesse em piscina de vinil ou troca de bolsão com a equipe da Brasil Piscinas.",
  },
  {
    id: "spas-banheiras",
    title: "Spas de Hidromassagem & Banheiras",
    shortDesc:
      "Refúgios de hidroterapia e relaxamento com jatos direcionais reguláveis, cromoterapia em LED e aquecimento independente para sua família.",
    badge: "Hidroterapia & Conforto",
    icon: Bath,
    image: "/spa-relax.jpg",
    fullDesc:
      "Integre bem-estar absoluto à sua área de lazer. A Brasil Piscinas fornece e constrói spas de hidromassagem e banheiras integradas à piscina ou em decks privativos. Equipados com motobombas potentes, bicos direcionais terapêuticos para alívio da coluna e pernas, controle digital de temperatura e iluminação subaquática relaxante.",
    benefits: [
      "Projetos integrados: piscina, prainha, spa e sauna no mesmo ambiente",
      "Jatos pulsantes e direcionais ergonômicos de alta performance",
      "Aquecimento rápido dedicado e painel de comando intuitivo",
      "Estrutura com isolamento térmico e tubulações técnicas testadas",
    ],
    ctaText: "Consultar Modelos de Spas",
    whatsappMessage:
      "Olá! Gostaria de conhecer opções de spas de hidromassagem e banheiras com a Brasil Piscinas.",
  },
  {
    id: "aquecimento-solar-trocadores",
    title: "Aquecimento Solar & Bombas de Calor",
    shortDesc:
      "Água na temperatura ideal os 365 dias do ano. Sistemas ecológicos com coletores solares de alto rendimento e bombas de calor inverter silenciosas.",
    badge: "Água Aquecida o Ano Todo",
    icon: Flame,
    image: "/aquecedores.jpg",
    fullDesc:
      "Aproveite a sua piscina em qualquer estação! A Brasil Piscinas dimensiona a capacidade térmica ideal para o volume e incidência solar da sua área. Trabalhamos com placas solares de polipropileno de alta absorção e trocadores de calor com tecnologia inverter, garantindo aquecimento rápido, conforto pleno e baixo consumo elétrico.",
    benefits: [
      "Dimensionamento térmico preciso sem subdimensionamento",
      "Sistemas sustentáveis de energia solar com rápido retorno do investimento",
      "Bombas de calor de alta eficiência para banhos noturnos e dias frios",
      "Instalação de controladores automáticos digitais e capas térmicas",
    ],
    ctaText: "Dimensionar Aquecedor da Minha Piscina",
    whatsappMessage:
      "Olá! Gostaria de um orçamento para aquecimento solar ou bomba de calor com a Brasil Piscinas.",
  },
  {
    id: "casas-de-maquinas-bombas-filtros",
    title: "Filtros, Bombas & Instalação Hidráulica",
    shortDesc:
      "Coração da piscina com montagem técnica profissional: motobombas silenciosas, filtros de areia de alta vazão e registros organizados.",
    badge: "Engenharia Hidráulica",
    icon: Wrench,
    image: "/filtro-bomba.jpg",
    fullDesc:
      "Uma casa de máquinas bem executada garante água cristalina sem esforço e segurança total. A equipe da Brasil Piscinas (com profissionais elogiados como Jayson e técnicos especializados) realiza a instalação completa de filtros de alta retenção, bombas autoescorvantes econômicas, quadros de comando elétrico com proteção DR e tubulações de PVC soldável reforçado.",
    benefits: [
      "Tubulações identificadas com registros de fácil acesso para operação",
      "Filtragem otimizada que reduz uso de produtos químicos e energia",
      "Proteção elétrica contra sobrecargas e risco de choques elétricos",
      "Assistência e treinamento pós-obra para você manusear com total tranquilidade",
    ],
    ctaText: "Falar sobre Filtros e Bombas",
    whatsappMessage:
      "Olá! Preciso de instalação ou revisão de bomba, filtro ou casa de máquinas com a Brasil Piscinas.",
  },
  {
    id: "iluminacao-led-cascatas",
    title: "Iluminação Cênica em LED & Cascatas",
    shortDesc:
      "Cenografia aquática noturna marcante: refletores LED RGB subaquáticos em 12V com controle remoto e cascatas elegantes em aço inox 304/316.",
    badge: "Design & Sofisticação",
    icon: Sun,
    image: "/cascata-real.jpg",
    fullDesc:
      "Valorize seu imóvel e transforme as noites em momentos inesquecíveis. Instalamos refletores LED subaquáticos modernos, seguros e econômicos, com controle de efeitos luminosos, troca de cores e opções de sincronização. Complementamos com cascatas embutidas ou de piso em aço inox escovado, produzindo o relaxante som de água em queda suave.",
    benefits: [
      "Total segurança com alimentação em baixa tensão de 12V",
      "Controle remoto wireless prático para mudar cores e intensidade",
      "Cascatas duráveis com acabamento fino resistentes ao sol e ao cloro",
      "Troca rápida de lâmpadas antigas e modernização de piscinas existentes",
    ],
    ctaText: "Ver Cascatas e Iluminação",
    whatsappMessage:
      "Olá! Gostaria de informações sobre iluminação em LED e cascatas para piscina com a Brasil Piscinas.",
  },
  {
    id: "prainhas-saunas-lazer",
    title: "Prainhas Integradas & Saunas a Vapor",
    shortDesc:
      "Conceito resort no seu quintal: prainhas rasas para banho de sol e segurança das crianças, bancos subaquáticos e saunas integradas.",
    badge: "Conceito Resort Privativo",
    icon: Droplets,
    image: "/piscina-obra-3.jpg",
    fullDesc:
      "Crie o espaço perfeito para receber amigos e desfrutar momentos memoráveis em família. Desenhamos prainhas molhadas sob medida com hidromassagem e pontos para ombrelones, escadas suaves de acesso e saunas a vapor integradas que possibilitam o mergulho direto da sauna para a piscina através do visor subaquático em vidro.",
    benefits: [
      "Área rasa de 20 a 40cm ideal para relaxar na espreguiçadeira",
      "Ambiente seguro e divertido para crianças e pets",
      "Saunas com geradores certificados, porta de vidro hermética e termostato digital",
      "Harmonização paisagística com deck de madeira ou pedras atérmicas",
    ],
    ctaText: "Projetar Prainha e Lazer",
    whatsappMessage:
      "Olá! Gostaria de um projeto de piscina com prainha ou sauna com a Brasil Piscinas.",
  },
  {
    id: "reforma-manutencao-especializada",
    title: "Reformas Completas & Manutenção de Piscinas",
    shortDesc:
      "Renovação de piscinas antigas, resolução de vazamentos, troca de revestimento, troca de lâmpadas, modernização estética e reparos rápidos.",
    badge: "Especialistas em Reforma",
    icon: Hammer,
    image: "/brasil-reforma.png",
    fullDesc:
      "Sua piscina antiga está com vazamento, revestimento desgastado ou casa de máquinas obsoleta? A Brasil Piscinas é reconhecida em Belo Horizonte pela agilidade e competência em reformas completas. Refazemos a impermeabilização, trocamos azulejos por vinil ou pastilhas, modernizamos a iluminação e substituímos componentes com prazo recorde e respeito à sua casa.",
    benefits: [
      "Diagnóstico preciso de vazamentos e trincas estruturais",
      "Repaginação visual completa transformando piscinas antigas em modelos modernos",
      "Serviços pontuais elogiados por clientes: troca de lâmpadas, troca de areia e registros",
      "Limpeza e organização impecáveis durante todo o processo da obra",
    ],
    ctaText: "Solicitar Orçamento de Reforma",
    whatsappMessage:
      "Olá! Gostaria de reformar ou fazer manutenção na minha piscina com a Brasil Piscinas.",
  },
];

// Depoimentos Reais do Google Maps da Brasil Piscinas (4,8 Estrelas · 58 Avaliações)
const REVIEWS = [
  {
    name: "Flavia Scotellaro",
    tag: "6 avaliações · Cliente Verificada",
    rating: 5,
    service: "Piscina com Borda Infinita",
    comment:
      "Só Gratidão a Brasil Piscina pelo meu sonho realizado de uma Piscina com borda infinita. Ficou maravilhosa, muito bem feita e apesar dos desafios para a construção dela eles foram super profissionais e competentes. Recomendo demais essa empresa. Pode confiar!",
  },
  {
    name: "Angela Ribeiro",
    tag: "5 avaliações · Cliente Verificada",
    rating: 5,
    service: "Piscina com Prainha, SPA e Sauna",
    comment:
      "Melhor experiência da minha vida em termos de construção. São sérios, honestos, pontuais e super responsáveis! Fizeram uma piscina com prainha, SPA e sauna! Ficou simplesmente PERFEITA! Todas as pessoas que têm o prazer de desfrutar elogiam.",
  },
  {
    name: "Walter Motta",
    tag: "Local Guide · 27 avaliações · 3 fotos",
    rating: 5,
    service: "Piscina Completa, Bomba, Aquecimento e Iluminação",
    comment:
      "Contratei todas etapas da minha piscina, bomba, aquecimento, iluminação, etc, fiquei 100% satisfeito com o trabalho e a seriedade da empresa. Respostas rápidas, prazos cumpridos e cordialidade no atendimento. Indico de olhos fechados.",
  },
  {
    name: "Ronan Melo",
    tag: "7 avaliações · Cliente Verificado",
    rating: 5,
    service: "Construção do Orçamento à Entrega",
    comment:
      "Fiquei muito satisfeito com o resultado dos serviços prestados. Desde a etapa de orçamentos até a entrega da piscina tudo foi cumprido como havíamos contratado. Igor, Jayson, Reni, Alberto e Eudes sempre muito solícitos e profissionais.",
  },
  {
    name: "Bruno Lopes",
    tag: "Local Guide · 33 avaliações · 5 fotos",
    rating: 5,
    service: "Execução Técnica & Confiança",
    comment:
      "Muito profissionais, muito competentes, e o valor cobrado por eles é o justo, não foi o mais barato e nem o mais caro orçado na ocasião, fechamos por conta da confiança passada pelo Alberto no ato da contratação. No período da execução tudo impecável!",
  },
  {
    name: "Mônica Guerra",
    tag: "1 avaliação · Cliente Verificada",
    rating: 5,
    service: "Troca de Vinil, Aquecimento Solar & Casa de Máquinas",
    comment:
      "Contratei a Brasil Piscinas para troca do vinil, instalação de aquecimento solar, reforma na casa de máquinas e troca de bomba e filtro da piscina. Super indico a empresa pois realizaram um excelente trabalho, além da pontualidade e assistência técnica impecáveis.",
  },
  {
    name: "Anderson Cruvinel Magalhães Maciel",
    tag: "Local Guide · 9 avaliações · 9 fotos",
    rating: 5,
    service: "Manutenção & Troca de Iluminação",
    comment:
      "Minha experiência com a Brasil Piscinas foi excelente! Contratei a empresa para realizar a troca da lâmpada da piscina e fiquei muito satisfeito com a qualidade do atendimento e do serviço prestado.",
  },
  {
    name: "Edgar Toledo",
    tag: "5 avaliações · Cliente Verificado",
    rating: 5,
    service: "Comprometimento e Dedicação",
    comment:
      "Experiência muito gratificante. Tudo o que você espera de uma empresa de serviços é o comprometimento, e a Brasil Piscinas demonstrou muito comprometimento com o serviço prestado. Fiquei muito satisfeito e muito agradecido pelo empenho e dedicação. Super recomendo!",
  },
  {
    name: "Driele Polanski",
    tag: "6 avaliações · 1 foto",
    rating: 5,
    service: "Pontualidade e Qualidade",
    comment:
      "Excelente empresa, muito comprometimento, entrega muito rápida e na data, serviço maravilhoso, excelente qualidade!",
  },
  {
    name: "Célio Pacheco",
    tag: "Local Guide · 147 avaliações · 11 fotos",
    rating: 5,
    service: "Atendimento Direto pelos Donos",
    comment:
      "Atendimento de qualidade, serviços de excelência. Os donos te atendem e prestam serviços.",
  },
  {
    name: "Camilla Alvim Seabra Neves",
    tag: "8 avaliações · Cliente Verificada",
    rating: 5,
    service: "Piscina Pronta no Prazo",
    comment:
      "A Brasil Piscinas tem um excelente atendimento e ótimos profissionais! A minha piscina ficou pronta no prazo acordado, de acordo com o projeto definido e muito bem feita! Tivemos uma experiência muito positiva com a empresa!",
  },
  {
    name: "Frederico Madeira",
    tag: "8 avaliações · 4 fotos",
    rating: 5,
    service: "Reforma Executada com Perfeição",
    comment:
      "Gostaria de agradecer ao pessoal da Brasil Piscinas pelo profissionalismo e bom atendimento. Um agradecimento especial ao Jayson, profissional da melhor qualidade, executou muito bem a reforma da piscina.",
  },
  {
    name: "Helbert Antonio Mendes Xavier",
    tag: "2 avaliações · Cliente Verificado",
    rating: 5,
    service: "Consultoria e Capricho na Execução",
    comment:
      "Super atenciosos! Toda a equipe é sensacional, mas não poderia deixar de mencionar o Alberto, prestativo ao extremo, tirando todas as dúvidas, aconselhando e ajudando nas decisões. Já Geison se desdobra na execução do serviço, com capricho!",
  },
];

type GalleryCategory = "todas" | "concreto" | "vinil" | "spas" | "equipamentos";

// Galeria de Projetos Reais da Brasil Piscinas
interface GalleryProject {
  src: string;
  title: string;
  category: GalleryCategory;
  tag: string;
  desc: string;
}

const GALLERY_PROJECTS: GalleryProject[] = [
  {
    src: "/piscina-obra-1.jpg",
    title: "Piscina de Borda Infinita com Deck Panorâmico",
    category: "concreto",
    tag: "Concreto Armado & Borda Infinita",
    desc: "Obra de alto padrão em terreno com vista deslumbrante, revestida em pastilhas e pedras nobres.",
  },
  {
    src: "/piscina-obra-3.jpg",
    title: "Área de Lazer Completa com Prainha e Spa",
    category: "concreto",
    tag: "Prainha Integrada & Spa",
    desc: "Conceito resort integrado à casa com hidroterapia, degraus amplos e revestimento acetinado.",
  },
  {
    src: "/piscina-obra-4.jpg",
    title: "Piscina de Vinil com Estampa Exclusiva",
    category: "vinil",
    tag: "Piscina de Vinil Premium",
    desc: "Construção de vinil de alta durabilidade com vácuo perfeito e borda atérmica clara.",
  },
  {
    src: "/spa-relax.jpg",
    title: "Spa de Hidroterapia com Cromoterapia Noturna",
    category: "spas",
    tag: "Spa de Hidromassagem",
    desc: "Spa privativo com jatos terapêuticos direcionais, aquecedor dedicado e LEDs RGB.",
  },
  {
    src: "/piscina-obra-2.jpg",
    title: "Piscina com Cascata Laminada e Iluminação",
    category: "concreto",
    tag: "Cascata Inox & LED",
    desc: "Harmonização de cascata embutida com iluminação subaquática para banhos noturnos.",
  },
  {
    src: "/filtro-bomba.jpg",
    title: "Casa de Máquinas Normatizada e Automatizada",
    category: "equipamentos",
    tag: "Filtros & Bombas Silenciosas",
    desc: "Tubulações de alta vazão organizadas com registros acessíveis e quadro de comando seguro com DR.",
  },
  {
    src: "/aquecedores.jpg",
    title: "Sistema de Aquecimento Solar & Trocador de Calor",
    category: "equipamentos",
    tag: "Aquecimento Solar",
    desc: "Coletores de alta absorção solar dimensionados para temperatura agradável em todas as épocas.",
  },
  {
    src: "/piscina-obra-5.jpg",
    title: "Piscina com Escada Ergonômica e Deck Molhado",
    category: "vinil",
    tag: "Vinil & Prainha",
    desc: "Projeto moderno e aconchegante perfeito para famílias com crianças e momentos de descanso.",
  },
];

// Perguntas Frequentes
const FAQS = [
  {
    question: "A Brasil Piscinas atende em toda a região de Belo Horizonte?",
    answer:
      "Sim! Nossa sede está localizada na Av. Francisco Negrão de Lima, 860 na Pampulha, e atendemos toda a capital (Pampulha, Belvedere, Mangabeiras, Buritis, etc.), Nova Lima, Lagoa Santa, Contagem, Betim, Vespasiano, Santa Luzia, Sabará e toda a Região Metropolitana de BH.",
  },
  {
    question: "Qual a diferença entre construir em concreto armado ou vinil?",
    answer:
      "A piscina de concreto armado (alvenaria armada) proporciona máxima liberdade arquitetônica para bordas infinitas, piscinas suspensas e revestimentos nobres como pedras Hijau e pastilhas. Já a piscina de vinil oferece um custo inicial mais econômico, prazo de construção ágil e grande variedade de estampas modernas com toque liso e agradável. Nossa equipe analisa seu terreno e objetivo para recomendar a melhor opção.",
  },
  {
    question: "É verdade que os donos da Brasil Piscinas acompanham a obra?",
    answer:
      "Sim! Esse é um dos nossos maiores diferenciais e muito elogiado nas avaliações do Google. Alberto e Eudes cuidam pessoalmente da consultoria, orçamento e acompanhamento técnico das obras junto com nossa equipe de mestres de acabamento, como Jayson, garantindo cumprimento rígido de cronogramas.",
  },
  {
    question: "A Brasil Piscinas realiza reformas e troca de bolsão de vinil?",
    answer:
      "Com certeza! Somos especialistas na reforma completa de piscinas antigas com vazamento ou revestimentos danificados, bem como na medição precisa e troca de bolsão de vinil com sucção a vácuo, devolvendo vida nova à sua piscina em poucos dias.",
  },
  {
    question: "Quanto tempo leva para construir uma piscina?",
    answer:
      "O prazo varia conforme o tipo estrutural, dimensões e complexidade do terreno. Piscinas de vinil normalmente ficam prontas entre 25 a 45 dias úteis, enquanto piscinas de concreto armado com borda infinita levam de 60 a 90 dias úteis. Trabalhamos com cronograma detalhado em contrato e temos orgulho de nossa pontualidade histórica.",
  },
  {
    question: "Como solicitar um orçamento ou visita técnica no meu terreno?",
    answer:
      "Basta clicar nos botões de WhatsApp desta página ou ligar para (31) 2520-7776. Você conversará diretamente com nossos especialistas para tirar dúvidas, agendar visita técnica no local e receber um orçamento detalhado e transparente.",
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeGalleryTab, setActiveGalleryTab] =
    useState<GalleryCategory>("todas");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredGallery =
    activeGalleryTab === "todas"
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === activeGalleryTab);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* 1. TOP BAR INSTITUCIONAL — PAMPULHA, BELO HORIZONTE */}
      <div className="bg-[#001433] text-white text-xs py-2 px-4 border-b border-[#002766]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#00C4EE] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#00C4EE]" />
              <span>Av. Francisco Negrão de Lima, 860 - Lj A - Pampulha, BH</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#00C4EE]" />
              <span>Seg a Sex: 07:00 às 18:00</span>
            </div>
            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#001F4D] px-2.5 py-0.5 rounded-full text-slate-200 border border-[#134B9C] hover:border-[#00C4EE] transition-colors"
            >
              <div className="flex text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="font-bold text-[#00C4EE]">{GOOGLE_RATING}★</span>
              <span className="text-slate-300">({GOOGLE_REVIEW_COUNT} avaliações no Google)</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${LANDLINE_DISPLAY.replace(/\D/g, "")}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#00C4EE]" />
              <span className="font-semibold">{LANDLINE_DISPLAY}</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Brasil Piscinas"
              className="text-slate-300 hover:text-[#00C4EE] transition-colors flex items-center gap-1"
            >
              <InstagramIcon size={14} />
              <span className="hidden lg:inline">{INSTAGRAM_HANDLE}</span>
            </a>
            <a
              href={getWhatsAppUrl("Olá! Gostaria de falar com o atendimento da Brasil Piscinas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <WhatsAppIcon size={14} />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. HEADER & NAVEGAÇÃO PRINCIPAL */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Logotipo Oficial Brasil Piscinas */}
          <a href="#" className="flex items-center group py-1 flex-shrink-0">
            <div className="relative h-12 sm:h-14 w-36 sm:w-44 transition-transform group-hover:scale-102">
              <Image
                src={LOGO_SRC}
                alt="Brasil Piscinas — Construção e Reforma de Piscinas em BH"
                fill
                priority
                sizes="(max-width: 640px) 144px, 176px"
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Links Desktop */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13px] xl:text-sm font-semibold text-slate-700">
            <a href="#servicos" className="hover:text-[#002C6C] transition-colors py-1">
              Serviços
            </a>
            <a href="#diferenciais" className="hover:text-[#002C6C] transition-colors py-1">
              Diferenciais
            </a>
            <a href="#galeria" className="hover:text-[#002C6C] transition-colors py-1">
              Projetos
            </a>
            <a href="#sobre" className="hover:text-[#002C6C] transition-colors py-1">
              Sobre Nós
            </a>
            <a href="#depoimentos" className="hover:text-[#002C6C] transition-colors py-1">
              Depoimentos
            </a>
            <a href="#faq" className="hover:text-[#002C6C] transition-colors py-1">
              Dúvidas
            </a>
            <a href="#localizacao" className="hover:text-[#002C6C] transition-colors py-1">
              Contato
            </a>
          </nav>

          {/* CTA Header */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Gostaria de um orçamento para construção ou reforma de piscina com a Brasil Piscinas."
              )}
              target="_blank"
              variant="whatsapp"
              size="sm"
            >
              <WhatsAppIcon size={16} />
              <span>Orçamento via WhatsApp</span>
            </GlowingButton>
          </div>

          {/* Botão Mobile Menu */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#002C6C]"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-[#002C6C]"
            >
              Serviços Especializados
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-[#002C6C]"
            >
              Diferenciais da Brasil Piscinas
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-[#002C6C]"
            >
              Projetos Executados
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-[#002C6C]"
            >
              Nossa Equipe (Alberto, Eudes, Jayson)
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-[#002C6C]"
            >
              Avaliações Google (4,8★)
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-[#002C6C]"
            >
              Perguntas Frequentes
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-[#002C6C]"
            >
              Onde Estamos (Pampulha - BH)
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá! Gostaria de um orçamento para piscina com a equipe da Brasil Piscinas."
                )}
                target="_blank"
                variant="whatsapp"
                size="md"
                className="w-full justify-center"
              >
                <WhatsAppIcon size={18} />
                <span>Conversar no WhatsApp</span>
              </GlowingButton>
              <a
                href={`tel:${LANDLINE_DISPLAY.replace(/\D/g, "")}`}
                className="text-center text-sm font-semibold text-[#002C6C] py-2"
              >
                Ligar: {LANDLINE_DISPLAY}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION — ALTO PADRÃO, SOFISTICAÇÃO E AUTORIDADE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#001433] via-[#001F4D] to-[#002C6C] text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Elementos Gráficos de Fundo */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#00C4EE_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#00C4EE]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#002C6C]/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Lado Esquerdo: Textos & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Emblema & Logo Oficial no Topo do Hero */}
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-2">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 drop-shadow-[0_10px_25px_rgba(0,196,238,0.45)]">
                  <Image
                    src={LOGO_SRC}
                    alt="Brasil Piscinas Logo Oficial"
                    fill
                    priority
                    sizes="(max-width: 640px) 64px, 80px"
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#002766]/90 border border-[#00C4EE]/50 text-xs sm:text-sm font-semibold text-[#BAF1FB]">
                    <span className="w-2 h-2 rounded-full bg-[#00C4EE] animate-pulse" />
                    <span>Pampulha · Belo Horizonte &amp; Região</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-200 block mt-1 tracking-wide">
                    Especialistas em Construção &amp; Reforma
                  </span>
                </div>
              </div>

              {/* H1 Principal */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.12] tracking-tight font-heading">
                Piscinas em Concreto Armado, Vinil e{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C4EE] via-[#70E1FF] to-white">
                  Borda Infinita
                </span>{" "}
                com Excelência em BH
              </h1>

              {/* Subtítulo / Proposta de Valor */}
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {BRAND_SUBTITLE}
              </p>

              {/* Selos de Confiança Rápidos */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C4EE]" />
                  <span>Atendimento direto pelos sócios</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C4EE]" />
                  <span>100% dos prazos cumpridos</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C4EE]" />
                  <span>Garantia estrutural comprovada</span>
                </div>
              </div>

              {/* CTAs do Hero */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de solicitar um orçamento para meu projeto de piscina com a Brasil Piscinas."
                  )}
                  target="_blank"
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto shadow-lg shadow-emerald-950/40"
                >
                  <WhatsAppIcon size={20} />
                  <span>Solicitar Orçamento Gratuito</span>
                </GlowingButton>

                <GlowingButton
                  href="#galeria"
                  variant="outlineCyan"
                  size="lg"
                  className="w-full sm:w-auto text-white border-[#00C4EE]/50 hover:bg-[#00C4EE]/10"
                >
                  <Camera className="w-4 h-4 text-[#00C4EE]" />
                  <span>Ver Projetos Executados</span>
                </GlowingButton>
              </div>

              {/* Prova Social Google no Hero */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 border-t border-slate-700/60">
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <div className="flex text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-extrabold text-white text-sm group-hover:text-[#00C4EE] transition-colors">
                    {GOOGLE_RATING} de 5,0 estrelas
                  </span>
                  <span className="text-slate-400 text-xs">
                    ({GOOGLE_REVIEW_COUNT} clientes reais no Google Maps)
                  </span>
                </a>
              </div>
            </div>

            {/* Lado Direito: Card Visual Interativo com Foto de Piscina Real */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow decorativo */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00C4EE] to-[#002C6C] opacity-40 blur-lg" />

                {/* Card com Foto de Obra Real */}
                <div className="relative rounded-2xl overflow-hidden border border-[#134B9C] bg-[#001F4D] shadow-2xl">
                  <div className="relative h-72 sm:h-96 w-full">
                    <Image
                      src="/hero-pool.jpg"
                      alt="Piscina de alto padrão construída pela Brasil Piscinas"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 540px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001433] via-transparent to-transparent" />

                    {/* Tag Superior */}
                    <div className="absolute top-4 left-4 bg-[#001433]/85 backdrop-blur-md border border-[#00C4EE]/40 px-3 py-1.5 rounded-lg flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#00C4EE]" />
                      <span className="text-xs font-bold text-white tracking-wide">
                        Borda Infinita &amp; Concreto Armado
                      </span>
                    </div>

                    {/* Selo Flutuante com o Logo Oficial */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-2 shadow-xl border border-[#00C4EE]/60 flex items-center gap-2">
                      <div className="relative w-12 h-10 flex-shrink-0">
                        <Image
                          src={LOGO_SRC}
                          alt="Logo Brasil Piscinas"
                          fill
                          sizes="48px"
                          className="object-contain"
                        />
                      </div>
                      <div className="border-l border-slate-200 pl-2 pr-1">
                        <div className="text-[11px] font-black text-[#002C6C] font-heading leading-tight">
                          Brasil Piscinas
                        </div>
                        <div className="text-[9px] text-slate-500 font-semibold">
                          Pampulha · BH
                        </div>
                      </div>
                    </div>

                    {/* Badge Flutuante Inferior */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-slate-200 text-slate-900 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[11px] font-bold text-[#002C6C] uppercase tracking-wider">
                            Realização de Sonhos
                          </p>
                          <p className="text-sm font-extrabold text-slate-900">
                            Projetos sob medida em Belo Horizonte
                          </p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#00C4EE]/20 flex items-center justify-center text-[#002C6C]">
                          <Waves className="w-5 h-5 text-[#002C6C]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Flutuante Lateral de Avaliação */}
                <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white rounded-xl p-3.5 shadow-xl border border-slate-200 max-w-[240px]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex text-[#F59E0B]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-900">5.0</span>
                  </div>
                  <p className="text-[11px] text-slate-700 leading-snug italic">
                    &ldquo;Sonho realizado com borda infinita maravilhosa e profissionais nota 10.&rdquo;
                  </p>
                  <p className="text-[10px] font-semibold text-[#002C6C] mt-1">
                    — Flavia Scotellaro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BARRA DE DIFERENCIAIS EM NÚMEROS & CREDIBILIDADE */}
      <section className="bg-white border-y border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#002C6C] font-heading flex items-center justify-center gap-1">
                <span>{GOOGLE_RATING}</span>
                <Star className="w-6 h-6 text-[#F59E0B] fill-current inline" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-600">
                {GOOGLE_REVIEW_COUNT}+ Avaliações no Google
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#002C6C] font-heading">
                100%
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-600">
                Prazos Cumpridos em Contrato
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#002C6C] font-heading">
                Alberto &amp; Eudes
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-600">
                Gestão e Atendimento Direto
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#002C6C] font-heading">
                Pampulha
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-600">
                Sede Própria em Belo Horizonte
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DE PILARES DE ATUAÇÃO & SERVIÇOS (COM FOTOS REAIS E MODAL INTERATIVO) */}
      <section id="servicos" className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="eyebrow">Soluções Completas</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001433] tracking-tight font-heading">
              Especialistas em Construção, Reforma e Equipamentos de Piscinas
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Desde a escavação e cálculo de ferragem até o fornecimento de equipamentos, aquecimento e manutenção contínua em BH.
            </p>
          </div>

          {/* Grid dos 8 Serviços da Brasil Piscinas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((serv) => {
              const IconComp = serv.icon;
              return (
                <div
                  key={serv.id}
                  className="card-brasil rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
                  onClick={() => setSelectedService(serv)}
                >
                  {/* Foto do Serviço */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={serv.image}
                      alt={serv.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-106 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001433]/70 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#002C6C] text-white shadow-xs">
                      {serv.badge}
                    </span>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-[#F0FDFE] text-[#002C6C] flex items-center justify-center mb-3 group-hover:bg-[#00C4EE] group-hover:text-[#001433] transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#002C6C] transition-colors line-clamp-2">
                        {serv.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                        {serv.shortDesc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#002C6C]">
                      <span>Ver Detalhes do Serviço</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#00C4EE]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. MODAL INTERATIVO DE SERVIÇO DETALHADO */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
            >
              <div className="relative h-56 sm:h-64 w-full">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-md text-xs font-bold bg-[#00C4EE] text-[#001433]">
                    {selectedService.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-[#001433] font-heading">
                  {selectedService.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedService.fullDesc}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-extrabold text-[#002C6C] uppercase tracking-wider">
                    Principais Benefícios &amp; Padrão Técnico
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <GlowingButton
                    href={getWhatsAppUrl(selectedService.whatsappMessage)}
                    target="_blank"
                    variant="whatsapp"
                    size="md"
                    className="flex-1 justify-center"
                  >
                    <WhatsAppIcon size={18} />
                    <span>{selectedService.ctaText}</span>
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 7. SEÇÃO SOBRE A EQUIPE E DIFERENCIAIS (ALBERTO, EUDES, JAYSON) */}
      <section id="sobre" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Lado Esquerdo: Imagem e Certificação ANAPP */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/sobre-lazer-pool.jpg"
                    alt="Equipe técnica da Brasil Piscinas em Belo Horizonte"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001433]/80 via-transparent to-transparent" />
                </div>

                {/* Selo ANAPP oficial & Logo da Empresa */}
                <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                      <Image
                        src={LOGO_SRC}
                        alt="Brasil Piscinas Logo"
                        fill
                        sizes="56px"
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-[#002C6C] uppercase tracking-wider">
                        Qualidade Comprovada
                      </p>
                      <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                        Brasil Piscinas BH
                      </p>
                    </div>
                  </div>
                  <div className="relative w-16 sm:w-20 h-10 sm:h-12 flex-shrink-0 border-l border-slate-200 pl-3">
                    <Image
                      src={LOGO_ANAPP}
                      alt="Selo ANAPP Brasil Piscinas"
                      fill
                      sizes="80px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Direito: História, Gestão e Compromisso */}
            <div className="lg:col-span-7 space-y-5">
              <span className="eyebrow">Quem Somos</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001433] tracking-tight font-heading">
                Uma Empresa Sólida Onde os Donos Te Atendem e Cuidam da Sua Obra
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A <strong>Brasil Piscinas</strong> consolidou-se como referência em Belo Horizonte e em toda a região metropolitana graças a uma postura simples e rara no mercado: honestidade técnica, pontualidade britânica no cumprimento de prazos e acompanhamento direto pelos sócios fundadores.
              </p>

              {/* Destaque para os gestores citados nos depoimentos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F0FDFE] border border-[#BAF1FB]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Users className="w-5 h-5 text-[#002C6C]" />
                    <h3 className="font-bold text-slate-900 text-sm">Alberto &amp; Eudes</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Gestores comerciais e operacionais elogiados pela atenção prestativa, esclarecimento minucioso e cumprimento de todos os compromissos contratuais.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Wrench className="w-5 h-5 text-[#002C6C]" />
                    <h3 className="font-bold text-slate-900 text-sm">Jayson, Igor &amp; Reni</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Especialistas em acabamento e instalação hidráulica/elétrica reconhecidos pelo capricho nos detalhes, limpeza e pontualidade na entrega.
                  </p>
                </div>
              </div>

              {/* Lista de Compromissos */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#00C4EE] flex-shrink-0 mt-0.5" />
                  <span><strong>Preço Justo e Transparência:</strong> nem o mais barato que compromete a estrutura, nem valores abusivos. Orçamento detalhado item por item.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#00C4EE] flex-shrink-0 mt-0.5" />
                  <span><strong>Sede Própria na Pampulha:</strong> loja e escritório consolidados na Av. Francisco Negrão de Lima, 860, prontos para receber você.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#00C4EE] flex-shrink-0 mt-0.5" />
                  <span><strong>Pós-Venda Atencioso:</strong> assistência contínua para manutenção, troca de lâmpadas, produtos e dúvidas operacionais.</span>
                </div>
              </div>

              <div className="pt-3">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de conversar com o Alberto ou o Eudes sobre um projeto de piscina."
                  )}
                  target="_blank"
                  variant="primary"
                  size="md"
                >
                  <MessageCircle className="w-4 h-4 text-[#00C4EE]" />
                  <span>Falar com Nossos Especialistas</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GALERIA DE PROJETOS EXECUTADOS COM ABAS */}
      <section id="galeria" className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <span className="eyebrow">Nosso Portfólio</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001433] tracking-tight font-heading">
              Projetos Executados com Orgulho em BH e Região
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore obras concluídas de borda infinita, piscinas em alvenaria e vinil, spas e áreas de lazer completas.
            </p>

            {/* Abas de Filtro */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { key: "todas", label: "Todas as Obras" },
                { key: "concreto", label: "Concreto & Borda Infinita" },
                { key: "vinil", label: "Piscinas em Vinil" },
                { key: "spas", label: "Spas & Prainhas" },
                { key: "equipamentos", label: "Aquecimento & Casas de Máquinas" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() =>
                    setActiveGalleryTab(tab.key as GalleryCategory)
                  }
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeGalleryTab === tab.key
                      ? "bg-[#002C6C] text-white shadow-sm"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-[#00C4EE] hover:text-[#002C6C]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Fotos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGallery.map((proj, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-xl transition-all"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={proj.src}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-106 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001433]/85 via-[#001433]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-[#00C4EE] text-[#001433]">
                    {proj.tag}
                  </span>
                </div>

                <div className="p-4 space-y-1">
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#002C6C] transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-snug">
                    {proj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Chamada para Orçamento Abaixo da Galeria */}
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-600 mb-4">
              Quer ver mais fotos ou levar a Brasil Piscinas para o seu terreno?
            </p>
            <GlowingButton
              href={getWhatsAppUrl("Olá! Vi a galeria de projetos da Brasil Piscinas e gostaria de solicitar um orçamento para o meu terreno.")}
              target="_blank"
              variant="whatsapp"
              size="md"
            >
              <WhatsAppIcon size={18} />
              <span>Solicitar Orçamento no WhatsApp</span>
            </GlowingButton>
          </div>
        </div>
      </section>

      {/* 9. PROVA SOCIAL — DEPOIMENTOS REAIS DO GOOGLE MAPS (4,8★ · 58 AVALIAÇÕES) */}
      <section id="depoimentos" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="eyebrow">Avaliações Reais</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001433] tracking-tight font-heading">
              O Que Nossos Clientes Dizem no Google Maps
            </h2>
            <div className="flex items-center justify-center gap-2 pt-1">
              <div className="flex text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-lg font-black text-slate-900">{GOOGLE_RATING} de 5,0</span>
              <span className="text-sm text-slate-500 font-medium">({GOOGLE_REVIEW_COUNT} avaliações reais)</span>
            </div>
            <p className="text-slate-600 text-sm sm:text-base">
              A satisfação dos nossos clientes é o reflexo do nosso compromisso diário com qualidade, seriedade e cumprimento de prazos.
            </p>
          </div>

          {/* Grid de Depoimentos Reais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((rev, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between hover:border-[#BAF1FB] hover:shadow-md transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#F59E0B]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      Google Review
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#002C6C]">
                    Serviço: {rev.service}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#002C6C] text-white font-bold text-xs flex items-center justify-center">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      {rev.name}
                    </h4>
                    <p className="text-[10px] text-slate-500">{rev.tag}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Link para Avaliações no Google */}
          <div className="mt-10 text-center">
            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#002C6C] hover:text-[#00C4EE] transition-colors"
            >
              <span>Ver todas as 58 avaliações públicas no Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 10. FAQ (PERGUNTAS FREQUENTES) */}
      <section id="faq" className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="eyebrow">Tire Suas Dúvidas</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001433] tracking-tight font-heading">
              Perguntas Frequentes sobre Piscinas em BH
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Confira as respostas para as principais questões antes de iniciar sua obra ou reforma.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#002C6C] cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform flex-shrink-0 ${
                        isOpen ? "rotate-180 text-[#00C4EE]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Dúvida adicional */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-[#001F4D] to-[#002C6C] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div>
              <h3 className="font-bold text-base">Ainda tem alguma dúvida específica?</h3>
              <p className="text-xs text-slate-200 mt-1">
                Fale agora mesmo com nossos especialistas pelo WhatsApp.
              </p>
            </div>
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Tenho uma dúvida sobre construção de piscina com a Brasil Piscinas."
              )}
              target="_blank"
              variant="whatsapp"
              size="md"
              className="flex-shrink-0"
            >
              <WhatsAppIcon size={18} />
              <span>Tirar Dúvida no WhatsApp</span>
            </GlowingButton>
          </div>
        </div>
      </section>

      {/* 11. LOCALIZAÇÃO, MAPA & CONTATO (SEDE NA PAMPULHA) */}
      <section id="localizacao" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Informações da Loja e Escritório */}
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow">Nossa Sede</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001433] tracking-tight font-heading">
                Venha nos Visitar na Pampulha
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Nossa sede física e loja estão estrategicamente localizadas na Pampulha, com fácil acesso, estacionamento e equipe pronta para apresentar revestimentos, equipamentos e detalhes técnicos para o seu projeto.
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F0FDFE] text-[#002C6C] flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#00C4EE]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Endereço Oficial</h3>
                    <p className="text-slate-600 mt-0.5">{ADDRESS_DISPLAY}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#002C6C] hover:text-[#00C4EE] flex items-center gap-1"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Google Maps</span>
                      </a>
                      <span className="text-slate-300">|</span>
                      <a
                        href={WAZE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#002C6C] hover:text-[#00C4EE] flex items-center gap-1"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Waze</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F0FDFE] text-[#002C6C] flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#00C4EE]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Telefones &amp; WhatsApp</h3>
                    <p className="text-slate-600 mt-0.5">
                      Fixo Comercial: <a href={`tel:${LANDLINE_DISPLAY.replace(/\D/g, "")}`} className="font-semibold text-[#002C6C] hover:underline">{LANDLINE_DISPLAY}</a>
                    </p>
                    <p className="text-slate-600">
                      WhatsApp Direto: <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-600 hover:underline">{PHONE_DISPLAY}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F0FDFE] text-[#002C6C] flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#00C4EE]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Horário de Funcionamento</h3>
                    <p className="text-slate-600 mt-0.5">Segunda a Sexta: 07:00 às 18:00</p>
                    <p className="text-slate-600">Sábado: 08:00 às 12:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F0FDFE] text-[#002C6C] flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#00C4EE]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">E-mail de Contato</h3>
                    <p className="text-slate-600 mt-0.5">{EMAIL_CONTACT}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa Interativo do Google Maps */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl h-96 w-full">
                <iframe
                  title="Mapa de Localização da Brasil Piscinas na Pampulha"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.6457318728287!2d-43.98595562414707!3d-19.85497258151525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690f9189ef999%3A0xddf1ce8965efea7!2sAv.+Francisco+Negr%C3%A3o+de+Lima%2C+860+-+Pampulha%2C+Belo+Horizonte+-+MG%2C+31545-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. BANNER FINAL DE CONVERSÃO / CTA */}
      <section className="py-16 bg-gradient-to-r from-[#001433] via-[#001F4D] to-[#002C6C] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C4EE]/20 text-[#BAF1FB] text-xs font-bold">
            <Sparkles className="w-4 h-4 text-[#00C4EE]" />
            <span>Transforme Seu Espaço em um Verdadeiro Paraíso de Lazer</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading">
            Pronto para Construir ou Reformar Sua Piscina dos Sonhos?
          </h2>

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Converse diretamente com Alberto, Eudes e a equipe da Brasil Piscinas. Garantimos acompanhamento sério, pontualidade de cronograma e o melhor custo-benefício de Belo Horizonte.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Quero solicitar um orçamento para o meu projeto de piscina com a Brasil Piscinas."
              )}
              target="_blank"
              variant="whatsapp"
              size="lg"
            >
              <WhatsAppIcon size={20} />
              <span>Solicitar Orçamento Gratuito</span>
            </GlowingButton>

            <a
              href={`tel:${LANDLINE_DISPLAY.replace(/\D/g, "")}`}
              className="px-6 py-3.5 rounded-lg border border-[#00C4EE]/40 text-white font-bold hover:bg-[#00C4EE]/10 transition-colors flex items-center gap-2 text-[15px]"
            >
              <Phone className="w-4 h-4 text-[#00C4EE]" />
              <span>Ligar: {LANDLINE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 13. FOOTER COMPLETO */}
      <footer className="bg-[#001433] text-slate-400 text-xs border-t border-[#002766] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Coluna 1: Logo & Resumo */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
                  <Image
                    src={LOGO_SRC}
                    alt="Brasil Piscinas Logo"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xl font-black tracking-tight text-white font-heading leading-tight flex items-center gap-1.5">
                    <span>Brasil</span>
                    <span className="text-[#00C4EE]">Piscinas</span>
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Construção &amp; Reforma
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Referência em construção e reforma de piscinas em concreto armado, vinil, spas de hidromassagem, borda infinita e equipamentos em Belo Horizonte e região metropolitana.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-lg bg-[#001F4D] hover:bg-[#00C4EE] hover:text-[#001433] text-slate-300 transition-colors"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-2 rounded-lg bg-[#001F4D] hover:bg-emerald-600 hover:text-white text-slate-300 transition-colors"
                >
                  <WhatsAppIcon size={16} />
                </a>
                <a
                  href={LINKTREE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linktree"
                  className="p-2 rounded-lg bg-[#001F4D] hover:bg-[#00C4EE] hover:text-[#001433] text-slate-300 transition-colors font-bold text-[11px]"
                >
                  Linktree
                </a>
              </div>
            </div>

            {/* Coluna 2: Serviços Principais */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Nossos Serviços
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Piscinas de Concreto Armado
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Piscinas com Borda Infinita
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Piscinas de Vinil &amp; Troca de Bolsão
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Spas &amp; Banheiras de Hidromassagem
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Aquecimento Solar &amp; Bombas de Calor
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Reformas Completas &amp; Manutenção
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Links Institucionais & Regiões */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Cidades Atendidas
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {CITIES_SERVED}.
              </p>
              <div className="pt-2">
                <span className="text-[11px] font-bold text-[#00C4EE] block mb-1">
                  Certificação &amp; Qualidade:
                </span>
                <p className="text-slate-400 text-xs">
                  Empresa associada à ANAPP (Associação Nacional dos Fabricantes e Construtores de Piscinas).
                </p>
              </div>
            </div>

            {/* Coluna 4: Contato & Sede */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Sede Pampulha
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {ADDRESS_DISPLAY}
              </p>
              <p className="text-slate-300 font-semibold text-xs pt-1">
                Telefone: {LANDLINE_DISPLAY}
              </p>
              <p className="text-slate-300 font-semibold text-xs">
                WhatsApp: {PHONE_DISPLAY}
              </p>
              <p className="text-slate-400 text-xs">
                E-mail: {EMAIL_CONTACT}
              </p>
            </div>
          </div>

          <div className="pt-10 mt-10 border-t border-[#002766] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados.
            </p>
            <p className="text-[11px]">
              {COMPANY_FULL_NAME} · Belo Horizonte - MG
            </p>
          </div>
        </div>
      </footer>

      {/* 14. BOTÃO FLUTUANTE DO WHATSAPP COM EFEITO PULSE */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={getWhatsAppUrl("Olá! Gostaria de tirar dúvidas e pedir um orçamento com a Brasil Piscinas.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp com a Brasil Piscinas"
          className="group relative flex items-center gap-3 bg-[#16A34A] hover:bg-[#15803D] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <div className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
          <WhatsAppIcon size={24} className="relative z-10" />
          <span className="hidden sm:inline-block font-bold text-xs tracking-wide relative z-10 pr-1">
            Orçamento WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
