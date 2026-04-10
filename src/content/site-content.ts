export type Locale = 'en' | 'pt-BR' | 'es';


export interface SolveItem {
  title: string;
  description: string;
}

export interface StepItem {
  title: string;
  description: string;
}

export interface LatestArticleFallback {
  title: string;
  summary: string;
  url: string;
  publishedLabel: string;
}

export interface LocalizedCopy {
  ui: {
    language: string;
    primaryCta: string;
    secondaryCta: string;
    tertiaryCta: string;
    channels: string;
    loading: string;
    fallback: string;
    publishedOn: string;
  };
  hero: {
    headline: string;
    subheadline: string;
  };
  forWho: {
    title: string;
    intro: string;
    primaryLabel: string;
    secondaryLabel: string;
    primary: string[];
    secondary: string[];
  };
  solve: {
    title: string;
    intro: string;
    items: SolveItem[];
  };
  transformation: {
    title: string;
    before: string;
    after: string;
    beforePoints: string[];
    afterPoints: string[];
  };
  method: {
    title: string;
    steps: StepItem[];
  };
  context: {
    title: string;
    roleLabel: string;
    roleValue: string;
    companyLabel: string;
    companyValue: string;
    description: string;
  };
  live: {
    title: string;
    subtitle: string;
    read: string;
  };
  contact: {
    title: string;
    subtitle: string;
    ethics: string;
  };
  fallbackArticle: LatestArticleFallback;
}

export const siteConfig = {
  name: 'Enzo Bonomi',
  role: 'Product Manager | Strategy, Tech and AI',
  location: 'Maringá-PR, Brazil',
  whatsappUrl: 'https://wa.me/5544988114314',
  channels: {
    substack: 'https://enzobonomi.substack.com/profile/posts',
    linkedin: 'https://www.linkedin.com/in/enzobonomi/',
    x: 'https://x.com/enzobonomi',
    youtube: 'https://youtube.com/@enzo.bonomi'
  },
  indicators: ['4+ Years in digital products', 'AI heavy user', 'Just build it']
} as const;


export const localeOptions: Array<{ value: Locale; label: string }> = [
  { value: 'en', label: 'EN' },
  { value: 'pt-BR', label: 'PT-BR' },
  { value: 'es', label: 'ES' }
];

export const copyByLocale: Record<Locale, LocalizedCopy> = {
  en: {
    ui: {
      language: 'Language',
      primaryCta: 'Reach on WhatsApp',
      secondaryCta: 'Latest Substack article',
      tertiaryCta: 'LinkedIn profile',
      channels: 'Official channels',
      loading: 'Loading latest article...',
      fallback: 'Using local fallback while feed is unavailable.',
      publishedOn: 'Published'
    },
    hero: {
      headline: 'Product, strategy, and AI.',
      subheadline: 'Product Manager with experience in product conception, strategy, and AI.'
    },
    forWho: {
      title: 'Profile at a glance',
      intro: 'A concise view of the disciplines, contexts, and collaborations that shape my work.',
      primaryLabel: 'Core focus',
      secondaryLabel: 'Close interfaces',
      primary: ['Product management', 'Strategy', 'Technology'],
      secondary: ['AI initiatives', 'Content', 'Cross-functional teams', 'Business stakeholders']
    },
    solve: {
      title: 'Areas of expertise',
      intro: 'The main domains where I have built repertoire and practical experience.',
      items: [
        {
          title: 'Product scope',
          description: 'Definition of scope, prioritization, and alignment between product ambition and delivery capacity.'
        },
        {
          title: 'Technical decisions',
          description: 'Collaboration with technical teams to turn product direction into feasible implementation paths.'
        },
        {
          title: 'Business decisions',
          description: 'Connection between roadmap choices, business objectives, risks, and strategic positioning.'
        },
        {
          title: 'Prioritization and trade-offs',
          description: 'Structured decision-making around constraints, dependencies, timelines, and expected impact.'
        }
      ]
    },
    transformation: {
      title: 'Trajectory',
      before: 'Foundation',
      after: 'Current focus',
      beforePoints: ['6+ years in digital products', 'Discovery, scope, and delivery work', 'Projects across industry, retail, and finance'],
      afterPoints: ['Strategy and execution', 'Technology and AI applications', 'Writing and public knowledge sharing']
    },
    method: {
      title: 'Work approach',
      steps: [
        {
          title: 'Understand context and constraints',
          description: 'Start from the real scenario, the limiting factors, and the decision environment.'
        },
        {
          title: 'Connect product, technology, and business',
          description: 'Translate objectives into clear priorities, trade-offs, and execution paths.'
        },
        {
          title: 'Document, learn, and evolve',
          description: 'Treat execution as a continuous learning process supported by evidence and reflection.'
        }
      ]
    },
    context: {
      title: 'Current context',
      roleLabel: 'Current role',
      roleValue: 'Project Analyst',
      companyLabel: 'Company',
      companyValue: 'UDS Tecnologia',
      description:
        'Project Analyst at UDS Tecnologia, leading ideation, scope, and development strategy for industry, retail, and financial clients.'
    },
    live: {
      title: 'Writing and notes',
      subtitle: 'Latest article from Substack via API with local fallback.',
      read: 'Read article'
    },
    contact: {
      title: 'Contact and channels',
      subtitle: 'Primary contact channel and public profiles.',
      ethics: 'Clarity, rigor, and practical execution.'
    },
    fallbackArticle: {
      title: 'Latest writing on Substack',
      summary: 'Recent notes on product strategy, experimentation, technology, and AI.',
      url: 'https://enzobonomi.substack.com/profile/posts',
      publishedLabel: 'Live feed fallback'
    }
  },
  'pt-BR': {
    ui: {
      language: 'Idioma',
      primaryCta: 'Contato pelo WhatsApp',
      secondaryCta: 'Último artigo no Substack',
      tertiaryCta: 'Perfil no LinkedIn',
      channels: 'Canais oficiais',
      loading: 'Carregando último artigo...',
      fallback: 'Usando fallback local enquanto o feed não responde.',
      publishedOn: 'Publicado'
    },
    hero: {
      headline: 'Produto, estratégia e IA.',
      subheadline: 'Product Manager com atuação em concepção de produto, estratégia e IA.'
    },
    forWho: {
      title: 'Perfil em resumo',
      intro: 'Uma visão objetiva das disciplinas, contextos e interfaces que compõem meu trabalho.',
      primaryLabel: 'Foco principal',
      secondaryLabel: 'Interfaces próximas',
      primary: ['Gestão de produto', 'Estratégia', 'Tecnologia'],
      secondary: ['Iniciativas com IA', 'Conteúdo', 'Times multidisciplinares', 'Stakeholders de negócio']
    },
    solve: {
      title: 'Áreas de experiência',
      intro: 'Os principais domínios em que construí repertório e atuação prática.',
      items: [
        {
          title: 'Escopo de produto',
          description: 'Definição de escopo, priorização e alinhamento entre ambição de produto e capacidade de entrega.'
        },
        {
          title: 'Decisões técnicas',
          description: 'Trabalho conjunto com times técnicos para transformar direção de produto em caminhos viáveis de implementação.'
        },
        {
          title: 'Decisões de negócio',
          description: 'Conexão entre escolhas de roadmap, objetivos de negócio, riscos e posicionamento estratégico.'
        },
        {
          title: 'Priorização e trade-offs',
          description: 'Tomada de decisão estruturada diante de restrições, dependências, prazos e impacto esperado.'
        }
      ]
    },
    transformation: {
      title: 'Trajetória',
      before: 'Base',
      after: 'Foco atual',
      beforePoints: ['6+ anos em produtos digitais', 'Atuação em discovery, escopo e entrega', 'Projetos em indústria, varejo e financeiro'],
      afterPoints: ['Estratégia e execução', 'Tecnologia e aplicações de IA', 'Escrita e compartilhamento público de conhecimento']
    },
    method: {
      title: 'Forma de trabalho',
      steps: [
        {
          title: 'Entender contexto e restrições',
          description: 'Partir do cenário real, dos fatores limitantes e do ambiente de decisão.'
        },
        {
          title: 'Conectar produto, tecnologia e negócio',
          description: 'Traduzir objetivos em prioridades claras, trade-offs e caminhos de execução.'
        },
        {
          title: 'Documentar, aprender e evoluir',
          description: 'Tratar a execução como um processo contínuo de aprendizado com evidências e reflexão.'
        }
      ]
    },
    context: {
      title: 'Contexto atual',
      roleLabel: 'Cargo atual',
      roleValue: 'Analista de Projetos',
      companyLabel: 'Empresa',
      companyValue: 'UDS Tecnologia',
      description:
        'Analista de Projetos na UDS Tecnologia, atuando em ideação, escopo e estratégia de desenvolvimento para clientes de indústria, varejo e setor financeiro.'
    },
    live: {
      title: 'Textos e anotações',
      subtitle: 'Último artigo do Substack via API com fallback local.',
      read: 'Ler artigo'
    },
    contact: {
      title: 'Contato e canais',
      subtitle: 'Canal principal de contato e perfis públicos.',
      ethics: 'Clareza, rigor e execução prática.'
    },
    fallbackArticle: {
      title: 'Últimos textos no Substack',
      summary: 'Notas recentes sobre estratégia de produto, experimentação, tecnologia e IA.',
      url: 'https://enzobonomi.substack.com/profile/posts',
      publishedLabel: 'Fallback do feed ao vivo'
    }
  },
  es: {
    ui: {
      language: 'Idioma',
      primaryCta: 'Contactar por WhatsApp',
      secondaryCta: 'Último artículo en Substack',
      tertiaryCta: 'Perfil en LinkedIn',
      channels: 'Canales oficiales',
      loading: 'Cargando último artículo...',
      fallback: 'Usando fallback local mientras el feed no responde.',
      publishedOn: 'Publicado'
    },
    hero: {
      headline: 'Producto, estrategia e IA.',
      subheadline: 'Product Manager con experiencia en concepción de producto, estrategia e IA.'
    },
    forWho: {
      title: 'Perfil en resumen',
      intro: 'Una vista concisa de las disciplinas, contextos e interfaces que definen mi trabajo.',
      primaryLabel: 'Foco principal',
      secondaryLabel: 'Interfaces cercanas',
      primary: ['Gestión de producto', 'Estrategia', 'Tecnología'],
      secondary: ['Iniciativas con IA', 'Contenido', 'Equipos multifuncionales', 'Stakeholders de negocio']
    },
    solve: {
      title: 'Áreas de experiencia',
      intro: 'Los principales dominios en los que construí repertorio y experiencia práctica.',
      items: [
        {
          title: 'Alcance de producto',
          description: 'Definición de alcance, priorización y alineación entre ambición de producto y capacidad de entrega.'
        },
        {
          title: 'Decisiones técnicas',
          description:
            'Trabajo con equipos técnicos para convertir la dirección de producto en caminos viables de implementación.'
        },
        {
          title: 'Decisiones de negocio',
          description: 'Conexión entre decisiones de roadmap, objetivos de negocio, riesgos y posicionamiento estratégico.'
        },
        {
          title: 'Priorización y trade-offs',
          description: 'Toma de decisiones estructurada frente a restricciones, dependencias, plazos e impacto esperado.'
        }
      ]
    },
    transformation: {
      title: 'Trayectoria',
      before: 'Base',
      after: 'Foco actual',
      beforePoints: ['6+ años en productos digitales', 'Trabajo en discovery, alcance y entrega', 'Proyectos en industria, retail y finanzas'],
      afterPoints: ['Estrategia y ejecución', 'Tecnología y aplicaciones de IA', 'Escritura y difusión pública de conocimiento']
    },
    method: {
      title: 'Forma de trabajo',
      steps: [
        {
          title: 'Entender contexto y restricciones',
          description: 'Partir del escenario real, de los factores limitantes y del entorno de decisión.'
        },
        {
          title: 'Conectar producto, tecnología y negocio',
          description: 'Traducir objetivos en prioridades claras, trade-offs y caminos de ejecución.'
        },
        {
          title: 'Documentar, aprender y evolucionar',
          description: 'Entender la ejecución como un proceso continuo de aprendizaje con evidencia y reflexión.'
        }
      ]
    },
    context: {
      title: 'Contexto actual',
      roleLabel: 'Rol actual',
      roleValue: 'Analista de Proyectos',
      companyLabel: 'Empresa',
      companyValue: 'UDS Tecnologia',
      description:
        'Analista de Proyectos en UDS Tecnología, trabajando en ideación, alcance y estrategia de desarrollo para clientes de industria, retail y finanzas.'
    },
    live: {
      title: 'Textos y notas',
      subtitle: 'Último artículo de Substack vía API con fallback local.',
      read: 'Leer artículo'
    },
    contact: {
      title: 'Contacto y canales',
      subtitle: 'Canal principal de contacto y perfiles públicos.',
      ethics: 'Claridad, rigor y ejecución práctica.'
    },
    fallbackArticle: {
      title: 'Últimos textos en Substack',
      summary: 'Notas recientes sobre estrategia de producto, experimentación, tecnología e IA.',
      url: 'https://enzobonomi.substack.com/profile/posts',
      publishedLabel: 'Fallback del feed en vivo'
    }
  }
};
