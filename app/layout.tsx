import type { Metadata, Viewport } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#002C6C",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://brasilpiscinas.com.br"),
  title:
    "Brasil Piscinas — Construção e Reforma de Piscinas em Belo Horizonte e Região | 4.8★",
  description:
    "Referência em construção de piscinas em concreto armado, vinil e fibra, piscinas com borda infinita, prainhas integradas, spas de hidromassagem, aquecimento solar e reformas em BH e Grande BH. Av. Francisco Negrão de Lima, 860 - Lj A - Pampulha. Telefone: (31) 2520-7776.",
  keywords: [
    "Brasil Piscinas",
    "Brasil Piscinas BH",
    "Brasil Piscinas Pampulha",
    "Construção de piscinas BH",
    "Construção de piscinas Belo Horizonte",
    "Piscina borda infinita BH",
    "Piscina concreto armado BH",
    "Piscina de vinil BH",
    "Reforma de piscinas Belo Horizonte",
    "Troca de vinil de piscina BH",
    "Spas e banheiras hidromassagem BH",
    "Aquecimento solar piscina BH",
    "Bomba e filtro piscina BH",
    "Iluminação piscina LED BH",
    "Piscinas Pampulha BH",
    "Construção de piscinas Minas Gerais",
  ],
  authors: [{ name: "Brasil Piscinas — Belo Horizonte - MG" }],
  creator: "Brasil Piscinas",
  publisher: "Brasil Piscinas",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=brasil1", sizes: "any" },
      { url: "/icon-32x32.png?v=brasil1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=brasil1", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=brasil1", type: "image/png", sizes: "48x48" },
      { url: "/icon-192x192.png?v=brasil1", type: "image/png", sizes: "192x192" },
      { url: "/icon.png?v=brasil1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=brasil1",
    apple: [{ url: "/apple-icon.png?v=brasil1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://brasilpiscinas.com.br",
    title:
      "Brasil Piscinas — Construção e Reforma de Piscina em BH e Região",
    description:
      "Empresa especializada em construção e reforma de piscinas: concreto armado, vinil, spas, borda infinita e equipamentos com 4,8★ no Google. Av. Francisco Negrão de Lima, 860 - Pampulha.",
    siteName: "Brasil Piscinas",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brasil Piscinas — Belo Horizonte - MG",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Brasil Piscinas",
    alternateName: "Brasil Piscinas • Construção e Reforma",
    description:
      "Empresa especializada em construção e reforma de piscinas em concreto armado, vinil e fibra, spas de hidromassagem, borda infinita, aquecimento solar e equipamentos em Belo Horizonte e Região.",
    telephone: "+553125207776",
    url: "https://brasilpiscinas.com.br",
    image: "https://brasilpiscinas.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Francisco Negrão de Lima, 860 - Lj A",
      addressLocality: "Pampulha, Belo Horizonte",
      addressRegion: "MG",
      postalCode: "31545-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "58",
    },
    areaServed: [
      "Belo Horizonte",
      "Pampulha",
      "Nova Lima",
      "Lagoa Santa",
      "Contagem",
      "Betim",
      "Vespasiano",
      "Santa Luzia",
      "Sabará",
      "Grande BH",
      "Minas Gerais",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "12:00",
      },
    ],
  };

  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#F8FAFC] text-[#07172B] font-sans antialiased selection:bg-[#00C4EE] selection:text-[#001433]"
      >
        {children}
      </body>
    </html>
  );
}
