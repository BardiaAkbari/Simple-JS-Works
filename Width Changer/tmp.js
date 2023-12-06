let Idout;
let Idin;
let unit = 2
let width;
function increase(){
    width = document.getElementById('img').width
    clearInterval(Idin);
    Idout = setInterval(expand, 20);
}

function expand(){
    let image = document.getElementById('img');
    if(width < 650){
        width = width + unit;
        image.width = width;
    }
    else{
        clearInterval(Idout);
    }
}

function decrease(){
    clearInterval(Idout);
    Idin = setInterval(shrink, 20);
}

function shrink(){
    let imag = document.getElementById('img');
    if(width > 400){
        width = width - unit;
        imag.width = width
    }
    else{
        clearInterval(Idin);
    }
}