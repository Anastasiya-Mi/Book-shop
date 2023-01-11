"use strict"
 // import variables and functions
 import {BODY,fragment,book,cart} from '../modules/1.variables.js';
//  import {createDiv,createImg,createTitle,createBtn,createBookCard,createHeader,createMain,createFooter,
//    createShoppingCart,createHeaderCart,createFooterCart,createBtnConfirm,createCloseBtn,createShopIcon} from '../modules/2.functions.js';
//  import {updateCartTotal,removeCartItem} from '../modules/2.functions.js';
//  import {quantityChange,addToCartClicked,addToCart,createShopCart,saveItemsInCart,update} from '../modules/2.functions.js';
import {createShopCart,update,saveItemsInCart,quantityChange,removeCartItem} from '../modules/2.functions.js';


if(!cart){
    cart = [];
}

let divCartBody = document.querySelector('.cart_body');

for(let i =0;i<cart.length;i++){
    let value = cart[i];
    let books = createShopCart (value);
    fragment.append(books);
    divCartBody.append(fragment);
    let quantityValue = document.querySelectorAll('.card_shop_quantity')[i];
    let currentValue = cart[i].numberOfUnits;
    quantityValue.setAttribute('value',currentValue);
    quantityValue.removeEventListener('change',quantityChange);
    quantityValue.addEventListener('change',quantityChangeInOrder);
    let crossShopInOrder = document.querySelectorAll('.cross_shop')[i];
    crossShopInOrder.removeEventListener('click',removeCartItem);
    crossShopInOrder.addEventListener('click',removeCartItemInOrder);
    updateTotalInOrder();
}

 
function updateTotalInOrder(){
    let cartItemContainer = document.getElementsByClassName('cart_body')[0];
    let cartItems = cartItemContainer.getElementsByClassName('book_card_shop');
    let total =0;
    let totalItems = 0;
    for( let i=0;i<cartItems.length;i++){
        let cartItem = cartItems[i];
        let priceElement = cartItem.getElementsByClassName('card_shop_price')[0];
        let quantityElement = cartItem.getElementsByClassName('card_shop_quantity')[0];
        let price = parseFloat(priceElement.innerText);
        let quantity = quantityElement.value;        
        total = total + (price*quantity);
        totalItems = Number(totalItems) + Number(quantity);        
    }
    let subtotal = document.getElementsByClassName('sub_total_count')[0];
    let subtotalItems = document.getElementsByClassName('sub_total_items')[0];    
    subtotal.innerText = total +' $';
    subtotalItems.innerText = totalItems +' items';    
}





function quantityChangeInOrder (event){
    let input = event.target;    
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    let cartID = input.dataset.id;   
    let cartValue = cart.find((cart)=> cart.id === cartID); 
    let numberOfUnits = input.value;
    cartValue.numberOfUnits = numberOfUnits;
    input.setAttribute('value',numberOfUnits);        
    updateTotalInOrder();     
    return cart;      
}

function removeCartItemInOrder (event){
    let buttonClicked = event.target.closest('.cross_shop');
    let parent = buttonClicked.parentElement.parentElement;    
    let parentID = parent.getAttribute('id');
    let cartValue = cart.find((cart)=> cart.id === parentID); 
    let cartIndex =cart.indexOf(cartValue);
    cart.splice(cartIndex,1);    
    parent.remove();    
    updateTotalInOrder();
    createEmptyOrder ();
    return cart;
}
let cartShopValue = document.querySelectorAll('.book_cart_shop')


function createEmptyOrder (){
    let cartShopValue = document.querySelectorAll('.book_cart_shop');
    if (cartShopValue.length == 0){
        let emptyDiv = document.querySelector('.empty'); 
        emptyDiv.style.display = 'block';
    }
}

let reg = /^[a-zA-ZА-Яа-яЁё]+$/;
let orderData = [];

let inputData = document.querySelectorAll('input');
inputData.forEach((input)=>{
    input.addEventListener('change',validation);
    input.addEventListener('blur',validation);
})

function validation (event){    
    if(this.classList.contains('name')){
        let currentName = this.value;
        let currentLength = currentName.length; 
        let messageName = document.querySelector('.name_invalid');       
        if(reg.test(currentName) === false || currentLength < 4){        
            this.classList.add('invalid');
            messageName.style.display = 'block';
        }
        if(reg.test(currentName) === true && currentLength >=4){
            this.classList.remove('invalid'); 
            messageName.style.display = 'none';            
        }
    }
    if(this.classList.contains('surname')){
        let currentSurname = this.value;
        let currentLength = currentSurname.length;
        let messageName = document.querySelector('.surname_invalid');
        if(reg.test(currentSurname) === false || currentLength < 5 || currentLength == 0){            
                this.classList.add('invalid');
                messageName.style.display = 'block';
            }
            if(reg.test(currentSurname) === true && currentLength >=5){            
                this.classList.remove('invalid');
                messageName.style.display = 'none';
                           
            }
    }
    if(this.classList.contains('delivery')){        
        let fullDateTime = new Date();
        let today = fullDateTime.getDate();
        let value = this.value;
        let clientDateValue = value.substr(8,2);
        let clientDate = Number(clientDateValue);
        let message = document.querySelector('.date_invalid');
        if(clientDate === today || clientDate < today){
            this.classList.add('invalid');
            message.style.display = 'block';
        }    
        if(clientDate > today){
            this.classList.remove('invalid');
            message.style.display = 'none';
        }   
    }


    if(this.classList.contains('street')){
        let currentStreet = this.value;
        let currentLength = currentStreet.length;
        if(reg.test(currentStreet) === false || currentLength < 5){            
                this.classList.add('invalid');
            }
            if(reg.test(currentStreet) === true && currentLength >=5){
                this.classList.remove('invalid'); 
            }
    }

    
}

console.log(orderData)