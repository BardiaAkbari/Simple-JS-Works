window.onload = function(){
    const toggle = document.getElementById('toggle');
    toggle.addEventListener('change', function(e){
        console.log("djdj");
        document.body.classList.toggle('dark', e.target.checked)

    })
}