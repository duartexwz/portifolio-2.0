// Organização do escopo global -> agrupar funções de UI em um objeto (UIController)



gsap.registerPlugin(ScrollTrigger);

// Animações com o scrollTrigger
export default function scrollTriggerPage(){
    
    const ElementosEsquerda = gsap.utils.toArray(
        `.introducao-page,
        .title-section,
        .div-footer,
        .img-sobre,
        .tecnologias-title,
        .progresso-tecnologias,
        .projeto-card`
    ); 

    const animations = [

        {
            target: '.servicos',
            scrollTrigger: { 
                trigger: '.servicos-container',
                start: "top 80%",
                toggleActions: "play none none reset",
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        },
        {
            target: '.sobre-info',
            scrollTrigger: {
                trigger: ".sobre-mim",
                start: "top 80%",
                toggleActions: "play none none reset",
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        },
        {
            target: '.tecnologia-icons',
            scrollTrigger: {
                trigger: ".grid-tecnologias",
                start: "top 80%",
                toggleActions: "play none none reset",
            },
            y: 100,
            opacity: 1,
            duration: 0.5,
            stagger: 0.2,
            ease: "power3.out"
        },
        {
            target: '.progresso-tecnologias',
            scrollTrigger: {
                trigger: ".grid-tecnologias",
                start: "top 80%",
                toggleActions: "play none none reset",
            },
            y: 100,
            opacity: 1,
            duration: 0.3,
            stagger: 0.2,
            ease: "power3.out"
        },
    ]

    ElementosEsquerda.forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reset"
            },
            x: -100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
        });
    });

    animations.forEach(({ target, ...config}) => {
        gsap.from(target, config);
    });
}
