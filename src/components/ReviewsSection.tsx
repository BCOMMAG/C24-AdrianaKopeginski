"use client";

import { useRef } from "react";
import { REVIEWS } from "@/lib/data";
import { Star, MessageSquareQuote, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

function getInitials(name: string) {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animação de entrada do cabeçalho
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
    },
    { scope: sectionRef }
  );

  // Divide os comentários em 2 trilhas complementares para fluxo dinâmico
  const half = Math.ceil(REVIEWS.length / 2);
  const row1 = REVIEWS.slice(0, half);
  const row2 = REVIEWS.slice(half);

  const track1 = [...row1, ...row1];
  const track2 = [...row2, ...row2];

  return (
    <section
      id="avaliacoes"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-secondary)]/50 editorial-border-b w-full relative overflow-hidden"
    >
      {/* Linhas Geométricas Sutis de Fundo */}
      <GeometricLines variant="reviews" />

      {/* Máscaras de gradiente lateral para transição suave dos cards */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[var(--bg-secondary)] via-[var(--bg-secondary)]/90 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[var(--bg-secondary)] via-[var(--bg-secondary)]/90 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--accent)]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--accent)] font-bold">
                04 / Reconhecimento Público
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Avaliações no Google Reviews
            </h2>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] mt-2">
              Transparência, dedicação e acolhimento comprovados por quem já confiou na atuação da Dra. Adriana Kopeginski.
            </p>
          </div>

          {/* Badge SEM número total (Provimento 205/2021 OAB), foco em excelência 5.0 */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-2xs">
            <div className="text-right">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-heading text-xs uppercase tracking-wider text-[var(--text-muted)] block mt-0.5">
                Avaliação 5.0 Estrelas
              </span>
            </div>
            <div className="h-8 w-[1px] bg-[var(--border-subtle)]/30" />
            <div className="flex items-center gap-1.5 font-heading text-sm font-bold text-[var(--accent)]">
              <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
              <span>Google Verificado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trilha 1: Desliza para a Esquerda */}
      <div className="w-full overflow-hidden py-3 will-change-transform relative z-0">
        <div className="animate-marquee-left gap-6">
          {track1.map((rev, idx) => (
            <div
              key={`track1-${rev.author}-${idx}`}
              className="w-[300px] sm:w-[370px] min-h-[190px] p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-xs flex flex-col justify-between flex-shrink-0 hover:border-[#D5B1A0] dark:hover:border-[#D5B1A0] hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[0.625rem] font-semibold">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verificado</span>
                  </div>
                </div>

                <p className="font-body text-xs sm:text-sm text-[var(--text-main)] leading-relaxed italic mb-4">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)]/25 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D5B1A0]/25 to-[#C49A87]/35 text-[#292323] dark:text-[#D5B1A0] font-heading font-bold text-xs flex items-center justify-center border border-[#D5B1A0]/30 flex-shrink-0">
                    {getInitials(rev.author)}
                  </div>
                  <div>
                    <span className="font-heading font-bold text-xs text-[var(--text-main)] block leading-tight">
                      {rev.author}
                    </span>
                    <span className="text-[0.625rem] text-[var(--text-muted)] font-body">
                      {rev.source}
                    </span>
                  </div>
                </div>
                <MessageSquareQuote className="w-4 h-4 text-[#D5B1A0]/80 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trilha 2: Desliza para a Direita */}
      <div className="w-full overflow-hidden py-3 will-change-transform relative z-0 mt-2">
        <div className="animate-marquee-right gap-6">
          {track2.map((rev, idx) => (
            <div
              key={`track2-${rev.author}-${idx}`}
              className="w-[300px] sm:w-[370px] min-h-[190px] p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-xs flex flex-col justify-between flex-shrink-0 hover:border-[#D5B1A0] dark:hover:border-[#D5B1A0] hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[0.625rem] font-semibold">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verificado</span>
                  </div>
                </div>

                <p className="font-body text-xs sm:text-sm text-[var(--text-main)] leading-relaxed italic mb-4">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)]/25 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D5B1A0]/25 to-[#C49A87]/35 text-[#292323] dark:text-[#D5B1A0] font-heading font-bold text-xs flex items-center justify-center border border-[#D5B1A0]/30 flex-shrink-0">
                    {getInitials(rev.author)}
                  </div>
                  <div>
                    <span className="font-heading font-bold text-xs text-[var(--text-main)] block leading-tight">
                      {rev.author}
                    </span>
                    <span className="text-[0.625rem] text-[var(--text-muted)] font-body">
                      {rev.source}
                    </span>
                  </div>
                </div>
                <MessageSquareQuote className="w-4 h-4 text-[#D5B1A0]/80 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}