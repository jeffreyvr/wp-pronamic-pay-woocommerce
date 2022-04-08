var PronamicPayWooCommerce;!function(){"use strict";var e={d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.r(t),e.d(t,{registerMethod:function(){return f}});var r=window.wp.element,o=window.wc.wcBlocksRegistry,i=window.wc.wcSettings,a=window.wp.htmlEntities,l=window.wp.components,c=function(e){return e.text},u=function(e){var t,o,i=e.description,a=e.fields,c=e.eventRegistration.onPaymentProcessing,u=(t=(0,r.useState)(),o=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],_n=!0,a=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);_n=!0);}catch(e){a=!0,o=e}finally{try{_n||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,o)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=u[0],f=u[1];return(0,r.useEffect)((function(){return c((function(){return{type:"success",meta:{paymentMethodData:s}}}))}),[c,s]),a.forEach((function(e){e.options=[],e.choices.forEach((function(t){for(var n in t.options)e.options.push({value:n,label:t.options[n]})}))})),(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",null,(0,r.createElement)("div",{dangerouslySetInnerHTML:{__html:i}}),a.map((function(e){return(0,r.createElement)("div",{key:e.id},(0,r.createElement)(l.SelectControl,{label:e.label,options:e.options,onChange:function(t){return f((n={},o=t,(r=e.name)in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n));var n,r,o}}))}))))},s=function(e){var t=e.components.PaymentMethodLabel;return(0,r.createElement)(r.Fragment,null,""!==e.icon&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)("img",{src:e.icon})," "),""!==e.title&&(0,r.createElement)(t,{text:(0,a.decodeEntities)(e.title)}))};function f(e){var t=(0,i.getSetting)(e+"_data",!1);if(!1!==t){var n=t.title||"",l=t.description||"";(0,o.registerPaymentMethod)({name:e,label:(0,r.createElement)(s,{title:n,icon:t.icon}),ariaLabel:(0,a.decodeEntities)(n),content:(0,r.createElement)(u,{description:l,fields:t.fields}),edit:(0,r.createElement)(c,{text:l}),placeOrderButtonLabel:t.orderButtonLabel||"",supports:{features:(null==t?void 0:t.supports)||["products"]},canMakePayment:function(){return!0}})}}PronamicPayWooCommerce=t}();