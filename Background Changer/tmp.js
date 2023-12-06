window.onload = function(){
    const btn = document.getElementById('btn');
    btn.addEventListener('click', function(){
        document.body.style.background = changer();
    })

    function changer(){
        return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    }
}