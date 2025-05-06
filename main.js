const botoes = document.querySelectorAll(".botao");
console.log(botoes);

for (let i = 0; i < botoes.length; i++) {

    for (let j = 0; j < botoes.length; j++) {
        botoes[j].classList.remove("ativo");
    }

    botoes[i].onclick = function () {
        botoes[i].classList.add("ativo");
    }

}