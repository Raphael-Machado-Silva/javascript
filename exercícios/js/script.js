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
    } else{
        window.alert("Valor inválido ou já encontrado na lista!")
    }
                   //Para apagar o valor do input ao envia-lo
    num.value = ""
    num.focus()
}