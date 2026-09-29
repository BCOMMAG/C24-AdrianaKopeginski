"use client";

interface GeometricLinesProps {
  variant:
    | "pillars"
    | "about"
    | "areas"
    | "reviews"
    | "methodology"
    | "educational"
    | "faq"
    | "contact";
  className?: string;
}

export function GeometricLines({ variant, className = "" }: GeometricLinesProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden z-0 select-none transition-colors duration-500 ${className}`}
    >
      {/* 1. PILARES: Linhas verticais e nós de precisão */}
      {variant === "pillars" && (
        <div className="absolute inset-0 text-[#431617]/[0.06] dark:text-[#D5B1A0]/[0.07] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_95%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="pillarsVerticalPattern"
                width="60"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <line x1="0" y1="0" x2="0" y2="80" stroke="currentColor" strokeWidth="1" />
                <line x1="12" y1="0" x2="12" y2="80" stroke="currentColor" strokeWidth="0.8" />
                <line x1="24" y1="0" x2="24" y2="80" stroke="currentColor" strokeWidth="1" />
                <circle cx="12" cy="40" r="1.5" className="fill-[#431617]/[0.18] dark:fill-[#D5B1A0]/[0.20]" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pillarsVerticalPattern)" />
          </svg>
        </div>
      )}

      {/* 2. SOBRE A ADVOGADA: Malha vertical com fios de luz e diagonais estruturais */}
      {variant === "about" && (
        <div className="absolute inset-0 text-[#431617]/[0.06] dark:text-[#D5B1A0]/[0.07] [mask-image:radial-gradient(circle_at_65%_45%,black_45%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <line x1="8%" y1="0" x2="8%" y2="100%" stroke="currentColor" strokeWidth="1" />
            <line x1="10%" y1="0" x2="10%" y2="100%" stroke="currentColor" strokeWidth="0.8" />
            <line x1="90%" y1="0" x2="90%" y2="100%" stroke="currentColor" strokeWidth="1" />
            <line x1="92%" y1="0" x2="92%" y2="100%" stroke="currentColor" strokeWidth="0.8" />
            
            <line x1="8%" y1="15%" x2="25%" y2="55%" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
            <line x1="42%" y1="15%" x2="25%" y2="55%" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          </svg>
        </div>
      )}

      {/* 3. ÁREAS DE ATUAÇÃO: Grid vertical fino com nós de precisão */}
      {variant === "areas" && (
        <div className="absolute inset-0 text-[#431617]/[0.06] dark:text-[#D5B1A0]/[0.07] [mask-image:radial-gradient(ellipse_at_top,black_50%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="areasVerticalGrid"
                width="120"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <line x1="0" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" />
                <line x1="16" y1="0" x2="16" y2="100" stroke="currentColor" strokeWidth="0.75" />
                <line x1="32" y1="0" x2="32" y2="100" stroke="currentColor" strokeWidth="1" />
                <line x1="0" y1="50" x2="120" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                <circle cx="16" cy="50" r="1.5" className="fill-[#431617]/[0.18] dark:fill-[#D5B1A0]/[0.20]" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#areasVerticalGrid)" />
          </svg>
        </div>
      )}

      {/* 4. AVALIAÇÕES: Linhas verticais */}
      {variant === "reviews" && (
        <div className="absolute inset-0 text-[#431617]/[0.06] dark:text-[#D5B1A0]/[0.07] [mask-image:radial-gradient(ellipse_at_bottom,black_45%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <line x1="5%" y1="0" x2="5%" y2="100%" stroke="currentColor" strokeWidth="1" />
            <line x1="7%" y1="0" x2="7%" y2="100%" stroke="currentColor" strokeWidth="0.8" />
            <line x1="93%" y1="0" x2="93%" y2="100%" stroke="currentColor" strokeWidth="1" />
            <line x1="95%" y1="0" x2="95%" y2="100%" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </div>
      )}

      {/* 5. METODOLOGIA: Linha contínua conectora */}
      {variant === "methodology" && (
        <div className="absolute inset-0 text-[#431617]/[0.06] dark:text-[#D5B1A0]/[0.07] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_92%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="stepsPattern"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <line x1="0" y1="0" x2="0" y2="80" stroke="currentColor" strokeWidth="1" />
                <line x1="14" y1="0" x2="14" y2="80" stroke="currentColor" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stepsPattern)" />
          </svg>
        </div>
      )}

      {/* 6. CONTEÚDO EDUCATIVO: Padrão linear editorial */}
      {variant === "educational" && (
        <div className="absolute inset-0 text-[#431617]/[0.06] dark:text-[#D5B1A0]/[0.07] [mask-image:radial-gradient(circle_at_30%_50%,black_45%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <line x1="12%" y1="0" x2="12%" y2="100%" stroke="currentColor" strokeWidth="1" />
            <line x1="14%" y1="0" x2="14%" y2="100%" stroke="currentColor" strokeWidth="0.8" />
            <line x1="86%" y1="0" x2="86%" y2="100%" stroke="currentColor" strokeWidth="1" />
            <line x1="88%" y1="0" x2="88%" y2="100%" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </div>
      )}

      {/* 7. FAQ: Linhas sutis com nós de precisão */}
      {variant === "faq" && (
        <div className="absolute inset-0 text-[#431617]/[0.06] dark:text-[#D5B1A0]/[0.07] [mask-image:radial-gradient(circle_at_50%_40%,black_50%,transparent_92%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="faqVerticalPattern"
                width="70"
                height="70"
                patternUnits="userSpaceOnUse"
              >
                <line x1="0" y1="0" x2="0" y2="70" stroke="currentColor" strokeWidth="1" />
                <line x1="12" y1="0" x2="12" y2="70" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="6" cy="35" r="1.5" className="fill-[#431617]/[0.18] dark:fill-[#D5B1A0]/[0.20]" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#faqVerticalPattern)" />
          </svg>
        </div>
      )}

      {/* 8. CONTATO: Linhas verticais */}
      {variant === "contact" && (
        <div className="absolute inset-0 text-[#431617]/[0.06] dark:text-[#D5B1A0]/[0.07] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <line x1="6%" y1="0" x2="6%" y2="100%" stroke="currentColor" strokeWidth="1" />
            <line x1="8%" y1="0" x2="8%" y2="100%" stroke="currentColor" strokeWidth="0.8" />
            <line x1="92%" y1="0" x2="92%" y2="100%" stroke="currentColor" strokeWidth="1" />
            <line x1="94%" y1="0" x2="94%" y2="100%" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </div>
      )}
    </div>
  );
}
