export function dividirDoisNumeros(numeroUm, numeroDois) {
    if(numeroDois == 0)
        return "Operação inválida"

    if(numeroUm < 0 || numeroDois < 0)
        return "Operação inválida"

    return numeroUm / numeroDois
}