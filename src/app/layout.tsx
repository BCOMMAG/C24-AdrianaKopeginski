import type { Metadata } from "next";
import { Inter, Krub } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const krub = Krub({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://adrianakopeginski.pages.dev";
const ogImageUrl = `${siteUrl}/og-image_optimized_300.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Adriana Kopeginski | Advogada Especialista em Direito Previdenciário",
    template: "%s | Adriana Kopeginski Advogada",
  },
  description:
    "Advocacia especializada em Direito Previdenciário liderada pela Dra. Adriana Kopeginski. Planejamento previdenciário, auxílio-doença, BPC/LOAS, aposentadorias do INSS e revisões de benefícios. Sede em Curitiba/PR (Sítio Cercado) e atendimento online para todo o Brasil.",
  keywords: [
    "dra adriana kopeginski",
    "adriana kopeginski advogada",
    "advogado previdenciario curitiba",
    "advogada previdenciaria sitio cercado curitiba",
    "planejamento previdenciario curitiba",
    "aposentadoria inss regras de transicao",
    "auxilio-doenca alta programada",
    "bpc loas autismo curitiba",
    "aposentadoria especial ppp ltcat",
    "revisao de aposentadoria inss",
    "averbacao tempo rural",
    "advocacia humanizada curitiba",
    "consultoria juridica previdenciaria online brasil",
  ],
  authors: [{ name: "Dra. Adriana Kopeginski" }],
  creator: "Dra. Adriana Kopeginski",
  publisher: "Adriana Kopeginski | Advocacia Previdenciária",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Adriana Kopeginski | Advogada Especialista em Direito Previdenciário",
    description:
      "Defesa técnica, humanizada e estratégica dos seus direitos previdenciários. Dra. Adriana Kopeginski — atendimento presencial em Curitiba/PR e online para todo o Brasil.",
    siteName: "Adriana Kopeginski Advogada",
    images: [
      {
        url: ogImageUrl,
        secureUrl: ogImageUrl,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Adriana Kopeginski | Advocacia Previdenciária",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adriana Kopeginski | Advogada Especialista em Direito Previdenciário",
    description:
      "Defesa técnica, humanizada e estratégica dos seus direitos previdenciários. Dra. Adriana Kopeginski — atendimento presencial em Curitiba/PR e online para todo o Brasil.",
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLegalServiceSchema();

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${krub.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Adriana Kopeginski | Advocacia Previdenciária" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body selection:bg-[#D5B1A0] selection:text-[#292323]">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}