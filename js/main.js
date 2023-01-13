document.getElementById('main-action').onclick = function () {
    document.getElementById('cars').scrollIntoView({behavior: 'smooth'});
}

const buttons = document.getElementsByClassName('btn__car');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick =function () {
        document.getElementById('sec__three').scrollIntoView({behavior: 'smooth'});
    }
}

// vailidate form
document.getElementById('form').onclick = function () {
    if (document.getElementById('name').value === '') {
        alert('Заполните поле "Имя"');
    } else if (document.getElementById('tel').value === '') {
        alert('Заполните поле "Телефон"');
    } else if (document.getElementById('car').value === '') {
        alert('Заполните поле "Бронировать"');
    } else {
        alert('Спасибо за заявку, мы свяжемся с вами в ближайшее время')
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.bg__two');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".bg__one");
    document.addEventListener('scroll', () => {
        elem.style.left = '0' + (0.3 * window.pageYOffset) + 'px';
    })
});