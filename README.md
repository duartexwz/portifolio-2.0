# Portfólio — Mayckon Duarte

Portfólio pessoal de **Mayckon Duarte**, desenvolvedor Full Stack. O site apresenta serviços, trajetória profissional, tecnologias dominadas e projetos desenvolvidos (sistemas de agendamento, e-commerce, automações), além de um formulário para solicitação de orçamento via WhatsApp.

## ✨ Funcionalidades

- **Seções**: Início, Serviços, Sobre, Tecnologias, Portfólio e Contato.
- **Portfólio interativo**: cards de projetos com carrossel de imagens, badges de tecnologias e detalhes expansíveis (problema, solução, abordagem, resultado).
- **Animações**: efeitos de scroll (GSAP + ScrollTrigger), partículas de fundo (particles.js) e barras de progresso animadas.
- **Formulário de orçamento**: modal com seleção de tipo de projeto e envio da mensagem via WhatsApp.
- **Responsivo**: layout adaptado para desktop, tablet e mobile.
- **Tema escuro** com paleta monocromática.

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (ES Modules)
- **Animações**: GSAP 3.12, ScrollTrigger, particles.js
- **Infraestrutura**: Nginx (Alpine), Docker, Docker Compose
- **Fontes**: Google Fonts (Inter, Poppins, Estonia)

## 📁 Estrutura do projeto

```
site-portifolio/
├── docker-compose.yml
├── src/
│   ├── Dockerfile
│   ├── nginx/
│   │   └── default.conf
│   ├── portifolio.html
│   ├── assets/              # imagens, ícones e fotos dos projetos
│   ├── css/
│   │   └── index.css
│   └── js/
│       ├── page.js
│       ├── components/      # footer, modais, partículas, scrollTrigger, tecnologias, barraAnimada
│       ├── data/
│       │   └── projetos.js # dados dos projetos do portfólio
│       ├── utils/
│       │   └── form.js
│       └── vendor/
│           └── particles.min.js
└── .vscode/
```

## 🚀 Como executar

### Com Docker (recomendado)

Na raiz do projeto:

```bash
docker compose up --build
```

O site ficará disponível em `http://localhost:8017`.

### Sem Docker (servidor estático)

Como o projeto é estático, basta servir a pasta `src` com qualquer servidor HTTP:

```bash
# Python
cd src && python -m http.server 8080

# Node (npx)
npx serve src
```

Acesse `http://localhost:8080/portifolio.html`.

> Observação: os caminhos dos assets usam `/src/...`, por isso o servidor deve ter a raiz do projeto (e não apenas `src/`) ou ajustar os caminhos.

## 🐳 Deploy

A imagem Docker é baseada em `nginx:alpine`, copia os arquivos para `/usr/share/nginx/html/src` e move `portifolio.html` para a raiz, servindo na porta `17`. O `docker-compose.yml` mapeia a porta do host `8017` para a porta do container `17`.

## 📝 Personalização

- **Projetos**: edite `src/js/data/projetos.js` para adicionar/remover projetos.
- **Conteúdo**: textos e seções estão em `src/portifolio.html`.
- **Estilos**: `src/css/index.css` (inclui os breakpoints responsivos).
- **Contato/WhatsApp**: atualize os links `wa.me` em `portifolio.html` e `src/js/components/footer.js`.

## 📄 Licença

Projeto de uso pessoal/portfólio. Sinta-se à vontade para se inspirar, mas mantenha os créditos ao autor.