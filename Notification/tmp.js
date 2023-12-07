window.onload = function(){
    const btn = document.getElementById('btn');
    const container = document.getElementById('container');

    btn.addEventListener('click', function(){
        createNotification();
    })

    function createNotification(){
        const notif = document.createElement('div');
        notif.classList.add('toast');
        notif.innerText = 'Fuckyou';
        container.appendChild(notif);
        setTimeout(function(){
            notif.remove();
        }, 3000)
    }
}