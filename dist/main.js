!function(e){var n={};function t(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)t.d(i,s,function(n){return e[n]}.bind(null,s));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var i=()=>'  \n  <div class="header-logo"><span>denStore</span></div>\n      <ul class="header-menu">\n        <li class="header-menu-items">\n          <button>New Releases</button>\n        </li>\n        <li class="header-menu-items">\n          <button>Promotions</button>\n        </li>\n      </ul>\n      <div class="header-cart">\n        <button class="header-cart-title">\n          <img src="./src/images/cart.svg" alt="" />\n        </button>\n        <div class="header-cart-counter"><span>Cart</span><span>(1)</span></div>\n        <span class="header-cart-total">$9000</span>\n      </div>';var s=()=>' \n  <section class="hero">\n        <figure class="hero-imgContainer">\n          <img src="./src/images/hero.svg" alt="big photo" />\n        </figure>\n      </section>\n      <section class="actions">\n        <h2 class="actions-category">New Releases</h2>\n        <div class="actions-searcher">\n          <input type="text" placeholder="busca un articulo" />\n        </div>\n      </section>\n      <section class="itemsContainer"></section>';var a=()=>"\n  <span>info@thisstore.com</span>\n  ";var r=[{id:1,name:"cafe",brand:"International",likes:1,dislikes:0,priceInitial:100,newRelease:!0,promotions:!1,discount:0,price:100,photo1:"./src/images/cafe.svg"},{id:2,name:"hamburguesa",brand:"burger",likes:10,dislikes:2,priceInitial:200,newRelease:!1,promotions:!0,discount:20,price:100,photo1:"./src/images/hamburguesa.svg"},{id:3,name:"helado",brand:"ice cream",likes:5,dislikes:1,priceInitial:300,newRelease:!0,promotions:!1,discount:0,price:100,photo1:"./src/images/helado.svg"},{id:4,name:"pizza",brand:"picsa",likes:2,dislikes:2,priceInitial:100,newRelease:!1,promotions:!0,discount:100,price:400,photo1:"./src/images/pizza.svg"},{id:5,name:"rosquilla",brand:"kiko",likes:0,dislikes:2,priceInitial:100,newRelease:!0,promotions:!1,discount:0,price:500,photo1:"./src/images/rosquilla.svg"},{id:6,name:"refresco",brand:"soda's",likes:0,dislikes:0,priceInitial:600,newRelease:!1,promotions:!0,discount:150,price:100,photo1:"./src/images/soda.svg"}];var o=function(){return`\n    <section class="itemsContainer">\n    ${r.map(e=>`\n    <article class="item">\n          <h3 class="item-name">${e.name}</h3>\n          <figure class="item-imgBox"><img src="${e.photo1}" alt="${e.name}"/></figure>\n          <button class="item-btn"><img src="./src/images/cart.svg" alt="add cart"/><span>add</span></button>\n          <div class="item-brand"> <span>${e.brand}</span></div>\n          <button  class="item-details" onclick="modal()" >+info</button><span class="item-price">${e.price}</span>\n        </article>\n    `).join("")}\n    </section> `};var c=()=>{const e=document.getElementById("header"),n=document.getElementById("hero"),t=document.getElementById("mainContainer"),r=document.getElementById("footer");e.innerHTML=i(),n.innerHTML=s(),t.innerHTML=o(),r.innerHTML=a()};window.addEventListener("load",c)}]);