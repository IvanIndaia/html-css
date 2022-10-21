

function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
        // burguer.style.display = 'block'
        // burguerOn.style.display = 'none'
    } else {
        itens.style.display = 'block'
        // burguer.style.display = 'none'
        // burguerOn.style.display = 'block'
    }
}

function mudarTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}