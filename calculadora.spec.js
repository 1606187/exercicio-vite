import { describe, expect, test } from "vitest";
import { dividirDoisNumeros } from "./calculadora";



describe("Testes de calculadora", () => {
    describe("Testes de divisão", () => {

        test("Deve dividir dois números inteiros", () =>{
            const numeroUm = 10
            const numeroDois = 2

            const resultado = dividirDoisNumeros(numeroUm, numeroDois)

            expect(resultado).toBe(5)
        })

        test("Deve retornar 'Operação inválida' para divisão por zero", () =>{
            const numeroUm = 10
            const numeroDois = 0

            const resultado = dividirDoisNumeros(numeroUm, numeroDois)

            expect(resultado).toBe("Operação inválida")
        })

        test("Deve retornar 'Operação inválida' para divisão com números negativos", () =>{
            const esperado = "Operação inválida"
            expect(dividirDoisNumeros(10, -10)).toBe(esperado)
            expect(dividirDoisNumeros(-10, 10)).toBe(esperado)
            expect(dividirDoisNumeros(-10, -10)).toBe(esperado)
        })
    })
})