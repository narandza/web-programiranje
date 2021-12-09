//navbar dropdown
let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('activate')
    cartItem.classList.remove('activate');
    search.classList.remove('activate');
}

let cartItem = document.querySelector('.cart-item-container')

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('activate')
    navbar.classList.remove('activate');
    search.classList.remove('activate');
}

let search = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('activate')
    navbar.classList.remove('activate');
    cartItem.classList.remove('activate');
}

window.onscroll = () =>{
    navbar.classList.remove('activate');
    cartItem.classList.remove('activate');
    search.classList.remove('activate');
}

//Html 

let footerLinks = document.querySelector('.footer .links')
let navbarLinks = ['home', 'menu', 'products', 'review', 'contact', 'blog','author']
var html=""
for(i=0;i<navbarLinks.length;i++){
    html+=`<a href="#${navbarLinks[i]}">${navbarLinks[i]}</a>`
}
navbar.innerHTML = html;
footerLinks.innerHTML = html;


//cart

let cart = document.querySelector('.cart-item-container')
var cartContent= ['beer helmet' ,'iron beer mug', 'pistol cap opener']
var cartPrice = [14.99,4.99,2.99]
var cartHtml = ""
let iCart= 0;
do {
    cartHtml+=`
    <div class="cart-item">
        <span class="fas fa-times remove"></span>
        <img src="assets/images/cart-item-${iCart+1}.jpg" alt="${cartContent[iCart]}">
        <div class="content">
            <h3>${cartContent[iCart]}</h3>
            <div class="price">$${cartPrice[iCart]}</div>
        </div>
    </div>
    `
    iCart++
} while (iCart<cartContent.length)
cartHtml+='<a href="#" class="btn checkout">checkout now</a>'
cart.innerHTML = cartHtml

//menu

let menu = document.querySelector('.menu .box-container');
var menuTitle = ['grimbergen blanche', 'grimbergen blonde', 'kabinet brrKaaa', 'kabinet superNova', 'kabinet porter', 'blue moon belgian white', 'guinness original dark', 'carlsberg' , 'budwieser', 'leffe brune']
var menuPrice = [5.99, 5.99, 6.99,6.99,6.99, 6.99, 7.99 , 8.99 , 3.49 , 6.99 ]
var menuPriceNew = menuPrice.map( x=> x*0.8)
var menuHtml= ""
for(i=0;i<menuTitle.length;i++){
    menuHtml+=`
    <div class="box">
        <img src="assets/images/menu-${i+1}.png" alt="${menuTitle[i]}">
        <h3>${menuTitle[i]}</h3>
        <div class="price">$${Math.round(menuPriceNew[i])} <span>${menuPrice[i]}</span></div>
        <a class="btn add-to-cart">add to cart</a>
    </div>
    `
}
menu.innerHTML = menuHtml;

//products

let products = document.querySelector('.products .box-container')
var productName = ['beer dispenser', 'wooden beer cup', 'retro beer bucket']
var productRating = [5 , 5, 4]
var productPrice = [39.99, 8.99 , 14.99]
var productPriceNew = productPrice.map( x => x*0.9)
var productHtml= ""

for(let i in productName){
    productHtml+=`
    <div class="box">
    <div class="icons">
        <a class="fas fa-shopping-cart add-to-cart"></a>
        <a class="fas fa-heart like"></a>
        <a class="fas fa-eye"></a>
    </div>
    <div class="image">
        <img src="assets/images/product-${parseInt(i)+1}.jpg" alt="${productName[i]}">
    </div>
    <div class="content">
        <h3>${productName[i]}</h3>
        <div class="stars">
            ${starRating(productRating[i])}
        </div>
        <div class="price">$${Math.round(productPriceNew[i])} <span>${productPrice[i]}</span></div>
    </div>
</div>
    `
}
products.innerHTML = productHtml;

//review

let review = $('.review .box-container')
var reviewText = ['Many beers from around the world to choose from. You can stand inside, or sit in the beer garden just next to it. A lovely break.' ,'Excellent place for beer! Good food too and a fun atmosphere. Not your traditional pub, which we love when looking for more craft beers! Very friendly staff','Beer beer and beer. Its all about the beer. Do you like beer. Of course you do. It is an immutable law. No one alive does not like beer there are just some who havent realised it yet. When you become one who has realised then go here and sate your palate.']
var reviewName = ['Dejan Govedarica', 'Mulan Putrović', 'Xin Zhao']
var reviewRating = [5,4,5]
var reviewHtml=""

for(let i=0;i<reviewName.length;i++){
    reviewHtml+=`
            <div class="box">
                <img src="assets/images/quote.png" alt="quote" class="quote">
                <p>${reviewText[i]}</p>
                <img src="assets/images/pic-${i+1}.jpg" alt="user-${i+1}" class="user">
                <h3>${reviewName[i]}</h3>
                <div class="stars">
                    ${starRating(reviewRating[i])}
                </div>
            </div>
    `
}
review.html(reviewHtml);

//blog

let blog = document.querySelector('.blog .box-container')
var blogTitle = ['A Few Words on Austrian Beer', 'Brewing Beer in San Francisco']
var blogCreator = ['admin', 'Dimitrije Jovanović']
var blogContent = ['Few countries have extant brewing traditions as old as Austria’s, or contain the fixtures of historic brewing countries. It’s also one of only three countries where the standard mass market lager is equivalent in quality and flavor to so-called craft beers elsewhere.','Five years ago I spent an afternoon with Dave McLean of Magnolia Brewery. Since then, the beer industry, San Francisco, and Magnolia—later purchased by New Belgium, which was itself purchased by Kirin—have all gone through major changes.']
var blogContentExtendet = [`Austrians love their beer, consuming more per capita than anyone but the Czechs. I toured the Schwechat Brewery (Anton Dreher’s old place, now owned by Brau Union, itself owned by Heineken), and the managing director there, Andreas Urban, told me that this number is not in decline as it is nearly everywhere else. He was quite bullish on Austrian beer, which was refreshing to hear. Given that almost all of it is the kind of beer his company makes, he ought to be.

The standard style of beer here is—I don’t mean to startle you—a pale lager of around 4.5 - 5%. In a lineup with lightly hopped German pilsners and helleses, the average American would be hard-pressed to distinguish it. Curiously, the Austrians call this beer a märzen. I found no good explanation why this would be. I assumed it followed the lightening that happened in German beer over the past thirty years, but when I suggested this to Andreas, he said. “To me, that is not correct.” He’s been brewing since the early 1990s, so he ought to know. `, `Those who have seen Dave McLean or visited Magnolia, the brewery he founded, may be tempted to jump to certain conclusions. The original brewery is located a block from the most famous intersection in America—the corner of Haight and Ashbury. The brewery’s founder, Dave McLean (rhymes with bean) looks like more than a passable facsimile for Jerry Garcia. And, on the overcast morning I visited, McLean was sporting a t-shirt commemorating the 50th anniversary of the Grateful Dead’s founding—containing a typically obscure, inside reference only other Deadheads would appreciate. It would be easy enough to look upon these sights as conclusive evidence that Magnolia’s essence comes with the aroma of Nag Champa.`]
var blogHtml=""

for(let i in blogTitle){
    blogHtml+=`
    <div class="box">
        <div class="image">
            <img src="assets/images/blog-${parseInt(i)+1}.jpg" alt="${blogTitle[i]}">
        </div>
        <div class="content">
            <a href="#" class="title">${blogTitle[i]}</a>
            <span>by ${blogCreator[i]}</span>
            <p>${blogContent[i]}</p>
            <a class="btn extend-btn">read more</a>
            <p class="extend">${blogContentExtendet[i]} \n <a class="invert-btn">Read Less</a></p>
        </div>
    </div>
    `
}
blog.innerHTML=blogHtml;

//social media
let socialMedia = $('.footer .share')
let socialMediaList = ['facebook','instagram','twitter','pinterest']
var socialMediaHtml= ""

for(let i of socialMediaList){
    socialMediaHtml+=`
    <a href="#" class="fab fa-${i}"></a>
    `
}
socialMedia.html(socialMediaHtml)

//slider

var backgroundImage = document.querySelector('.home')
var sliderImages = ['home-img','home-img-2','home-img-3']
var imageCounter = 0
window.onload= slider();

//read more 

var readMoreBtn = $('.extend-btn');
var readLessBtn = $('.invert-btn')

readMoreBtn.click(function() {
   $(this).addClass('hide')
   $(this).next().css('display', 'block')
})

readLessBtn.click(function(){
    $(this).parent().css('display', 'none')
    $(this).parent().prev().removeClass('hide');
})

//alerts

$('.add-to-cart').click( function (){
    alert('Item added to Cart')
})
$('.like').click( function (){
    alert('Item added to Wishlist')
})
$('.remove').click( function (){
    alert('Item removed from Cart')
})
$('.checkout').click( function (){
    alert('Order created successfully')
})

//form regex

const reName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
const reEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const reNumber = /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/

//Functions

function contactHandeler(){
    var name, email,  number, text, nameErr , emailErr, numberErr, textErr
    var errors= 0
    name = $('#name')
    email = $('#email')
    number = $('#number')
    text = $('#text')
    nameErr = $('#nameError')
    emailErr = $('#emailError')
    numberErr = $('#phoneError')
    textErr = $('#textError')
    
    if(name.val()==""){
        nameErr.html("This field is empty!")
        errors++
    }else if(!testRegex(reName,name.val())){
        nameErr.html("Invalid name! Name must contain only letters! (ex. John Doe)")
        errors++
    }else{
        nameErr.html(" ")
    }

    if(email.val()==""){
        emailErr.html("This field is empty!")
        errors++
    }else if(!testRegex(reEmail,email.val())){
        emailErr.html("Invalid email!  (ex. johndoe@mail.com)")
        errors++
    }else{
        emailErr.html(" ")
    }

    if(number.val()==""){
        numberErr.html("This field is empty!")
        errors++
    }else if(!testRegex(reNumber,number.val())){
        numberErr.html("Invalid number! Number must contain minimum 7 numbers! (ex. +381601234567)")
        errors++
    }else{
        numberErr.html(" ")
    }

    if(text.val()==""){
        textErr.html("This field is empty!")
        errors++
    }else{
        textErr.html("")
    }

    if(errors == 0){
        alert('Message Sent!')
    }
}

function testRegex(regex , value){
    return regex.test(value)
}

function starRating(value){
    var stars = ""
    switch (value) {
        case 1:
            stars+=`<i class="fas fa-star"></i>`
            break;
        case 2:
            stars+=`<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>`
            break;
        case 3:
            stars+=`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`
            break;
        case 4:
            stars+=`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`
            break;
        case 5:
            stars+=`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`
            break;
    }
    return stars;
}

function slider(){
    if(imageCounter<sliderImages.length){
        backgroundImage.style.backgroundImage = `url('assets/images/${sliderImages[imageCounter]}.jpg')`
        imageCounter++
    }
    else{
        imageCounter=0
    }
    setTimeout('slider()',5000)
}

//jQuery plugin

!function(){function e(t,n,o){function i(a,l){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!l&&u)return u(a,!0);if(r)return r(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var s=n[a]={exports:{}};t[a][0].call(s.exports,function(e){var n=t[a][1][e];return i(n||e)},s,s.exports,e,t,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}return e}()({1:[function(e,t,n){try{var o=new window.CustomEvent("test");if(o.preventDefault(),!0!==o.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var i=function(e,t){var n,o;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o=n.preventDefault,n.preventDefault=function(){o.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};i.prototype=window.Event.prototype,window.CustomEvent=i}},{}],2:[function(e,t,n){"use strict";function o(e,t){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var n=Object(e),o=1;o<arguments.length;o++){var i=arguments[o];if(void 0!==i&&null!==i)for(var r=Object.keys(Object(i)),a=0,l=r.length;a<l;a++){var u=r[a],d=Object.getOwnPropertyDescriptor(i,u);void 0!==d&&d.enumerable&&(n[u]=i[u])}}return n}function i(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:i}},{}],3:[function(e,t,n){"use strict";var o=e("../index"),i=function(e){e.fn.modalVideo=function(e){return"strings"==typeof e||new o(this,e),this}};if("function"==typeof define&&define.amd)define(["jquery"],i);else{var r=window.jQuery?window.jQuery:window.$;void 0!==r&&i(r)}t.exports=i},{"../index":5}],4:[function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();e("custom-event-polyfill");var r=e("../lib/util"),a=e("es6-object-assign").assign,l={channel:"youtube",facebook:{},youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,mute:0,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",nocookie:!1},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,controls:!0,height:null,loop:!1,maxheight:null,maxwidth:null,muted:!1,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},allowFullScreen:!0,allowAutoplay:!0,animationSpeed:300,classNames:{modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just openned the modal video",dismissBtnMessage:"Close the modal by clicking here"}},u=function(){function e(t,n){var i=this;o(this,e);var u=a({},l,n),d="string"==typeof t?document.querySelectorAll(t):t,s=document.querySelector("body"),c=u.classNames,f=u.animationSpeed;[].forEach.call(d,function(e){e.addEventListener("click",function(t){"A"===e.tagName&&t.preventDefault();var n=e.dataset.videoId,o=e.dataset.channel||u.channel,a=(0,r.getUniqId)(),l=e.dataset.videoUrl||i.getVideoUrl(u,o,n),d=i.getHtml(u,l,a);(0,r.append)(s,d);var v=document.getElementById(a),m=v.querySelector(".js-modal-video-dismiss-btn");v.focus(),v.addEventListener("click",function(){(0,r.addClass)(v,c.modalVideoClose),setTimeout(function(){(0,r.remove)(v),e.focus()},f)}),v.addEventListener("keydown",function(e){9===e.which&&(e.preventDefault(),document.activeElement===v?m.focus():(v.setAttribute("aria-label",""),v.focus()))}),m.addEventListener("click",function(){(0,r.triggerEvent)(v,"click")})})})}return i(e,[{key:"getPadding",value:function(e){var t=e.split(":"),n=Number(t[0]);return 100*Number(t[1])/n+"%"}},{key:"getQueryString",value:function(e){var t="";return Object.keys(e).forEach(function(n){t+=n+"="+e[n]+"&"}),t.substr(0,t.length-1)}},{key:"getVideoUrl",value:function(e,t,n){return"youtube"===t?this.getYoutubeUrl(e.youtube,n):"vimeo"===t?this.getVimeoUrl(e.vimeo,n):"facebook"===t?this.getFacebookUrl(e.facebook,n):""}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoutubeUrl",value:function(e,t){var n=this.getQueryString(e);return!0===e.nocookie?"//www.youtube-nocookie.com/embed/"+t+"?"+n:"//www.youtube.com/embed/"+t+"?"+n}},{key:"getFacebookUrl",value:function(e,t){return"//www.facebook.com/v2.10/plugins/video.php?href=https://www.facebook.com/facebook/videos/"+t+"&"+this.getQueryString(e)}},{key:"getHtml",value:function(e,t,n){var o=this.getPadding(e.ratio),i=e.classNames;return'\n      <div class="'+i.modalVideo+'" tabindex="-1" role="dialog" aria-label="'+e.aria.openMessage+'" id="'+n+'">\n        <div class="'+i.modalVideoBody+'">\n          <div class="'+i.modalVideoInner+'">\n            <div class="'+i.modalVideoIframeWrap+'" style="padding-bottom:'+o+'">\n              <button class="'+i.modalVideoCloseBtn+' js-modal-video-dismiss-btn" aria-label="'+e.aria.dismissBtnMessage+"\"></button>\n              <iframe width='460' height='230' src=\"https:"+t+"\" frameborder='0' allowfullscreen="+e.allowFullScreen+' tabindex="-1" '+(e.allowAutoplay?'allow="autoplay"':"")+"/>\n            </div>\n          </div>\n        </div>\n      </div>\n    "}}]),e}();n.default=u,t.exports=n.default},{"../lib/util":6,"custom-event-polyfill":1,"es6-object-assign":2}],5:[function(e,t,n){"use strict";t.exports=e("./core/")},{"./core/":4}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.append=function(e,t){var n=document.createElement("div");for(n.innerHTML=t;n.children.length>0;)e.appendChild(n.children[0])},n.getUniqId=function(){return(Date.now().toString(36)+Math.random().toString(36).substr(2,5)).toUpperCase()},n.remove=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},n.addClass=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},n.triggerEvent=function(e,t,n){var o=void 0;window.CustomEvent?o=new CustomEvent(t,{cancelable:!0}):(o=document.createEvent("CustomEvent"),o.initCustomEvent(t,!1,!1,n)),e.dispatchEvent(o)}},{}]},{},[3]);
$(".js-video-button").modalVideo({
    youtube: {
        controls: 0,
        nocookie: true
    }
});
$(".js-modal-btn").modalVideo();
