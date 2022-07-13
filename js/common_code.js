(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_navigation');
    const close = document.querySelector('.header_navigation_closed');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_navigation_active');
    });
    close.addEventListener('click', () => {
        menu.classList.remove('header_navigation_active');
    });
}());