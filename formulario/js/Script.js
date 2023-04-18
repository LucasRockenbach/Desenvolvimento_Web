function formulario(){
    let nome = document.getElementById('nome').value 
    let email = document.getElementById('email').value
    let genero = document.getElementsByName('genero')
    for(i = 0; i< genero.length; i++){
        if(genero[i].checked){
            document.getElementById('generoSub').innerHTML = `genero: ${genero[i].value}`
        }
    
}   let option = document.querySelector('#option').value
    document.querySelector('#optionSub').innerHTML = option
    document.querySelector('#nomeSub').innerHTML = nome
    document.querySelector('#emailSub').innerHTML = email
}
