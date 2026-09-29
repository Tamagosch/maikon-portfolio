export type Lang = 'pt' | 'en'

export interface Project {
  name: string
  tag: string
  year?: string
  description: string
  highlights?: string[]
  stack: string[]
  link?: { label: string; href: string }
  featured?: boolean
  demo?: string
}

export interface Job {
  role: string
  company: string
  place: string
  period: string
  bullets: string[]
}

export interface Highlight {
  title: string
  desc: string
}

export interface Extras {
  project: string
  featured: string
  highlightsTitle: string
  highlightsSub: string
  highlights: Highlight[]
  moreTitle: string
  moreSub: string
  skillsSub: string
  resumeLabel: string
  resumeHref: string
  location: string
  loading: string
  viewSkills: string
  explorer: string
  files: {
    about: string
    interests: string
    highlights: string
    education: string
    stats: string
    loading: string
    resume: string
    message: string
    skills: string
  }
}

export interface Content {
  extras: Extras
  nav: { about: string; projects: string; experience: string; skills: string; contact: string }
  hero: { greeting: string; name: string; role: string; intro: string; cta: string; ctaSecondary: string; badge: string }
  stats: { value: string; label: string }[]
  about: { title: string; paragraphs: string[]; interestsTitle: string; interests: string }
  projects: { title: string; subtitle: string; items: Project[] }
  experience: { title: string; jobs: Job[]; education: { title: string; course: string; school: string; period: string } }
  skills: { title: string; groups: { name: string; items: string[] }[]; languagesTitle: string; languages: string[] }
  contact: { title: string; text: string; email: string }
}

export const EMAIL = 'maikongosch@gmail.com'
export const LINKEDIN = 'https://linkedin.com/in/maikon-camilo'

const skills = [
  { name: 'Front-end', items: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Vite', 'TanStack Query'] },
  { name: 'Mobile', items: ['React Native', 'Flutter', 'PWA'] },
  { name: 'Testes', items: ['Jest', 'Vitest', 'Cypress'] },
  { name: 'Back-end & dados', items: ['Node.js (Adonis)', 'PHP', 'MySQL', 'MongoDB', 'Strapi', 'APIs REST'] },
  { name: 'Infra & deploy', items: ['CI/CD', 'AWS Amplify', 'GCP', 'Vercel'] },
]

export const content: Record<Lang, Content> = {
  pt: {
    extras: {
      project: 'Projeto',
      featured: 'Destaque',
      highlightsTitle: 'Destaques da carreira',
      highlightsSub: 'Alguns marcos que resumem minha trajetória.',
      highlights: [
        { title: 'Liderança técnica', desc: 'Liderou um time de 4 devs com code review e mentoria.' },
        { title: 'Produto com tração', desc: '+20 mil acessos e 6 mil usuários no 1º mês do Parse Academy.' },
        { title: 'Segurança', desc: 'Implementou MFA com AWS Amplify em produção.' },
        { title: 'Autonomia', desc: 'Único front-end em vários projetos, do layout à API.' },
        { title: 'Atuação internacional', desc: 'Times e clientes no Brasil, EUA e Alemanha.' },
        { title: 'Versatilidade', desc: 'React, Next, Vue, Angular e Flutter.' },
      ],
      moreTitle: 'Outros projetos',
      moreSub: 'Outros trabalhos que passaram pela minha mesa.',
      skillsSub: 'Tecnologias e ferramentas com as quais trabalho.',
      resumeLabel: 'Baixar currículo',
      resumeHref: '/resume/maikon-camilo-gosch-cv-pt.pdf',
      location: 'Joinville, SC — Brasil',
      loading: 'Carregando stack principal…',
      viewSkills: 'Ver skills',
      explorer: 'explorador',
      files: {
        about: 'sobre.txt',
        interests: 'fora_do_codigo.txt',
        highlights: 'destaques.exe',
        education: 'formacao.txt',
        stats: 'sistema.info',
        loading: 'carregando…',
        resume: 'curriculo.pdf',
        message: 'nova_mensagem.msg',
        skills: 'skills.dir',
      },
    },
    nav: { about: 'Sobre', projects: 'Projetos', experience: 'Experiência', skills: 'Skills', contact: 'Contato' },
    hero: {
      badge: 'Disponível para novos desafios',
      greeting: 'Olá, eu sou',
      name: 'Maikon Camilo Gosch',
      role: 'Engenheiro Front-End',
      intro:
        'Há mais de 7 anos construo aplicações web e mobile escaláveis para fintech, healthtech e SaaS, trabalhando com times de vários países. Gosto de arquitetura limpa, performance e interfaces fáceis de manter.',
      cta: 'Ver projetos',
      ctaSecondary: 'Falar comigo',
    },
    stats: [
      { value: '7+', label: 'anos de experiência' },
      { value: '4', label: 'devs liderados' },
      { value: '20k+', label: 'acessos no 1º mês do Parse Academy' },
      { value: '3', label: 'continentes de clientes e times' },
    ],
    about: {
      title: 'Sobre mim',
      paragraphs: [
        'Comecei com jQuery e PHP, evoluí para Vue e hoje o React e o TypeScript são minha casa. No caminho fui promovido a líder de front-end, mentorei desenvolvedores, revisei código de produção e participei de decisões de arquitetura.',
        'Na consultoria aprendi a me adaptar rápido: já entreguei projetos completos, do layout à integração com as APIs, em Vue, React, Next, Angular e Flutter, muitas vezes como único front-end e falando direto com o cliente.',
      ],
      interestsTitle: 'Fora do código',
      interests:
        'Jogo para relaxar, exercitar a criatividade e me conectar com comunidades, em partidas competitivas ou casuais. Não por acaso, quase todos os meus projetos pessoais nascem de jogos.',
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Alguns trabalhos que resumem como eu gosto de construir software.',
      items: [
        {
          name: 'Parse Academy',
          tag: 'Projeto próprio',
          description:
            'Ferramenta de análise de performance para jogadores de World of Warcraft. A partir de um link do Warcraft Logs, mostra de forma dinâmica onde o jogador pode melhorar seu gameplay: resumo de combate, ranking de DPS/HPS, death recaps e páginas de resultado compartilháveis.',
          highlights: [
            '+20 mil acessos e +6 mil usuários no primeiro mês de lançamento',
            'Funções serverless integrando Warcraft Logs e Raider.IO',
            'Imagens de compartilhamento (OG) geradas dinamicamente e PWA instalável',
          ],
          stack: ['React 18', 'TypeScript', 'Vite', 'Tailwind', 'TanStack Query', 'Vercel'],
          link: { label: 'parseacademy.com', href: 'https://parseacademy.com' },
          demo: '/demos/parseacademy.webm',
          featured: true,
        },
        {
          name: 'ReplicaDex',
          tag: 'Projeto próprio',
          description:
            'Plataforma para a comunidade competitiva de Pokémon (Champions): analise Pokémon por estatísticas reais de torneio, monte seu próprio time ou copie um dos times compartilhados. Busca por Pokémon, arquétipo ou criador e uma Pokédex com stats, movesets, itens e naturezas ranqueados por uso.',
          highlights: ['Code splitting por rota e dados estruturados schema.org para SEO'],
          stack: ['React 19', 'Vite', 'Tailwind', 'TanStack Query', 'Vercel'],
          link: { label: 'replicadex.com.br', href: 'https://replicadex.com.br' },
          demo: '/demos/replicadex.webm',
          featured: true,
        },
        {
          name: 'Front 100% dinâmico para empresa alemã',
          tag: 'Cliente · Bitwise',
          description:
            'Sozinho no front-end, entreguei um site em que absolutamente tudo podia ser editado pelo cliente: imagens, textos, cores e seções. O conteúdo vinha do Strapi e o front refletia as mudanças quase em tempo real. Criei também o design system do projeto e os testes unitários.',
          highlights: [
            'Prazo curto e muitas exceções de regra que exigiram soluções criativas',
            'Entregue no prazo, com feedback muito positivo do cliente',
          ],
          stack: ['Vite', 'JavaScript', 'Strapi', 'Design System', 'Jest'],
        },
        {
          name: 'Plano de manutenção de frotas',
          tag: 'RotaExata',
          description:
            'O gestor escolhe a frota ou categoria e, em uma tabela, marca os itens do checklist e os meses em que cada manutenção deve acontecer. Uma semana antes de cada mês, o sistema envia o alerta com os veículos a serem atendidos.',
          stack: ['PHP', 'jQuery', 'MongoDB'],
        },
        {
          name: 'Autoteste de COVID-19',
          tag: 'Healthtech · Pandemia',
          description:
            'Aplicação que guiava o usuário passo a passo durante o autoteste de COVID-19. A aceitação e o feedback foram tão bons que a solução serviu de base para outros autotestes, como o de HIV.',
          stack: ['Angular', 'TypeScript'],
        },
      ],
    },
    experience: {
      title: 'Experiência',
      jobs: [
        {
          role: 'Desenvolvedor Front-End',
          company: 'Hyperlocal',
          place: 'São Paulo, BR',
          period: 'Abr 2024 — 2026',
          bullets: [
            'Mantenho e evoluo uma aplicação React em produção, cuidando de estabilidade, performance e entrega contínua.',
            'Liderei a implementação de MFA com AWS Amplify, definindo os fluxos e a integração com a base de usuários para cumprir requisitos de segurança.',
            'Iniciei a reconstrução de um sistema legado em Next.js sobre um design system compartilhado, reduzindo o esforço de criar telas novas.',
          ],
        },
        {
          role: 'Front-End · Consultoria',
          company: 'Bitwise Technology',
          place: 'São Paulo, BR',
          period: 'Mai 2022 — Mar 2024',
          bullets: [
            'Consultor front-end para clientes de healthtech e fintech, entregando projetos completos de forma autônoma.',
            'Vue, React, Next, Angular e Flutter, conforme a stack de cada cliente, em produtos usados em diferentes países.',
            'Único front-end em vários projetos: responsável pela arquitetura da UI e pelo contato direto com o cliente.',
          ],
        },
        {
          role: 'Desenvolvedor Full-stack',
          company: 'Voyager Portal',
          place: 'Houston, EUA',
          period: 'Out 2020 — Jul 2021',
          bullets: [
            'Vue no front e Adonis (Node.js) com MySQL no back, em time distribuído e comunicação 100% em inglês.',
            'Novas interfaces e APIs conforme os fluxos do produto, além de correção de bugs e ajuste de regras de negócio.',
          ],
        },
        {
          role: 'Líder de Front-End',
          company: 'RotaExata',
          place: 'Joinville, BR',
          period: 'Mai 2018 — Set 2020',
          bullets: [
            'Promovido a líder do time de front-end: quatro devs, code reviews, mentoria e comunicação de status com stakeholders.',
            'Da base legada em jQuery/PHP para um produto em Vue e Vuetify, acompanhando a transição para componentes.',
            'Propus melhorias de arquitetura adotadas pelo time, padronizando estrutura de projetos e processo de review.',
          ],
        },
      ],
      education: {
        title: 'Formação',
        course: 'Análise e Desenvolvimento de Sistemas (Tecnólogo)',
        school: 'Unopar · Joinville',
        period: '2017 — 2020',
      },
    },
    skills: { title: 'Skills', groups: skills, languagesTitle: 'Idiomas', languages: ['Português · nativo', 'Inglês · fluente (EF SET C1)', 'Espanhol · intermediário'] },
    contact: {
      title: 'Vamos conversar?',
      text: 'Tem um projeto, uma vaga ou só quer trocar uma ideia sobre front-end? Me chama.',
      email: 'Enviar e-mail',
    },
  },
  en: {
    extras: {
      project: 'Project',
      featured: 'Featured',
      highlightsTitle: 'Career highlights',
      highlightsSub: 'A few milestones that sum up my path.',
      highlights: [
        { title: 'Technical leadership', desc: 'Led a team of 4 devs through code reviews and mentoring.' },
        { title: 'Product with traction', desc: '20k+ visits and 6k users in Parse Academy’s first month.' },
        { title: 'Security', desc: 'Shipped MFA with AWS Amplify to production.' },
        { title: 'Autonomy', desc: 'Sole front-end on several projects, layout to API.' },
        { title: 'International work', desc: 'Teams and clients in Brazil, the USA and Germany.' },
        { title: 'Versatility', desc: 'React, Next, Vue, Angular and Flutter.' },
      ],
      moreTitle: 'Other projects',
      moreSub: 'A few more projects that crossed my desk.',
      skillsSub: 'Technologies and tools I work with.',
      resumeLabel: 'Download resume',
      resumeHref: '/resume/maikon-camilo-gosch-resume-en.pdf',
      location: 'Joinville, SC — Brazil',
      loading: 'Loading main stack…',
      viewSkills: 'View skills',
      explorer: 'explorer',
      files: {
        about: 'about.txt',
        interests: 'outside_code.txt',
        highlights: 'highlights.exe',
        education: 'education.txt',
        stats: 'system.info',
        loading: 'loading…',
        resume: 'resume.pdf',
        message: 'new_message.msg',
        skills: 'skills.dir',
      },
    },
    nav: { about: 'About', projects: 'Projects', experience: 'Experience', skills: 'Skills', contact: 'Contact' },
    hero: {
      badge: 'Open to new challenges',
      greeting: "Hi, I'm",
      name: 'Maikon Camilo Gosch',
      role: 'Front-End Engineer',
      intro:
        "For 7+ years I've been building scalable web and mobile apps for fintech, healthtech and SaaS, working with teams across several countries. I care about clean architecture, performance and interfaces that are easy to maintain.",
      cta: 'View projects',
      ctaSecondary: 'Get in touch',
    },
    stats: [
      { value: '7+', label: 'years of experience' },
      { value: '4', label: 'developers led' },
      { value: '20k+', label: 'visits in Parse Academy’s first month' },
      { value: '3', label: 'continents of clients and teams' },
    ],
    about: {
      title: 'About me',
      paragraphs: [
        "I started with jQuery and PHP, moved to Vue, and today React and TypeScript are home. Along the way I was promoted to front-end lead, mentored developers, reviewed production code and took part in architecture decisions.",
        "Consulting taught me to adapt fast: I've delivered complete projects, from layout to API integration, in Vue, React, Next, Angular and Flutter, often as the only front-end dev talking directly to the client.",
      ],
      interestsTitle: 'Outside of code',
      interests:
        "I play games to unwind, exercise creativity and connect with communities, competitive or casual. Not by chance, almost all my side projects start from games.",
    },
    projects: {
      title: 'Projects',
      subtitle: 'A few pieces of work that sum up how I like to build software.',
      items: [
        {
          name: 'Parse Academy',
          tag: 'Own project',
          description:
            'A performance analysis tool for World of Warcraft players. From a Warcraft Logs link, it shows players, in a dynamic way, where they can improve their gameplay: combat summary, DPS/HPS ranking, death recaps and shareable result pages.',
          highlights: [
            '20k+ visits and 6k+ users in the first month after launch',
            'Serverless functions integrating Warcraft Logs and Raider.IO',
            'Dynamically generated share (OG) images and an installable PWA',
          ],
          stack: ['React 18', 'TypeScript', 'Vite', 'Tailwind', 'TanStack Query', 'Vercel'],
          link: { label: 'parseacademy.com', href: 'https://parseacademy.com' },
          demo: '/demos/parseacademy.webm',
          featured: true,
        },
        {
          name: 'ReplicaDex',
          tag: 'Own project',
          description:
            'A platform for the competitive Pokémon community (Champions): analyze Pokémon with real tournament stats, build your own team or copy a shared one. Search by Pokémon, archetype or creator, plus a Pokédex with stats, movesets, items and natures ranked by usage.',
          highlights: ['Route-based code splitting and schema.org structured data for SEO'],
          stack: ['React 19', 'Vite', 'Tailwind', 'TanStack Query', 'Vercel'],
          link: { label: 'replicadex.com.br', href: 'https://replicadex.com.br' },
          demo: '/demos/replicadex.webm',
          featured: true,
        },
        {
          name: '100% dynamic front for a German company',
          tag: 'Client · Bitwise',
          description:
            'As the sole front-end dev, I delivered a site where absolutely everything was editable by the client: images, texts, colors and sections. Content came from Strapi and the front reflected changes almost in real time. I also built the project’s design system and its unit tests.',
          highlights: [
            'Tight deadline and many business-rule exceptions that called for creative solutions',
            'Delivered on time, with very positive client feedback',
          ],
          stack: ['Vite', 'JavaScript', 'Strapi', 'Design System', 'Jest'],
        },
        {
          name: 'Fleet maintenance plan',
          tag: 'RotaExata',
          description:
            'Fleet managers pick a fleet or category and, in a table, mark checklist items and the months each maintenance should happen. One week before each month, the system sends an alert listing the vehicles to service.',
          stack: ['PHP', 'jQuery', 'MongoDB'],
        },
        {
          name: 'COVID-19 self-test',
          tag: 'Healthtech · Pandemic',
          description:
            'An app that guided users step by step through a COVID-19 self-test. Adoption and feedback were so good that it became the basis for other self-tests, such as HIV.',
          stack: ['Angular', 'TypeScript'],
        },
      ],
    },
    experience: {
      title: 'Experience',
      jobs: [
        {
          role: 'Front-End Developer',
          company: 'Hyperlocal',
          place: 'São Paulo, BR',
          period: 'Apr 2024 — 2026',
          bullets: [
            'I maintain and evolve a production React app, owning stability, performance and continuous delivery.',
            'Led the MFA implementation with AWS Amplify, defining auth flows and the integration with the existing user base to meet security compliance.',
            'Started rebuilding a legacy system in Next.js on top of a shared design system, cutting the effort of creating new screens.',
          ],
        },
        {
          role: 'Front-End · Consulting',
          company: 'Bitwise Technology',
          place: 'São Paulo, BR',
          period: 'May 2022 — Mar 2024',
          bullets: [
            'Front-end consultant for healthtech and fintech clients, autonomously delivering complete projects.',
            'Vue, React, Next, Angular and Flutter depending on each client’s stack, in products used across countries.',
            'Sole front-end dev on several projects: responsible for UI architecture and direct client contact.',
          ],
        },
        {
          role: 'Full-stack Developer',
          company: 'Voyager Portal',
          place: 'Houston, USA',
          period: 'Oct 2020 — Jul 2021',
          bullets: [
            'Vue on the front and Adonis (Node.js) with MySQL on the back, in a distributed team working fully in English.',
            'Built new interfaces and APIs for the product’s workflows, fixed bugs and adjusted business rules.',
          ],
        },
        {
          role: 'Front-End Lead',
          company: 'RotaExata',
          place: 'Joinville, BR',
          period: 'May 2018 — Sep 2020',
          bullets: [
            'Promoted to lead the front-end team: four devs, code reviews, mentoring and status reporting to stakeholders.',
            'From a legacy jQuery/PHP base to a Vue + Vuetify product, following the shift to component architecture.',
            'Proposed architecture improvements adopted by the team, standardizing project structure and the review process.',
          ],
        },
      ],
      education: {
        title: 'Education',
        course: 'Systems Analysis and Development (Tecnólogo)',
        school: 'Unopar · Joinville',
        period: '2017 — 2020',
      },
    },
    skills: { title: 'Skills', groups: skills.map((g) => (g.name === 'Testes' ? { ...g, name: 'Testing' } : g.name === 'Back-end & dados' ? { ...g, name: 'Back-end & data' } : g.name === 'Infra & deploy' ? { ...g, name: 'Infra & deploy' } : g)), languagesTitle: 'Languages', languages: ['Portuguese · native', 'English · fluent (EF SET C1)', 'Spanish · intermediate'] },
    contact: {
      title: "Let's talk",
      text: 'Got a project, a role, or just want to chat about front-end (or games)? Reach out.',
      email: 'Send an email',
    },
  },
}
