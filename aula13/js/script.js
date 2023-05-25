function toJason(){
    let jsonSend = 
    `{  "nome": ${document.getElementById('nome').value},
        "email": ${document.getElementById('email').value},
        "nascimento": ${document.getElementById('nascimento').value},
        "senha": ${document.getElementById('pass').value},
        "cep": ${document.getElementById("cep").value},
        "uf": ${document.getElementById("uf").value},
        "logradouro": ${document.getElementById("rua").value},
        "bairro": ${document.getElementById("bairro").value},
        "cidade": ${document.getElementById("cidade").value},
        "ibge": ${document.getElementById("ibge").value}
}` 

console.log(jsonSend)
}


function salvar(){
    cel0.innerHTML = document.getElementById('nome').value;
    cel1.innerHTML = document.getElementById('email').value;
    cel2.innerHTML = document.getElementById('nascimento').value;
    cel3.innerHTML = document.getElementById('estado').value;

    cep = document.getElementById("cep").value = ""
    document.getElementById("rua").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("uf").value = "";
    document.getElementById("ibge").value = "";



}


