let Idout;
let Idin;

function fadeOut(){
    Idout = setInterval(hide(), 20);
}

function hide(){
    let img = document.getElementById('img');
    opacitty = window.getComputedStyle(img).getPropertyValue('opacity');
    
    if(opacitty > 0){
        opacitty -= 0.01;
        img.style.opacity = opacitty;
    }
    else{
        clearInterval(Idout);
    }
}

function fadeIn(){
    Idin = setInterval(show(), 20);
}

function show(){

}