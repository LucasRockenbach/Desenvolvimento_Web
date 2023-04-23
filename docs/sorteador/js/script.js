function sorteio2(){
    let max = document.getElementById('max').value
    max = parseInt(max)
    let min = document.getElementById('min').value
    min = parseInt(min)

    var num = Math.floor((Math.random() * (max - min + 1)) +min);
    document.getElementById('escolhido').innerHTML = num;
    
}