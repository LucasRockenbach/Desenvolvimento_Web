function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function fazLinha(usuario){
    let linha = document.createElement('tr')
    let colID = document.createElement('td')
    let colEmail = document.createElement('td')
    let colSenha = document.createElement('td')
    colID.innerHTML = usuario.id_login_pk
    colEmail.innerHTML = usuario.email
    colSenha.innerHTML = usuario.senha
    linha.appendChild(colID)
    linha.appendChild(colEmail)
    linha.appendChild(colSenha)

    return linha


}


function main(){
    let dados = fazGet("http://localhost:3000/login")
    let tab = document.getElementById('table')

    let usuario = JSON.parse(dados)
    usuario.forEach(element => {
        let linha = fazLinha(element)
        tab.appendChild(linha)
    });
}

main()