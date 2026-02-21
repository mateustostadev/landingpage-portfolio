export type Language = 'pt' | 'en';

export const translations = {
    pt: {
        // Navbar
        'nav.home': 'Home',
        'nav.about': 'Sobre',
        'nav.skills': 'Habilidades',
        'nav.experience': 'Experiência',
        'nav.services': 'Serviços',
        'nav.projects': 'Projetos',
        'nav.contact': 'Contato',

        // Hero
        'hero.greeting': 'Olá, me chamo Mateus Tosta 👋',
        'hero.title': 'Desenvolvedor FullStack',
        'hero.subtitle': 'Apaixonado por tecnologia, criando soluções eficientes e focadas na experiência do usuário.',
        'hero.cta.download': 'Baixar currículo',
        'hero.cta.projects': 'Ver projetos',
        'hero.availability': 'Disponível para novos projetos',
        'hero.years': 'Anos de',
        'hero.experience': 'Experiência',
        'hero.projects': 'Projetos',
        'hero.completed': 'Concluídos',
        'hero.projects.view': 'Visualizar Projetos',

        // Expertise
        'expertise.badge': 'Especialidades',
        'expertise.title': 'Soluções Técnicas & Estratégias',
        'expertise.desc': 'Focado em resolver problemas complexos com código limpo e arquitetura escalável',

        'expertise.performance.title': 'Performance & Otimização',
        'expertise.performance.desc': 'Foco em Core Web Vitals, lazy loading e otimização de renderização.',

        'expertise.seo.title': 'SEO & Acessibilidade',
        'expertise.seo.desc': 'Desenvolvimento semântico focado em ranqueamento e acessibilidade (WCAG).',

        'expertise.clean.title': 'Clean Code & Arquitetura',
        'expertise.clean.desc': 'Princípios SOLID, Design Patterns e código testável e manutenível.',

        'expertise.api.title': 'Integração de APIs',
        'expertise.api.desc': 'Consumo e construção de APIs RESTful seguras e eficientes.',

        // Indicators
        'indicators.title': 'Transformando ideias em soluções digitais inovadoras para empresas que querem crescer.',
        'indicators.clients': 'CLIENTES ATENDIDOS',
        'indicators.projects': 'PROJETOS ENTREGUES',
        'indicators.experience': 'ANOS DE EXPERIÊNCIA',

        // Partners
        'partners.badge': 'Clientes Parceiros',
        'partners.desc': 'Empresas e instituições que confiam no meu trabalho',

        // Added Missing Skills
        'skills.ai': 'Inteligência artificial',
        'skills.ai.verticalAgents': 'Agentes Verticais',
        'skills.ai.automation': 'Automação com IA',
        'skills.design.prototyping': 'Prototipação Rápida',

        // About
        'about.badge': 'Sobre mim',
        'about.title': 'Conheça um pouco mais sobre mim',
        'about.p1': 'Estudante de Análise e Desenvolvimento de Sistemas e entusiasta do desenvolvimento web, atualmente atuo como Estagiário de Suporte e Infraestrutura.',
        'about.p2': 'Ao longo da minha trajetória, busquei unir o conhecimento acadêmico com a prática de mercado, desenvolvendo habilidades em tecnologias como React.js, Tailwind CSS, TypeScript, PHP e MySQL.',
        'about.p3': 'Sou movido pela vontade de criar interfaces modernas e responsivas, aliadas a soluções eficientes no backend. Meu objetivo é sempre entregar experiências de usuário fluidas e resolver problemas reais através da programação.',

        // Skills
        'skills.badge': 'Minhas Habilidades',
        'skills.title': 'Tecnologias que domino',

        // Experience
        'exp.badge': 'Experiência Profissional',

        // Resume Details
        'exp.cast.role': 'Atendente Help Desk',
        'exp.sebrae.role': 'Suporte e Infraestrutura de TI',
        'exp.lfdados.role': 'Analista de Dados',
        'exp.lffull.role': 'Desenvolvedor FullStack',
        'exp.r2t.role': 'Assistente Administrativo de TI',

        'exp.type.full': 'Integral',
        'exp.type.intern': 'Estagiário',
        'exp.type.apprentice': 'Aprendiz',
        'exp.present': 'Atual',

        'exp.sebrae.1': 'Desenvolvi consultas SQL para uso em relatórios gerenciais',
        'exp.sebrae.2': 'Criei e implementei scripts de automação',
        'exp.sebrae.3': 'Integrei ferramentas de IA em processos internos',
        'exp.sebrae.4': 'Automatizei processos usando modelos de IA',
        'exp.sebrae.5': 'Prestei suporte técnico (N1 e N2)',
        'exp.sebrae.6': 'Gerenciei relatórios via TOTVS SmartView e RM Reports',
        'exp.sebrae.7': 'Migrei relatórios Delphi para .NET',

        'exp.lfdados.1': 'Realizei higienização e tratamento de leads',
        'exp.lfdados.2': 'Administrei bancos de dados',
        'exp.lfdados.3': 'Desenvolvi fluxos automatizados para WhatsApp',
        'exp.lfdados.4': 'Criei sistema disparador de mensagens',
        'exp.lfdados.5': 'Implementei soluções ETL',

        'exp.lffull.1': 'Gerenciei chatbots e discadoras',
        'exp.lffull.2': 'Desenvolvi sistema web PHP com MySQL',
        'exp.lffull.3': 'Integrei sistema ao banco digital Master',
        'exp.lffull.4': 'Desenvolvi sistema de ponto eletrônico',
        'exp.lffull.5': 'Criei manager de disparo de mensagens WhatsApp',

        'exp.r2t.1': 'Realizei manutenção de hardware',
        'exp.r2t.2': 'Prestei suporte administrativo',
        'exp.r2t.3': 'Organizei documentação',
        'exp.r2t.4': 'Utilizei Power BI para análise de dados',

        // Projects
        'projects.badge': 'Projetos em Destaque',
        'projects.desc': 'Conheça alguns dos projetos em que atuei',
        'projects.view': 'Visualizar',

        'projects.josiane.title': 'Landing Page - Psicóloga Josiane Cordeiro',
        'projects.josiane.desc': 'Landing page profissional para a psicóloga Josiane Cordeiro, com informações sobre seus serviços, especialidades e contato.',

        'projects.surf.title': 'API de Competições de Surfe',
        'projects.surf.desc': 'API RESTful em Laravel para gerenciamento de competições de surfe, incluindo surfistas, baterias, ondas e sistema de pontuação.',

        'projects.wpp.title': 'Sistema de Disparo WhatsApp',
        'projects.wpp.desc': 'Plataforma automatizada para disparo de mensagens WhatsApp com verificação de números ativos e gestão de instâncias.',

        'projects.chamaai.title': 'Landing Page - ChamaAI da Oncode',
        'projects.chamaai.desc': 'Landing page para o produto ChamaAI da Oncode, a plataforma exclusiva que transforma a maneira como sua empresa lida com o atendimento, utilizando Inteligência Artificial.',

        // Contact
        'contact.badge': 'Contato',
        'contact.title': 'Vamos trabalhar juntos?',
        'contact.desc': 'Estou sempre aberto a novas oportunidades e desafios. Sinta-se à vontade para entrar em contato comigo através do whatsapp ou qualquer um dos canais abaixo.',

        'contact.email': 'Email',
        'contact.email.val': 'matheuzt52@gmail.com',
        'contact.location': 'Localização',
        'contact.location.val': 'Salvador, BA - Brasil',

        'contact.social': 'Me encontre nas redes',

        'contact.social.github': 'Siga no GitHub',
        'contact.social.linkedin': 'Conecte-se no LinkedIn',
        'contact.social.wpp': 'Fale no WhatsApp',

        'contact.form.name': 'Seu Nome',
        'contact.form.name.ph': 'João da Silva',
        'contact.form.email': 'Seu Email',
        'contact.form.email.ph': 'joao@exemplo.com',
        'contact.form.message': 'Sua Mensagem',
        'contact.form.message.ph': 'Olá Mateus, gostaria de falar sobre um projeto...',
        'contact.form.send': 'Enviar Mensagem',
        'contact.form.sending': 'Enviando...',
        'contact.form.success': 'Mensagem enviada com sucesso!',

        // Footer
        'contact.rights': 'Todos os direitos reservados.',
        'footer.rights': 'Todos os direitos reservados.',
        'footer.built': 'Desenvolvido por Mateus Tosta.'
    },
    en: {
        // Navbar
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.experience': 'Experience',
        'nav.services': 'Services',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Hero
        'hero.greeting': 'Hi, I\'m Mateus Tosta 👋',
        'hero.title': 'FullStack Developer',
        'hero.subtitle': 'Passionate about technology, creating efficient solutions focused on user experience.',
        'hero.cta.download': 'Download Resume',
        'hero.cta.projects': 'View Projects',
        'hero.availability': 'Available for new projects',
        'hero.years': 'Years of',
        'hero.experience': 'Experience',
        'hero.projects': 'Projects',
        'hero.completed': 'Completed',
        'hero.projects.view': 'View Projects',

        // Expertise
        'expertise.badge': 'Expertise',
        'expertise.title': 'Technical Solutions & Strategies',
        'expertise.desc': 'Focused on solving complex problems with clean code and scalable architecture',

        'expertise.performance.title': 'Performance & Optimization',
        'expertise.performance.desc': 'Focus on Core Web Vitals, lazy loading, and rendering optimization.',

        'expertise.seo.title': 'SEO & Accessibility',
        'expertise.seo.desc': 'Semantic development focused on ranking and accessibility (WCAG).',

        'expertise.clean.title': 'Clean Code & Architecture',
        'expertise.clean.desc': 'SOLID principles, Design Patterns, and testable, maintainable code.',

        'expertise.api.title': 'API Integration',
        'expertise.api.desc': 'Consuming and building secure and efficient RESTful APIs.',

        // Indicators
        'indicators.title': 'Transforming ideas into innovative digital solutions for growing companies.',
        'indicators.clients': 'CLIENTS SERVED',
        'indicators.projects': 'DELIVERED PROJECTS',
        'indicators.experience': 'YEARS OF EXPERIENCE',

        // Partners
        'partners.badge': 'Partner Clients',
        'partners.desc': 'Companies and institutions that trust my work',

        // Added Missing Skills
        'skills.ai': 'Artificial Intelligence',
        'skills.ai.verticalAgents': 'Vertical Agents',
        'skills.ai.automation': 'AI Automation',
        'skills.design.prototyping': 'Rapid Prototyping',

        // About
        'about.badge': 'About me',
        'about.title': 'Get to know me better',
        'about.p1': 'Systems Analysis and Development student and web development enthusiast, currently working as an IT Support and Infrastructure Intern.',
        'about.p2': 'Throughout my journey, I have sought to combine academic knowledge with market practice, developing skills in technologies such as React.js, Tailwind CSS, TypeScript, PHP, and MySQL.',
        'about.p3': 'I am driven by the desire to create modern and responsive interfaces, combined with efficient backend solutions. My goal is always to deliver fluid user experiences and solve real problems through programming.',

        // Skills
        'skills.badge': 'My Skills',
        'skills.title': 'Technologies I master',

        // Experience
        'exp.badge': 'Professional Experience',

        // Resume Details
        'exp.cast.role': 'Help Desk Attendant',
        'exp.sebrae.role': 'IT Support and Infrastructure',
        'exp.lfdados.role': 'Data Analyst',
        'exp.lffull.role': 'FullStack Developer',
        'exp.r2t.role': 'IT Administrative Assistant',

        'exp.type.full': 'Full-time',
        'exp.type.intern': 'Intern',
        'exp.type.apprentice': 'Apprentice',
        'exp.present': 'Present',

        'exp.sebrae.1': 'Developed SQL queries used in management reports',
        'exp.sebrae.2': 'Created and implemented automation scripts',
        'exp.sebrae.3': 'Integrated AI tools into internal processes',
        'exp.sebrae.4': 'Automated processes using AI models',
        'exp.sebrae.5': 'Provided (N1 and N2) technical support',
        'exp.sebrae.6': 'Managed reports via TOTVS SmartView and RM Reports',
        'exp.sebrae.7': 'Migrated Delphi reports to .NET',

        'exp.lfdados.1': 'Performed lead sanitization and treatment',
        'exp.lfdados.2': 'Managed databases',
        'exp.lfdados.3': 'Developed automated flows for WhatsApp',
        'exp.lfdados.4': 'Created message broadcasting system',
        'exp.lfdados.5': 'Implemented ETL solutions',

        'exp.lffull.1': 'Managed chatbots and dialers',
        'exp.lffull.2': 'Developed PHP web system with MySQL',
        'exp.lffull.3': 'Integrated system with Master digital bank',
        'exp.lffull.4': 'Developed electronic time-tracking system',
        'exp.lffull.5': 'Created WhatsApp message broadcasting manager',

        'exp.r2t.1': 'Performed hardware maintenance',
        'exp.r2t.2': 'Provided administrative support',
        'exp.r2t.3': 'Organized documentation',
        'exp.r2t.4': 'Used Power BI for data analysis',

        // Projects
        'projects.badge': 'Featured Projects',
        'projects.desc': 'Discover some of the projects I have worked on',
        'projects.view': 'View',

        'projects.josiane.title': 'Landing Page - Psychologist Josiane Cordeiro',
        'projects.josiane.desc': 'Professional landing page for psychologist Josiane Cordeiro, providing information about her services, specialties, and contact.',

        'projects.surf.title': 'Surfing Competitions API',
        'projects.surf.desc': 'RESTful API in Laravel for managing surfing competitions, including surfers, heats, waves, and scoring system.',

        'projects.wpp.title': 'WhatsApp Broadcasting System',
        'projects.wpp.desc': 'Automated platform for broadcasting WhatsApp messages with active number verification and instance management.',

        'projects.chamaai.title': 'Landing Page - ChamaAI by Oncode',
        'projects.chamaai.desc': 'Landing page for the ChamaAI product by Oncode, an exclusive platform that transforms how your company handles customer service using Artificial Intelligence.',

        // Contact
        'contact.badge': 'Contact',
        'contact.title': 'Let\'s work together?',
        'contact.desc': 'I am always open to new opportunities and challenges. Feel free to contact me via whatsapp or any of the channels below.',

        'contact.email': 'Email',
        'contact.email.val': 'matheuzt52@gmail.com',
        'contact.location': 'Location',
        'contact.location.val': 'Salvador, BA - Brazil',

        'contact.social': 'Find me on my socials',

        'contact.social.github': 'Follow on GitHub',
        'contact.social.linkedin': 'Connect on LinkedIn',
        'contact.social.wpp': 'Chat on WhatsApp',

        'contact.form.name': 'Your Name',
        'contact.form.name.ph': 'John Doe',
        'contact.form.email': 'Your Email',
        'contact.form.email.ph': 'john@example.com',
        'contact.form.message': 'Your Message',
        'contact.form.message.ph': 'Hi Mateus, I would like to talk about a project...',
        'contact.form.send': 'Send Message',
        'contact.form.sending': 'Sending...',
        'contact.form.success': 'Message sent successfully!',

        // Footer
        'contact.rights': 'All rights reserved.',
        'footer.rights': 'All rights reserved.',
        'footer.built': 'Developed by Mateus Tosta.'
    }
};
