(self.webpackChunk_ant_design_charts_site=self.webpackChunk_ant_design_charts_site||[]).push([[5743],{82551:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(61378),o=r(17),i=r(96832),u=r(39999),a=r(47045),l=r(33673),c="YJoIxKWKBUgHD4ZRzQQa";function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p=function(e){var t=e.rid,r=e.path,u=e.ratio,s=e.height,p=void 0===s?400:s,d=(0,i.useContext)(a.w).meta.exampleTopics,y=f(r.match(/([\w-]+)\/([\w-]+)\/demo\/([\w-]+)/i),4),m=(y[0],y[1]),v=y[2],h=y[3],b=(0,n.WF)(),g=(0,o.Z)(b,"editor.playgroundSize",.38),w=isNaN(Number(u))?g:Number(u);return i.createElement("div",{className:c,style:{height:p}},i.createElement(l.S,{isPlayground:!0,exampleTopics:d,topic:m,example:v,demo:h,size:w,replaceId:t}))};function d(e){var t=e.error;return console.log(t),i.createElement("div",{role:"alert"},i.createElement("p",null,"Something went wrong:"),i.createElement("pre",null,t.message))}var y=function(e){return i.createElement(u.ErrorBoundary,{FallbackComponent:d},i.createElement(p,e))}},10858:function(e,t,r){"use strict";r(61378),r(96832),r(52957)},54643:function(e,t,r){"use strict";r(96832)},52957:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(14978),o=r.n(n),i=r(96832),u=["children"];function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=function(e){var t=e.children,r=c(e,u),n=(0,i.useRef)(null),l=a((0,i.useState)(!1),2),f=l[0],s=l[1],p=a((0,i.useState)(!1),2),d=p[0],y=p[1];return(0,i.useEffect)((function(){var e=n.current;if(e){var t=o()((function(){s(e.scrollLeft>0),y(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}}),[]),i.createElement("div",{className:"dumi-default-table"},i.createElement("div",{className:"dumi-default-table-content",ref:n,"data-left-folded":f||void 0,"data-right-folded":d||void 0},i.createElement("table",r,t)))}},80996:function(e,t,r){"use strict";r(51322),r(96832)},14978:function(e,t,r){var n="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,f="object"==typeof self&&self&&self.Object===Object&&self,s=c||f||Function("return this")(),p=Object.prototype.toString,d=Math.max,y=Math.min,m=function(){return s.Date.now()};function v(e,t,r){var o,i,u,a,l,c,f=0,s=!1,p=!1,v=!0;if("function"!=typeof e)throw new TypeError(n);function g(t){var r=o,n=i;return o=i=void 0,f=t,a=e.apply(n,r)}function w(e){return f=e,l=setTimeout(O,t),s?g(e):a}function E(e){var r=e-c;return void 0===c||r>=t||r<0||p&&e-f>=u}function O(){var e=m();if(E(e))return j(e);l=setTimeout(O,function(e){var r=t-(e-c);return p?y(r,u-(e-f)):r}(e))}function j(e){return l=void 0,v&&o?g(e):(o=i=void 0,a)}function S(){var e=m(),r=E(e);if(o=arguments,i=this,c=e,r){if(void 0===l)return w(c);if(p)return l=setTimeout(O,t),g(c)}return void 0===l&&(l=setTimeout(O,t)),a}return t=b(t)||0,h(r)&&(s=!!r.leading,u=(p="maxWait"in r)?d(b(r.maxWait)||0,t):u,v="trailing"in r?!!r.trailing:v),S.cancel=function(){void 0!==l&&clearTimeout(l),f=0,o=c=i=l=void 0},S.flush=function(){return void 0===l?a:j(m())},S}function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=u.test(e);return r||a.test(e)?l(e.slice(2),r?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,r){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(n);return h(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})}},39999:function(e,t,r){!function(e,t){"use strict";function r(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var n=r(t);function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,o(e,t)}var u=function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=[]),e.length!==t.length||e.some((function(e,r){return!Object.is(e,t[r])}))},a={error:null},l=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state=a,t.resetErrorBoundary=function(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];null==t.props.onReset||(e=t.props).onReset.apply(e,n),t.reset()},t}i(t,e),t.getDerivedStateFromError=function(e){return{error:e}};var r=t.prototype;return r.reset=function(){this.setState(a)},r.componentDidCatch=function(e,t){var r,n;null==(r=(n=this.props).onError)||r.call(n,e,t)},r.componentDidUpdate=function(e,t){var r,n,o=this.state.error,i=this.props.resetKeys;null!==o&&null!==t.error&&u(e.resetKeys,i)&&(null==(r=(n=this.props).onResetKeysChange)||r.call(n,e.resetKeys,i),this.reset())},r.render=function(){var e=this.state.error,t=this.props,r=t.fallbackRender,o=t.FallbackComponent,i=t.fallback;if(null!==e){var u={error:e,resetErrorBoundary:this.resetErrorBoundary};if(n.isValidElement(i))return i;if("function"==typeof r)return r(u);if(o)return n.createElement(o,u);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},t}(n.Component);function c(e,t){var r=function(r){return n.createElement(l,t,n.createElement(e,r))},o=e.displayName||e.name||"Unknown";return r.displayName="withErrorBoundary("+o+")",r}function f(e){var t=n.useState(null),r=t[0],o=t[1];if(null!=e)throw e;if(null!=r)throw r;return o}e.ErrorBoundary=l,e.useErrorHandler=f,e.withErrorBoundary=c,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(96832))}}]);