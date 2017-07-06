var openPopupBtn = document.querySelector('.header__btn');
var popup = document.querySelector('.popup');
var closePopupBtn = popup.querySelector('.popup__close-btn');
var overlay  = document.querySelector('.overlay');

openPopupBtn.addEventListener('click', function () {
    popup.classList.toggle('popup--show');
    overlay.classList.toggle('overlay--show');
});

closePopupBtn.addEventListener('click', function () {
    popup.classList.toggle('popup--show');
    overlay.classList.toggle('overlay--show');
});


