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
let img1 = document.getElementById('imgz'),
    img2 = document.getElementById('imgx');;
let timer = setInterval(function () {
    z = Math.floor(Math.random() * 10)
    if (z > 0 && z < 6) {
        img1.setAttribute('src', 'images/desktop/image-transform3.jpg')
    } else if (z > 5 && z < 10) {
        img1.setAttribute('src', 'images/desktop/image-transform.jpg')
    }
}, 500)
let timer2 = setInterval(function () {
    z = Math.floor(Math.random() * 10)
    if (z > 0 && z < 4) {
        img2.setAttribute('src', 'images/desktop/aaa.jpg')
    } else if (z > 3 && z < 6) {
        img2.setAttribute('src', 'images/desktop/aaaa.jpg')
    } else {
        img2.setAttribute('src', 'images/desktop/image-stand-out.jpg')

    }
}, 500)

let para1 = document.getElementById('para1a'),
    para2 = document.getElementById('para2a'),
    design2 = document.getElementById('design2'),
    f0 = document.getElementById('f0'),
    f1 = document.getElementById('f1'),
    f2 = document.getElementById('f2'),
    f3 = document.getElementById('f3');
design1 = document.getElementById('design1');


window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        para1.style.opacity = "1";
    } else {
        para1.style.opacity = "0";
    }
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        para2.style.opacity = "1";
    } else {
        para2.style.opacity = "0";
    }
    if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
        design1.setAttribute('style', 'left:0')
        design2.setAttribute('style', 'left:0')
    } else {
        design1.setAttribute('style', 'left:-160vw')
        design2.setAttribute('style', 'left:-160vw')
    }
    if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) {
        f1.setAttribute('style', 'top:0')
        f2.setAttribute('style', 'top:0')
        f3.setAttribute('style', 'top:0')
        f0.style.opacity = "1";

    } else {
        f1.setAttribute('style', 'top:80vh')
        f2.setAttribute('style', 'top:80vh')
        f3.setAttribute('style', 'top:80vh')
        f0.style.opacity = "0";

    }


}
let cli = document.getElementById('clicko'),
    better = document.getElementById('better');
cli.onclick = function () {
    this.style.display = 'none';
    better.style.display = 'block'

    better.innerHTML = 'Thats Better'

    setTimeout(function () {
        better.style.display = 'none'
    }, 1500)
}