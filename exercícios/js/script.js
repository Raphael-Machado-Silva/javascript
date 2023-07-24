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
function adicionar(){
    if(isNumero(num.value) && !isLista(num.value, valores)){
        window.alert('tudo ok')
    } else{
        window.alert("Valor inválido ou já encontrado na lista!")
    }
}