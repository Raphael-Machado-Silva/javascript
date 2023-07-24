let num = document.getElementById('fnum');
let lista = document.getElementById('flista');
let res = document.getElementById('res');
let valores = []

function isNumero(num) { //Número de 1 a 100
    if(Number(num) >= 1 && Number(num)<=100){
        return true;
    } else{
        return false;
    }
}

function isLista (n, l){ //verificar se o valor está na lista
    if(l.indexOf(Number(n)) != -1){
        return true;
    } else{
        return false;
    }
}
function adicionar(){ //verificar se é um número, e se ele não está na lista a ação que deve ser feita é inseri-lo na lista
    if(isNumero(num.value) && !isLista(num.value, valores)){
        valores.push(Number(num.value));
        //create um option e adicionando o valor no mesmo
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item);
        res.innerHTML = ''
    } else{
        window.alert("Valor inválido ou já encontrado na lista!")
    }
                   //Para apagar o valor do input ao envia-lo
    num.value = ""
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
} else{
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for (let pos in valores){
        soma += valores[pos]
        if(valores[pos]> maior){
            maior = valores[pos]
        }
        if (valores[pos] < menor){
            menor = valores[pos]
        }
    }
    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo, temos ${tot} elementos cadastrados.</p>`
    res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p> A soma dos valores foi ${soma}.</p>`
}
}