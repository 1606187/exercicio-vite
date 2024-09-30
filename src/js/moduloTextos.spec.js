
import { describe, expect, test } from "vitest"
import { concatenarDoisTextos } from "./moduloTextos"

describe("Testes de concatenação de textos", () => {
    test("Deve concatenar dois textos com um espaço em branco no meio", () => {
        // Given - Dado que
        // eu tenha dois textos
        const textoUm = "Olá"
        const textoDois = "Testes"

        // When - Quando
        // eu chamar minha função de concatenação
        const resultado = concatenarDoisTextos(textoUm, textoDois)

        // Then - Então
        // o texto deve ser concatenado e separado por um espaço em branco
        expect(resultado).toBe("Olá Testes")
    })
})