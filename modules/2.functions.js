"use strict"
import {BODY,fragment,book,cart} from '../modules/1.variables.js';

const functionsCommon = {
    createDiv:function (value){
        let div = document.createElement('div');
        div.classList.add(value);
        return div;
    },
    createImg: function (way,name){
        let img = document.createElement('img'); 
        img.setAttribute('src',way);
        img.setAttribute('alt',name); 
        return img;
    },
    
    createTitle: function (h,value){
        let title = document.createElement(h);
        title.innerText = value;
        return title;
    }   
};

const functionsForMainPage = {
    createBtn: function (value){
        let btnShow = document.createElement('button');
        btnShow.classList.add('show_more'); 
        btnShow.dataset.id = value.id;
        btnShow.innerText = 'Show more';    
       let btnAddToCart = document.createElement('button');
       btnAddToCart.classList.add('add_to_cart');
       btnAddToCart.dataset.id = value.id;
       btnAddToCart.innerText = 'Add to cart';    
       let divBtn = createDiv('book_btn');    
       divBtn.append(btnShow);
       divBtn.append(btnAddToCart);  
       return divBtn;
     },
     createBookCard:function (value){
        let divBookCard = createDiv('book_card'); 
        divBookCard.id = value.id;
        let divBookImg = createDiv('book_img');
        let src = value.imageLink;
        let bookImg = createImg(src,"cover");
        bookImg.classList.add('book_for_drag');
        bookImg.setAttribute('draggable','true');
        divBookImg.append(bookImg);
        let divBookInfo = createDiv('book_info');
        let title = value.title;
        let titleBook = createTitle("h4",title);
        let author =value.author;
        let authorBook = createTitle("h3",author); 
        let divCount = createDiv('book_count');  
        let price =value.price;
        let priceBook = createTitle("h5",price);
        let currency = createTitle("h5","$");
        let divBtn = createBtn(value);
        divCount.append(priceBook);
        divCount.append(currency);
        divBookInfo.append(titleBook);
        divBookInfo.append(authorBook);
        divBookInfo.append(divCount);   
        divBookInfo.append(divBtn);
        divBookCard.append(divBookImg);
        divBookCard.append(divBookInfo);
        return divBookCard;
    },
    createHeader:function  (){
        let header = document.createElement('header');
        let divContent = createDiv('content');    
        let divLogo = createDiv('logo'); 
        divLogo.id = 'logo';
        let divIcon = createDiv('header_icon');    
        let img = createImg("../../assets/icons/feather.svg","feather");    
        let h1 = createTitle('h1','SHELF');
        divIcon.append(img);
        divLogo.append(divIcon);
        divLogo.append(h1);
        divContent.append(divLogo);
        header.append(divContent);
        return header;
    },    
    createMain:function (){
        let main = document.createElement('main');
        let divContent = createDiv('content');
        let divBanner = createDiv('banner');
        let imgBanner = createImg("../../assets/images/banner.png","books-on-shelf");
        divBanner.append(imgBanner);
        divContent.append(divBanner);
        let divBookContent = createDiv('book_content_wrap');
        divContent.append(divBookContent);
        main.append(divContent);
        return main; 
    },    
    createFooter:function (){
        let footer = document.createElement('footer');
        let divContent = createDiv("content");
        let divContactInfo = createDiv("contact");  
        let footerTitle = createTitle('h2','CONTACT');    
        divContactInfo.append(footerTitle);
        let divMail = createDiv("mail");
        let imgMail = createImg("../../assets/icons/mail.svg","envelope");     
        let titleMail = createTitle('h3','contact@company.com');    
        divMail.append(imgMail);
        divMail.append(titleMail);
        divContactInfo.append(divMail);
        let divPhone = createDiv("phone");
        let imgPhone = createImg("../../assets/icons/phone.svg","phone");
        let titlePhone = createTitle('h3','+1 333 4040 5566');    
        divPhone.append(imgPhone);
        divPhone.append(titlePhone);
        divContactInfo.append(divPhone);
        let divLocation = createDiv("location");    
        let imgLocation = createImg("../../assets/icons/pin.svg","pin");
        let titleLocation = createTitle('h3','43 Brooklyn Ave, Brooklyn, NY 11216, USA');  
        divLocation.append(imgLocation);
        divLocation.append(titleLocation);
        divContactInfo.append(divLocation);
        divContent.append(divContactInfo);
        footer.append(divContent);
        return footer;
    }  
     
}

const functionsForShoppingCart = {
    createShoppingCart:function  (){
        let divCartWrap = createDiv('cart_wrap');
        let divCartHeader = createHeaderCart ();
        let divCartBody = createDiv('cart_body');
        let messageText = createTitle('h3',"You cart is empty");
        divCartBody.append(messageText);
        let divCartFooter = createFooterCart ();
        divCartWrap.append(divCartHeader);
        divCartWrap.append(divCartBody);
        divCartWrap.append(divCartFooter);
        return divCartWrap;
    },    
    createHeaderCart:function (){
        let divTitleWrap = createDiv('title_cart_wrap');
        let divFixTitle = createDiv('cart_title');    
        let img = createImg('../../assets/icons/bag.svg','bag');
        let nameTitle = createTitle('h3',"cart");
        let divCommonCountItems = createDiv('common_count_items');
        let countTitle = createTitle('h3',"0");
        countTitle.classList.add('title_count');
        let divSubTitle = createDiv('sub_title');
        let subTitle1 = createTitle('h3',"Item");
        let subTitle2 = createTitle('h3',"Price");
        let subTitle3 = createTitle('h3',"Quantity");
        divSubTitle.append(subTitle1);
        divSubTitle.append(subTitle2);
        divSubTitle.append(subTitle3);
        divCommonCountItems.append(countTitle);
        divFixTitle.append(img);
        divFixTitle.append(nameTitle);
        divFixTitle.append(divCommonCountItems);
        divTitleWrap.append(divFixTitle);
        divTitleWrap.append(divSubTitle);
        return divTitleWrap;
    },
    createFooterCart:function (){
        let divFooterWrap = createDiv('footer_cart_wrap');
        let button = createBtnConfirm();
        let subtotal = createDiv('footer_cart_subtotal');
        let nameTitle = createTitle('h3',"Subtotal:");
        let spanSubTotalItems = document.createElement('span');
        let countTitle = 0;
        let items = " items";
        let phrase = countTitle + items;
        let spanCount = document.createElement('span');
        let number = 0;
        let currency = " $";
        let summary = number + currency;
        spanCount.innerText = summary;
        spanCount.classList.add('sub_total_count');
        spanSubTotalItems.innerText = phrase;
        spanSubTotalItems.classList.add('sub_total_items');
        subtotal.prepend(nameTitle);
        subtotal.append(spanSubTotalItems);
        subtotal.append(spanCount);
        divFooterWrap.append(subtotal);
        divFooterWrap.append(button);
        return divFooterWrap;
    },
    createBtnConfirm:function(){
        let form = document.createElement('form');
        form.setAttribute('action','../delivery_form/delivery.html');    
        let button = document.createElement('button');    
        button.classList.add('confirm');    
        button.innerText = 'Confirm';
        form.append(button);
        return form;
    },
    createCloseBtn:function (){
        let divCross = createDiv('cross_shop');
        let span = document.createElement('span');
        let span1 = document.createElement('span');
        divCross.append(span);
        divCross.append(span1);  
    },
    createShopIcon:function (){
        let divShopIconWrap = createDiv('shop_icon_wrap');
        let src = '../../assets/icons/bag.svg';
        let img = createImg(src,"bag");
        let divShopImg  = createDiv('shop_img');
        divShopImg.append(img);
        let divShopTotal = createDiv('shop_total_value');
        let shopTotal = createTitle("h5",'0');
        shopTotal.classList.add('shop_total_header')
        divShopTotal.append(shopTotal);
        divShopIconWrap.append(divShopImg);
        divShopIconWrap.append(shopTotal);
        return divShopIconWrap;    
    },  
    updateCartTotal:function(){
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
        let titleTotalItems = document.getElementsByClassName('title_count')[0];
        let titleTotalItemsHeader = document.getElementsByClassName('shop_total_header')[0];
        subtotal.innerText = total +' $';
        subtotalItems.innerText = totalItems +' items';
        titleTotalItems.innerText = totalItems;
        titleTotalItemsHeader.innerText = totalItems;
      },
    removeCartItem:function (event){
          let buttonClicked = event.target.closest('.cross_shop');
          let parent = buttonClicked.parentElement.parentElement;    
          let parentID = parent.getAttribute('id');
          let cartValue = cart.find((cart)=> cart.id === parentID); 
          let cartIndex =cart.indexOf(cartValue);
          cart.splice(cartIndex,1);    
          parent.remove();    
          update();
          return cart;
      },
    quantityChange:function (event){
        let input = event.target;    
        if(isNaN(input.value) || input.value <= 0){
            input.value = 1;
        }
        let cartID = input.dataset.id;   
        let cartValue = cart.find((cart)=> cart.id === cartID); 
        let numberOfUnits = input.value;
        cartValue.numberOfUnits = numberOfUnits;
        input.setAttribute('value',numberOfUnits);        
        update();     
        return cart;      
    },
    addToCartClicked:function (event){
        let button =event.target;
        let cartID = button.dataset.id;
        addToCart (cartID);    
        },        
    addToCart:function (value){
            let bookCardShopCurrent = document.getElementsByClassName('book_card_shop');    
        for( let i=0;i<bookCardShopCurrent.length;i++){
            let currentID = bookCardShopCurrent[i].getAttribute('data-id');
            if (currentID === value){
            let currentBook = bookCardShopCurrent[i];   
            let currentQuantity = currentBook.getElementsByClassName('card_shop_quantity')[0];            
            let currentTotal = currentQuantity.getAttribute('value');            
            let total = Number(currentTotal);
            total++;
            let cartValue = cart.find((cart)=> cart.id === value); 
            cartValue.numberOfUnits = total; 
            currentQuantity.value = total;
            currentQuantity.setAttribute('value',total);        
            update();        
            return cart;
        }       
        }    
        let cartItemContainer = document.getElementsByClassName('cart_body')[0];
        let bookValue = book.find((book)=> book.id === value);    
        cart.push({...bookValue,
        numberOfUnits:1,});   
        let bookCardShop = createShopCart (bookValue);
        fragment.append(bookCardShop);    
        cartItemContainer.append(fragment);     
        update();
        return cart;
    },   
    createShopCart:function (value){
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
            let divCountShop = createDiv('book_count');
            let price =value.price;
            let priceBook = createTitle("h5",price);
            priceBook.classList.add('card_shop_price')
            let currency = createTitle("h5","$");
            divCountShop.append(priceBook);
            divCountShop.append(currency);
            let divShopBtn = createDiv('shop_btn');
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
            divShopBtn.append(input);
            divShopBtn.append(divCrossShop);
            bookCardShop.append(divBookImgShop);
            bookCardShop.append(divBookInfoShop);
            bookCardShop.append(divCountShop);
            bookCardShop.append(divShopBtn);
            return bookCardShop;
        },
        saveItemsInCart:function (){
            localStorage.setItem('CART',JSON.stringify(cart));        
        },
        update:function (){
            updateCartTotal();
            saveItemsInCart()
        }
};

const functionsForModalWindow = {
    createPopup:function (value){
        let divModalBody = createDiv("modal_body");    
        let divBookWrap = createDiv("book_wrap");
        let divBook = createDiv("book");
        let classArr = ["cross","title"]
        let arrSecond = ["cover","page","page","page","page","page","last-page","back-cover"];
        for(let i=0;i<classArr.length;i++){
            let div = createDiv(classArr[i]);        
            if (i == 0){
                let span = document.createElement('span');
                let span1 = document.createElement('span');
                div.append(span);
                div.append(span1);
            } 
            if (i == 1 ){
                let title = createTitle("h3","Touch book");
                div.append(title);
            }
            divBookWrap.append(div);
        }
        for(let i=0;i<arrSecond.length;i++){
            let div = createDiv(arrSecond[i]);        
            if (i == 0){
                
                let src = value.imageLink;
                let img = createImg(src,"cover");
                let divChild = createDiv("page-first");
                div.append(img);
                div.append(divChild);
            } 
            if (i == 6 ){
                let description = createParagraph(value);
                div.append(description);
            }
            divBook.append(div);
        }       
        divBookWrap.append(divBook);
        divModalBody.append(divBookWrap);
        fragment.append(divModalBody);
        BODY.append(fragment); 
        let cross = document.querySelector('.cross');    
        cross.addEventListener('click',closeModalWin);    
    },
    closeModalWin:function (event){    
        if(event.target.closest('.cross')){
        let modalBody = document.querySelector('.modal_body');
        modalBody.remove();}
    },
    createParagraph :function (value){
        let Paragraph = document.createElement('p');
        Paragraph.innerText = value.description;
        return Paragraph;
    } 
};

export const createDiv = functionsCommon.createDiv;
export const createImg = functionsCommon.createImg;
export const createTitle = functionsCommon.createTitle;

export const createBtn = functionsForMainPage.createBtn;
export const createBookCard = functionsForMainPage.createBookCard;
export const createHeader = functionsForMainPage.createHeader;
export const createMain = functionsForMainPage.createMain;
export const createFooter = functionsForMainPage.createFooter;

export const createShoppingCart = functionsForShoppingCart.createShoppingCart;
export const createHeaderCart = functionsForShoppingCart.createHeaderCart;
export const createFooterCart = functionsForShoppingCart.createFooterCart;
export const createBtnConfirm = functionsForShoppingCart.createBtnConfirm;
export const createCloseBtn = functionsForShoppingCart.createCloseBtn;
export const createShopIcon = functionsForShoppingCart.createShopIcon;

export const updateCartTotal = functionsForShoppingCart.updateCartTotal;
export const removeCartItem = functionsForShoppingCart.removeCartItem;
export const quantityChange = functionsForShoppingCart.quantityChange;
export const addToCartClicked = functionsForShoppingCart.addToCartClicked;
export const addToCart = functionsForShoppingCart.addToCart;
export const createShopCart = functionsForShoppingCart.createShopCart;
export const saveItemsInCart = functionsForShoppingCart.saveItemsInCart;
export const update = functionsForShoppingCart.update;


export const createPopup = functionsForModalWindow.createPopup;
export const closeModalWin = functionsForModalWindow.closeModalWin;
export const createParagraph = functionsForModalWindow.createParagraph;



