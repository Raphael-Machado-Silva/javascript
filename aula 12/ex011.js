let idade = 66

if (idade < 16){
    console.log(`Não vota!`)
//Usar else if para criar condições dentro de condições em Javascript
} else if (idade < 18 || idade > 65) {
        console.log(`Voto opcional!`)
} else if (idade >=18) {
        console.log(`Voto obrigatório!`)
    }
