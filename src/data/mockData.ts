import { Project, ServiceItem, Testimonial, WorkMedia } from '../types';

export const COMPANY_INFO = {
  legalName: 'VANDERLEI KURZ (VANDE CONSTRUÇÕES)',
  tradeName: 'Vande Construções',
  foundedDate: '08 de dezembro de 2015',
  founder: 'Vanderlei Kurz',
  phone: '(47) 3642-5620',
  mobilePhone: '(47) 99726-9774',
  whatsappUrl: 'https://wa.me/5547997269774?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Vande%20Constru%C3%A7%C3%B5es%20e%20gostaria%20de%20um%20or%C3%A7amento.',
  email: 'vandeconstrucoes2016@gmail.com',
  address: 'Rua Cristiano Buch, 545, Bairro Bom Jesus',
  cep: '83880-000',
  cityState: 'Rio Negro - PR',
  mission: 'Realizar empreendimentos com excelência sob os preceitos da ética, e responsabilidade aliados ao bem estar das pessoas.',
  vision: 'Ser a melhor empresa para se trabalhar na construção civil, através do incentivo aos colaboradores para que suas entregas de obras (públicas ou privadas) sejam amparadas na qualidade total e melhoria contínua.',
  objective: 'Melhorar continuamente sua colocação no mercado da construção civil, através da expansão da sua equipe e ser uma construtora de referência em excelência.',
  summary: 'Fundada em 08 de dezembro de 2015, a Vande Construções atende clientes públicos e privados com rigor técnico, equipe treinada e motivada em um sistema focado na qualidade total.',
  areasOfOperation: [
    'Edificações Residenciais, Comerciais e Industriais',
    'Contenção de Encostas & Obras de Terraplenagem',
    'Manutenções de Redes de Distribuição de Energia Elétrica',
    'Instalações Hidráulicas, Sanitárias e de Gás',
    'Comércio Varejista de Materiais de Construção em Geral',
    'Auditoria, Gerenciamento e Manutenção de Obras'
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'sobrado-mafra-sc',
    title: 'Sobrado Residencial Mafra / SC',
    subtitle: 'Sobrado de Alto Padrão com Acabamento Impecável e Engenharia de Precisão',
    category: 'residencial',
    area: '420 m²',
    location: 'Mafra / SC',
    year: '2024',
    description: 'Execução completa de sobrado residencial em Mafra/SC pela Vande Construções. Estrutura em alvenaria estrutural reforçada, com finos acabamentos, integração de ambientes e projeto luminotécnico funcional.',
    imageUrl: 'https://lh3.googleusercontent.com/d/10PonwKPwY2XgNej8fkYn_6ipehcEAKB1',
    secondaryImages: [
      'https://lh3.googleusercontent.com/d/18GFApJ-k80VtNnz6xVzVtH0gO6e3XKd0',
      'https://lh3.googleusercontent.com/d/1Bqv8zGJ_20lvgC6rbJ3CqMN5hip45AxS'
    ],
    specs: {
      structure: 'Alvenaria de precisão, lajes treliçadas e cobertura isolada',
      timeline: 'Prazo cumprido rigorosamente sem aditivos',
      highlight: 'Design moderno com garagens amplas e área gourmet integrada'
    },
    featured: true
  },
  {
    id: 'casa-alvenaria-seminario',
    title: 'Casa de Alvenaria - Bairro Seminário',
    subtitle: 'Residência Unifamiliar de Alto Padrão em Rio Negro / PR',
    category: 'residencial',
    area: '350 m²',
    location: 'Bairro Seminário, Rio Negro / PR',
    year: '2024',
    description: 'Construção residencial completa realizada no Bairro Seminário em Rio Negro/PR. Gestão Turnkey da fundação até a pintura final, com padrões rigorosos de impermeabilização e instalações hidráulicas e elétricas.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1CZrVvUCIH_gx-lKeGK3C4QMZsN1B2oFQ',
    secondaryImages: [
      'https://lh3.googleusercontent.com/d/1KSWy0aAzmCri_tjY01DiGTk2EKW5aeKR'
    ],
    specs: {
      structure: 'Fundação profunda, vigamento baldrame impermeabilizado e alvenaria premium',
      timeline: '8 meses de execução técnica',
      highlight: 'Sistemas de aproveitamento de água e iluminação em LED'
    },
    featured: true
  },
  {
    id: 'condominio-jardim-america',
    title: 'Condomínio Jardim América',
    subtitle: 'Empreendimento Residencial em Mafra / SC',
    category: 'edificios',
    area: '2.800 m²',
    location: 'Jardim América, Mafra / SC',
    year: '2023',
    description: 'Obra de condomínio residencial no bairro Jardim América em Mafra/SC. Projeto de infraestrutura civil, contencioso de encostas, áreas de circulação comum e edificações com padrão Vande de excelência.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1nvnEanV_FPLgjTsJdWky4-vg-e-ZLPDq',
    secondaryImages: [
      'https://lh3.googleusercontent.com/d/1sSpNtotDQXb22743JJaZ59vbWNmT9eXf'
    ],
    specs: {
      structure: 'Estrutura mista de concreto armado e drenagem de águas pluviais',
      timeline: '14 meses de obra',
      highlight: 'Pavimentação de acessos internos e contenção de encostas tratada'
    },
    featured: true
  },
  {
    id: 'predio-irmaos-rodrigues',
    title: 'Prédio Comercial Irmãos Rodrigues',
    subtitle: 'Edificação Comercial Multi-pavimentos em Mafra / SC',
    category: 'corporativo',
    area: '1.450 m²',
    location: 'Centro, Mafra / SC',
    year: '2023',
    description: 'Construção do Prédio Irmãos Rodrigues em Mafra/SC. Edifício comercial planejado para salas e lojas, com foco em acessibilidade, resistência estrutural e instalações preventivas contra incêndio.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1tIQy8xAq1fdyLM-LdXHtuI-0cXn4PU7w',
    secondaryImages: [
      'https://lh3.googleusercontent.com/d/1tiz9Gbdr4kafxhkOj9Aps6EQc3ujV3PI'
    ],
    specs: {
      structure: 'Estrutura pré-moldada e lajes protendidas para amplos vãos livres',
      timeline: '12 meses',
      highlight: 'Fachada corporativa moderna e acessibilidade universal'
    },
    featured: true
  },
  {
    id: 'academia-de-ginastica-mafra',
    title: 'Academia de Ginástica Mafra',
    subtitle: 'Espaço Esportivo & Comercial Especializado em Mafra / SC',
    category: 'interiores',
    area: '680 m²',
    location: 'Mafra / SC',
    year: '2022',
    description: 'Execução e adequação de espaço corporativo esportivo para academia de ginástica em Mafra/SC. Piso de alto impacto, isolamento acústico, ventilação cruzada e instalações sanitárias reforçadas.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1yHlXX9PQcf3UeQ_THxKpDEMcLi3b5Rf7',
    secondaryImages: [
      'https://lh3.googleusercontent.com/d/10PonwKPwY2XgNej8fkYn_6ipehcEAKB1'
    ],
    specs: {
      structure: 'Piso industrial reforçado com revestimento acústico especial',
      timeline: '4 meses de intervenção ágil',
      highlight: 'Climatização centralizada e instalações hidráulicas de alta demanda'
    },
    featured: false
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'edificacoes-geral',
    title: 'Edificações Residenciais, Comerciais e Industriais',
    shortDesc: 'Construção completa do zero ao acabamento para obras públicas e privadas.',
    fullDesc: 'A Vande Construções atua na execução completa de edificações com gestão rigorosa de prazos e custos, atendendo pessoas físicas, empresas e órgãos públicos com máxima eficiência.',
    iconName: 'ShieldCheck',
    deliverables: [
      'Construção Residencial, Comercial e Industrial',
      'Gerenciamento Geral Turnkey (Chave na Mão)',
      'Equipe própria qualificada e supervisão direta de Vanderlei Kurz',
      'Atendimento aos padrões de Qualidade Total'
    ],
    span: 'md:col-span-2'
  },
  {
    id: 'mantençao-redes-energia',
    title: 'Manutenção de Redes Elétricas & Hidráulicas',
    shortDesc: 'Serviços especializados em redes elétricas, instalações sanitárias e de gás.',
    fullDesc: 'Instalação e manutenção preventiva/corretiva de redes de distribuição de energia elétrica, sistemas hidráulicos, redes sanitárias e tubulações de gás com ART e normas de segurança.',
    iconName: 'Layers',
    deliverables: [
      'Manutenção de redes de distribuição de energia elétrica',
      'Instalações hidráulicas, sanitárias e prediais de gás',
      'Laudos técnicos e auditorias de infraestrutura',
      'Execução segundo normas da NBR/ABNT'
    ],
    span: 'md:col-span-1'
  },
  {
    id: 'contencao-encostas',
    title: 'Contenção de Encostas & Obras Especiais',
    shortDesc: 'Engenharia de solos, contenção e infraestrutura para terrenos desafiadores.',
    fullDesc: 'Soluções seguras para contenção de encostas, muros de arrimo, drenagem de águas pluviais e estabilização de taludes em Rio Negro, PR, Mafra, SC e região.',
    iconName: 'PenTool',
    deliverables: [
      'Projetos e execução de contenção de encostas',
      'Muros de arrimo e fundações profundas',
      'Terraplenagem e drenagem de solo',
      'Segurança geotécnica comprovada'
    ],
    span: 'md:col-span-1'
  },
  {
    id: 'comercio-materiais-gerenciamento',
    title: 'Gerenciamento, Auditoria & Comércio Varejista',
    shortDesc: 'Auditoria de obras, gerenciamento técnico e fornecimento de materiais de construção.',
    fullDesc: 'A Vande Construções oferece consultoria, auditoria de qualidade, gerenciamento de obras e conta também com comércio varejista de materiais de construção em geral para dar suporte completo aos projetos.',
    iconName: 'Cpu',
    deliverables: [
      'Gerenciamento e Auditoria de Obras',
      'Consultoria para aprovação de projetos',
      'Comércio varejista de materiais de construção em geral',
      'Orçamentos analíticos sem aditivos imprevistos'
    ],
    span: 'md:col-span-2'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Construtora com vasta experiência, juntando o custo e qualidade ideal para o cliente. Atendimento super ágil e transparência total do início ao fim da obra.',
    author: 'Avaliação no Google',
    role: 'Cliente Verificado ⭐⭐⭐⭐⭐',
    location: 'Rio Negro, PR',
    projectRef: 'Obra Casa de Alvenaria - Bairro Seminário'
  },
  {
    id: '2',
    quote: 'Excelente construtora em Rio Negro e Mafra. Equipe técnica altamente qualificada, cumprimento impecável dos prazos e finos acabamentos.',
    author: 'Avaliação no Google',
    role: 'Cliente Verificado ⭐⭐⭐⭐⭐',
    location: 'Mafra, SC / Rio Negro, PR',
    projectRef: 'Sobrado Residencial Mafra'
  },
  {
    id: '3',
    quote: 'Profissionais extremamente dedicados e honestos sob a liderança do Vanderlei Kurz. O orçamento entregue foi cumprido à risca. Recomendo a Vande Construções de olhos fechados!',
    author: 'Avaliação no Google',
    role: 'Cliente Verificado ⭐⭐⭐⭐⭐',
    location: 'Rio Negro, PR',
    projectRef: 'Execução de Obra Comercial'
  }
];

export const STUDIO_STATS = [
  { label: 'Anos no Mercado (Desde 2015)', value: '10+', suffix: 'Anos' },
  { label: 'Compromisso com Prazos e Qualidade', value: '100%', suffix: 'Garantido' },
  { label: 'Obras Realizadas (Públicas e Privadas)', value: '150+', suffix: 'Entregues' },
  { label: 'Avaliação do Cliente no Google', value: '5.0', suffix: 'Estrelas' }
];

export const WORKS_MEDIA: WorkMedia[] = [
  {
    id: 'media-1',
    driveId: '10PonwKPwY2XgNej8fkYn_6ipehcEAKB1',
    title: 'Obra Vande Construções',
    category: 'Geral',
    location: 'Rio Negro / PR • Mafra / SC',
    thumbnailUrl: 'https://lh3.googleusercontent.com/d/10PonwKPwY2XgNej8fkYn_6ipehcEAKB1',
    embedUrl: 'https://drive.google.com/file/d/10PonwKPwY2XgNej8fkYn_6ipehcEAKB1/preview',
    originalUrl: 'https://drive.google.com/file/d/10PonwKPwY2XgNej8fkYn_6ipehcEAKB1/view?usp=sharing'
  },
  {
    id: 'media-2',
    driveId: '18GFApJ-k80VtNnz6xVzVtH0gO6e3XKd0',
    title: 'Obra Vande Construções',
    category: 'Geral',
    location: 'Rio Negro / PR • Mafra / SC',
    thumbnailUrl: 'https://lh3.googleusercontent.com/d/18GFApJ-k80VtNnz6xVzVtH0gO6e3XKd0',
    embedUrl: 'https://drive.google.com/file/d/18GFApJ-k80VtNnz6xVzVtH0gO6e3XKd0/preview',
    originalUrl: 'https://drive.google.com/file/d/18GFApJ-k80VtNnz6xVzVtH0gO6e3XKd0/view?usp=sharing'
  },
  {
    id: 'media-3',
    driveId: '1Bqv8zGJ_20lvgC6rbJ3CqMN5hip45AxS',
    title: 'Obra Vande Construções',
    category: 'Geral',
    location: 'Rio Negro / PR • Mafra / SC',
    thumbnailUrl: 'https://lh3.googleusercontent.com/d/1Bqv8zGJ_20lvgC6rbJ3CqMN5hip45AxS',
    embedUrl: 'https://drive.google.com/file/d/1Bqv8zGJ_20lvgC6rbJ3CqMN5hip45AxS/preview',
    originalUrl: 'https://drive.google.com/file/d/1Bqv8zGJ_20lvgC6rbJ3CqMN5hip45AxS/view?usp=sharing'
  },
  {
    id: 'media-4',
    driveId: '1CZrVvUCIH_gx-lKeGK3C4QMZsN1B2oFQ',
    title: 'Obra Vande Construções',
    category: 'Geral',
    location: 'Rio Negro / PR • Mafra / SC',
    thumbnailUrl: 'https://lh3.googleusercontent.com/d/1CZrVvUCIH_gx-lKeGK3C4QMZsN1B2oFQ',
    embedUrl: 'https://drive.google.com/file/d/1CZrVvUCIH_gx-lKeGK3C4QMZsN1B2oFQ/preview',
    originalUrl: 'https://drive.google.com/file/d/1CZrVvUCIH_gx-lKeGK3C4QMZsN1B2oFQ/view?usp=sharing'
  },
  {
    id: 'media-5',
    driveId: '1KSWy0aAzmCri_tjY01DiGTk2EKW5aeKR',
    title: 'Obra Vande Construções',
    category: 'Geral',
    location: 'Rio Negro / PR • Mafra / SC',
    thumbnailUrl: 'https://lh3.googleusercontent.com/d/1KSWy0aAzmCri_tjY01DiGTk2EKW5aeKR',
    embedUrl: 'https://drive.google.com/file/d/1KSWy0aAzmCri_tjY01DiGTk2EKW5aeKR/preview',
    originalUrl: 'https://drive.google.com/file/d/1KSWy0aAzmCri_tjY01DiGTk2EKW5aeKR/view?usp=sharing'
  },
  {
    id: 'media-6',
    driveId: '1nvnEanV_FPLgjTsJdWky4-vg-e-ZLPDq',
    title: 'Obra Vande Construções',
    category: 'Geral',
    location: 'Rio Negro / PR • Mafra / SC',
    thumbnailUrl: 'https://lh3.googleusercontent.com/d/1nvnEanV_FPLgjTsJdWky4-vg-e-ZLPDq',
    embedUrl: 'https://drive.google.com/file/d/1nvnEanV_FPLgjTsJdWky4-vg-e-ZLPDq/preview',
    originalUrl: 'https://drive.google.com/file/d/1yHlXX9PQcf3UeQ_THxKpDEMcLi3b5Rf7/view?usp=sharing'
  },
  {
    id: 'media-7',
    driveId: '1sSpNtotDQXb22743JJaZ59vbWNmT9eXf',
    title: 'Obra Vande Construções',
    category: 'Geral',
    location: 'Rio Negro / PR • Mafra / SC',
    thumbnailUrl: 'https://lh3.googleusercontent.com/d/1sSpNtotDQXb22743JJaZ59vbWNmT9eXf',
    embedUrl: 'https://drive.google.com/file/d/1sSpNtotDQXb22743JJaZ59vbWNmT9eXf/preview',
    originalUrl: 'https://drive.google.com/file/d/1sSpNtotDQXb22743JJaZ59vbWNmT9eXf/view?usp=sharing'
  },
  {
    id: 'media-8',
    driveId: '1tIQy8xAq1fdyLM-LdXHtuI-0cXn4PU7w',
    title: 'Obra Vande Construções',
    category: 'Geral',
    location: 'Rio Negro / PR • Mafra / SC',
    thumbnailUrl: 'https://lh3.googleusercontent.com/d/1tIQy8xAq1fdyLM-LdXHtuI-0cXn4PU7w',
    embedUrl: 'https://drive.google.com/file/d/1tIQy8xAq1fdyLM-LdXHtuI-0cXn4PU7w/preview',
    originalUrl: 'https://drive.google.com/file/d/1tIQy8xAq1fdyLM-LdXHtuI-0cXn4PU7w/view?usp=sharing'
  },
  {
    id: 'media-9',
    driveId: '1tiz9Gbdr4kafxhkOj9Aps6EQc3ujV3PI',
    title: 'Obra Vande Construções',
    category: 'Geral',
    location: 'Rio Negro / PR • Mafra / SC',
    thumbnailUrl: 'https://lh3.googleusercontent.com/d/1tiz9Gbdr4kafxhkOj9Aps6EQc3ujV3PI',
    embedUrl: 'https://drive.google.com/file/d/1tiz9Gbdr4kafxhkOj9Aps6EQc3ujV3PI/preview',
    originalUrl: 'https://drive.google.com/file/d/1tiz9Gbdr4kafxhkOj9Aps6EQc3ujV3PI/view?usp=sharing'
  },
  {
    id: 'media-10',
    driveId: '1yHlXX9PQcf3UeQ_THxKpDEMcLi3b5Rf7',
    title: 'Obra Vande Construções',
    category: 'Geral',
    location: 'Rio Negro / PR • Mafra / SC',
    thumbnailUrl: 'https://lh3.googleusercontent.com/d/1yHlXX9PQcf3UeQ_THxKpDEMcLi3b5Rf7',
    embedUrl: 'https://drive.google.com/file/d/1yHlXX9PQcf3UeQ_THxKpDEMcLi3b5Rf7/preview',
    originalUrl: 'https://drive.google.com/file/d/1yHlXX9PQcf3UeQ_THxKpDEMcLi3b5Rf7/view?usp=sharing'
  }
];


