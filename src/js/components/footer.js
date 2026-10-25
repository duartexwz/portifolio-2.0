export default function criarBloco() {

    const sectionServicos = document.getElementById('section-footer');
    sectionServicos.innerHTML =
    `            
    <div class="footer-servicos" id="servicos">
        <div class="title-footer">
            <h4>Pronto para transformar o seu negócio?</h4>
            <p>Fale comigo para entender melhor o seu desafio, definir o melhor caminho e receber um orçamento personalizado.</p>
        </div>
        <div class="buttons-footer">
            <button class="orcamento-footer" id="btn-orcamento-footer">
                Solicitar orçamento
            </button>
        
            <a href="https://wa.me/5561984092729" target="_blank" style="text-decoration: none; color: var(--text-secundary);" class="orcamento-whatsapp">
                <img src="/src/assets/icons/whatsapp-svgrepo-com.svg" alt="whatsapp icon" class="svg-whatsapp">
                Whatsapp
            </a>
        </div>
    </div>`;


}

