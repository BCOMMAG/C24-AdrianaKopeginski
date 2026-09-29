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
      {/* Imagem de Fundo Desktop e Mobile - Sem a camada avermelhada (apenas a imagem pura com sombra neutra para legibilidade) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div ref={imageDesktopRef} className="hidden lg:block absolute inset-0 -top-10 -bottom-10 will-change-transform">
          <Image
            src="/header_desktop.jpg"
            alt="Adriana Kopeginski | Advocacia Previdenciária"
            fill
            priority
            quality={95}
            className="object-cover object-[center_32%] brightness-[0.88] contrast-[1.02]"
            sizes="100vw"
          />
        </div>

        {/* Imagem de Fundo Mobile & Tablet Portrait (< lg) */}
        <div ref={imageMobileRef} className="block lg:hidden absolute inset-0 -top-8 -bottom-8 will-change-transform">
          <Image
            src="/header_mobile.jpg"
            alt="Adriana Kopeginski - Especialista em Direito Previdenciário"
            fill
            priority
            quality={95}
            className="object-cover object-top brightness-[0.88] contrast-[1.02]"
            sizes="100vw"
          />
        </div>

        {/* Camada sutil neutra apenas para garantir alto contraste dos textos (sem cor avermelhada) */}
        <div className="absolute inset-0 bg-black/40 lg:bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
      </div>

      <div
        ref={contentRef}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center items-center text-center will-change-transform my-auto"
      >
        {/* Bloco Central da Página Inicial */}
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Headline Principal Centralizada */}
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] leading-[1.2] sm:leading-[1.16] tracking-tight text-white font-bold drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)] max-w-3xl mb-4 sm:mb-6">
            Defesa técnica,{" "}
            <span className="text-[#D5B1A0] bg-gradient-to-r from-[#D5B1A0] via-[#EFE0D8] to-[#D5B1A0] bg-clip-text text-transparent relative font-extrabold">
              humanizada e estratégica
            </span>{" "}
            para a conquista do seu melhor benefício previdenciário.
          </h1>

          {/* Subtítulo Institucional */}
          <p className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed mb-6 sm:mb-8 font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            Com atendimento acolhedor e escuta atenta, a advocacia Adriana Kopeginski atua com rigor técnico na concessão e revisão de aposentadorias do INSS, benefícios por incapacidade e BPC/LOAS. Cuidamos do seu futuro com dedicação e transparência.
          </p>

          {/* CTAs de Conversão com Paleta #D5B1A0 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href={OFFICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-[#D5B1A0] hover:bg-[#C49A87] hover:scale-[1.03] text-[#292323] border-2 border-[#D5B1A0] gap-2.5 py-3 sm:py-3.5 px-6 sm:px-8 text-xs sm:text-sm font-bold tracking-normal shadow-[0_6px_24px_rgba(213,177,160,0.35)] group transition-all text-center justify-center flex items-center cursor-pointer w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4 text-[#292323] group-hover:scale-110 transition-transform" />
              <span>Falar com um advogado</span>
            </a>

            <Link
              href="#atuacao"
              className="btn-pill bg-black/45 backdrop-blur-md text-white border border-[#D5B1A0]/50 hover:bg-[#D5B1A0] hover:text-[#292323] hover:border-[#D5B1A0] hover:scale-[1.03] shadow-md gap-2 py-3 sm:py-3.5 px-6 sm:px-7 text-xs sm:text-sm font-semibold tracking-normal group transition-all text-center justify-center flex items-center cursor-pointer w-full sm:w-auto"
            >
              <span className="font-semibold">Conhecer Áreas de Atuação</span>
              <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:text-[#292323] transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Barra de Atributos no Rodapé da Tela Inicial */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="hidden sm:flex items-center justify-between py-2.5 xl:py-3 border-t border-white/20 text-white/90 text-xs font-heading">
          <div className="flex items-center gap-2">
            <span className="bullet-indicator text-[#D5B1A0]" />
            <span className="uppercase tracking-widest text-white/90 font-bold">
              Sede em Curitiba/PR (Sítio Cercado) & Atendimento Online Nacional
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/80">
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#D5B1A0]" />
              Foco Previdenciário
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D5B1A0]" />
              Conformidade CFOAB 205/2021
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}