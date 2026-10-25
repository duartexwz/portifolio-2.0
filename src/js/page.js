import  scrollTriggerPage  from './components/scrollTrigger.js';
import  barraAnimada  from './components/barraAnimada.js';
import  criarBloco  from './components/footer.js';
import  LoadModais  from './components/modais.js'
import  AnimarTecnologias  from './components/tecnologias.js';
import renderizarProjetos from './data/projetos.js';
import  FormPage  from './utils/form.js';

window.addEventListener("load", () => {
    scrollTriggerPage();
    barraAnimada();
    AnimarTecnologias();
    LoadModais();
    criarBloco();
    FormPage();

    const btnAbrirModal = document.getElementById(
      "btn-orcamento-footer",
    );
    btnAbrirModal.addEventListener("click", () => {
      const abrirModal = new CustomEvent("abrirModalOrcamento", {
        bubbles: true,  // Permite que o evento suba na árvore do DOM
        composed: true
      });
      btnAbrirModal.dispatchEvent(abrirModal)
    });
    setTimeout(() => {
        ScrollTrigger.refresh(true);
        
        const ItemInicial = document.querySelector(".nav-item--active") || document.querySelector(".nav-item");
        const indicador = document.querySelector(".nav-circle");

        if (ItemInicial && indicador){
            MoverIndicador(ItemInicial);
        }

    }, 200);

    
});

// Corrigir o erro de load com o evento de form 
