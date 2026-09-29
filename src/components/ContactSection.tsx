"use client";

import { useRef } from "react";
import { OFFICE_INFO } from "@/lib/data";
import { Phone, MapPin, Clock, ArrowUpRight, Navigation, ShieldCheck } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsColRef = useRef<HTMLDivElement>(null);
  const mapColRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Cabeçalho
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. Animação de entrada dos cards de contato
      if (cardsColRef.current) {
        const contactCards = cardsColRef.current.querySelectorAll(".contact-info-card");
        if (contactCards.length > 0) {
          gsap.fromTo(
            contactCards,
            { x: -35, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardsColRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }

      // 3. Animação de revelação suave do Mapa
      if (mapColRef.current) {
        gsap.fromTo(
          mapColRef.current,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mapColRef.current,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative overflow-hidden"
    >
      {/* Linhas Geométricas Sutis de Fundo */}
      <GeometricLines variant="contact" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--accent)]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--accent)] font-bold">
                07 / Atendimento & Localização
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Canais Oficiais de Atendimento
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Atendimento presencial em nossa sede física em Curitiba/PR (Sítio Cercado) e consultoria jurídica digital segura para clientes em qualquer região do Brasil.
          </p>
        </div>

        {/* CENÁRIO A: Grid 12 colunas com Cards de Contato (5 colunas) e Google Maps Interativo (7 colunas) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Coluna 1: Cards de Contato & Ações (5 colunas) */}
          <div ref={cardsColRef} className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              {/* Card WhatsApp & Telefone */}
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 hover-lift group will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors block"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-dark)] transition-colors shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    WhatsApp Direto & Consultas
                  </span>
                  <p className="font-heading font-bold text-base sm:text-lg text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors">
                    {OFFICE_INFO.phone}
                  </p>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-1">
                    Atendimento imediato e orientações preliminares com advogado.
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors flex-shrink-0 mt-1" />
              </a>

              {/* Card Endereço da Sede com Rota GPS */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    Sede Física em Curitiba/PR
                  </span>
                  <p className="font-body text-xs sm:text-sm text-[var(--text-main)] font-semibold leading-snug">
                    {OFFICE_INFO.address}
                  </p>
                  <a
                    href={OFFICE_INFO.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-heading font-bold text-[var(--accent)] hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Traçar rota no GPS</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Card Redes Sociais */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    Rede Social Oficial
                  </span>
                  <div className="flex items-center gap-4 mt-0.5">
                    <a
                      href={OFFICE_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs sm:text-sm font-semibold text-[var(--text-main)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
                    >
                      <span>Instagram ({OFFICE_INFO.instagramHandle})</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)]" />
                    </a>
                  </div>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-1">
                    Acompanhe informativos jurídicos práticos e direitos previdenciários.
                  </p>
                </div>
              </div>

              {/* Card Horário de Funcionamento */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    Horário de Atendimento
                  </span>
                  <p className="font-body text-xs sm:text-sm text-[var(--text-main)] font-semibold">
                    {OFFICE_INFO.schedule.weekdays}
                  </p>
                  <p className="font-body text-xs text-[var(--text-muted)] mt-0.5">
                    Sábado: {OFFICE_INFO.schedule.saturday} • Domingo: {OFFICE_INFO.schedule.sunday}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-pill bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 gap-2 shadow-[0_4px_20px_rgba(37,211,102,0.35)] text-sm sm:text-base cursor-pointer hover-lift transition-all flex items-center justify-center font-bold"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Falar com um advogado no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Google Maps Interativo com Badge e Barra Flutuante de Rota (7 colunas) */}
          <div ref={mapColRef} className="lg:col-span-7 flex flex-col justify-between will-change-transform">
            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-full min-h-[380px] rounded-3xl overflow-hidden border border-[var(--border-subtle)]/40 shadow-md">
              <iframe
                title={`Localização de ${OFFICE_INFO.name} em Curitiba PR`}
                src={OFFICE_INFO.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[15%] contrast-[1.05]"
              />

              {/* Badge de Identificação no Topo do Mapa */}
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-[var(--bg-card)]/95 backdrop-blur-md border border-[var(--border-subtle)]/30 text-xs shadow-md">
                <span className="font-heading font-bold text-[var(--text-main)] block">
                  {OFFICE_INFO.name}
                </span>
                <span className="text-[var(--text-muted)] font-body">
                  {OFFICE_INFO.addressShort}
                </span>
              </div>

              {/* Botão de Rota Traçada Flutuante na Base do Mapa */}
              <div className="absolute bottom-4 inset-x-4 sm:left-auto sm:right-4 p-2 sm:p-2.5 rounded-2xl bg-[var(--bg-card)]/95 backdrop-blur-md border border-[var(--border-subtle)]/40 shadow-xl flex items-center justify-between sm:justify-start gap-3">
                <div className="hidden sm:block pl-2 pr-1">
                  <span className="font-heading text-xs font-bold text-[var(--text-main)] block">
                    Como Chegar
                  </span>
                  <span className="font-body text-[0.6875rem] text-[var(--text-muted)]">
                    {OFFICE_INFO.cityState}
                  </span>
                </div>
                <a
                  href={OFFICE_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-[#D5B1A0] hover:bg-[#C49A87] text-[#292323] text-xs font-bold py-2.5 px-4 shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#292323]" />
                  <span>Traçar Rota no Google Maps</span>
                </a>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-2xl bg-[var(--bg-secondary)]/80 border border-[var(--border-subtle)]/25 flex items-center justify-between text-xs text-[var(--text-muted)] font-body">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
                <span>Atendimento presencial em Curitiba e consultoria online em todo o Brasil.</span>
              </span>
              <span className="font-heading font-semibold text-[var(--accent)] hidden sm:inline">
                Sítio Cercado, Curitiba/PR
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}