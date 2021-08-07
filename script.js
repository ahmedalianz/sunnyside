let Menu = document.getElementById('menu'),
    Close = document.getElementById('close'),
    links = document.querySelector('.links3');

function showmenu() {
    Menu.style.display = 'none';
    Close.style.display = 'flex'
    links.classList.add('active')
    
}
function hidemenu() {
    Menu.style.display = 'flex';
    Close.style.display = 'none'
    links.classList.remove('active')
}
