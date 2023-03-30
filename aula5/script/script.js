function myFunction(){
    var x = document.getElementById('par1').innerHTML;
    document.getElementById('par2').innerHTML = x;
    //O elemento com id par1 do HTML é copiado para var X, depois o elemento com id part2 é substituido pelo conteúdo da var X
}

function eat(){
    document.getElementById('kirby').src = "img/kirby_eating.png";
}

function notEat(){
    document.getElementById('kirby').src = "img/kirby_normal.png";
}

function editStyle(){
    document.getElementById('pStyle').style.backgroundColor = "aqua";
}

function editDisplayRemove(){
    document.getElementById('pStyle').style.display = 'none';
}

function editDisplayBack(){
    document.getElementById('pStyle').style.display = 'block';
}

function seePopup(){
    window.alert('yr gay :)');
}
