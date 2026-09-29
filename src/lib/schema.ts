import { OFFICE_INFO, LAWYER_PROFILE } from "./data";

export function getLegalServiceSchema() {
  const siteUrl = "https://adrianakopeginski.pages.dev";

  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteUrl}/#legalservice`,
    name: OFFICE_INFO.name,
    alternateName: OFFICE_INFO.shortName,
    description:
      "Advocacia especializada em Direito Previdenciário sob liderança da Dra. Adriana Kopeginski. Planejamento previdenciário, concessão e revisão de benefícios do INSS, BPC/LOAS, auxílio-doença e aposentadorias. Atendimento presencial em Curitiba/PR (Sítio Cercado) e online para todo o Brasil.",
    url: siteUrl,
    telephone: `+${OFFICE_INFO.phoneRaw}`,
    priceRange: "$$$",
    image: `${siteUrl}/og-image_optimized_300.jpg`,
    logo: `${siteUrl}/logo_sem_fundo_usarnomodoclaro.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICE_INFO.address,
      addressLocality: OFFICE_INFO.city,
      addressRegion: OFFICE_INFO.state,
      postalCode: "81900-230",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.5358763,
      longitude: -49.2783853,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:00",
      },
    ],
    sameAs: [OFFICE_INFO.instagramUrl],
    employee: [
      {
        "@type": "Person",
        name: LAWYER_PROFILE.name,
        jobTitle: LAWYER_PROFILE.role,
        description: `${LAWYER_PROFILE.academicSpecialization}, ${LAWYER_PROFILE.secondSpecialization}.`,
      },
    ],
  };
}