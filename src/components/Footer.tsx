"use client";

import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { ShieldCheck, MessageSquare, ArrowUp } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <footer className="w-full bg-[#431617] text-[#F2E7DF] border-t border-[#FFD700]/25 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Topo do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F2E7DF]/15">
          
          {/* Coluna 1: Logo e Apresentação (5 colunas) */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="block focus:outline-none group cursor-pointer"
              aria-label="Voltar ao início da página"
            >
              <div className="relative h-20 sm:h-24 w-72 sm:w-80 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo_sem_fundo_usarnomodoescuro.png"
                  alt={OFFICE_INFO.name}
                  fill
                  className="object-contain object-left"
                  sizes="320px"
                />
              </div>
            </Link>
            
            <p className="font-body text-xs sm:text-sm text-[#F2E7DF]/85 max-w-sm leading-relaxed">
              Atuação jurídica especializada em Direito Previdenciário. Atendimento presencial em nossa sede física em Curitiba/PR (Sítio Cercado) e assessoria jurídica digital estratégica para clientes em todo o Brasil.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FFD700]/30 bg-[#292323] text-xs font-heading text-[#FFD700]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FFD700]" />
              <span>{OFFICE_INFO.lawyer} • Especialista em Direito Previdenciário</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#FFD700] font-bold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-heading text-[#F2E7DF]/90">
              <li>
                <Link href="#inicio" className="hover:text-[#FFD700] transition-colors">Início</Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-[#FFD700] transition-colors">A Advogada</Link>
              </li>
              <li>
                <Link href="#pilares" className="hover:text-[#FFD700] transition-colors">Pilares Institucionais</Link>
              </li>
              <li>
                <Link href="#atuacao" className="hover:text-[#FFD700] transition-colors">Áreas de Atuação</Link>
              </li>
              <li>
                <Link href="#como-atuamos" className="hover:text-[#FFD700] transition-colors">Como Atuamos</Link>
              </li>
              <li>
                <Link href="#avaliacoes" className="hover:text-[#FFD700] transition-colors">Avaliações no Google</Link>
              </li>
              <li>
                <Link href="#educativo" className="hover:text-[#FFD700] transition-colors">Conteúdo Informativo</Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#FFD700] transition-colors">Dúvidas Frequentes</Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-[#FFD700] transition-colors">Contato & Atendimento</Link>
              </li>
              <li>
                <Link href="/links" className="text-[#FFD700] hover:text-white hover:underline font-semibold">Central de Links (/links)</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos e Redes (4 colunas) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#FFD700] font-bold">
              Canais Oficiais
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm font-body text-[#F2E7DF]/85">
              <p><strong className="text-white font-heading">Sede:</strong> {OFFICE_INFO.address}</p>
              <p><strong className="text-white font-heading">WhatsApp:</strong> {OFFICE_INFO.phone}</p>
              <p><strong className="text-white font-heading">Segunda a Sexta:</strong> {OFFICE_INFO.schedule.weekdays}</p>
              <p><strong className="text-white font-heading">Sábado:</strong> {OFFICE_INFO.schedule.saturday}</p>
              <p><strong className="text-white font-heading">Domingo:</strong> {OFFICE_INFO.schedule.sunday}</p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={OFFICE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram oficial de ${OFFICE_INFO.name}`}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#FFD700] hover:text-[#292323] border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp oficial de ${OFFICE_INFO.name}`}
                className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé Ético e Direitos Autorais */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-[#F2E7DF]/70">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} {OFFICE_INFO.name}. Todos os direitos reservados.</p>
            <span className="hidden sm:inline opacity-40">•</span>
            <p>Conformidade com o Provimento nº 205/2021 e Código de Ética e Disciplina do CFOAB.</p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-heading font-bold text-[#FFD700] hover:text-white transition-colors cursor-pointer"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}