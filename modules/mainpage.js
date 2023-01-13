"use strict"
 // import variables and functions
import {BODY,fragment,book} from '../modules/1.variables.js';
import {createDiv,createImg,createTitle,createBtn,createBookCard,createHeader,createMain,createFooter,
  createShoppingCart,createHeaderCart,createFooterCart,createBtnConfirm,createCloseBtn,createShopIcon} from '../modules/2.functions.js';
import {updateCartTotal,removeCartItem} from '../modules/2.functions.js';
import {quantityChange,addToCartClicked,addToCart,createShopCart,saveItemsInCart,update} from '../modules/2.functions.js';
import {createPopup,closeModalWin,createParagraph} from '../modules/2.functions.js';
// create book cards
let bookCardsArr = [];

for(let i =0;i<book.length;i++){
    let value = book[i];
    let bookCard = createBookCard (value);
    bookCardsArr.push(bookCard);
}

// add common structure in HTML

let header = createHeader ();
let main = createMain ();
let footer = createFooter ();

fragment.append(header);
BODY.append(fragment);
fragment.append(main);
BODY.append(fragment);
fragment.append(footer);
BODY.append(fragment);

// add books in HTML
let divBookContent = document.querySelector('.book_content_wrap'); 

for(let i =0;i<bookCardsArr.length;i++){
    let value = bookCardsArr[i];
    fragment.append(value);
}
divBookContent.append(fragment);

let content = document.querySelectorAll('.content');
let divShopIconWrap = createShopIcon();
fragment.append(divShopIconWrap);
content[0].append(fragment);
 
// shopping cart

let cart = [];
let shoppingCart = createShoppingCart ();
fragment.append(shoppingCart);
content[1].append(fragment);

let removeCartItemBtn = document.getElementsByClassName('cross_shop');

for( let i=0;i<removeCartItemBtn.length;i++){
    let button = removeCartItemBtn[i];
    button.addEventListener('click',removeCartItem);  
};

let quantityInputs = document.getElementsByClassName('card_shop_quantity');
for( let i=0;i<quantityInputs.length;i++){
    let input = quantityInputs[i];
    input.addEventListener('change',quantityChange);
}

let addToCartButtons = document.getElementsByClassName('add_to_cart');

for( let i=0;i<addToCartButtons.length;i++){
    let button = addToCartButtons[i];    
    button.addEventListener('click',addToCartClicked);    
    update();
}

// let divCartBody = document.querySelector('.cart_body');
// for(let i =0;i<cart.length;i++){
//     let value = cart[i];
//     let books = createShopCart (value);
//     fragment.append(books);
//     divCartBody.append(fragment);
//     let quantityValue = document.querySelectorAll('.card_shop_quantity')[i];
//     let currentValue = cart[i].numberOfUnits;
//     quantityValue.setAttribute('value',currentValue);
// }
// update();
let divShopIcon = document.querySelector('.shop_icon_wrap');
divShopIcon.addEventListener('click',showCart)
function showCart(event){
   let divShopIconClick =  event.target.closest('.cross_shop');
    let divCartWrap2 = document.querySelector('.cart_wrap'); 
    divCartWrap2.classList.toggle('clicked');
}
//  drag and drop
let zone = document.querySelector('.shop_icon_wrap');
let cartBody = document.querySelector('.cart_body');
let cardImg = document.querySelectorAll('.book_for_drag');

function allowDrop(event){
    event.preventDefault();
}

 cardImg.forEach((Element) =>{
    Element.ondragstart = drag;
});

function drag(event){
    let target = event.target;
    let cardID =target.parentElement.parentElement.id;     
    event.dataTransfer.setData('data',cardID);
}

function drop(event){
    let itemId = event.dataTransfer.getData('data');    
    addToCart (itemId);   
}
zone.ondragover = allowDrop;
zone.ondrop = drop;
cartBody.ondragover = allowDrop;
cartBody.ondrop = drop;

// modal window
const btnShowMore = document.querySelectorAll('.show_more');

btnShowMore.forEach(function(element){    
    element.addEventListener('click',function(event){
        let idBtn = element.dataset.id;        
        let bookWindow = book.find((book) => book.id === idBtn);        
        createPopup (bookWindow);             
    });
   
});