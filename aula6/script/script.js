function calculadora(){
    let numero = document.getElementById('numero').value
    document.getElementById('result').innerHTML = numero
    let divisoria = document.getElementById('result')
    divisoria.innerHTML = `<p> a tabuada é ${numero} </p>`
    for(i = 0; i<= 10; i++){
        let resultado = i * numero
        const node = document.createElement("p") // nó que cria mais um elemento p (paragrafo)
        const text = document.createTextNode(`${numero} x ${i} = ${resultado} `)
        node.appendChild(text)
        divisoria.appendChild(node)
        
    }
}

// -----------------------------------------------------------
var cliques = 0
function contador (){
    cliques ++
    document.getElementById('cliques').innerHTML = cliques
}

//------------------------------------------------------------

function sorteio (){
    
    let ramdom = parseInt(Math.random() * 100)
    document.getElementById('resultado').innerHTML = ramdom

}

// -------------------------------------------------------------

function sorteio2(){
    let ramdom = parseInt(Math.random() * 100)
    document.getElementById('resultado').innerHTML = ramdom
}
