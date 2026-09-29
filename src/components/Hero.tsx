"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { MessageSquare, ShieldCheck, ChevronRight, Award } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageDesktopRef = useRef<HTMLDivElement>(null);
  const imageMobileRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Efeito de Parallax suave nas imagens de fundo do Hero
      if (imageDesktopRef.current) {
        gsap.to(imageDesktopRef.current, {
          y: 70,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (imageMobileRef.current) {
        gsap.to(imageMobileRef.current, {
          y: 45,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 2. Animação de entrada dos textos e botões
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            delay: 0.1,
          }
        );
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative w-full h-[100dvh] min-h-[100dvh] flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6 lg:pb-8 overflow-hidden"
    >
      {/* Imagem de Fundo Desktop (Landscape / >= lg) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div ref={imageDesktopRef} className="hidden lg:block absolute inset-0 -top-10 -bottom-10 will-change-transform">
          <Image
            src="/header_desktop.jpg"
            alt="Adriana Kopeginski | Advocacia Previdenciária em Curitiba"
            fill
            priority
            quality={92}
            className="object-cover object-[center_28%] brightness-[0.82] contrast-[1.05]"
            sizes="100vw"
          />
        </div>

        {/* Imagem de Fundo Mobile & Tablet Portrait (< lg) */}
        <div ref={imageMobileRef} className="block lg:hidden absolute inset-0 -top-8 -bottom-8 will-change-transform">
          <Image
            src="/header_mobile.jpg"
            alt="Dra. Adriana Kopeginski - Especialista em Direito Previdenciário"
            fill
            priority
            quality={92}
            className="object-cover object-top brightness-[0.82] contrast-[1.05]"
            sizes="100vw"
          />
        </div>

        {/* Gradientes e Overlays mesclando Bordô Profundo e Carvão com brilho Champagne sutil */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#431617]/96 via-[#431617]/85 to-[#292323]/60 lg:from-[#431617]/94 lg:via-[#431617]/75 lg:via-55% lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#431617]/95 via-transparent to-[#292323]/60 lg:from-[#431617]/70 lg:via-transparent lg:to-transparent" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FFD700]/12 rounded-full blur-3xl lg:hidden" />
      </div>

      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between will-change-transform"
      >
        {/* Topo do Hero: Badge + Título Principal */}
        <div className="pt-1 sm:pt-2 max-w-3xl animate-fade-in-down">
          {/* Badge de Autoridade Institucional */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFD700]/50 bg-[#292323]/85 backdrop-blur-md text-xs sm:text-sm font-heading tracking-wide text-[#F2E7DF] mb-3 sm:mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#FFD700]" />
            <span>Adriana Kopeginski • Advocacia Previdenciária Especializada</span>
          </div>

          {/* Headline Principal */}
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] leading-[1.16] sm:leading-[1.14] tracking-tight text-white font-bold drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            Defesa técnica,{" "}
            <span className="text-[#FFD700] bg-gradient-to-r from-[#FFD700] via-[#FFF2A3] to-[#E6C200] bg-clip-text text-transparent relative font-extrabold">
              humanizada e estratégica
            </span>{" "}
            para a conquista do seu melhor benefício previdenciário.
          </h1>
        </div>

        {/* Base do Hero: Subtítulo Conciso + Botões de Conversão + Destaques de Rodapé */}
        <div className="pb-1 sm:pb-2 max-w-3xl mt-auto animate-fade-in-up">
          <p className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-[#F2E7DF]/90 max-w-2xl leading-relaxed mb-4 sm:mb-5 font-normal drop-shadow-sm">
            Com atendimento acolhedor e escuta atenta, a Dra. Adriana Kopeginski atua com rigor técnico na concessão e revisão de aposentadorias do INSS, benefícios por incapacidade e BPC/LOAS. Mais do que processos, cuidamos de pessoas.
          </p>

          {/* CTAs com Paleta 60-30-10: Ação em Champagne e Secundário Contrastante */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1">
            <a
              href={OFFICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-[#FFD700] hover:bg-[#E6C200] hover:scale-[1.02] text-[#292323] border-2 border-[#FFD700] gap-2.5 py-2.5 sm:py-3.5 px-5 sm:px-7 text-xs sm:text-sm font-bold tracking-normal shadow-[0_6px_24px_rgba(255,215,0,0.3)] group transition-all text-center justify-center flex items-center cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#292323] group-hover:scale-110 transition-transform" />
              <span>Falar com um advogado</span>
            </a>

            <Link
              href="#atuacao"
              className="btn-pill bg-[#292323]/80 backdrop-blur-md text-[#F2E7DF] border border-[#FFD700]/30 hover:bg-[#FFD700] hover:text-[#292323] hover:border-[#FFD700] hover:scale-[1.02] shadow-md gap-2 py-2.5 sm:py-3.5 px-5 sm:px-6 text-xs sm:text-sm font-semibold tracking-normal group transition-all text-center justify-center flex items-center cursor-pointer dark:bg-[#532729]/80 dark:text-[#F2E7DF] dark:border-[#FFD700]/35 dark:hover:bg-[#FFD700] dark:hover:text-[#292323]"
            >
              <span className="font-semibold">Conhecer Áreas de Atuação</span>
              <ChevronRight className="w-4 h-4 text-[#F2E7DF] group-hover:translate-x-1 group-hover:text-[#292323] transition-transform" />
            </Link>
          </div>

          {/* Barra de Atributos de Prestígio */}
          <div className="hidden lg:flex items-center justify-between py-2.5 xl:py-3 border-t border-white/20 mt-4 xl:mt-6 text-white/90 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="bullet-indicator text-[#FFD700]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[#F2E7DF]/90 font-bold">
                Sede em Curitiba/PR (Sítio Cercado) & Atendimento Online Nacional
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-heading text-white/80">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#FFD700]" />
                Foco Previdenciário
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FFD700]" />
                Conformidade CFOAB 205/2021
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}