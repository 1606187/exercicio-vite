import "./src/assets/scss/style.scss"
import { pegarValorTextualDaTela, mostraValorEmElemento, adicionarEventoEmElemento, pegarValorNumericoDaTela } from "./src/js/moduloTela"
import { concatenarDoisTextos } from "./src/js/moduloTextos"
import { dividirDoisNumeros } from "./src/js/calculadora"

adicionarEventoEmElemento("botaoConcatenar", "click", iniciarProcessoConcatenacao)
adicionarEventoEmElemento("botaoDividir", "click", iniciarProcessoDivisao)

function iniciarProcessoConcatenacao() {
    const nome = pegarValorTextualDaTela("nome")
    const sobrenome = pegarValorTextualDaTela("sobrenome")

    const nomeCompleto = concatenarDoisTextos(nome, sobrenome)

    mostraValorEmElemento("resultadoConcat", nomeCompleto)
}

function iniciarProcessoDivisao() {
    const numeroUm = pegarValorNumericoDaTela("numeroUm")
    const numeroDois = pegarValorNumericoDaTela("numeroDois")
    
    const resultado = dividirDoisNumeros(numeroUm, numeroDois)

    mostraValorEmElemento("resultadoDivisao", resultado)
}

