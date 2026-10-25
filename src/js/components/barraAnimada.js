
// Animação de carregamento da barra de skills
export default function barraAnimada() {
    const skill = document.querySelectorAll(".skill");
    const containerSkill = document.querySelector(".progresso-tecnologias");

    if (!containerSkill) return;

    skill.forEach((item) => {
        const barra = item.querySelector(".skill-fill");
        const textoPorcentagem = item.querySelector(".porcentagem-skill");

        if (!barra || !textoPorcentagem) return;

        const valorPorcentagemStr = barra.style.getPropertyValue("--porcentagem") || barra.dataset.tech || "0%";
        const valorAlvo = parseInt(valorPorcentagemStr.replace("%", "").trim()) || 0;

        gsap.fromTo(barra, 
            { width: "0%" },
            {
                width: `${valorAlvo}%`,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerSkill,
                    start: "top 80%",
                    toggleActions: "play none none reset",
                },
                onUpdate: function() {
                    let valorAtual = Math.round(this.progress() * valorAlvo);
                    textoPorcentagem.innerText = valorAtual + "%";
                }
            }
        );
    });
}
