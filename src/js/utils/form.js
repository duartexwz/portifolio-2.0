export default function FormPage(){
    function identificarSelect(){
        const selectProjeto = document.getElementById('select-projeto');
        if (!selectProjeto) return;

        const triggerSpan = selectProjeto.querySelector('.select-trigger span');
        const inputOculto = document.getElementById('valorSelecionado');
        const options = selectProjeto.querySelectorAll('.option');

        options.forEach(option => {
            option.addEventListener('click', function() {
                const valor = this.getAttribute('data-value');
                const texto = this.textContent;

                inputOculto.value = valor;
                triggerSpan.textContent = texto;

                selectProjeto.dataset.textoSelecionado = texto
            });
        });
    }

    function enviarMensagem() {
        const inputNome = document.getElementById("nome-cliente");
        const selectProjeto = document.getElementById("select-projeto");
        const triggerSpan = selectProjeto.querySelector(".select-trigger span");

        const nome = inputNome ? inputNome.value : "Cliente";

        const tipoProjeto = triggerSpan ? triggerSpan.textContent : "projeto";
        
        const textoEspecial = encodeURIComponent(`Olá Mayckon, me chamo ${nome}, gostaria de realizar um orcamento da criação de um(a) ${tipoProjeto}.`);
        const numeroTelefone = "5561984092729";

        window.open(`https://wa.me/${numeroTelefone}?text=${textoEspecial}`, "_blank")

    }

    
    identificarSelect();

    if (typeof initModalOrcamento === "function"){
        initModalOrcamento();
    }

    const formulario = document.getElementById("FormName");
    const input = document.getElementById("nome-cliente");
    const mensagemErro = document.getElementById("mensagemErro");
    const modal = document.getElementById("orcamento-card");
    const overlay = document.getElementById("overlay");


    if (formulario){
        formulario.addEventListener("submit", (event) => { 
            event.preventDefault();

            const valorNome = input.value.trim();
            const regexNome = /^[A-Za-zÀ-ÿ\s]+$/;

            if (valorNome == ""){
                mensagemErro.innerHTML = "<img src='/src/assets/icons/error-16-svgrepo-com.svg' alt='' style='filter: invert(12%) sepia(96%) saturate(7441%) hue-rotate(360deg) brightness(101%) contrast(114%) opacity(77%);' width='12px'> Por favor, preencha o formulário completo.";
                return;
            } else if(valorNome.length < 5){
                mensagemErro.innerHTML = "<img src='/src/assets/icons/error-16-svgrepo-com.svg' alt='' style='filter: invert(12%) sepia(96%) saturate(7441%) hue-rotate(360deg) brightness(101%) contrast(114%) opacity(77%);' width='12px'> Por favor, insira seu nome corretamente.";
                return;
            } else if (!regexNome.test(valorNome)){
                mensagemErro.innerHTML = "<img src='/src/assets/icons/error-16-svgrepo-com.svg' alt='' style='filter: invert(12%) sepia(96%) saturate(7441%) hue-rotate(360deg) brightness(101%) contrast(114%) opacity(77%);' width='12px'> Por favor, insira um nome válido.";
                return;
            }

            mensagemErro.textContent = "";
            enviarMensagem();

            if (modal) modal.style.display = "none";
            if (overlay) overlay.style.display = "none";

            formulario.reset();

            const triggerSpan = document.querySelector(".select-trigger span");
            if (triggerSpan) triggerSpan.textContent = "Selecione uma opção";
        });
    }
}