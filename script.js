// ----------------------------------------------------
// 1. CARROSSEL AUTOMÁTICO
// ----------------------------------------------------
const carrossel = document.getElementById('carrossel');
let direcao = 1; // 1 para direita, -1 para esquerda
const velocidade = 2; // Velocidade da rolagem contínua

// Função que faz o carrossel andar sozinho
function rolarCarrossel() {
    // Se chegou no final da rolagem, inverte a direção para a esquerda
    if (carrossel.scrollLeft + carrossel.clientWidth >= carrossel.scrollWidth - 1) {
        direcao = -1;
    } 
    // Se voltou para o começo, inverte a direção para a direita
    else if (carrossel.scrollLeft <= 0) {
        direcao = 1;
    }

    // Move o carrossel um pouquinho a cada quadro
    carrossel.scrollLeft += velocidade * direcao;
}

// Executa a função a cada 30 milissegundos (cria a ilusão de movimento contínuo)
setInterval(rolarCarrossel, 30);


// ----------------------------------------------------
// 2. EFEITO SURPRESA (SCROLL REVEAL)
// ----------------------------------------------------
// Seleciona todas as seções (Sobre Mim, Demonstração, Contato)
const secoes = document.querySelectorAll('section');

// Cria um "Observador" que vigia quando os elementos aparecem na tela
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        // Se a seção entrou na área visível da tela
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel'); // Adiciona a classe que faz surgir
        }
    });
}, {
    threshold: 0.1 // O efeito dispara quando 10% da seção aparece na tela
});

// Pega todas as seções, esconde elas no início e manda o observador vigiar
secoes.forEach((secao) => {
    secao.classList.add('escondido');
    observador.observe(secao);
});