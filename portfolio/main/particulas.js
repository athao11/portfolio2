for (let i = 0; i < 100; i++) {
    criarElementoAleatorio();
}

function criarElementoAleatorio() {
    const elemento = document.createElement('div');
    elemento.className = 'particulas';

    const largura = window.innerWidth - 100;
    const altura = window.innerHeight - 100;
    const posicaoX = Math.random() * largura;
    const posicaoY = Math.random() * altura;

    elemento.style.left = `${posicaoX}px`;
    elemento.style.top = `${posicaoY}px`;

    elemento.style.animationDelay = `${Math.random() * 5}s`;

    document.body.appendChild(elemento);

}
