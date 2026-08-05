import { Project, ServiceItem, Testimonial } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'residencia-vande-alpha',
    title: 'Mansão Vande Alpha',
    subtitle: '1.200m² de Engenharia de Precisão e Acabamentos Exclusivos',
    category: 'residencial',
    area: '1.200 m²',
    location: 'Alphaville, SP',
    year: '2025',
    description: 'Residência unifamiliar de altíssimo padrão executada com rigor estrutural pela Vande Construções. Estrutura em concreto aparente e pele de vidro integrando a natureza aos espaços internos.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: {
      structure: 'Concreto protendido autoportante com balanços marcantes',
      timeline: '14 meses (Executado rigorosamente dentro do prazo Vande)',
      highlight: 'Piscina aquecida em balanço e automação predial completa'
    },
    featured: true
  },
  {
    id: 'edificio-vande-tower',
    title: 'Vande Corporate Tower',
    subtitle: 'Engenharia Comercial de Vanguarda e Certificação Sustentável',
    category: 'edificios',
    area: '18.500 m²',
    location: 'Jardins, São Paulo',
    year: '2024',
    description: 'Empreendimento comercial corporativo construído pela Vande Construções com tecnologia BIM 7D, estrutura mista de aço e concreto e sistemas inteligentes de eficiência energética.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: {
      structure: 'Núcleo rígido em concreto HPC e fachada em vidro duplo insulado',
      timeline: '22 meses',
      highlight: 'Redução de 38% no consumo hídrico e energético'
    },
    featured: true
  },
  {
    id: 'reforma-corporativa-vande',
    title: 'Sede Vande Executive Hub',
    subtitle: 'Retrofit e Design de Interiores Corporativo de Alto Padrão',
    category: 'interiores',
    area: '850 m²',
    location: 'Itaim Bibi, SP',
    year: '2025',
    description: 'Projeto turnkey e execução impecável de interiores corporativos pela Vande Construções, priorizando isolamento acústico superior e marcenaria técnica de luxo.',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: {
      structure: 'Vigas metálicas aparentes e divisórias acústicas de alto índice',
      timeline: '5 meses',
      highlight: 'Iluminação técnica automatizada e climatização setorizada'
    },
    featured: true
  },
  {
    id: 'villa-vande-costa',
    title: 'Villa Vande Horizon',
    subtitle: 'Engenharia Marítima e Arquitetura de Veraneio Premium',
    category: 'residencial',
    area: '1.600 m²',
    location: 'Litoral Norte, SP',
    year: '2025',
    description: 'Residência praiana cravada em terreno inclinado, com fundações especiais executadas pela Vande Construções contra intempéries e corrosão marinha.',
    imageUrl: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1600&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: {
      structure: 'Tirantes de alta resistência e concreto marinho de baixa porosidade',
      timeline: '18 meses',
      highlight: 'Piscina de borda infinita com vista panorâmica para o mar'
    },
    featured: false
  },
  {
    id: 'centro-logistico-vande',
    title: 'Complexo Logístico Vande Prime',
    subtitle: 'Infraestrutura Industrial e Obras de Grande Porte',
    category: 'corporativo',
    area: '32.000 m²',
    location: 'Guarulhos, SP',
    year: '2024',
    description: 'Centro logístico e industrial com piso de altíssima planaridade, pátio de manobras e estrutura pré-moldada de alto desempenho construída pela Vande.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: {
      structure: 'Piso industrial protendido capacidade 8 t/m²',
      timeline: '10 meses',
      highlight: 'Sistemas automatizados de proteção contra incêndio Sprinklers NFPA'
    },
    featured: false
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'execucao-de-obras',
    title: 'Execução de Obras de Alto Padrão',
    shortDesc: 'Construção completa do zero ao acabamento com máxima fidelidade ao projeto.',
    fullDesc: 'A Vande Construções assume a responsabilidade total da sua obra. Com engenheiros dedicados no canteiro, rigor técnico, cronograma transparente e fornecedores selecionados.',
    iconName: 'ShieldCheck',
    deliverables: [
      'Gerenciamento Geral Turnkey (Chave na Mão)',
      'Controle Físico-Financeiro semanal e relatórios por app',
      'Equipe própria qualificada e supervisão contínua',
      'Garantia estrutural e pós-obra de excelência'
    ],
    span: 'md:col-span-2'
  },
  {
    id: 'engenharia-estrutural',
    title: 'Engenharia Estrutural & BIM',
    shortDesc: 'Soluções estruturais arrojadas, seguras e otimizadas para cada projeto.',
    fullDesc: 'Projetos de engenharia civil, fundações e estruturas em concreto, aço e alvenaria estrutural modelados em BIM 3D/7D para eliminar interferências e sobressaltos no canteiro.',
    iconName: 'Layers',
    deliverables: [
      'Cálculo e Dimensionamento Estrutural de Precisão',
      'Compatibilização BIM completa em 3D/7D',
      'Análise de solo e fundações especiais',
      'Laudos técnicos e ART de execução'
    ],
    span: 'md:col-span-1'
  },
  {
    id: 'reformas-e-retrofit',
    title: 'Reformas & Retrofit Corporativo',
    shortDesc: 'Modernização de edifícios e interiores sem interromper a produtividade.',
    fullDesc: 'Transformação profunda de espaços residenciais de luxo e plantas corporativas. Planejamento estratégico de obras rápidas, limpas e com alto valor agregado.',
    iconName: 'PenTool',
    deliverables: [
      'Reformas de Alto Padrão e Retrofit predial',
      'Instalações elétricas e hidráulicas de ponta',
      'Isolamento acústico e revestimentos nobres',
      'Cumprimento rigoroso de normas e prazos corporativos'
    ],
    span: 'md:col-span-1'
  },
  {
    id: 'gestao-e-consultoria',
    title: 'Gestão Inteligente & Sustentabilidade',
    shortDesc: 'Otimização de custos, sustentabilidade e eficiência energética para sua edificação.',
    fullDesc: 'A Vande Construções integra tecnologias limpas, reaproveitamento hídrico, energia solar e automação para edificações duráveis com menor custo de manutenção.',
    iconName: 'Cpu',
    deliverables: [
      'Orçamento analítico detalhado sem surpresas',
      'Projetos de Eficiência Energética e Energia Solar',
      'Consultoria para aprovações e licenças regulatórias',
      'Auditoria de qualidade e suprimentos'
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
    projectRef: 'Obra Residencial'
  },
  {
    id: '2',
    quote: 'Excelente construtora em Rio Negro e região. Equipe técnica altamente qualificada, rigoroso cumprimento de prazos e fino acabamento.',
    author: 'Avaliação no Google',
    role: 'Cliente Verificado ⭐⭐⭐⭐⭐',
    location: 'Rio Negro, PR',
    projectRef: 'Construção Residencial'
  },
  {
    id: '3',
    quote: 'Profissionais extremamente dedicados e honestos. O orçamento entregue foi cumprido à risca sem nenhuma cobrança de aditivos surpresa. Recomendo a Vande Construções de olhos fechados!',
    author: 'Avaliação no Google',
    role: 'Cliente Verificado ⭐⭐⭐⭐⭐',
    location: 'Mafra, SC / Rio Negro',
    projectRef: 'Projeto Executivo & Obra'
  }
];

export const STUDIO_STATS = [
  { label: 'Metros Quadrados Construídos', value: '350.000+', suffix: 'm²' },
  { label: 'Compromisso com Prazos', value: '100%', suffix: 'Garantido' },
  { label: 'Obras Entregues com Sucesso', value: '120+', suffix: 'Projetos' },
  { label: 'Anos de Tradição e Excelência', value: '18+', suffix: 'Anos' }
];

