let marker = document.querySelector('#marker');
let item = document.querySelectorAll('nav a');

function indicator(e){
    marker.style.left = e.offsetLeft+'px';
    marker.style.width = e.offsetWidth+'px';
}

item.forEach(link => {
    link.addEventListener('click', (e) => {
        indicator(e.target);
    })
})