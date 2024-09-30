export function pegarValorTextualDaTela(idElemento) {
    const elemento = document.getElementById(idElemento)
    const valor = elemento.value

    return valor
}

export function pegarValorNumericoDaTela(idElemento) {
    const valor = pegarValorTextualDaTela(idElemento)

    return Number(valor)
}

export function mostraValorEmElemento(idElemento, valor) {
    document.getElementById(idElemento).innerHTML = valor
}

export function adicionarEventoEmElemento(idElemento, nomeEvento, funcaoCallback) {
    const elemento = document.querySelector("#" + idElemento)
    elemento.addEventListener(nomeEvento, funcaoCallback)
}