"use strict"
import {cart} from '../modules/1.variables.js';
import {fragment,reg,reg2,reg3,reg4,orderData} from '../modules/1.variables.js';
import {createDiv,createImg,createTitle,createBtn,createBookCard,createHeader,createMain,createFooter,
    createShoppingCart,createHeaderCart,createFooterCart,createBtnConfirm,createCloseBtn,createShopIcon} from '../modules/2.functions.js';
import {updateCartTotal,removeCartItem} from '../modules/2.functions.js';
import {quantityChange,addToCartClicked,addToCart,createShopCart,saveItemsInCart,update} from '../modules/2.functions.js';
import {createPopup,closeModalWin,createParagraph} from '../modules/2.functions.js';
export let orderDataSize = orderData.size;
export let btnSubmit = document.querySelector('.btn_submit');
const functionsForCheckout ={
    createOrderBook:function (){
        let orderBook = localStorage.getItem('CART')
        if (orderBook == null) {
            let emptyDiv = document.querySelector('.empty'); 
            emptyDiv.style.display = 'block';
        } else {       
        orderBook = JSON.parse(orderBook);
        }
        return orderBook;
    },
    updateTotalInOrder:function (){
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
    },
    quantityChangeInOrder:function (event){
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
    },
    removeCartItemInOrder:function (event){
        let buttonClicked = event.target.closest('.cross_shop');
        let parent = buttonClicked.parentElement.parentElement.parentElement.parentElement;    
        let parentID = parent.getAttribute('id');        
        let cartValue = cart.find((cart)=> cart.id === parentID); 
        let cartIndex =cart.indexOf(cartValue);
        cart.splice(cartIndex,1);    
        parent.remove();    
        updateTotalInOrder();
        createEmptyOrder ();
        return cart;
    },
    createEmptyOrder:function (){
        let cartShopValue = document.querySelectorAll('.book_cart_shop');        
        if (cartShopValue.length == 0){            
            let emptyDiv = document.querySelector('.empty'); 
            emptyDiv.style.display = 'flex';
        }
    },
    createShopCartInOrder:function (value){
        let cardId = value.id;
        let bookCardShop = createDiv('book_card_shop');
        bookCardShop.dataset.id = cardId;
        let divBookImgShop = createDiv('book_img_shop');
        let src = value.imageLink;    
        let bookImgShop = createImg(src,'cover');
        divBookImgShop.append(bookImgShop);
        let divBookInfoShop = createDiv('book_info_shop');
        let title = value.title;
        let titleBook = createTitle("h4",title);
        let author =value.author;
        let authorBook = createTitle("h3",author);
        divBookInfoShop.append(titleBook);
        divBookInfoShop.append(authorBook);
        let divCountShop = createDiv('book_count_shop');
        let divCountShopWrap = createDiv('book_count_shop_wrap');
        let price =value.price;
        let priceBook = createTitle("h5",price);
        priceBook.classList.add('card_shop_price')
        let currency = createTitle("h5","$");
        divCountShop.append(priceBook);
        divCountShop.append(currency);
        let divShopBtn = createDiv('shop_btn');
        let divShopInfoWrap = createDiv('shop_info_wrap');
        let input = document.createElement('input');
        input.classList.add('card_shop_quantity');
        input.setAttribute('type','number');
        input.setAttribute('value','1');
        input.dataset.id = value.id;
        input.addEventListener('change',quantityChange);
        let divCrossShop = createDiv('cross_shop');
        let span = document.createElement('span');
        let span1 = document.createElement('span');       
        divCrossShop.append(span);
        divCrossShop.append(span1);
        divCrossShop.addEventListener('click',removeCartItem);
        divCountShopWrap.append(divCountShop);
        divCountShopWrap.append(divShopBtn);
        divShopBtn.append(input);
        divShopBtn.append(divCrossShop);
        divShopInfoWrap.append(divBookInfoShop);
        divShopInfoWrap.append(divCountShopWrap);        
        bookCardShop.append(divBookImgShop);
        bookCardShop.append(divShopInfoWrap);        
        return bookCardShop;
    },
};

const functionsForValidation = {    
    validation:function validation (event){    
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
            orderData.set('userName',currentName);
            checkLength ();      
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
                orderData.set('userSurname',currentSurname); 
                checkLength ();            
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
            orderData.set('deliveryDate',value); 
            checkLength ();
        }   
    }

    if(this.classList.contains('street')){
        let currentStreet = this.value;
        let currentLength = currentStreet.length;
        let message = document.querySelector('.street_invalid');
        if(reg2.test(currentStreet) === false || currentLength < 5){            
                this.classList.add('invalid');
                message.style.display = 'block';
            }
            if(reg2.test(currentStreet) === true && currentLength >=5){
                this.classList.remove('invalid');
                message.style.display = 'none';
                orderData.set('street',currentStreet);
                checkLength (); 
            }
    }
    if(this.classList.contains('house_number')){
        let currentHouse = this.value;        
        let message = document.querySelector('.house_number_invalid');
        if(reg3.test(currentHouse) === false){            
                this.classList.add('invalid');
                message.style.display = 'block';
            }
            if(reg3.test(currentHouse) === true){
                this.classList.remove('invalid');
                message.style.display = 'none';                
                orderData.set('houseNumber',currentHouse); 
                checkLength ();  
            }
    }
    if(this.classList.contains('flat_number')){
        let currentFlat = this.value;        
        let message = document.querySelector('.flat_number_invalid');
        if(reg4.test(currentFlat) === false){            
                this.classList.add('invalid');
                message.style.display = 'block';
            }
            if(reg4.test(currentFlat) === true){
                this.classList.remove('invalid');
                message.style.display = 'none';                
                orderData.set('flatNumber',currentFlat); 
                checkLength ();
            }
    }  
},
validationBlock:function validationBlock (event){
    let messageBlock = document.querySelector('div.input_box.radio');
    let message = document.querySelector('.payment_invalid');
    let valueOfPayment = document.getElementsByName('payment');
    let result = false;
    let value = '';
    valueOfPayment.forEach((input) =>{        
        input.removeEventListener('blur',validation);
    });
    for(let i=0;i<valueOfPayment.length;i++){
        if (valueOfPayment[i].checked){
            value = valueOfPayment[i].value;
            result = true;            
            orderData.set('payment',value); 
            checkLength ();           
        }
    }
    if (result === false){
        message.style.display = 'block';
        messageBlock.classList.add('payment_invalid_mess');

    }
    if (result === true){
        message.style.display = 'none';
        messageBlock.classList.remove('payment_invalid_mess');

    }    
},
quantityOfGifts:function (event){
    let currentGift = event.target;
    currentGift.classList.toggle('checked');
    currentGift.classList.toggle('gifts');
    let currentGiftChecked = document.querySelectorAll('.checked');
    let gift = document.querySelectorAll('.gifts');    
    if(currentGiftChecked.length >= 2){
        gift.forEach((input) =>{
            input.setAttribute('disabled','disabled');            
        });       
    } else {
        gift.forEach((input) =>{
            input.removeAttribute('disabled');            
        });
             
    }
},
checkLength:function  (){
    orderDataSize = orderData.size;    
    if(orderDataSize == 7){    
        btnSubmit.removeAttribute('disabled');    
    } 
},
finishOrder:function finishOrder(event){
    event.preventDefault();    
    let street = orderData.get('street');
    let house = orderData.get('houseNumber');
    let flat = orderData.get('flatNumber');
    let userName = orderData.get('userName');
    let userSurname = orderData.get('userSurname');
    let userDate = orderData.get('deliveryDate');
    let messageAddress = 'The delivery address is ' + street+ ' street,'+' house '+ house +','+'flat '+ flat+'.';
    let messageCustomer = 'Customer: '+userName + ' ' + userSurname + '.';
    let messageDate = 'Delivery date: ' + userDate +'.';
    let messAdd = document.querySelector('.message_address');
    let messCus = document.querySelector('.message_customer');
    let messDate = document.querySelector('.message_date');
    messAdd.innerText = messageAddress;
    messCus.innerText = messageCustomer;
    messDate.innerText = messageDate;
    let order = document.querySelector('.order');
    order.style.display ='flex';
}

}

export const createOrderBook = functionsForCheckout.createOrderBook;
export const updateTotalInOrder = functionsForCheckout.updateTotalInOrder;
export const quantityChangeInOrder = functionsForCheckout.quantityChangeInOrder;
export const removeCartItemInOrder = functionsForCheckout.removeCartItemInOrder;
export const createEmptyOrder = functionsForCheckout.createEmptyOrder;
export const createShopCartInOrder = functionsForCheckout.createShopCartInOrder;

export const validation = functionsForValidation.validation;
export const validationBlock = functionsForValidation.validationBlock;
export const quantityOfGifts = functionsForValidation.quantityOfGifts;
export const checkLength = functionsForValidation.checkLength;
export const finishOrder = functionsForValidation.finishOrder;