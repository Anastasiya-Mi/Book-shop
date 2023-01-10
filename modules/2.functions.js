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



export const createDiv = functionsCommon.createDiv;
export const createImg = functionsCommon.createImg;
export const createTitle = functionsCommon.createTitle;

export const createBtn = functionsForMainPage.createBtn;
export const createBookCard = functionsForMainPage.createBookCard;
export const createHeader = functionsForMainPage.createHeader;
export const createMain = functionsForMainPage.createMain;
export const createFooter = functionsForMainPage.createFooter;
// export const createBookCard = functionsForMainPage.createBookCard;



