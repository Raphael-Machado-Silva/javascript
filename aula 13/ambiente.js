/* Código sem usar estruturas de repetições
console.log('Tudo Bem?')
console.log('Tudo Bem?')
console.log('Tudo Bem?')
console.log('Tudo Bem?')
console.log('Tudo Bem?')
console.log('Tudo Bem?') */

let c = 1
// while = enquanto ---- do = faça

while (c <= 6){ // (teste lógico no início)
    console.log(`Passo ${c}!`)
    c++ // c = c+1
} 

do{ //Teste lógico no final
    console.log(`Passo ${c}!!!`)
    c++
} while (c <= 6)