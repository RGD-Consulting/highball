!function(e){function t(l){if(n[l])return n[l].exports;var a=n[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";var l=function(){for(var e=document.querySelectorAll(".ball"),t=0;t<e.length;t++){var n=new Hammer(e[t]);n.on("press",function(t){var n=t.target,l=Array.from(e),a=Array.from(t.target.classList),r=a[1];n.classList.contains("ball-dead")||n.classList.contains("ball-space")||n.classList.contains("ball-9")?(n.classList.remove("ball-dead"),l.filter(function(e){return e.classList.contains(r)}).forEach(function(e){return e.classList.remove("ball-dead")})):(n.classList.add("ball-dead"),n.classList.remove("ball-active"),n.classList.remove("ball-inactive"),l.filter(function(e){return e.classList.contains(r)}).forEach(function(e){return e.classList.add("ball-dead")}))}),e[t].addEventListener("click",function(t){var n=t.target;n.classList.contains("ball-space")||t.target.classList.add("ball-inactive");var l=Array.from(e),a=Array.from(t.target.classList),r=a[1];l.filter(function(e){return!e.classList.contains("ball-space")}).filter(function(e){return!e.classList.contains("ball-dead")}).filter(function(e){return e.classList.contains(r)}).forEach(function(e){e.classList.contains("ball-active")?(e.classList.remove("ball-active"),e.classList.add("ball-inactive")):e.classList.contains("ball-inactive")&&(e.classList.add("ball-active"),e.classList.remove("ball-inactive")),e.classList.contains("ball-active")||(e.classList.add("ball-inactive"),e.classList.remove("ball-active"))})})}}();e.exports=l},function(e,t,n){"use strict";var l=function(){for(var e=document.querySelectorAll(".increment"),t=document.querySelectorAll(".decrement"),n=function(e,t){if(e){var n=t.target.nextElementSibling,l=n.innerHTML;l++}else{var n=t.target.previousElementSibling,l=n.innerHTML;if("0"===l)return;l--}n.innerHTML=l},l=0;l<e.length;l++)e[l].addEventListener("click",n.bind(null,!0));for(var a=0;a<t.length;a++)t[a].addEventListener("click",n.bind(null,!1))}();e.exports=l},function(e,t,n){"use strict";var l=function(){for(var e=document.querySelectorAll(".ball"),t=document.querySelector(".player-one-score"),n=document.querySelector(".player-two-score"),l=0;l<e.length;l++)e[l].addEventListener("click",function(){var e=document.querySelectorAll(".diamond-left .ball-active"),l=document.querySelectorAll(".diamond-right .ball-active"),a=document.querySelector(".diamond-left .ball-9"),r=document.querySelector(".diamond-right .ball-9"),c=document.querySelectorAll(".diamond-left .ball-dead"),i=document.querySelector(".dead-ball-score");t.innerHTML=e.length,n.innerHTML=l.length,a.classList.contains("ball-active")?t.innerHTML++:r.classList.contains("ball-active")&&n.innerHTML++,i.innerHTML=c.length})}();e.exports=l},function(e,t,n){"use strict";n(1),n(0),n(2)}]);