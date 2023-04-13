function getRadio (){
    let elemento = document.getElementsByName('gender')
    for(i = 0; i< elemento.length; i++){
        if(elemento[i].checked){
            document.getElementById('radioResult').innerHTML = `genero: ${elemento[i].value}`
        }
}
    }
    

function option(){
    let valor = document.querySelector('#select1').value
    document.querySelector('#result').innerHTML = valor
}
function check(){
    let check = document.querySelectorAll('input[type="checkbox"]:checked')
    let text = ""
    for(i = 0; i< check.length; i++){
        text = `${text}, ${check[i].value}`
    }
    document.getElementById('checkResults').innerHTML = `suas prioridades são: ${text}`
}
