"use client";

import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import {
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Briefcase,
  Calculator,
  Scale,
  ShieldAlert,
} from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/SocialIcons";

export default function LinksPage() {
  const quickLinks = [
    {
      id: "whatsapp",
      title: "WhatsApp Oficial com Advogado",
      subtitle: "Atendimento imediato e orientações preliminares",
      href: OFFICE_INFO.whatsappUrl,
      icon: WhatsAppIcon,
      highlight: true,
    },
    {
      id: "website",
      title: "Website Institucional",
      subtitle: "Conheça nossa estrutura, áreas e diferenciais",
      href: "/",
      icon: Globe,
      highlight: false,
    },
    {
      id: "planejamento",
      title: "Planejamento Previdenciário & Aposentadoria",
      subtitle: "Simulação de regras de transição e cálculo do maior benefício",
      href: `https://wa.me/${OFFICE_INFO.phoneRaw}?text=${encodeURIComponent(
        "Olá, Dra. Adriana Kopeginski! Gostaria de consultoria jurídica sobre Planejamento Previdenciário e Aposentadoria."
      )}`,
      icon: Calculator,
      highlight: false,
    },
    {
      id: "incapacidade",
      title: "Benefícios por Incapacidade & Auxílio-Doença",
      subtitle: "Reversão de alta programada e aposentadoria por invalidez",
      href: `https://wa.me/${OFFICE_INFO.phoneRaw}?text=${encodeURIComponent(
        "Olá, Dra. Adriana Kopeginski! Gostaria de consultoria jurídica sobre Benefícios por Incapacidade e Auxílio-Doença."
      )}`,
      icon: ShieldAlert,
      highlight: false,
    },
    {
      id: "bpc",
      title: "BPC / LOAS para Idosos e Autismo (TEA)",
      subtitle: "Garantia de 1 salário mínimo mensal sem exigência de contribuição",
      href: `https://wa.me/${OFFICE_INFO.phoneRaw}?text=${encodeURIComponent(
        "Olá, Dra. Adriana Kopeginski! Gostaria de consultoria sobre BPC/LOAS para idosos ou pessoa com deficiência."
      )}`,
      icon: Scale,
      highlight: false,
    },
    {
      id: "especial",
      title: "Aposentadoria Especial & Tempo Rural",
      subtitle: "PPP/LTCAT de insalubridade e averbação de trabalho no campo",
      href: `https://wa.me/${OFFICE_INFO.phoneRaw}?text=${encodeURIComponent(
        "Olá, Dra. Adriana Kopeginski! Gostaria de consultoria sobre Aposentadoria Especial e Tempo Rural."
      )}`,
      icon: Briefcase,
      highlight: false,
    },
    {
      id: "instagram",
      title: "Instagram Institucional",
      subtitle: `${OFFICE_INFO.instagramHandle} • Conteúdo jurídico previdenciário`,
      href: OFFICE_INFO.instagramUrl,
      icon: InstagramIcon,
      highlight: false,
    },
  ];

  const specialties = [
    "Direito Previdenciário",
    "Planejamento de Aposentadoria",
    "Regras de Transição (EC 103)",
    "Auxílio-Doença (Incapacidade)",
    "Aposentadoria por Invalidez",
    "BPC / LOAS (Idoso e PCD)",
    "Transtorno do Espectro Autista",
    "Aposentadoria Especial (PPP)",
    "Averbação de Tempo Rural",
    "Revisões da RMI no INSS",
  ];

  return (
    <main className="min-h-[100dvh] lg:h-screen lg:max-h-screen lg:overflow-hidden w-screen max-w-full bg-[#F0F2F5] text-[#18191C]">
      {/* ===================== VERSÃO DESKTOP (Split Screen 50/50 - Sem Scroll - Estilo C08-Sloane) ===================== */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full w-full overflow-hidden">
        
        {/* LADO ESQUERDO: Fundo Preto Grafite com Logo DOBRADA e Identidade Visual */}
        <div className="relative bg-[#121316] text-[#F3F4F6] flex flex-col justify-between p-8 xl:p-12 h-full overflow-hidden border-r border-[#D5B1A0]/25">
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-links-desktop-c24" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#D5B1A0" strokeWidth="0.75" />
                  <circle cx="0" cy="0" r="1.5" fill="#D5B1A0" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-links-desktop-c24)" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D5B1A0]/40 bg-[#1C1E23]/90 backdrop-blur-md text-xs font-heading tracking-wider text-[#D5B1A0]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D5B1A0]" />
              <span>Advocacia Especialista em Direito Previdenciário</span>
            </div>
            <span className="text-[0.6875rem] font-heading uppercase tracking-widest text-[#D5B1A0]">
              Curitiba/PR • Atendimento Nacional
            </span>
          </div>

          {/* Logo Dobrada no Lado Esquerdo com Dimensões Explícitas */}
          <div className="relative z-10 my-auto py-2 flex flex-col items-center text-center w-full">
            <Link
              href="/"
              className="relative block w-full max-w-[560px] xl:max-w-[650px] h-60 xl:h-72 mx-auto cursor-pointer group focus:outline-none mb-4"
              aria-label="Ir para a página inicial"
            >
              <Image
                src="/logo_sem_fundo_usarnomodoescuro.png"
                alt={OFFICE_INFO.name}
                fill
                priority
                className="object-contain object-center drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1280px) 650px, 560px"
              />
            </Link>

            <div className="h-0.5 w-16 bg-[#D5B1A0]/60 mb-4" />

            <h1 className="font-heading text-lg xl:text-xl font-semibold max-w-md leading-snug text-[#F3F4F6]">
              {OFFICE_INFO.tagline}
            </h1>

            <p className="font-body text-xs xl:text-sm text-[#F3F4F6]/85 max-w-sm mt-3 leading-relaxed">
              Atuação jurídica técnica, acolhedora e combativa na concessão e revisão de benefícios do INSS perante as Agências da Previdência e a Justiça Federal.
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs text-[#F3F4F6]/70 font-body pt-3 border-t border-white/10">
            <p>{OFFICE_INFO.addressShort}</p>
            <p className="text-[0.6875rem] text-[#D5B1A0]/90">Provimento 205/2021 CFOAB</p>
          </div>
        </div>

        {/* LADO DIREITO: Fundo Prateado Suave com Logo Institucional + Canais de Atendimento */}
        <div className="bg-[#F0F2F5] flex flex-col justify-between p-6 xl:p-8 h-full overflow-y-auto">
          <div className="max-w-md mx-auto w-full flex flex-col justify-center my-auto space-y-2.5 xl:space-y-3 py-3">
            
            {/* Header com Logo no Lado Direito */}
            <div className="flex flex-col items-center text-center w-full">
              <Link
                href="/"
                className="relative block w-full max-w-[440px] xl:max-w-[500px] h-36 xl:h-44 mx-auto cursor-pointer group focus:outline-none mb-1.5"
                aria-label="Ir para a página inicial"
              >
                <Image
                  src="/logo_sem_fundo_usarnomodoclaro.png"
                  alt={OFFICE_INFO.name}
                  fill
                  priority
                  className="object-contain object-center drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 1280px) 500px, 440px"
                />
              </Link>
              <span className="font-heading uppercase text-[0.6875rem] tracking-widest text-[#4B5563] block mb-0.5 font-bold">
                Acesso Imediato
              </span>
              <h2 className="font-heading text-xl xl:text-2xl font-bold text-[#18191C]">
                Canais Oficiais de Atendimento
              </h2>
              <p className="font-body text-xs text-[#4B5563] mt-0.5">
                Escolha o canal desejado para se comunicar diretamente com nossa equipe jurídica.
              </p>
            </div>

            {/* Lista de Links */}
            <div className="space-y-1.5">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                const isInternal = item.href.startsWith("/");
                const buttonClasses = `w-full p-2.5 xl:p-3 rounded-xl flex items-center justify-between group transition-all duration-300 border ${
                  item.highlight
                    ? "bg-[#25D366] hover:bg-[#20ba59] text-white border-transparent shadow-sm hover:shadow-md"
                    : "bg-white text-[#18191C] border-gray-200/90 hover:border-[#D5B1A0] shadow-2xs hover:shadow-xs"
                }`;

                const content = (
                  <>
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          item.highlight ? "bg-white/20 text-white" : "bg-[#F7EFEA] text-[#18191C]"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left">
                        <span className="font-heading text-xs sm:text-sm font-bold block leading-tight">
                          {item.title}
                        </span>
                        <span
                          className={`font-body text-[0.6875rem] block truncate max-w-[260px] ${
                            item.highlight ? "text-white/90" : "text-[#4B5563]"
                          }`}
                        >
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        item.highlight ? "text-white" : "text-[#4B5563] group-hover:text-[#18191C]"
                      }`}
                    />
                  </>
                );

                return isInternal ? (
                  <Link key={item.id} href={item.href} className={buttonClasses}>
                    {content}
                  </Link>
                ) : (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses}
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            {/* Caixa de Especialidades */}
            <div className="p-2.5 rounded-xl border border-gray-200/90 bg-white shadow-2xs">
              <div className="flex items-center gap-1.5 text-[0.6875rem] uppercase tracking-wider font-heading text-[#18191C] font-bold mb-1">
                <Briefcase className="w-3.5 h-3.5 text-[#D5B1A0]" />
                <span>Especialidades Jurídicas</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded-md text-[0.6875rem] font-body bg-[#F7EFEA] text-[#18191C] border border-[#D5B1A0]/20 font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <div className="text-center text-[0.6875rem] font-body text-[#4B5563] pt-2 border-t border-gray-200/80">
            {OFFICE_INFO.addressShort} • © {new Date().getFullYear()} {OFFICE_INFO.name}
          </div>
        </div>
      </div>

      {/* ===================== VERSÃO MOBILE (100% Fit Sem Scroll + Logo Centralizada + Cards Agrupados - h-[100dvh] overflow-hidden) ===================== */}
      <div className="lg:hidden relative flex flex-col justify-between h-[100dvh] max-h-[100dvh] w-full px-4 py-3 sm:py-4 overflow-hidden bg-[#F0F2F5]">
        {/* Linhas e Formas Geométricas Minimalistas em Dourado Champagne no Plano de Fundo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
          {/* Brilho radial dourado sutil */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(213,177,160,0.18)_0%,rgba(240,242,245,0)_70%)]" />

          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              {/* Malha ultra fina com nós dourados */}
              <pattern id="golden-mobile-grid-c24" width="36" height="36" patternUnits="userSpaceOnUse">
                <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#18191C" strokeWidth="0.4" strokeOpacity="0.06" />
                <circle cx="0" cy="0" r="0.9" fill="#D5B1A0" fillOpacity="0.25" />
              </pattern>
              {/* Gradientes lineares para traços dourados */}
              <linearGradient id="goldGradC24-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D5B1A0" stopOpacity="0.05" />
                <stop offset="50%" stopColor="#D5B1A0" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#D5B1A0" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="goldGradC24-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D5B1A0" stopOpacity="0.05" />
                <stop offset="50%" stopColor="#D5B1A0" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#D5B1A0" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Grid geométrico */}
            <rect width="100%" height="100%" fill="url(#golden-mobile-grid-c24)" />

            {/* Linhas diagonais estruturais elegantes */}
            <line x1="-10%" y1="16%" x2="110%" y2="34%" stroke="url(#goldGradC24-1)" strokeWidth="0.8" />
            <line x1="-10%" y1="84%" x2="110%" y2="66%" stroke="url(#goldGradC24-1)" strokeWidth="0.8" />
            <line x1="110%" y1="12%" x2="-10%" y2="44%" stroke="url(#goldGradC24-2)" strokeWidth="0.6" strokeDasharray="3 3" />
            <line x1="110%" y1="88%" x2="-10%" y2="56%" stroke="url(#goldGradC24-2)" strokeWidth="0.6" strokeDasharray="3 3" />

            {/* Linhas verticais de enquadramento arquitetônico */}
            <line x1="6%" y1="0" x2="6%" y2="100%" stroke="#D5B1A0" strokeWidth="0.5" strokeOpacity="0.22" />
            <line x1="94%" y1="0" x2="94%" y2="100%" stroke="#D5B1A0" strokeWidth="0.5" strokeOpacity="0.22" />
            <line x1="0" y1="22%" x2="100%" y2="22%" stroke="#18191C" strokeWidth="0.5" strokeOpacity="0.08" strokeDasharray="5 5" />
            <line x1="0" y1="78%" x2="100%" y2="78%" stroke="#18191C" strokeWidth="0.5" strokeOpacity="0.08" strokeDasharray="5 5" />

            {/* Círculos e Arcos Geométricos Minimalistas */}
            <circle cx="88%" cy="18%" r="85" fill="none" stroke="#D5B1A0" strokeWidth="0.75" strokeOpacity="0.22" />
            <circle cx="88%" cy="18%" r="62" fill="none" stroke="#D5B1A0" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="3 3" />

            <circle cx="12%" cy="80%" r="95" fill="none" stroke="#D5B1A0" strokeWidth="0.75" strokeOpacity="0.20" />
            <circle cx="12%" cy="80%" r="70" fill="none" stroke="#D5B1A0" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="4 4" />

            {/* Losangos / Diamantes Geométricos Minimalistas */}
            <polygon points="40,85 54,99 40,113 26,99" fill="none" stroke="#D5B1A0" strokeWidth="0.75" strokeOpacity="0.28" />
            <polygon points="340,650 354,664 340,678 326,664" fill="none" stroke="#D5B1A0" strokeWidth="0.75" strokeOpacity="0.28" />

            {/* Marcadores de precisão em cruz (+) nas interseções */}
            <path d="M 6% 22% m -5 0 l 10 0 m -5 -5 l 0 10" stroke="#D5B1A0" strokeWidth="0.75" strokeOpacity="0.45" />
            <path d="M 94% 22% m -5 0 l 10 0 m -5 -5 l 0 10" stroke="#D5B1A0" strokeWidth="0.75" strokeOpacity="0.45" />
            <path d="M 6% 78% m -5 0 l 10 0 m -5 -5 l 0 10" stroke="#D5B1A0" strokeWidth="0.75" strokeOpacity="0.45" />
            <path d="M 94% 78% m -5 0 l 10 0 m -5 -5 l 0 10" stroke="#D5B1A0" strokeWidth="0.75" strokeOpacity="0.45" />
          </svg>
        </div>

        {/* Conteúdo Central Unificado: Logo + Cards Agrupados Sem Espaço Ocioso */}
        <div className="relative z-10 w-full max-w-md mx-auto my-auto flex flex-col items-center">
          {/* Logo Centralizada no Mobile */}
          <Link
            href="/"
            className="relative block w-[84vw] max-w-[280px] sm:max-w-[320px] h-24 sm:h-28 mx-auto cursor-pointer group focus:outline-none mb-3 sm:mb-4"
            aria-label="Ir para a página inicial"
          >
            <Image
              src="/logo_sem_fundo_usarnomodoclaro.png"
              alt={OFFICE_INFO.name}
              fill
              priority
              className="object-contain object-center drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 320px, 280px"
            />
          </Link>

          {/* Cards Rápidos Juntos com Espaçamento Ajustado (gap-2) */}
          <div className="w-full flex flex-col gap-2 sm:gap-2.5 px-0.5">
            {quickLinks.slice(0, 5).map((item) => {
              const Icon = item.icon;
              const isInternal = item.href.startsWith("/");
              const buttonClasses = `group flex items-center justify-between px-3.5 py-2 sm:py-2.5 rounded-xl border transition-all duration-200 active:scale-[0.98] ${
                item.highlight
                  ? "bg-[#25D366] text-white border-transparent shadow-[0_3px_12px_rgba(37,211,102,0.28)]"
                  : "bg-white/95 backdrop-blur-xs hover:bg-white border-gray-200/90 text-[#18191C] shadow-2xs hover:border-[#D5B1A0]"
              }`;

              const content = (
                <>
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        item.highlight ? "bg-white/20 text-white" : "bg-[#F7EFEA] border border-[#D5B1A0]/20 text-[#18191C]"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-heading font-bold text-xs sm:text-sm leading-tight truncate">{item.title}</h2>
                      <p
                        className={`text-[0.6875rem] font-body truncate ${
                          item.highlight ? "text-white/90" : "text-[#4B5563]"
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-current flex-shrink-0 ml-1.5" />
                </>
              );

              return isInternal ? (
                <Link key={item.id} href={item.href} className={buttonClasses}>
                  {content}
                </Link>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClasses}
                >
                  {content}
                </a>
              );
            })}

            {/* Botão Instagram Oficial */}
            <a
              href={OFFICE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between px-3.5 py-2 sm:py-2.5 rounded-xl bg-white/95 border border-gray-200/90 text-[#18191C] hover:border-[#D5B1A0] active:scale-[0.98] transition-all shadow-2xs w-full"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#F7EFEA] border border-[#D5B1A0]/20 text-[#18191C]">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 text-left">
                  <h2 className="font-heading font-bold text-xs sm:text-sm leading-tight text-[#18191C]">
                    Instagram Institucional
                  </h2>
                  <p className="text-[0.6875rem] font-body text-[#4B5563] truncate">
                    {OFFICE_INFO.instagramHandle} • Conteúdo jurídico previdenciário
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#4B5563] group-hover:text-[#18191C] flex-shrink-0 ml-1.5 transition-colors" />
            </a>
          </div>
        </div>

        {/* Rodapé Mobile Compacto */}
        <div className="relative z-10 text-center text-[0.625rem] sm:text-[0.6875rem] text-[#4B5563] font-body pt-1 pb-1">
          <p>{OFFICE_INFO.addressShort} • © {new Date().getFullYear()} {OFFICE_INFO.name}</p>
        </div>
      </div>
    </main>
  );
}