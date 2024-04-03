'use strict';

function generateEl(element, classEl) {
  let newElement = document.createElement(element);
  newElement.classList.add(classEl);
  return newElement;
}

const addEl = (addElTo, newEl) => {
  return addElTo.appendChild(newEl);
};

document.body.style.backgroundColor = '#313131';
document.body.style.color = '#fff';
document.body.style.fontFamily = 'sans-serif';

// создаем контейнер
let container = generateEl('div', 'container');
addEl(document.body, container); // добавлем в body
// ограничиваем контейнер
container.style.maxWidth = '700px';
container.style.margin = 'auto';

// создаем блок-нав
let nav = generateEl('nav', 'nav');
addEl(container, nav);

// применяем стили flex
nav.style.display = 'flex';
nav.style.alignItems = 'center';
nav.style.justifyContent = 'space-between';

// создаем Логотип
let divLogo = generateEl('div', 'logo');
addEl(nav, divLogo);

// создаем img
const imgLogo = generateEl('img', 'nav__logo');
imgLogo.setAttribute('alt', 'logo');
imgLogo.src = './img/logo.svg';
imgLogo.style.width = '65px';
// добавляем в divLogo
addEl(divLogo, imgLogo);

let divMenu = generateEl('div', 'nav__menu');
addEl(nav, divMenu);

let ul = generateEl('ul', 'nav__list');
ul.style.display = 'flex';
ul.style.flexWrap = 'wrap';
ul.style.listStyle = 'none';
ul.style.alignItems = 'center';
ul.style.gap = '25px';
addEl(divMenu, ul);

// Пункты нащего меню
const menuArr = ['главная', 'О&nbspнас', 'Наши продукты', 'контакты'];

for (let i = 0; i < menuArr.length; i++) {
  let li = generateEl('li', 'list__item');
  li.innerHTML = menuArr[i];
  li.style.cursor = 'pointer';
  li.style.textTransform = 'capitalize';
  addEl(ul, li);
}

// Создаем корзину
const cartHeader = generateEl('div', 'nav__cart');
addEl(nav, cartHeader);
const cartImg = generateEl('img', 'nav__cart-img');
cartImg.setAttribute('src', './img/cart.svg');
cartImg.setAttribute('alt', 'Корзина');
cartImg.style.width = '25px';
addEl(cartHeader, cartImg);

const input = generateEl('input', 'input');
input.setAttribute('type', 'text');
nav.after(input);
input.setAttribute('placeholder', 'Добавь пункт меню');
const addBtn = generateEl('button', 'btn');
addBtn.innerText = 'Добавить';
addBtn.style.cursor = 'pointer';
input.style.width = '80%';
input.style.marginTop = '80px';
input.after(addBtn);

addBtn.addEventListener('click', () => {
  menuArr.push(input.value);
  for (let i = 0; i < menuArr.length; i++) {
    let li = generateEl('li', 'list__item');
    li.innerHTML = menuArr[menuArr.length - 1];
    li.style.cursor = 'pointer';
    li.style.textTransform = 'capitalize';
    addEl(ul, li);
    input.value = '';
    return;
  }
});
