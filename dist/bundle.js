!function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=1)}([function(e,n,t){"use strict";var r=function(){for(var e=document.querySelectorAll(".increment"),n=document.querySelectorAll(".decrement"),t=function(e,n){if(e){var t=n.target.nextElementSibling,r=t.innerHTML;r++}else{var t=n.target.previousElementSibling,r=t.innerHTML;if("0"===r)return;r--}t.innerHTML=r},r=0;r<e.length;r++)e[r].addEventListener("click",t.bind(null,!0));for(var i=0;i<n.length;i++)n[i].addEventListener("click",t.bind(null,!1))}();e.exports=r},function(e,n,t){"use strict";function r(){var e=document.createElement("div");return e.innerHTML=["Hello","individual"].join(" "),e}t(0);document.body.appendChild(r())}]);