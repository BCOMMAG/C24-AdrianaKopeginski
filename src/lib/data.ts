export interface ScheduleInfo {
  weekdays: string;
  saturday: string;
  sunday: string;
}

export interface OfficeHours {
  weekdays: string;
  weekends: string;
  plantao: string;
}

export interface OfficeInfo {
  name: string;
  shortName: string;
  lawyer: string;
  lawyerName: string;
  academicTitle: string;
  secondSpecialization: string;
  sinceYear: string;
  slogan: string;
  tagline: string;
  address: string;
  addressShort: string;
  city: string;
  state: string;
  cityState: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappUrl: string;
  email: string;
  instagramUrl: string;
  instagramHandle: string;
  facebookUrl: string;
  linkedinUrl: string;
  mapsDirectionsUrl: string;
  mapsEmbedUrl: string;
  schedule: ScheduleInfo;
  hours: OfficeHours;
}

export interface LawyerProfile {
  name: string;
  role: string;
  academicSpecialization: string;
  secondSpecialization: string;
  sinceYear: string;
  experience: string;
  graduation: string;
  bio: string[];
  personalNotes: string[];
  careerHighlights: string[];
  highlights: string[];
}

export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  highlightText: string;
  shortDesc: string;
  description: string;
  coverageList: string[];
  iconName: string;
  highlights: string[];
}

export interface EducationalArticle {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  oabDisclaimer: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  source: string;
}

export interface WorkStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  category: string;
  items: FaqItem[];
}

export const OFFICE_INFO: OfficeInfo = {
  name: "Adriana Kopeginski | Advogada",
  shortName: "Adriana Kopeginski",
  lawyer: "Dra. Adriana Kopeginski",
  lawyerName: "Adriana Kopeginski",
  academicTitle: "Especialista em Direito Previdenciário",
  secondSpecialization: "Aposentadorias e Benefícios do INSS",
  sinceYear: "Atuação Especializada",
  slogan: "Defesa técnica, humanizada e estratégica para a conquista do seu melhor benefício previdenciário.",
  tagline: "Advogada Especialista em Direito Previdenciário",
  address: "R. Cruzeiro do Sul, 461 - sala 2 - Sítio Cercado, Curitiba - PR, 81900-230",
  addressShort: "Sítio Cercado, Curitiba - PR",
  city: "Curitiba",
  state: "PR",
  cityState: "Curitiba/PR",
  phone: "(41) 99600-7194",
  phoneRaw: "5541996007194",
  whatsappNumber: "(41) 99600-7194",
  whatsappUrl: `https://wa.me/5541996007194?text=${encodeURIComponent(
    "Olá, Dra. Adriana Kopeginski! Gostaria de consultoria jurídica sobre meus direitos previdenciários."
  )}`,
  email: "",
  instagramUrl: "https://www.instagram.com/dra.adriana.kop/",
  instagramHandle: "@dra.adriana.kop",
  facebookUrl: "",
  linkedinUrl: "",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=R.+Cruzeiro+do+Sul,+461+-+sala+2+-+S%C3%ADtio+Cercado,+Curitiba+-+PR,+81900-230",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=R.+Cruzeiro+do+Sul,+461+-+sala+2+-+S%C3%ADtio+Cercado,+Curitiba+-+PR,+81900-230&t=&z=16&ie=UTF8&iwloc=&output=embed",
  schedule: {
    weekdays: "Segunda a Sexta: 08:30 às 18:00",
    saturday: "Atendimento com agendamento prévio",
    sunday: "Fechado",
  },
  hours: {
    weekdays: "08:30 às 18:00",
    weekends: "Sob agendamento",
    plantao: "Atendimento Presencial e Online em todo o Brasil",
  },
};

export const LAWYER_PROFILE: LawyerProfile = {
  name: "Dra. Adriana Kopeginski",
  role: "Advogada Titular & Especialista em Direito Previdenciário",
  academicSpecialization: "Direito Previdenciário e Benefícios do RGPS",
  secondSpecialization: "Planejamento e Cálculos Previdenciários de Alta Precisão",
  sinceYear: "Atuação Especializada",
  experience: "Foco absoluto em causas previdenciárias e na garantia de direitos fundamentais",
  graduation: "Bacharela em Direito com Especialização em Direito Previdenciário",
  bio: [
    "A Dra. Adriana Kopeginski dedica sua prática jurídica à defesa intransigente dos direitos dos segurados da Previdência Social. Com uma advocacia artesanal, estratégica e profundamente acolhedora, transforma a complexidade das normas do INSS em caminhos seguros para a concessão do melhor benefício possível.",
    "Com sede física em Curitiba/PR, no bairro Sítio Cercado, e infraestrutura tecnológica completa para atendimento humanizado em todo o território nacional, seu trabalho investiga minuciosamente o histórico de vida de cada trabalhador, identificando pendências no CNIS, períodos especiais e oportunidades reais de antecipar a aposentadoria ou aumentar a Renda Mensal Inicial.",
    "Mais do que processos burocráticos, a advocacia da Dra. Adriana Kopeginski protege histórias de trabalho, superação e segurança para o futuro das famílias, sempre com transparência ética irrestrita e respeito às normas do CFOAB.",
  ],
  personalNotes: [
    "Atendimento acolhedor com escuta atenta para cada caso concreto.",
    "Análise rigorosa do histórico contributivo antes de qualquer requerimento.",
    "Sede física acolhedora em Curitiba e atendimento digital de excelência.",
  ],
  careerHighlights: [
    "Especialista em Direito Previdenciário com foco em Aposentadorias e Benefícios do INSS",
    "Expertise técnica nas 4 regras de transição da Reforma da Previdência (EC 103/2019)",
    "Atuação combativa na reversão de indeferimentos e 'altas programadas' indevidas",
    "Averbação de tempo rural e atividades especiais com PPP/LTCAT para adiantar benefícios",
  ],
  highlights: [
    "Atendimento Pessoal com a Advogada",
    "Cálculos Previdenciários de Alta Precisão",
    "Atendimento Presencial e Online em Todo o País",
    "Conformidade Ética com o Provimento nº 205/2021 do CFOAB",
  ],
};

export const INSTITUTIONAL_PILLARS = [
  {
    number: "100%",
    label: "Atendimento Humanizado",
    description: "Escuta atenta e contato direto com a advogada em todas as etapas do processo",
  },
  {
    number: "5.0 ★",
    label: "Google Verificado",
    description: "Reconhecimento comprovado pela dedicação, clareza e agilidade nos atendimentos",
  },
  {
    number: "Foco Total",
    label: "Direito Previdenciário",
    description: "Especialização dedicada na conquista do melhor benefício no INSS e na Justiça Federal",
  },
  {
    number: "CFOAB",
    label: "Provimento 205/2021",
    description: "Atuação pautada na ética, rigor técnico, transparência e sigilo profissional absoluto",
  },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "planejamento-aposentadorias",
    title: "Planejamento Previdenciário & Aposentadorias",
    subtitle: "Estudo detalhado do seu CNIS para conquistar o maior valor de benefício no momento exato",
    highlightText: "Evite pedidos prematuros e prejuízos irreversíveis decorrentes da Reforma da Previdência.",
    shortDesc: "Simulação completa das regras de transição, descarte de salários prejudiciais e planejamento financeiro.",
    description:
      "O planejamento previdenciário é uma auditoria técnica de todo o histórico contributivo do segurado. Analisamos detalhadamente cada vínculo na Carteira de Trabalho e no CNIS para identificar a regra de transição mais vantajosa (pedágio 50%, pedágio 100%, pontos ou idade mínima progressiva), simular o descarte de contribuições que rebaixam a média salarial e calcular o retorno do investimento para os meses restantes.",
    coverageList: [
      "Simulação e comparativo das 4 regras de transição pós-Reforma (EC 103/2019)",
      "Aplicação de descarte de salários prejudiciais para elevar a Renda Mensal Inicial",
      "Retificação e acerto de pendências do CNIS (indicadores PEXT, PREC-MENOR-MIN, AEXT-VI)",
      "Cálculo exato de retorno sobre investimento (ROI) e valor ideal de contribuição futura",
      "Planejamento para autônomos, empresários, profissionais liberais e celetistas",
    ],
    iconName: "Calculator",
    highlights: [
      "Maior Valor de Aposentadoria",
      "Correção de Vínculos no CNIS",
      "Simulação Comparativa de Regras",
      "Prevenção de Prejuízos Irreversíveis",
    ],
  },
  {
    id: "beneficios-incapacidade",
    title: "Benefícios por Incapacidade & Doenças Graves",
    subtitle: "Defesa técnica contra altas programadas indevidas e amparo financeiro diante de problemas de saúde",
    highlightText: "Não aceite a negação do INSS quando sua saúde e capacidade de trabalho estiverem comprometidas.",
    shortDesc: "Auxílio-doença, aposentadoria por invalidez, adicional de 25% e reversão de cessações injustas.",
    description:
      "Atuamos com firmeza para reverter indeferimentos e cancelamentos automáticos de benefícios por incapacidade pelo INSS ('alta programada'). Estruturamos a documentação médica, prontuários, exames e laudos com quesitos técnicos especializados para demonstrar a real impossibilidade laborativa do segurado, buscando o restabelecimento do Auxílio-Doença, a conversão em Aposentadoria por Invalidez (com 100% da média se acidentário) e o adicional de 25% para quem precisa de cuidador permanente.",
    coverageList: [
      "Reversão de indeferimento ou cancelamento indevido de Auxílio-Doença (Incapacidade Temporária)",
      "Conversão em Aposentadoria por Invalidez (Incapacidade Permanente) quando não houver reabilitação",
      "Garantia de 100% da média salarial quando a incapacidade decorrer de doença do trabalho ou acidente",
      "Concessão do adicional de 25% (Grande Invalidez) para segurados que necessitam de assistência contínua",
      "Isenção de carência para doenças graves previstas em lei (câncer, cardiopatias, Parkinson)",
    ],
    iconName: "ShieldAlert",
    highlights: [
      "Combate à 'Alta Programada'",
      "Aposentadoria por Invalidez 100%",
      "Adicional de 25% Grande Invalidez",
      "Quesitos Periciais Técnicos",
    ],
  },
  {
    id: "bpc-loas",
    title: "BPC / LOAS para Idosos e Pessoas com Deficiência (PCD)",
    subtitle: "Garantia de 1 salário mínimo mensal mesmo para quem nunca contribuiu para a Previdência Social",
    highlightText: "Direito assistencial vitalício garantido pela Lei Orgânica da Assistência Social (Lei 8.742/93).",
    shortDesc: "Benefício para idosos a partir de 65 anos e pessoas com impedimentos de longo prazo (incluindo Autismo/TEA).",
    description:
      "O Benefício de Prestação Continuada (BPC/LOAS) garante um salário mínimo por mês a idosos a partir de 65 anos e a pessoas com deficiência de qualquer idade com impedimento de longo prazo (mínimo de 2 anos). Auxiliamos na superação judicial da barreira da renda de 1/4 do salário mínimo, comprovando gastos indispensáveis com remédios, fraldas e tratamentos contínuos, com atuação humanizada e especializada em diagnósticos de Autismo (TEA), paralisia cerebral e doenças crônicas.",
    coverageList: [
      "Concessão de BPC/LOAS para idosos a partir de 65 anos em situação de vulnerabilidade",
      "BPC para crianças, jovens e adultos diagnosticados com Transtorno do Espectro Autista (TEA)",
      "Superação judicial da renda per capita através da comprovação de despesas com saúde",
      "Acompanhamento especializado na avaliação social e perícia médica do INSS",
      "Defesa e restabelecimento de benefícios bloqueados ou cancelados em operações de pente-fino",
    ],
    iconName: "Scale",
    highlights: [
      "Não Exige Contribuição ao INSS",
      "Atuação Dedicada para Autismo (TEA)",
      "Dedução Legal de Gastos de Saúde",
      "Defesa contra Bloqueios no CadÚnico",
    ],
  },
  {
    id: "especial-rural-revisoes",
    title: "Aposentadoria Especial, Rural & Revisões de Benefício",
    subtitle: "Reconhecimento de tempos especiais de trabalho e recálculo da Renda Mensal Inicial do benefício",
    highlightText: "Valorize cada período trabalhado em condições insalubres, no campo ou em funções de risco.",
    shortDesc: "PPP e LTCAT, tempo rural na juventude, pensão por morte e ações revisionais de valor concedido.",
    description:
      "Defendemos o reconhecimento integral de atividades expostas a agentes nocivos químicos, físicos e biológicos através da análise técnica de PPP e LTCAT, garantindo a conversão de tempo especial em comum com multiplicador legal para períodos anteriores à Reforma. Realizamos também a averbação de trabalho rural na infância e juventude (sem cobrança de contribuições anteriores a 11/1991), concessão de Pensão por Morte com prova de união estável e ações revisionais da Renda Mensal Inicial (RMI).",
    coverageList: [
      "Aposentadoria Especial e conversão de tempo insalubre/perigoso com laudos PPP e LTCAT",
      "Averbação de tempo de trabalho rural da infância/adolescência para antecipar aposentadoria urbana",
      "Concessão de Pensão por Morte com comprovação de união estável e dependência econômica",
      "Auxílio-Acidente: indenização mensal de 50% cumulativa com o salário após lesões consolidadas",
      "Ações de Revisão da RMI por erros de cálculo, atividades concomitantes e sentenças trabalhistas",
    ],
    iconName: "Briefcase",
    highlights: [
      "Análise Minuciosa de PPP e LTCAT",
      "Tempo Rural sem Custo Pré-1991",
      "Auxílio-Acidente Cumulativo",
      "Revisões de Benefícios com Erro",
    ],
  },
];

export const WORK_STEPS: WorkStep[] = [
  {
    number: "01",
    title: "Diagnóstico Inicial e Escuta Atenta",
    subtitle: "Compreensão profunda da sua história de vida e da situação previdenciária",
    description:
      "O atendimento começa com uma consulta detalhada, presencial em Curitiba ou 100% online, para ouvir seu histórico de trabalho, analisar suas cartas de indeferimento do INSS e definir com clareza o objetivo a ser conquistado.",
    iconName: "FileSearch",
  },
  {
    number: "02",
    title: "Auditoria Documental e Cálculos de Precisão",
    subtitle: "Varredura do CNIS, carteiras profissionais e laudos médicos",
    description:
      "Realizamos a conferência minuciosa de vínculos, recolhimentos, documentos de insalubridade (PPP) e atestados de saúde, calculando com precisão matemática cada regra de transição e o impacto financeiro para a sua renda futura.",
    iconName: "Calculator",
  },
  {
    number: "03",
    title: "Definição da Estratégia Jurídica",
    subtitle: "Escolha da via mais rápida e vantajosa: administrativa ou judicial",
    description:
      "Traçamos o plano de ação personalizado. Elaboramos requerimentos administrativos robustos perante o INSS ou ajuizamos ação direta na Justiça Federal, com formulação de quesitos periciais específicos e suporte integral.",
    iconName: "ShieldCheck",
  },
  {
    number: "04",
    title: "Acompanhamento Combate até a Concessão",
    subtitle: "Transparência total até a emissão da carta de concessão do benefício",
    description:
      "Acompanhamos cada movimentação do processo com rigor, mantendo o cliente sempre informado com linguagem simples e clara, até a conquista do melhor benefício e o recebimento dos valores retroativos devidos.",
    iconName: "CheckCircle",
  },
];

export const EDUCATIONAL_ARTICLES: EducationalArticle[] = [
  {
    id: "regras-transicao-reforma",
    number: "01",
    title: "Regras de Transição da Reforma: Qual a Melhor Escolha para a sua Aposentadoria?",
    category: "Planejamento Previdenciário",
    readTime: "4 min de leitura",
    summary:
      "Entenda como as regras de pedágio 50%, pedágio 100%, pontos e idade progressiva podem alterar em milhares de reais o valor da sua aposentadoria.",
    content: [
      "A Emenda Constitucional nº 103/2019 extinguiu a tradicional aposentadoria por tempo de contribuição, mas estabeleceu regras de transição para quem já contribuía com o INSS antes de 13 de novembro de 2019.",
      "Cada segurado possui características únicas de idade e tempo acumulado. Enquanto a regra do Pedágio de 100% garante benefício integral sem fator previdenciário, a regra do Pedágio de 50% pode antecipar a concessão, mas com incidência de redutor.",
      "O planejamento previdenciário é a ferramenta indispensável que simula cada cenário, indicando com precisão o momento financeiro ideal para o pedido e evitando perdas irreversíveis.",
    ],
    oabDisclaimer:
      "Conteúdo didático e informativo em conformidade com o Provimento nº 205/2021 do CFOAB. Não substitui consulta jurídica individualizada.",
  },
  {
    id: "bpc-loas-sem-contribuicao",
    number: "02",
    title: "BPC/LOAS sem Contribuição: Quem Tem Direito e Como Comprovar os Requisitos?",
    category: "Benefícios Assistenciais",
    readTime: "3 min de leitura",
    summary:
      "Saiba como idosos a partir de 65 anos e pessoas com deficiência podem ter acesso a 1 salário mínimo mensal garantido por lei.",
    content: [
      "O Benefício de Prestação Continuada (BPC/LOAS) não exige que a pessoa tenha feito contribuições para o INSS ao longo da vida, pois possui natureza puramente assistencial.",
      "O benefício é destinado a idosos de 65 anos ou mais e a pessoas com deficiência de qualquer idade que comprovem impedimento de longo prazo que obstrua sua participação plena na sociedade.",
      "Embora o critério legal estipule renda familiar per capita inferior a 1/4 do salário mínimo, a Justiça brasileira autoriza a dedução de gastos essenciais com medicamentos, fraldas geriátricas e tratamentos de saúde.",
    ],
    oabDisclaimer:
      "Conteúdo didático e informativo em conformidade com o Provimento nº 205/2021 do CFOAB. Não substitui consulta jurídica individualizada.",
  },
  {
    id: "auxilio-doenca-negado-inss",
    number: "03",
    title: "Auxílio-Doença Negado ou Cortado pelo INSS: Como Agir Perante a Perícia Médica",
    category: "Benefícios por Incapacidade",
    readTime: "4 min de leitura",
    summary:
      "O que fazer quando o perito do INSS cessa o benefício por 'alta programada' mesmo com a permanência das limitações físicas ou psicológicas.",
    content: [
      "Um dos maiores conflitos vivenciados por trabalhadores é a chamada 'alta programada', quando o INSS estipula uma data futura de encerramento do auxílio-doença sem realizar nova avaliação clínica presencial.",
      "Ao ter o benefício indeferido ou cessado indevidamente, o segurado não deve retornar ao trabalho debilitado sem orientação jurídica. É crucial reunir atestados detalhados com CID, exames de imagem e receituários atualizados.",
      "Na via judicial perante a Justiça Federal, a avaliação é conduzida por perito médico de confiança do juiz e especialista na área da enfermidade, garantindo análise técnica imparcial e humanizada.",
    ],
    oabDisclaimer:
      "Conteúdo didático e informativo em conformidade com o Provimento nº 205/2021 do CFOAB. Não substitui consulta jurídica individualizada.",
  },
  {
    id: "averbacao-tempo-rural-infancia",
    number: "04",
    title: "Averbação de Tempo Rural: Como Antecipar a sua Aposentadoria Urbana em Anos",
    category: "Aposentadoria Rural e Mista",
    readTime: "3 min de leitura",
    summary:
      "O período de trabalho no campo durante a infância e juventude em regime de agricultura familiar pode ser somado à sua aposentadoria urbana.",
    content: [
      "Milhares de trabalhadores que hoje residem nas cidades passaram a infância e o início da vida adulta ajudando seus pais na lavoura em regime de economia familiar.",
      "A legislação previdenciária e a jurisprudência consolidada permitem que todo o tempo trabalhado no campo antes de novembro de 1991 seja reconhecido e averbado sem nenhuma cobrança retroativa de contribuições.",
      "Documentos como certidões de nascimento, escrituras dos pais, notas de produtor rural e certificados escolares da época constituem início de prova material fundamental para antecipar a aposentadoria urbana.",
    ],
    oabDisclaimer:
      "Conteúdo didático e informativo em conformidade com o Provimento nº 205/2021 do CFOAB. Não substitui consulta jurídica individualizada.",
  },
];

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Marcia Reichert",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Profissional extremamente capacitada, atenciosa e dinâmica. Nos acompanhou em todo o processo, com zelo e dedicação. É de uma competência e conhecimento do direito, digno de louvor!! Uma Profissional que se dedica a sua profissão e trata com muito respeito e dignidade seus clientes.",
    source: "Google Verificado",
  },
  {
    id: "rev-2",
    author: "Fernanda Kneubl",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Minha eterna gratidão! Me aconselhou com honestidade e profissionalismo. Que bom que pude contar com você para me ajudar nesse momento! Ótima pessoa e uma advogada extraordinária.",
    source: "Google Verificado",
  },
  {
    id: "rev-3",
    author: "Natiely Duarte",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Quero agradecer pelo seu excelente trabalho. Sua dedicação e competência fez toda a diferença no meu caso. Sou muito grata!",
    source: "Google Verificado",
  },
  {
    id: "rev-4",
    author: "Diego Gomes da Silva",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Muito eficaz, gosto muito do atendimento. Sempre tira todas as dúvidas com clareza e ainda traz soluções extraordinárias. Muito bom mesmo!",
    source: "Google Verificado",
  },
  {
    id: "rev-5",
    author: "Gizeli Albertassi",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Contratei o trabalho da Dra. Adriana e fui muito bem auxiliada. Rápida, atenciosa e super competente. Super indico essa excelente profissional!",
    source: "Google Verificado",
  },
  {
    id: "rev-6",
    author: "Daniel Barbosa",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Uma excelente profissional, dá uma atenção e tanto para os clientes e sempre mantém informado sobre cada andamento. Parabéns!",
    source: "Google Verificado",
  },
  {
    id: "rev-7",
    author: "Danielle Bedin",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente Advogada, muito profissional e ética. SUPER INDICO. Gratidão imensa pelo trabalho!",
    source: "Google Verificado",
  },
  {
    id: "rev-8",
    author: "Juliana Silva",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Atendimento rápido, humanizado... muito atenciosa e prestativa. Excelente profissional!",
    source: "Google Verificado",
  },
  {
    id: "rev-9",
    author: "Marcos Jose",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Uma profissional muito competente, capacitada e com amplo conhecimento na sua área. Super indico, profissional espetacular!",
    source: "Google Verificado",
  },
  {
    id: "rev-10",
    author: "Priscila Beltran Ferreira",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Profissional competente e de muita responsabilidade. Pontual e com profundo conhecimento no que faz. Super indico!",
    source: "Google Verificado",
  },
  {
    id: "rev-11",
    author: "Marco Antonio Banagouro",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Ótima profissional, prestativa e experiente! Atendimento atencioso e totalmente focado em resultados sólidos para o cliente.",
    source: "Google Verificado",
  },
  {
    id: "rev-12",
    author: "Jeniffer Estevan",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente Advogada, minha causa foi concluída com absoluto sucesso e rapidez. Muito grata!",
    source: "Google Verificado",
  },
  {
    id: "rev-13",
    author: "Andrea Rodrigues Melo Guidastre",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Muito atenciosa, assertiva e estratégica. O processo foi favorável graças à enorme expertise técnica demonstrada.",
    source: "Google Verificado",
  },
  {
    id: "rev-14",
    author: "Claudia Taiatela",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente no seu trabalho, de uma competência ímpar e confiança total. Super recomendo a todos!",
    source: "Google Verificado",
  },
  {
    id: "rev-15",
    author: "Duda Pelada",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Fui muito bem atendida, muito explicativa, facilitando todo o entendimento dos direitos. Super indico!",
    source: "Google Verificado",
  },
  {
    id: "rev-16",
    author: "Flavia Ghizo",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente advogada, muito competente, acolhedora e extremamente simpática no atendimento.",
    source: "Google Verificado",
  },
  {
    id: "rev-17",
    author: "Carvalho Barbosa",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Em poucas palavras: muito prestativa, muito profissional e resolveu os problemas com agilidade e presteza.",
    source: "Google Verificado",
  },
  {
    id: "rev-18",
    author: "Diego Patrik",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente profissional e muito atenciosa com seus clientes em todas as fases do processo.",
    source: "Google Verificado",
  },
  {
    id: "rev-19",
    author: "Andressa Guandalini",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente profissional! Recomendo e indico com total segurança para quem precisa de ajuda jurídica.",
    source: "Google Verificado",
  },
  {
    id: "rev-20",
    author: "Rodrigo Marques",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Ótima advogada, repassa as informações de forma muito clara, transparente e objetiva.",
    source: "Google Verificado",
  },
  {
    id: "rev-21",
    author: "Jean Paulo Carvalho",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Melhor advogada, extremamente atenciosa, honesta e dedicada à causa dos seus clientes.",
    source: "Google Verificado",
  },
  {
    id: "rev-22",
    author: "Sabrina Almeida",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente profissional, atenciosa, prestativa e incansavelmente dedicada ao caso.",
    source: "Google Verificado",
  },
  {
    id: "rev-23",
    author: "Taciana Campos",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente advogada, séria, honesta e de altíssima competência técnica!",
    source: "Google Verificado",
  },
  {
    id: "rev-24",
    author: "Moura Moura",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente profissional, atendimento ótimo e acompanhamento de verdade.",
    source: "Google Verificado",
  },
  {
    id: "rev-25",
    author: "Atalaia Play",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Melhor advogada que pude conhecer. Competência e atenção em primeiro lugar.",
    source: "Google Verificado",
  },
  {
    id: "rev-26",
    author: "Rosana Frares",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente profissional, muito competente e comprometida com a justiça.",
    source: "Google Verificado",
  },
  {
    id: "rev-27",
    author: "André De Oliveira",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente, uma profissional incrível e muito atenciosa nos detalhes!",
    source: "Google Verificado",
  },
  {
    id: "rev-28",
    author: "Vagner Pedroso",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Ótima profissional. Escritório de alto padrão em atendimento e dedicação ao cliente.",
    source: "Google Verificado",
  },
  {
    id: "rev-29",
    author: "Claudia Cavalcanti",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Profissional atenciosa, facilita enormemente a comunicação com o cliente e explica tudo com clareza.",
    source: "Google Verificado",
  },
];

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "planejamento",
    label: "Planejamento & Aposentadorias",
    category: "Aposentadorias e Planejamento",
    items: [
      {
        id: "faq-plan-1",
        question: "Por que vale a pena fazer um Planejamento Previdenciário antes de pedir a aposentadoria?",
        answer:
          "O planejamento previdenciário analisa minuciosamente seu histórico no CNIS e simula todas as regras de transição da Reforma. Muitas vezes, esperar apenas alguns meses ou escolher a regra correta pode representar uma diferença de centenas ou milhares de reais a mais em cada parcela mensal por toda a vida, além de evitar perdas causadas pelo descarte incorreto de salários.",
      },
      {
        id: "faq-plan-2",
        question: "O que são pendências como PEXT e PREC-MENOR-MIN no extrato do INSS (CNIS)?",
        answer:
          "São indicadores de inconsistência cadastral. O PEXT indica vínculos extemporâneos sem comprovação suficiente, e o PREC-MENOR-MIN sinaliza contribuições abaixo do salário mínimo que, após a Reforma de 2019, são totalmente desconsideradas se não forem agrupadas ou complementadas. Nossa advocacia realiza a regularização dessas pendências para que nenhum dia de trabalho seja perdido.",
      },
      {
        id: "faq-plan-3",
        question: "Como funciona a regra do Pedágio de 100% da Reforma da Previdência?",
        answer:
          "A regra do Pedágio de 100% exige idade mínima (57 anos para mulheres e 60 anos para homens) e o cumprimento de um tempo adicional de contribuição equivalente ao dobro do que faltava para se aposentar em 13/11/2019. Sua grande vantagem é garantir o valor integral da média salarial (100%), sem aplicação de redutores.",
      },
    ],
  },
  {
    id: "incapacidade",
    label: "Benefícios por Incapacidade",
    category: "Benefícios por Incapacidade",
    items: [
      {
        id: "faq-incap-1",
        question: "Tive meu Auxílio-Doença cortado na 'alta programada'. O que devo fazer?",
        answer:
          "A 'alta programada' do INSS não é definitiva. Se você ainda apresenta limitações físicas ou psicológicas que impedem o retorno ao trabalho, é indispensável reunir laudos médicos recentes e estruturados com CID e buscar orientação jurídica especializada para ingressar com pedido de restabelecimento administrativo ou ação na Justiça Federal com perícia médica imparcial.",
      },
      {
        id: "faq-incap-2",
        question: "Qual a diferença entre Auxílio-Doença comum (B31) e acidentário (B91)?",
        answer:
          "O auxílio acidentário (B91) decorre de acidente de trabalho, de trajeto ou doença profissional. Diferente do benefício comum (B31), o acidentário não exige carência de 12 meses, obriga a empresa a continuar depositando o FGTS durante o afastamento e garante estabilidade provisória no emprego por 12 meses após a alta médica definitiva.",
      },
      {
        id: "faq-incap-3",
        question: "Quem tem direito ao adicional de 25% na Aposentadoria por Invalidez?",
        answer:
          "O adicional de 25% (chamado de adicional da Grande Invalidez) é concedido ao aposentado por incapacidade permanente que necessite da assistência contínua de outra pessoa para realizar atos básicos da vida diária, como higiene pessoal, alimentação e locomoção. Esse acréscimo é pago inclusive se o valor final ultrapassar o teto previdenciário do INSS.",
      },
    ],
  },
  {
    id: "bpc-loas",
    label: "BPC / LOAS e Assistência",
    category: "BPC / LOAS e Assistência",
    items: [
      {
        id: "faq-bpc-1",
        question: "Nunca paguei o INSS. Posso ter direito ao benefício BPC/LOAS?",
        answer:
          "Sim! O BPC (Benefício de Prestação Continuada) é um benefício assistencial previsto na Lei 8.742/93 e não exige nenhuma contribuição ao INSS. Ele é pago no valor de 1 salário mínimo mensal a pessoas com 65 anos ou mais e a pessoas com deficiência de qualquer idade que vivam em situação de vulnerabilidade socioeconômica.",
      },
      {
        id: "faq-bpc-2",
        question: "Crianças com Autismo (TEA) têm direito ao BPC/LOAS?",
        answer:
          "Sim. O Transtorno do Espectro Autista (TEA) é considerado deficiência para todos os efeitos legais. Comprovando-se os impedimentos de longo prazo e a hipossuficiência econômica da família (comprovando gastos contínuos com terapias, fonoaudiologia e remédios), o benefício é concedido administrativamente ou na via judicial.",
      },
      {
        id: "faq-bpc-3",
        question: "A renda da minha família passa de 1/4 do salário mínimo. Ainda assim posso conseguir o BPC?",
        answer:
          "Sim. Embora o INSS aplique rigidamente o teto de 1/4 do salário mínimo por pessoa da casa, a Justiça brasileira autoriza a dedução de todas as despesas essenciais com saúde, tratamentos, fraldas e medicamentos contínuos que a família custeia, demonstrando a real condição de vulnerabilidade para a concessão do benefício.",
      },
    ],
  },
  {
    id: "especial-rural",
    label: "Especial, Rural & Revisões",
    category: "Aposentadoria Especial, Rural e Revisões",
    items: [
      {
        id: "faq-rural-1",
        question: "Como o trabalho na lavoura na infância ajuda na aposentadoria urbana?",
        answer:
          "O trabalho exercido no campo em regime de agricultura familiar com os pais antes de novembro de 1991 pode ser averbado no INSS sem necessidade de indenização retroativa. Esses anos na lavoura somam-se ao seu tempo urbano atual, permitindo alcançar as regras de transição muito mais cedo e aumentar significativamente o valor da aposentadoria.",
      },
      {
        id: "faq-rural-2",
        question: "Como comprovar a exposição a agentes insalubres para a Aposentadoria Especial?",
        answer:
          "A comprovação é feita através do Perfil Profissiográfico Previdenciário (PPP), emitido pela empresa com base no Laudo Técnico das Condições Ambientais do Trabalho (LTCAT). Analisamos tecnicamente se os limites de ruído, agentes químicos ou biológicos foram superados para garantir o enquadramento do período como especial.",
      },
      {
        id: "faq-rural-3",
        question: "O que é o Auxílio-Acidente e quem pode receber cumulativamente com o salário?",
        answer:
          "O Auxílio-Acidente é uma indenização mensal paga pelo INSS ao trabalhador que sofreu um acidente de qualquer natureza ou adquiriu doença do trabalho e ficou com sequela definitiva que reduza sua capacidade laboral. O valor corresponde a 50% do salário de benefício e pode ser recebido mês a mês junto com o salário normal até a véspera da aposentadoria.",
      },
    ],
  },
];

export const REVIEWS = GOOGLE_REVIEWS;
export const FAQ_DATA = FAQ_CATEGORIES;
export const EDUCATIONAL_TOPICS = EDUCATIONAL_ARTICLES;
