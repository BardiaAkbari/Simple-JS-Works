window.onload = function(){
    const btn = document.getElementById('btn');
    const nav = document.getElementById('nav');

    btn.addEventListener('click', function(){
        nav.classList.toggle('active');
        btn.classList.toggle('active');
    })
}