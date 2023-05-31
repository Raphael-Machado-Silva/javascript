let agora = new Date()
let diaSem = agora.getDay()

/* 
0 - Domingo
1 - Segunda
2 - Terça
3 - Quarta
4 - Quinta
5 - Sexta
6 - Sábado
Usar switch quando houver muitas opções e a repetição do ELSE IF iria ocorrer de forma exagerada 
É possível replicar esse código em um site mas se manter as variaveis ele apenas mostrará o dia da semana de maneira automática, claro sendo necessário colocar essa informação dentro de uma outra variavel e mostrala em um p, div...*/

switch(diaSem){
    case 0: console.log(`Domingo`) 
    break
    case 1: console.log(`Segunda`) 
    break
    case 2: console.log(`Terça`) 
    break
    case 3: console.log(`Quarta`) 
    break
    case 4: console.log(`Quinta`) 
    break
    case 5: console.log(`Sexta`) 
    break
    case 6: console.log(`Sábado`) 
    break
    default: 
    console.log(`Erro, dia inválido!`)
    break
} 