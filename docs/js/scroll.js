//Функция плавной прокрутки до (Элемент)
function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}


//Переменные для нахождения пункта меню "Связь + Интернет + ТВ" и секции "Связь + Интернет + ТВ"
let connectionInternetTV = document.querySelector('.connectionInternetTV');
let TOconnectionInternetTV = document.querySelector('#TOconnectionInternetTV');
//Функция прокрутки к секции "Связь + Интернет + ТВ" по нажанию на соответствующую кнопку
connectionInternetTV.addEventListener('click', () => {
    toggle();
    scrollTo(TOconnectionInternetTV);
})


//Переменные для нахождения пункта меню "Интернет + ТВ" и секции "Интернет + ТВ"
let internetTV = document.querySelector('.internetTV');
let TOinternetTV = document.querySelector('#TOinternetTV');
//Функция прокрутки к секции "Интернет + ТВ" по нажанию на соответствующую кнопку
internetTV.addEventListener('click', () => {
    toggle();
    scrollTo(TOinternetTV);
})


//Переменные для нахождения пункта меню "Интернет" и секции "Интернет"
let internet = document.querySelector('.internet');
let TOinternet = document.querySelector('#TOinternet');
//Функция прокрутки к секции "Интернет" по нажанию на соответствующую кнопку
internet.addEventListener('click', () => {
    toggle();
    scrollTo(TOinternet);
})


//Переменные для нахождения пункта меню "ТВ" и секции "ТВ"
let TV = document.querySelector('.TV');
let TOTV = document.querySelector('#TOTV');
//Функция прокрутки к секции "ТВ" по нажанию на соответствующую кнопку
TV.addEventListener('click', () => {
    toggle();
    scrollTo(TOTV);
})

//Переменные для нахождения пункта меню "ТВ" и секции "ТВ"
let Form = document.querySelector('.Form');
let Toform = document.querySelector('#Toform');
//Функция прокрутки к секции "ТВ" по нажанию на соответствующую кнопку
Form.addEventListener('click', () => {
    toggle();
    scrollTo(Toform);
})