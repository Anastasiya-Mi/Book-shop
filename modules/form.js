"use strict"
 // import variables and functions
import {fragment,cart,reg,reg2,reg3,reg4,orderData} from '../modules/1.variables.js';
import {createOrderBook,updateTotalInOrder,quantityChangeInOrder,removeCartItemInOrder,createEmptyOrder} from '../modules/3.functions_for_checkout.js';
import {validation,validationBlock,quantityOfGifts,checkLength,finishOrder,orderDataSize,btnSubmit} from '../modules/3.functions_for_checkout.js';
import {createShopCart,update,saveItemsInCart,quantityChange,removeCartItem} from '../modules/2.functions.js';

let orderBook;
orderBook = createOrderBook();

let divCartBody = document.querySelector('.cart_body');

for(let i =0;i<orderBook.length;i++){
    let value = orderBook[i];
    let books = createShopCart (value);
    fragment.append(books);
    divCartBody.append(fragment);
    let quantityValue = document.querySelectorAll('.card_shop_quantity')[i];
    let currentValue = orderBook[i].numberOfUnits;
    quantityValue.setAttribute('value',currentValue);
    quantityValue.removeEventListener('change',quantityChange);
    quantityValue.addEventListener('change',quantityChangeInOrder);
    let crossShopInOrder = document.querySelectorAll('.cross_shop')[i];
    crossShopInOrder.removeEventListener('click',removeCartItem);
    crossShopInOrder.addEventListener('click',removeCartItemInOrder);
    updateTotalInOrder();
}

let inputData = document.querySelectorAll('input');
inputData.forEach((input)=>{
    input.addEventListener('change',validation);
    input.addEventListener('blur',validation);
});

let messageBlock = document.querySelector('div.input_box.radio');
messageBlock.addEventListener('click',validationBlock);

let giftData = document.querySelectorAll('.gifts');

giftData.forEach((input)=>{   
    input.removeEventListener('change',validation); 
    input.removeEventListener('blur',validation);
    input.addEventListener('change',quantityOfGifts); 
});

btnSubmit.addEventListener('click',finishOrder);


