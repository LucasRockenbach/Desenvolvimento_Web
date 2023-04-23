function notas(){
    nota1 = document.getElementById('nota1').value
    nota2 = document.getElementById('nota2').value
    nota3 = document.getElementById('nota3').value
    nota4 = document.getElementById('nota4').value
    nome = document.getElementById('nome').value

    nota1int = parseFloat(nota1)
    nota2int = parseFloat(nota2)
    nota3int = parseFloat(nota3)
    nota4int = parseFloat(nota4)


    media = (nota1int + nota2int + nota3int + nota4int) /4

    if(media>=6){
    document.getElementById('resultado').innerHTML = (`${nome} você esta aprovado: ${media}`)
    document.getElementById('resultado').style.backgroundColor = "green"
    document.getElementById('titulo').style.color = "green"
    document.getElementById('resultado').style.color = "white"
    document.getElementById('resultado').style.borderRadius = "8px"
    }
    if(media<6 && media>2){
        document.getElementById('resultado').innerHTML = (`${nome} você esta de recuperação: ${media}`)
        document.getElementById('resultado').style.backgroundColor = "blue"
        document.getElementById('titulo').style.color = "blue"
        document.getElementById('resultado').style.color = "white"
        document.getElementById('resultado').style.borderRadius = "8px" }

    if(media<=2){
        document.getElementById('resultado').innerHTML = (`${nome} você esta reprovado: ${media}`)
        document.getElementById('resultado').style.backgroundColor = "red"
        document.getElementById('titulo').style.color = "red"
        document.getElementById('resultado').style.color = "white"
        document.getElementById('resultado').style.borderRadius = "8px"


    }
}    