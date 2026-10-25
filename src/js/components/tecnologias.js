export default function AnimarTecnologias() {
    const cards = document.querySelectorAll(".sk-tile");
    const listaBarras = document.querySelector(".progresso-tecnologias");
    const tecnologiaIcons = document.querySelector('.tecnologia-icons');
    const barras = document.querySelectorAll('.skill');
    
    if (!listaBarras) return;
    
    tecnologiaIcons.addEventListener('mouseover', (e)=> {

        const capturarEventoMosue = e.target.closest('.sk-tile');
        
        if (capturarEventoMosue){
        
            const tecnologia = capturarEventoMosue.getAttribute("data-tech");

            listaBarras.classList.add("em-foco");
            barras.forEach(barra => {
                if (barra.getAttribute("data-tech") === tecnologia) {
                    barra.classList.add("destaque");
                }
            });
            console.log(capturarEventoMosue);
        }
    }); 
    tecnologiaIcons.addEventListener('mouseout', (saida) => {
        const capturarSaida = saida.target.closest('.tecnologia-icons');

        if (capturarSaida){
            listaBarras.classList.remove("em-foco");
            barras.forEach(barra => barra.classList.remove("destaque"));
        }
    }) ;
}