function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var o,r,a,i,f,u,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,a=r;return o=r=void 0,l=t,i=e.apply(a,n)}function S(e){return l=e,f=setTimeout(j,t),c?y(e):i}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=a}function j(){var e=v();if(O(e))return h(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?m(n,a-(e-l)):n}(e))}function h(e){return f=void 0,g&&o?y(e):(o=r=void 0,i)}function w(){var e=v(),n=O(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),i}return t=b(t)||0,p(n)&&(c=!!n.leading,a=(s="maxWait"in n)?d(b(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=r=f=void 0},w.flush=function(){return void 0===f?i:h(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||i.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),S=document.querySelector('[name = "email"]'),O=document.querySelector('[name = "message"]'),j=e(t)((()=>{const e={...JSON.parse(localStorage.getItem("feedback-form-state")),email:S.value,message:O.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);y.addEventListener("input",j);document.addEventListener("DOMContentLoaded",(()=>{if(localStorage.getItem("feedback-form-state")){const e=JSON.parse(localStorage.getItem("feedback-form-state"));y.email.value=e.email||"",y.message.value=e.message||""}else y.email.value="",y.message.value=""}));y.addEventListener("submit",(e=>{e.preventDefault();const t=JSON.parse(localStorage.getItem("feedback-form-state"));t&&(console.log(t),S.value="",O.value=""),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.443fe4ff.js.map