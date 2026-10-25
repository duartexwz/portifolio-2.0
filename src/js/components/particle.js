/* Configuração básica para criar pontos conectados por linhas */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60, /* Quantidade de bolinhas na tela */
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#ffffff" }, /* Cor das bolinhas */
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.4, /* Opacidade baixa para não distrair a leitura */
      "random": false
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4, /* Linhas bem suaves */
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6, /* Velocidade do movimento */
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" }, /* Linhas conectam ao mouse */
      "onclick": { "enable": false, "mode": "push" }, /* Cria mais partículas ao clicar */
      "resize": true
    },
    "modes": {
      "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});