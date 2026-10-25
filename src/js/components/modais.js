
export default function LoadModais(){
    function divPersonalizada(){
        const select = document.getElementById("select-projeto");
        const trigger = document.querySelector(".select-trigger");
        const options = document.querySelectorAll(".option");
        const spanTrigger = trigger.querySelector("span");
        const hiddenInput = document.getElementById("valorSelecionado");

        if(!select || !trigger || !hiddenInput || !spanTrigger ) return;

        trigger.addEventListener("click", () => {
            select.classList.toggle("open");
        });

        options.forEach(option => {
            option.addEventListener("click", () => {
                spanTrigger.textContent = option.textContent;
                hiddenInput.value = option.getAttribute("data-value");
                select.classList.remove("open");
            });
        });
    }


    // Carregamento da modal de orçamento 

    // Refatorar a função corrigindo a quantidade de addEventListener, atualmente a fução houve cada clique separadamente, próximo passo é tentar fazer o evento ser ouvido no container principal, e passar os seus devidos parâmentros corretamente.
    function initModalOrcamento() {
        const modal = document.getElementById("orcamento-card");
        const overlay = document.getElementById("overlay"); 

        if (!modal) return;

        function abrirModal() {
            modal.style.display = "flex";
            if (overlay) overlay.style.display = "flex";
        }

        function fecharModal() {
            modal.style.display = "none";
            if (overlay) overlay.style.display = "none";
        }

        document.addEventListener("abrirModalOrcamento", () => {
            abrirModal();
        });

        window.addEventListener("click", function(event){
            if (overlay && event.target === overlay) {
                fecharModal();
            }
        });

        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                fecharModal();
            }
        });
    }


    divPersonalizada();
    initModalOrcamento();
    
}