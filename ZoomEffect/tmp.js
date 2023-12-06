window.onload = function(){
    
    const container = document.getElementById('container');
    const image = document.getElementById('img');
    container.addEventListener('mousemove', function(e){
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        image.style.transformOrigin = `${x}px ${y}px`;
        image.style.transform = 'scale(2)'
    })
    container.addEventListener('mouseleave', function(e){
        image.style.transformOrigin = `center center`;
        image.style.transform = 'scale(1)'
    })
}