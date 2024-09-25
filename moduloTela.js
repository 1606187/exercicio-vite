export function pegarValorTextualDaTela(idElemento){
    const elemento = document.getElementById(idElemento)
    const valor = elemento.value

    return valor
}

export function mostraValorEmElemento(idElemento, valor){
    document.getElementById(idElemento).innerHTML = valor
}

export function adicionarEventoEmElemento(idElemento, nomeEvento, funcaoCallback) {
    const botaoConcatenar = document.getElementById(idElemento)
    botaoConcatenar.addEventListener(nomeEvento, funcaoCallback)
}