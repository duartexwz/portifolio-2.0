const listProjetos = [
  {
    capa: "/src/assets/agendamento_coffito-fotos/painel_page.png",
    titulo: "Sistema de Agendamento COFFITO",
    descricao:
      "Plataforma de gestão de espaços e eventos institucionais para o Conselho Federal de Fisioterapia e Terapia Ocupacional.",
    tecnologias: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    links: [
      {
        icone_link: "/src/assets/icons/link-svgrepo-com.svg",
        nome_link: "Ver detalhes",
      },
      {
        icone_link: "/src/assets/icons/external-link-svgrepo-com.svg",
        nome_link: "Documentação",
        url_link: "https://github.com/duartexwz/sistema-agendamento-coffito",
      },
      {
        icone_link: "/src/assets/icons/internet-svgrepo-com.svg",
        nome_link: "Ver Projeto",
        url_link: "https://sistema-agendamento-coffito.vercel.app",
      },
    ],
    problema:
      "A necessidade de otimizar e automatizar a gestão de solicitações, reservas de espaços e agendamentos institucionais, substituindo processos manuais propensos a falhas por uma plataforma centralizada, ágil e auditável.",
    solucao:
      "Desenvolvimento de um sistema web completo de agendamento e gerenciamento de recursos, oferecendo controle de solicitações, fluxos de validação, trilhas de auditoria e notificações automáticas para os usuários envolvidos.",
    abordagem:
      "Arquitetura orientada a microsserviços/APIs robustas com separação clara de responsabilidades, estruturação de rotas RESTful eficientes, validação rigorosa de dados de entrada e persistência segura em banco de dados relacional. O ambiente foi totalmente containerizado via Docker para garantir reprodutibilidade e facilidade de deploy.",
    tecnologias_usadas:
      "Python, FastAPI, Pydantic, SQLAlchemy/Alembic, PostgreSQL, AsyncPG, Docker, Docker Compose, Git e Linux.",
    resultado:
      "Uma aplicação altamente performática, segura e escalável, com código limpo e organizado seguindo padrões de mercado, facilitando a manutenção e garantindo confiabilidade operacional no controle de agendamentos.",
    ambiente_demonstracao: {
        acesso: {
            admin: "admin.public@gmail.com",
            senha: "Admin@123"
        },
        observacoes: "Integrações de terceiros podem não funcionar nesta versão pública por motivos de segurança das chaves de acesso."
    },
    imagens_carrossel: [
      "/src/assets/agendamento_coffito-fotos/painel_page.png",
      "/src/assets/agendamento_coffito-fotos/login_page.png",
      "/src/assets/agendamento_coffito-fotos/modal_page.png",
      "/src/assets/agendamento_coffito-fotos/formulario_page.png",
      "/src/assets/agendamento_coffito-fotos/calendario_page.png",
    ],
  },
  {
    capa: "/src/assets/JpCroco-Fotos/page_home.png",
    titulo: "JP Croco",
    descricao:
      "Plataforma de e-commerce de roupas com catálogo de produtos dinâmico, gerenciamento de carrinho e integrações de pagamento.",
    tecnologias: ["React", "Bootstrap 5", "Python", "PostgreSQL"],
    links: [
      {
        icone_link: "/src/assets/icons/link-svgrepo-com.svg",
        nome_link: "Ver detalhes",
      },
      {
        icone_link: "/src/assets/icons/external-link-svgrepo-com.svg",
        nome_link: "Repositório",
        url_link: "https://github.com/duartexwz/JpCroco",
      },
      {
        icone_link: "/src/assets/icons/internet-svgrepo-com.svg",
        nome_link: "Ver Projeto",
        url_link: "https://jpcroco-portifolio.vercel.app",
      },
    ],
    problema:
      "A necessidade de digitalizar as vendas da loja de roupas, criando um canal direto e profissional para a exibição do catálogo e facilitando o processo de compra dos clientes.",
    solucao:
      "Desenvolvimento de uma loja virtual sob medida, com um sistema de carrinho de compras fluido, responsivo e preparado para conversão.",
    abordagem:
      "Construção de uma interface frontend moderna focada na experiência do usuário (UI/UX), integrada a um backend robusto para gerenciar o estoque, os pedidos e as transações financeiras.",
    tecnologias_usadas:
      "O projeto utiliza ferramentas modernas de desenvolvimento web, garantindo alta performance no lado do cliente e segurança na persistência de dados e processamento do servidor.",
    resultado:
      "Um e-commerce funcional e moderno que automatiza o fluxo de vendas e expande o alcance digital da marca.",
    ambiente_demonstracao: {
        acesso: {
            admin: "jpCroco.public@gmail.com",
            senha: "Admin@123"
        },
        observacoes: "A função de pagamento e de frete estará indisponível, por motivos de segurança aos dados do cliente, as variáveis de integração foram removidas."
    },
    imagens_carrossel: [
      "/src/assets/JpCroco-Fotos/login_page.png",
      "/src/assets/JpCroco-Fotos/modal_camisa.png",
      "/src/assets/JpCroco-Fotos/modal_pagamento.png",
      "/src/assets/JpCroco-Fotos/page_catalogo.png",
      "/src/assets/JpCroco-Fotos/page_home.png",
    ],
  },
  {
    capa: "/src/assets/Agendamento-fisioterapia/index-cliente.png",
    titulo: "Agendamento Saúde Ocupacional",
    descricao:
      "Sistema web completo para agendamento de sessões de fisioterapia e terapia ocupacional, contendo interface pública e painel administrativo.",
    tecnologias: ["Node.js", "Express", "JavaScript", "HTML/CSS"],
    links: [
      {
        icone_link: "/src/assets/icons/link-svgrepo-com.svg",
        nome_link: "Ver detalhes",
      },
      {
        icone_link: "/src/assets/icons/external-link-svgrepo-com.svg",
        nome_link: "Repositório",
        url_link:
          "https://github.com/duartexwz/agendamento-fisioterapia-coffito",
      },
      {
        icone_link: "/src/assets/icons/internet-svgrepo-com.svg",
        nome_link: "Ver Projeto",
        url_link: "https://agendamento-fisioterapia-coffito.vercel.app",
      },
    ],
    problema:
      "A necessidade de organizar de forma eficiente as marcações de consultas de saúde ocupacional, garantindo o controle rigoroso de vagas disponíveis por sessão e facilitando a gestão de profissionais.",
    solucao:
      "Desenvolvimento de uma plataforma de agendamentos com gestão em tempo real de vagas, contendo uma página pública simplificada para inscrições e um painel de administração protegido por autenticação.",
    abordagem:
      "Implementação de uma API RESTful em Node.js com Express e arquivos JSON como banco de dados. No front-end, optou-se por tecnologias nativas (Vanilla JS em módulos, HTML e CSS puros) integradas ao FullCalendar para uma interface leve, orquestrando tudo em containers Docker.",
    tecnologias_usadas:
      "O projeto utiliza Node.js para regras de negócio robustas no backend e dispensa frameworks complexos no frontend, focando em requisições assíncronas via Axios e modularidade ES6. A infraestrutura é inteiramente dockerizada, garantindo portabilidade sem etapa de build no front.",
    resultado:
      "Uma ferramenta responsiva que automatiza o fluxo de reservas, impede o agendamento em sessões lotadas e centraliza a gestão de participantes e eventos para a equipe de administração.",
    ambiente_demonstracao: {
        acesso: {
            admin: "fisioterapia.public@gmail.com",
            senha: "Admin@123",
            pagina_admin: "Basta adicionar o <code>admin.html</code> a url do site para acessar o painel",
        },
        observacoes: "O salvamento de dados no arquivo json pode está indisponível pela falta de suporte para esse tipo de armazenamento no vercel."
    },
    imagens_carrossel: [
      "/src/assets/Agendamento-fisioterapia/Calendario-Admin.png",
      "/src/assets/Agendamento-fisioterapia/Adicionar-Profissional.png",
      "/src/assets/Agendamento-fisioterapia/Adicionar-Evento.png",
      "/src/assets/Agendamento-fisioterapia/Cadastros.png",
      "/src/assets/Agendamento-fisioterapia/Sessao-Selecionada-Cliente.png",
    ],
  },
  {
    capa: "/src/assets/nail-appointment-img/home-2.png",
    titulo: "Ana Clara Nails",
    descricao:
      "Sistema completo de agendamento online para nail designers, incluindo catálogo interativo de modelos, gestão de horários e pagamento antecipado de sinal.",
    tecnologias: ["React", "FastAPI", "PostgreSQL", "Vercel"],
    links: [
      {
        icone_link: "/src/assets/icons/link-svgrepo-com.svg",
        nome_link: "Ver detalhes",
      },
      {
        icone_link: "/src/assets/icons/external-link-svgrepo-com.svg",
        nome_link: "Repositório",
        url_link: "https://github.com/duartexwz/anaclara-nails",
      },
      {
        icone_link: "/src/assets/icons/internet-svgrepo-com.svg",
        nome_link: "Ver Projeto",
        url_link: "https://agendamento-nails-dev.vercel.app"
      }
    ],
    problema:
      "A necessidade de organizar a agenda da profissional de forma automatizada, evitando conflitos de horários e reduzindo as faltas de clientes através da cobrança de um sinal antecipado.",
    solucao:
      "Desenvolvimento de uma plataforma web que integra o agendamento de serviços ao Mercado Pago, além de fornecer um painel administrativo completo para gerenciar a equipe, as clientes e o fluxo de caixa.",
    abordagem:
      "Construção de uma aplicação moderna com frontend em React e TanStack Start, integrado a uma API robusta em FastAPI e PostgreSQL. A infraestrutura utiliza Docker e Nginx para orquestração e resolução de CORS.",
    tecnologias_usadas:
      "O projeto utiliza Python com FastAPI para validações e regras de negócio de alta performance no backend. O frontend é uma SPA ágil com React 19, utilizando Mercado Pago (Checkout Bricks) para transações seguras.",
    resultado:
      "Um sistema escalável que profissionaliza o atendimento, garante o comprometimento das clientes via pagamento de sinal e centraliza toda a administração do salão em uma única interface.",
    ambiente_demonstracao: {
        acesso: {
            admin: "nail.public@gmail.com",
            senha: "Admin@123"
        },
        observacoes: "A função de pagamento estará indisponível, por motivos de segurança aos dados da cliente, as variáveis do Mercado Pago API foram removidas."
    },
    imagens_carrossel: [
      "/src/assets/nail-appointment-img/home-2.png",
      "/src/assets/nail-appointment-img/catalogo.png",
      "/src/assets/nail-appointment-img/agendar.png",
      "/src/assets/nail-appointment-img/painel.png",
      "/src/assets/nail-appointment-img/horarios-painel.png",
    ],
  },
];

// Manter no renderizarProjetos somente o laço principal, a clonagem do template e o appendChild final

// Criar uma função preencherDadosProjeto(clne, projeto) -> enviar o clone e os dados para essa função

// Criar uma função inicializarCarrossel(clone, imagens_carrossel) -> isolar toda a criação do carrossel e dos botões de passar as imagens e o setInterval

// Criar função configurarBotaoDetalhes(clone) -> mover a logica do addEventListener para lá

export default function renderizarProjetos() {
  const containerProjetos = document.getElementById("portifolio-container");
  const template = document.getElementById("projeto-card");

  if (!containerProjetos || !template) return;

  listProjetos.forEach((projeto) => {
    const clone = template.content.cloneNode(true);

    // Preenchendo dados básicos
    clone.querySelector(".projeto-imagem img").src = projeto.capa;
    clone.querySelector(".titulo-projeto").textContent = projeto.titulo;
    clone.querySelector(".descricao-curta").textContent = projeto.descricao;

    // Preenchendo textos das seções detalhadas
    clone.querySelector(".problema").textContent = projeto.problema;
    clone.querySelector(".solucao").textContent = projeto.solucao;
    clone.querySelector(".abordagem").textContent = projeto.abordagem;
    clone.querySelector(".tecnologias").textContent =
      projeto.tecnologias_usadas;
    clone.querySelector(".resultado").textContent = projeto.resultado;
    clone.querySelector(".ambiente_demonstracao-pagina").innerHTML = projeto.ambiente_demonstracao.acesso.pagina_admin || null;
    clone.querySelector(".ambiente_demonstracao-admin").textContent = projeto.ambiente_demonstracao.acesso.admin;
    clone.querySelector(".ambiente_demonstracao-senha").textContent = projeto.ambiente_demonstracao.acesso.senha;
    clone.querySelector(".ambiente_demonstracao-obs").textContent = projeto.ambiente_demonstracao.observacoes;

    // Badges de tecnologias
    const containerTechs = clone.querySelector(".projeto-techs");
    if (containerTechs && projeto.tecnologias) {
      projeto.tecnologias.forEach((tech) => {
        const badge = document.createElement("span");
        badge.className = "tech-badge";
        badge.textContent = tech;
        containerTechs.appendChild(badge);
      });
    }

    // Carrossel de imagens
    const carrosselImagem = clone.querySelector(".carrossel-inner");
    if (carrosselImagem && projeto.imagens_carrossel) {
      projeto.imagens_carrossel.forEach((srcImagem) => {
        const img = document.createElement("img");
        img.src = srcImagem;
        img.className = "carrossel-img";
        carrosselImagem.appendChild(img);
      });
    }

    // Lógica de Animação em Loop Infinito
    const prevBtn = clone.querySelector(".prev");
    const nextBtn = clone.querySelector(".next");
    const totalItens = projeto.imagens_carrossel
      ? projeto.imagens_carrossel.length
      : 0; // If, Else de forma estruturada com operadores
    // projeto.imagens_carrosse <- A condição, ? <- operador IF, projeto.imagens_carrossel <- o que será executado caso o primeiro operador seja verdadeiro
    // : <- operdador Else, 0 <- o que será executado caso o operador else seja verdade

    if (totalItens > 1) {
      let isAnimating = false;

      nextBtn.addEventListener("click", () => {
        if (isAnimating) return;
        isAnimating = true;

        carrosselImagem.style.transition = "transform 0.4s ease-in-out";
        carrosselImagem.style.transform = `translateX(-100%)`;

        setTimeout(() => {
          carrosselImagem.style.transition = "none";
          carrosselImagem.appendChild(carrosselImagem.firstElementChild);

          // FORÇA O REFLOW: Obrigatório para o navegador não ignorar a transição
          carrosselImagem.offsetHeight;

          carrosselImagem.style.transform = `translateX(0%)`;
          isAnimating = false;
        }, 400);
      });

      prevBtn.addEventListener("click", () => {
        if (isAnimating) return;
        isAnimating = true;

        carrosselImagem.style.transition = "none";
        carrosselImagem.prepend(carrosselImagem.lastElementChild);
        carrosselImagem.style.transform = `translateX(-100%)`;

        // FORÇA O REFLOW
        carrosselImagem.offsetHeight;

        // O setTimeout agora só lida com a transição de volta para 0
        setTimeout(() => {
          carrosselImagem.style.transition = "transform 0.4s ease-in-out";
          carrosselImagem.style.transform = `translateX(0%)`;
        }, 10);

        setTimeout(() => {
          isAnimating = false;
        }, 410);
      });

      // Autoplay
      setInterval(() => {
        nextBtn.click();
      }, 4000);
    } else if (prevBtn && nextBtn) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
    }

    // Configurando link de "Ver detalhes" e a caixa expansível
    const linkDetalhes = clone.querySelector(".link-detalhes");
    const boxVerMais = clone.querySelector(".ver-mais");
    const carrossel = clone.querySelector(".carrossel-fotos");
    const containerImagem = clone.querySelector(".projeto-imagem");

    if (linkDetalhes && projeto.links && projeto.links[0]) {
      linkDetalhes.href = projeto.links[0].url_link || "#";
      linkDetalhes.querySelector("img").src = projeto.links[0].icone_link;

      const spanTexto = linkDetalhes.querySelector("span");
      const textoOriginal = projeto.links[0].nome_link || "Ver detalhes";
      if (spanTexto) spanTexto.textContent = textoOriginal;

      if (boxVerMais) {
        linkDetalhes.addEventListener("click", (e) => {
          e.preventDefault();
          boxVerMais.classList.toggle("active");
          linkDetalhes.classList.toggle("active");
          carrossel.classList.toggle("active");
          containerImagem.classList.toggle("desactive");

          if (spanTexto) {
            spanTexto.textContent = boxVerMais.classList.contains("active")
              ? "Ocultar detalhes"
              : textoOriginal;
          }
        });
      }
    }

    // Configurando link do Repositório/Documentação
    const linkRepo = clone.querySelector(".link-repo");
    if (linkRepo && projeto.links && projeto.links[1]) {
      linkRepo.href = projeto.links[1].url_link || "#";
      linkRepo.querySelector("img").src = projeto.links[1].icone_link;
      linkRepo.querySelector("span").textContent = projeto.links[1].nome_link;
    }

    const linkProject = clone.querySelector(".link-project");
    if (linkProject && projeto.links && projeto.links[2]) {
        linkProject.href = projeto.links[2].url_link || "#";
        linkProject.querySelector("img").src = projeto.links[2].icone_link;
        linkProject.querySelector("span").textContent = projeto.links[2].nome_link;
    }

    containerProjetos.appendChild(clone);
  });
}

window.addEventListener("DOMContentLoaded", renderizarProjetos);
