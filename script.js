/**
 * ==========================================================================
 * JavaScript Vanilla - Portfólio Profissional Diogo Soneghete de Almeida
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initActiveNavHighlight();
  initSkillFilters();
  initProjectFilters();
  initContactForm();
  initBackToTop();
  initFooterYear();
});

/* ==========================================================================
   1. GERENCIAMENTO DE TEMA (CLARO / ESCURO)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const lightIcon = document.getElementById('theme-toggle-light-icon');
  const darkIcon = document.getElementById('theme-toggle-dark-icon');

  if (!themeToggleBtn) return;

  // Verifica preferência salva ou do sistema
  const savedTheme = localStorage.getItem('color-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
    lightIcon.classList.remove('hidden');
    darkIcon.classList.add('hidden');
  } else {
    document.documentElement.classList.remove('dark');
    lightIcon.classList.add('hidden');
    darkIcon.classList.remove('hidden');
  }

  themeToggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');

    if (isDark) {
      localStorage.setItem('color-theme', 'dark');
      lightIcon.classList.remove('hidden');
      darkIcon.classList.add('hidden');
    } else {
      localStorage.setItem('color-theme', 'light');
      lightIcon.classList.add('hidden');
      darkIcon.classList.remove('hidden');
    }
  });
}

/* ==========================================================================
   2. MENU MOBILE RESPONSIVO
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  function toggleMenu() {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
    iconOpen.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
  }

  menuBtn.addEventListener('click', toggleMenu);

  // Fecha o menu ao clicar em qualquer link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (!mobileMenu.classList.contains('hidden')) {
        toggleMenu();
      }
    });
  });
}

/* ==========================================================================
   3. DESTAQUE DA SEÇÃO ATIVA NO HEADER (INTERSECTION OBSERVER)
   ========================================================================== */
function initActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active-link');
          } else {
            link.classList.remove('active-link');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   4. FILTROS DE HABILIDADES / TECNOLOGIAS
   ========================================================================== */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('[data-skill-filter]');
  const skillCards = document.querySelectorAll('.skill-card');

  if (!filterBtns.length || !skillCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Atualiza estado visual dos botões
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-skill-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   5. FILTROS E BUSCA DE PROJETOS EM TEMPO REAL
   ========================================================================== */
function initProjectFilters() {
  const searchInput = document.getElementById('project-search');
  const tagBtns = document.querySelectorAll('[data-project-filter]');
  const projectCards = document.querySelectorAll('.project-card');

  let activeTag = 'all';

  function filterProjects() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

    projectCards.forEach(card => {
      const tags = card.getAttribute('data-tags') || '';
      const textContent = card.textContent.toLowerCase();

      const matchesTag = (activeTag === 'all' || tags.includes(activeTag));
      const matchesSearch = (!searchTerm || textContent.includes(searchTerm));

      if (matchesTag && matchesSearch) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterProjects);
  }

  tagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tagBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeTag = btn.getAttribute('data-project-filter');
      filterProjects();
    });
  });
}

/* ==========================================================================
   6. LÓGICA DO MODAL DE DETALHES DOS PROJETOS
   ========================================================================== */
const projectsData = {
  broker: {
    category: "Web Corporativo",
    title: "Broker Corretora - Sistema de Gestão Comercial",
    description: "Plataforma web corporativa desenvolvida para centralizar e automatizar toda a operação da Broker Corretora. O sistema conta com um painel executivo completo para administradores, área de metas e comissões para corretores e exibição de métricas em tempo real para telas de TV no escritório.",
    problem: "Processos manuais descentralizados em planilhas que geravam atrasos no disparo de comunicados, erros de digitação e falta de visibilidade em tempo real sobre o fechamento de vendas.",
    result: "🚀 60% de redução no tempo de processamento de dados comerciais com automação de disparos de e-mail em massa e importação inteligente de Excel.",
    techs: ["React 18", "TypeScript", "Vite 7", "Tailwind CSS", "Shadcn UI", "React Query", "Supabase (PostgreSQL, Realtime, Edge Functions)", "Resend API", "Vitest"],
    link: "https://brokerbkr.vercel.app/"
  },
  backup: {
    category: "Desktop & Cloud Security",
    title: "Sistema de Backup Automático Incremental",
    description: "Sistema inteligente para desktop e API Web contra perda de dados causadas por falhas de hardware, ransomware ou exclusão acidental. Automatiza a detecção de alterações, gera cópias seguras com versionamento e permite restauração instantânea.",
    problem: "Riscos operacionais de perda de dados críticos por falta de rotina automática de backup e dependência de intervenções manuais diárias.",
    result: "Automação total de backups diários incrementais com criptografia de ponta a ponta e sincronização segura com AWS S3.",
    techs: ["Python", "FastAPI", "SQLite", "PostgreSQL", "Docker", "AWS S3", "REST APIs", "Criptografia AES", "Testes Automatizados"],
    link: "https://github.com/EduardoMMartins07/sistema-backup-inteligente"
  },
  avaliativo: {
    category: "Gestão Acadêmica",
    title: "Sistema Avaliativo Universitário",
    description: "Plataforma completa para avaliação de projetos de feira de ciências e inovação universitária. Desenvolvida com arquitetura MVC (Controllers, Routes e Views), com perfis de acesso diferenciados para administradores e avaliadores.",
    problem: "Dificuldade na distribuição de fichas de avaliação em papel, demora na apuração das notas e erros de cálculo no ranking dos projetos participantes.",
    result: "Digitalização de 100% das avaliações do evento com cálculo de notas instantâneo, autenticação segura e relatórios automatizados.",
    techs: ["TypeScript", "JavaScript", "Node.js", "SQL", "Express", "REST", "Git"],
    link: "https://github.com/DiogoSoneghete/sistema_avaliativo"
  }
};

function openProjectModal(projectId) {
  const modal = document.getElementById('project-modal');
  const data = projectsData[projectId];

  if (!modal || !data) return;

  document.getElementById('modal-category').textContent = data.category;
  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('modal-description').textContent = data.description;
  document.getElementById('modal-problem').textContent = data.problem;
  document.getElementById('modal-result').textContent = data.result;

  const githubBtn = document.getElementById('modal-github-link');
  if (githubBtn && data.link) {
    githubBtn.href = data.link;
  }

  const techsContainer = document.getElementById('modal-techs');
  techsContainer.innerHTML = '';
  data.techs.forEach(tech => {
    const badge = document.createElement('span');
    badge.className = 'px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 text-xs font-semibold';
    badge.textContent = tech;
    techsContainer.appendChild(badge);
  });

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Impede rolagem do fundo

  // Listener para fechar com tecla ESC
  window.addEventListener('keydown', handleModalEsc);
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  modal.classList.add('hidden');
  document.body.style.overflow = '';
  window.removeEventListener('keydown', handleModalEsc);
}

function handleModalEsc(e) {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
}

// Fecha o modal ao clicar fora do conteúdo
document.addEventListener('click', (e) => {
  const modal = document.getElementById('project-modal');
  if (modal && e.target === modal) {
    closeProjectModal();
  }
});

/* ==========================================================================
   7. FORMULÁRIO DE CONTATO COM VALIDAÇÃO E INTERAÇÃO
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const alertBox = document.getElementById('form-alert');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnSpinner = document.getElementById('btn-spinner');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      showAlert('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }

    // Estado de Carregamento
    submitBtn.disabled = true;
    btnText.textContent = 'Enviando...';
    btnSpinner.classList.remove('hidden');

    setTimeout(() => {
      submitBtn.disabled = false;
      btnText.textContent = 'Enviar Mensagem';
      btnSpinner.classList.add('hidden');

      showAlert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve!`, 'success');
      form.reset();
    }, 1200);
  });

  function showAlert(msg, type) {
    alertBox.classList.remove('hidden', 'bg-emerald-500/10', 'text-emerald-500', 'border-emerald-500/20', 'bg-red-500/10', 'text-red-500', 'border-red-500/20');
    
    if (type === 'success') {
      alertBox.classList.add('bg-emerald-500/10', 'text-emerald-600', 'dark:text-emerald-400', 'border', 'border-emerald-500/20');
    } else {
      alertBox.classList.add('bg-red-500/10', 'text-red-600', 'dark:text-red-400', 'border', 'border-red-500/20');
    }

    alertBox.textContent = msg;
  }
}

/* ==========================================================================
   8. BOTÃO VOLTAR AO TOPO
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      backToTopBtn.classList.add('opacity-100', 'translate-y-0');
    } else {
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   9. ANO AUTOMÁTICO NO RODAPÉ
   ========================================================================== */
function initFooterYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
