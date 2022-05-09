var n = document.getElementById('numero')
var r = document.getElementById('resultado')

function multiplicar(){
    var i = 0 
    var nV = n.value
    r.innerText = ""
   /* LAÇO CONDICIONAL PRÉ-TESTE, FLUXO VERDADEIRO
    while (i<=10){
        var conta = nV * i
        // Para não precisar utilizar sempre a concatenação usamos Template string, que junta a variavel com o texto
        r.innerHTML += `${nV} x ${i} = ${conta} <br>`
        i++
    }*/

    /* LAÇO CONDICIONAL PÓS-TESTE, FLUXO VERDADEIRO
    do{
        var conta = nV * i
        r.innerHTML += `${nV} x ${i} = ${conta} <br>`
        i++
    }
    while(i<=10)*/

   /* LAÇO INCONDICIONAL */
   
    for(i; i<=10; i++){
    var conta = nV * i
    r.innerHTML += `${nV} x ${i} = ${conta} <br>`
    }
}