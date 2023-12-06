let Idout;
let Idin;

function fadeOut(){
    clearInterval(Idin)
    Idout = setInterval(hide, 20);
}

function hide(){
    let img = document.getElementById('img');
    opacity = Number(window.getComputedStyle(img).getPropertyValue('opacity'));
    
    if(opacity > 0){
        opacity = opacity - 0.01;
        img.style.opacity = opacity;
    }
    else{
        clearInterval(Idout);
    }
}

function fadeIn(){
    clearInterval(Idout)
    Idin = setInterval(show, 20);
}

function show(){
    let img = document.getElementById('img');
    opacity = Number(window.getComputedStyle(img).getPropertyValue('opacity'));

    if(opacity < 1){
        opacity = opacity + 0.01;
        img.style.opacity = opacity;
    }
    else{
        clearInterval(Idin);
    }
}