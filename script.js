function limpar() {
    let c = document.getElementsByClassName('menu');
    let expressao = document.getElementsByClassName('menu').length;
    for (x = 0; x < expressao; x++) {
        c[x].classList.remove('active');
    }

}

function cervo() {
    textoCervo();
}
function leao() {
    textoLeao();
}
function gato() {
    textoGato();
}
function vaca() {
    textoVaca();
}

