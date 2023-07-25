/*
    Função: Trecho de código que só é executado quando é chamado.

        Função Void (vazia)
        Função com Parâmetros (s)
        Função Return 
        Função Arrow / Arrow Function


---------------------Função Vazia---------------------------
let valor = 20
function incremento(){
        valor = 20 + 30
}
incremento()
console.log(valor) 

------------------Função com Parâmetros---------------------------

function mostraNome(nome){
    console.log(nome)
}

mostraNome('Rodolfo')
mostraNome('Raphael')
*/


function soma(n1, n2){
    const somaDosNumeros = n1 + n2;
    console.log(somaDosNumeros)
}
soma(5,8)