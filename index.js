import "./style.css"
import { pegarValorTextualDaTela, mostraValorEmElemento, adicionarEventoEmElemento } from "./moduloTela"
import { concatenarDoisTextos } from "./moduloTextos"

adicionarEventoEmElemento("botaoConcatenar", "click", iniciarProcessoConcatenacao)

function iniciarProcessoConcatenacao() {
    const nome = pegarValorTextualDaTela("nome")
    const sobrenome = pegarValorTextualDaTela("sobrenome")

    const nomeCompleto = concatenarDoisTextos(nome, sobrenome)

    mostraValorEmElemento("resultadoConcat", nomeCompleto)
}

