!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON");document.querySelector(".form").addEventListener("submit",(function(n){var t=function(n){var t=n+1,o=r+n*u;(function(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))})(t,o).then((function(){e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(){e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))};n.preventDefault();for(var o=n.target.elements,r=Number(o.delay.value),u=Number(o.step.value),a=o.amount.value,l=0;l<a;l+=1)t(l)}))}();
//# sourceMappingURL=03-promises.00878172.js.map