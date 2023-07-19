//Usando repetição para mostrar os valores do vetor num


let valores = [8, 1, 7, 4, 2, 9]

valores.sort()

/* Código para alterar o indice do vetor e mostrar todos de maneira seguida e crescente, neste código ele criou a variavel POS com valor inicial de 0 intencionalmente para chamar o valor desta primeira posição */
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} possui o valor: ${valores[pos]}!`)
}


// Maneira mais simples de fazer o exemplo acima
for(let pos in valores){
    console.log(valores[pos])
}



console.log(`O valor 4 está na posição: ${valores.indexOf(4)}`)

//Para buscar um valor dentro de um vetor usar a tag: valores.indexOf(valor a ser procurado), neste caso você pergunta se tem o número que está dentro do () e ele te retorna o indice q o mesmo se encontra
