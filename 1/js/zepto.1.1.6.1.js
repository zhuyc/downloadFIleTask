var Zepto=function(){function t(t){return null==t?String(t):V[X.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return N.call(t,function(t){return null!=t})}function u(t){return t.length>0?E.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in M?M[t]:M[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||$[c(t)]?e:e+"px"}function h(t){var e,n;return k[t]||(e=A.createElement(t),A.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),k[t]=n),k[t]}function p(t){return"children"in t?O.call(t.children):E.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e,n){for(T in e)n&&(o(e[T])||G(e[T]))?(o(e[T])&&!o(t[T])&&(t[T]={}),G(e[T])&&!G(t[T])&&(t[T]=[]),d(t[T],e[T],n)):e[T]!==x&&(t[T]=e[T])}function m(t,e){return null==e?E(t):E(t).filter(e)}function v(t,n,i,r){return e(n)?n.call(t,i,r):n}function g(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className,i=n&&n.baseVal!==x;return e===x?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function w(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?E.parseJSON(t):t:e):t}catch(n){return t}}function b(t,e){e(t);for(var n in t.childNodes)b(t.childNodes[n],e)}var x,T,E,S,C,j,P=[],O=P.slice,N=P.filter,A=window.document,k={},M={},$={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},_=/^\s*<(\w+|!)[^>]*>/,D=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Z=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,L=/^(?:body|html)$/i,R=/([A-Z])/g,z=["val","css","html","text","data","width","height","offset"],F=["after","prepend","before","append"],I=A.createElement("table"),q=A.createElement("tr"),U={tr:A.createElement("tbody"),tbody:I,thead:I,tfoot:I,td:q,th:q,"*":A.createElement("div")},B=/complete|loaded|interactive/,H=/^[\w-]*$/,V={},X=V.toString,Y={},J=A.createElement("div"),W={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},G=Array.isArray||function(t){return t instanceof Array};return Y.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=J).appendChild(t),i=~Y.qsa(r,e).indexOf(t),o&&J.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},j=function(t){return N.call(t,function(e,n){return t.indexOf(e)==n})},Y.fragment=function(t,e,n){var i,r,a;return D.test(t)&&(i=E(A.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(Z,"<$1></$2>")),e===x&&(e=_.test(t)&&RegExp.$1),e in U||(e="*"),a=U[e],a.innerHTML=""+t,i=E.each(O.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(r=E(i),E.each(n,function(t,e){z.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},Y.Z=function(t,e){return t=t||[],t.__proto__=E.fn,t.selector=e||"",t},Y.isZ=function(t){return t instanceof Y.Z},Y.init=function(t,n){var i;if(!t)return Y.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&_.test(t))i=Y.fragment(t,RegExp.$1,n),t=null;else{if(n!==x)return E(n).find(t);i=Y.qsa(A,t)}else{if(e(t))return E(A).ready(t);if(Y.isZ(t))return t;if(G(t))i=s(t);else if(r(t))i=[t],t=null;else if(_.test(t))i=Y.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==x)return E(n).find(t);i=Y.qsa(A,t)}}return Y.Z(i,t)},E=function(t,e){return Y.init(t,e)},E.extend=function(t){var e,n=O.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},Y.qsa=function(t,e){var n,r="#"==e[0],o=!r&&"."==e[0],a=r||o?e.slice(1):e,s=H.test(a);return i(t)&&s&&r?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:O.call(s&&!r?o?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},E.contains=function(t,e){return t!==e&&t.contains(e)},E.type=t,E.isFunction=e,E.isWindow=n,E.isArray=G,E.isPlainObject=o,E.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},E.inArray=function(t,e,n){return P.indexOf.call(e,t,n)},E.camelCase=C,E.trim=function(t){return null==t?"":String.prototype.trim.call(t)},E.uuid=0,E.support={},E.expr={},E.map=function(t,e){var n,i,r,o=[];if(a(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return u(o)},E.each=function(t,e){var n,i;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},E.grep=function(t,e){return N.call(t,e)},window.JSON&&(E.parseJSON=JSON.parse),E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){V["[object "+e+"]"]=e.toLowerCase()}),E.fn={forEach:P.forEach,reduce:P.reduce,push:P.push,sort:P.sort,indexOf:P.indexOf,concat:P.concat,map:function(t){return E(E.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return E(O.apply(this,arguments))},ready:function(t){return B.test(A.readyState)&&A.body?t(E):A.addEventListener("DOMContentLoaded",function(){t(E)},!1),this},get:function(t){return t===x?O.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return P.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):E(N.call(this,function(e){return Y.matches(e,t)}))},add:function(t,e){return E(j(this.concat(E(t,e))))},is:function(t){return this.length>0&&Y.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==x)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?O.call(t):E(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return E(n)},has:function(t){return this.filter(function(){return r(t)?E.contains(this,t):E(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:E(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:E(t)},find:function(t){var e,n=this;return e="object"==typeof t?E(t).filter(function(){var t=this;return P.some.call(n,function(e){return E.contains(e,t)})}):1==this.length?E(Y.qsa(this[0],t)):this.map(function(){return Y.qsa(this,t)})},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=E(t));n&&!(r?r.indexOf(n)>=0:Y.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return E(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=E.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(j(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return O.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return N.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return E.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=E(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){E(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){E(this[0]).before(t=E(t));for(var e;(e=t.children()).length;)t=e.first();E(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=E(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){E(this).replaceWith(E(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=E(this);(t===x?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return E(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return E(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;E(this).empty().append(v(this,t,e,n))})},text:function(t){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t===x?"":""+t})},attr:function(t,e){var n;return"string"==typeof t&&e===x?0==this.length||1!==this[0].nodeType?x:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:this.each(function(n){if(1===this.nodeType)if(r(t))for(T in t)g(this,T,t[T]);else g(this,t,v(this,e,n,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&g(this,t)})},prop:function(t,e){return t=W[t]||t,e===x?this[0]&&this[0][t]:this.each(function(n){this[t]=v(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+t.replace(R,"-$1").toLowerCase(),e);return null!==n?w(n):x},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?E(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=v(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var n=E(this),i=v(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i=this[0],r=getComputedStyle(i,"");if(!i)return;if("string"==typeof e)return i.style[C(e)]||r.getPropertyValue(e);if(G(e)){var o={};return E.each(G(e)?e:[e],function(t,e){o[e]=i.style[C(e)]||r.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(T in e)e[T]||0===e[T]?a+=c(T)+":"+f(T,e[T])+";":this.each(function(){this.style.removeProperty(c(T))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(E(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?P.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){S=[];var n=y(this),i=v(this,t,e,n);i.split(/\s+/g).forEach(function(t){E(this).hasClass(t)||S.push(t)},this),S.length&&y(this,n+(n?" ":"")+S.join(" "))}):this},removeClass:function(t){return this.each(function(e){return t===x?y(this,""):(S=y(this),v(this,t,e,S).split(/\s+/g).forEach(function(t){S=S.replace(l(t)," ")}),void y(this,S.trim()))})},toggleClass:function(t,e){return t?this.each(function(n){var i=E(this),r=v(this,t,n,y(this));r.split(/\s+/g).forEach(function(t){(e===x?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===x?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===x?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=L.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(E(t).css("margin-top"))||0,n.left-=parseFloat(E(t).css("margin-left"))||0,i.top+=parseFloat(E(e[0]).css("border-top-width"))||0,i.left+=parseFloat(E(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||A.body;t&&!L.test(t.nodeName)&&"static"==E(t).css("position");)t=t.offsetParent;return t})}},E.fn.detach=E.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});E.fn[t]=function(r){var o,a=this[0];return r===x?n(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=E(this),a.css(t,v(this,r,e,a[t]()))})}}),F.forEach(function(e,n){var i=n%2;E.fn[e]=function(){var e,r,o=E.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:Y.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null,o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!r)return E(t).remove();b(r.insertBefore(t,e),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},E.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return E(t)[e](this),this}}),Y.Z.prototype=E.fn,Y.uniq=j,Y.deserializeValue=w,E.zepto=Y,E}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=i(n),n.ns)var s=r(n.ns);return(v[e(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||s.test(t.ns))&&(!o||e(t.fn)===e(o))&&(!a||t.sel==a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in w||!!e}function a(t){return b[t]||y&&w[t]||t}function s(n,r,s,u,l,h,p){var d=e(n),m=v[d]||(v[d]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var r=i(e);r.fn=s,r.sel=l,r.e in b&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=h;var d=h||s;r.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},r.i=m.length,m.push(r),"addEventListener"in n&&n.addEventListener(a(r.e),r.proxy,o(r,p))})}function u(t,i,r,s,u){var c=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,s).forEach(function(e){delete v[c][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,u))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(S,function(t,i){var r=n[t];e[t]=function(){return this[i]=x,r&&r.apply(n,arguments)},e[i]=T}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function l(t){var e,n={originalEvent:t};for(e in t)E.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,w={focus:"focusin",blur:"focusout"},b={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:s,remove:u},t.proxy=function(n,i){if(d(n)){var r=function(){return n.apply(i,arguments)};return r._zid=e(n),r}if(m(i))return t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},T=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var a,c,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,i,e,o)}),h):(m(n)||d(r)||r===!1||(r=i,i=n,n=f),(d(i)||i===!1)&&(r=i,i=f),r===!1&&(r=T),h.each(function(f,h){o&&(a=function(t){return u(h,t.type,r),r.apply(this,arguments)}),n&&(c=function(e){var i,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(i=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||r).apply(o,[i].concat(p.call(arguments,1)))):void 0}),s(h,e,r,i,n,c||a)}))},t.fn.off=function(e,n,i){var r=this;return e&&!m(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(m(n)||d(i)||i===!1||(i=n,n=f),i===!1&&(i=T),r.each(function(){u(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(a,s){r=l(m(e)?t.Event(e):e),r._args=i,r.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),c(n)}}(Zepto),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){return t.global?e(n||y,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function a(t,e,i,r){var o=i.context,a="success";i.success.call(o,t,a,e),r&&r.resolveWith(o,[t,a,e]),n(i,o,"ajaxSuccess",[e,i,t]),u(a,e,i)}function s(t,e,i,r,o){var a=r.context;r.error.call(a,i,e,t),o&&o.rejectWith(a,[i,e,t]),n(r,a,"ajaxError",[i,r,t||e]),u(e,i,r)}function u(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==E?"html":t==T?"json":b.test(t)?"script":x.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function d(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(u.name,u.value):"array"==o||!i&&"object"==o?d(e,u,i,n):e.add(n,u)})}var m,v,g=0,y=window.document,w=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,b=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,T="application/json",E="text/html",S=/^\s*$/;t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"jsonp"+ ++g,l=y.createElement("script"),f=window[c],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,u){clearTimeout(r),t(l).off().remove(),"error"!=o.type&&i?a(i[0],p,e,n):s(null,u||"error",p,e,n),window[c]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),o(p,e)===!1?(h("abort"),p):(window[c]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(l),e.timeout>0&&(r=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:T,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),r=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===n[m]&&(n[m]=t.ajaxSettings[m]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),h(n),n.cache===!1&&(n.url=f(n.url,"_="+Date.now()));var u=n.dataType,p=/\?.+=\?/.test(n.url);if("jsonp"==u||p)return p||(n.url=f(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,r);var d,g=n.accepts[u],y={},w=function(t,e){y[t.toLowerCase()]=[t,e]},b=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,x=n.xhr(),T=x.setRequestHeader;if(r&&r.promise(x),n.crossDomain||w("X-Requested-With","XMLHttpRequest"),w("Accept",g||"*/*"),(g=n.mimeType||g)&&(g.indexOf(",")>-1&&(g=g.split(",",2)[0]),x.overrideMimeType&&x.overrideMimeType(g)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&w("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(v in n.headers)w(v,n.headers[v]);if(x.setRequestHeader=w,x.onreadystatechange=function(){if(4==x.readyState){x.onreadystatechange=c,clearTimeout(d);var e,i=!1;if(x.status>=200&&x.status<300||304==x.status||0==x.status&&"file:"==b){u=u||l(n.mimeType||x.getResponseHeader("content-type")),e=x.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=x.responseXML:"json"==u&&(e=S.test(e)?null:t.parseJSON(e))}catch(o){i=o}i?s(i,"parsererror",x,n,r):a(e,x,n,r)}else s(x.statusText||null,x.status?"error":"abort",x,n,r)}},o(x,n)===!1)return x.abort(),s(null,"abort",x,n,r),x;if(n.xhrFields)for(v in n.xhrFields)x[v]=n.xhrFields[v];var E="async"in n?n.async:!0;x.open(n.type,n.url,E,n.username,n.password);for(v in y)T.apply(x,y[v]);return n.timeout>0&&(d=setTimeout(function(){x.onreadystatechange=c,x.abort(),s(null,"timeout",x,n,r)},n.timeout)),x.send(n.data?n.data:null),x},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,a=e.split(/\s/),s=p(e,n,i),u=s.success;return a.length>1&&(s.url=a[0],r=a[1]),s.success=function(e){o.html(r?t("<div>").html(e.replace(w,"")).find(r):e),u&&u.apply(o,arguments)},t.ajax(s),this};var C=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(C(t)+"="+C(e))},d(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n=[];return t([].slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(t){function e(t){var e=this.os={},n=this.browser={},i=t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),r=t.match(/(Android);?[\s\/]+([\d.]+)?/),o=t.match(/(iPad).*OS\s([\d_]+)/),a=t.match(/(iPod)(.*OS\s([\d_]+))?/),s=!o&&t.match(/(iPhone\sOS)\s([\d_]+)/),u=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),c=u&&t.match(/TouchPad/),l=t.match(/Kindle\/([\d.]+)/),f=t.match(/Silk\/([\d._]+)/),h=t.match(/(BlackBerry).*Version\/([\d.]+)/),p=t.match(/(BB10).*Version\/([\d.]+)/),d=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),m=t.match(/PlayBook/),v=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),g=t.match(/Firefox\/([\d.]+)/),y=t.match(/MSIE\s([\d.]+)/),w=i&&t.match(/Mobile\//)&&!v,b=t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)&&!v;(n.webkit=!!i)&&(n.version=i[1]),r&&(e.android=!0,e.version=r[2]),s&&!a&&(e.ios=e.iphone=!0,e.version=s[2].replace(/_/g,".")),o&&(e.ios=e.ipad=!0,e.version=o[2].replace(/_/g,".")),a&&(e.ios=e.ipod=!0,e.version=a[3]?a[3].replace(/_/g,"."):null),u&&(e.webos=!0,e.version=u[2]),c&&(e.touchpad=!0),h&&(e.blackberry=!0,e.version=h[2]),p&&(e.bb10=!0,e.version=p[2]),d&&(e.rimtabletos=!0,e.version=d[2]),m&&(n.playbook=!0),l&&(e.kindle=!0,e.version=l[1]),f&&(n.silk=!0,n.version=f[1]),!f&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0),v&&(n.chrome=!0,n.version=v[1]),g&&(n.firefox=!0,n.version=g[1]),y&&(n.ie=!0,n.version=y[1]),w&&(t.match(/Safari/)||e.ios)&&(n.safari=!0),b&&(n.webview=!0),e.tablet=!!(o||m||r&&!t.match(/Mobile/)||g&&t.match(/Tablet/)||y&&!t.match(/Phone/)&&t.match(/Touch/)),e.phone=!(e.tablet||e.ipod||!(r||s||u||h||p||v&&t.match(/Android/)||v&&t.match(/CriOS\/([\d.]+)/)||g&&t.match(/Mobile/)||y&&t.match(/Touch/)))}e.call(t,navigator.userAgent),t.__detect=e}(Zepto),function(t,e){function n(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function i(t){return r?r+t:t.toLowerCase()}var r,o,a,s,u,c,l,f,h,p,d="",m={Webkit:"webkit",Moz:"",O:"o"},v=window.document,g=v.createElement("div"),y=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,w={};t.each(m,function(t,n){return g.style[t+"TransitionProperty"]!==e?(d="-"+t.toLowerCase()+"-",r=n,!1):void 0}),o=d+"transform",w[a=d+"transition-property"]=w[s=d+"transition-duration"]=w[c=d+"transition-delay"]=w[u=d+"transition-timing-function"]=w[l=d+"animation-name"]=w[f=d+"animation-duration"]=w[p=d+"animation-delay"]=w[h=d+"animation-timing-function"]="",t.fx={off:r===e&&g.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:d,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(n,i,r,o,a){return t.isFunction(i)&&(o=i,r=e,i=e),t.isFunction(r)&&(o=r,r=e),t.isPlainObject(i)&&(r=i.easing,o=i.complete,a=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),a&&(a=parseFloat(a)/1e3),this.anim(n,i,r,o,a)},t.fn.anim=function(i,r,d,m,v){var g,b,x,T={},E="",S=this,C=t.fx.transitionEnd,j=!1;if(r===e&&(r=t.fx.speeds._default/1e3),v===e&&(v=0),t.fx.off&&(r=0),"string"==typeof i)T[l]=i,T[f]=r+"s",T[p]=v+"s",T[h]=d||"linear",C=t.fx.animationEnd;else{b=[];for(g in i)y.test(g)?E+=g+"("+i[g]+") ":(T[g]=i[g],b.push(n(g)));E&&(T[o]=E,b.push(o)),r>0&&"object"==typeof i&&(T[a]=b.join(", "),T[s]=r+"s",T[c]=v+"s",T[u]=d||"linear")}return x=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(C,x)}else t(this).unbind(C,x);j=!0,t(this).css(w),m&&m.call(this)},r>0&&(this.bind(C,x),setTimeout(function(){j||x.call(S)},1e3*r+25)),this.size()&&this.get(0).clientLeft,this.css(T),0>=r&&setTimeout(function(){S.each(function(){x.call(this)})},0),this},g=null}(Zepto),function(t,e){function n(n,i,r,o,a){"function"!=typeof i||a||(a=i,i=e);var s={opacity:r};return o&&(s.scale=o,n.css(t.fx.cssPrefix+"transform-origin","0 0")),n.animate(s,i,null,a)}function i(e,i,r,o){return n(e,i,0,r,function(){a.call(t(this)),o&&o.call(this)})}var r=window.document,o=(r.documentElement,t.fn.show),a=t.fn.hide,s=t.fn.toggle;t.fn.show=function(t,i){return o.call(this),t===e?t=0:this.css("opacity",0),n(this,t,1,"1,1",i)},t.fn.hide=function(t,n){return t===e?a.call(this):i(this,t,"0,0",n)},t.fn.toggle=function(n,i){return n===e||"boolean"==typeof n?s.call(this,n):this.each(function(){var e=t(this);e["none"==e.css("display")?"show":"hide"](n,i)})},t.fn.fadeTo=function(t,e,i){return n(this,t,e,null,i)},t.fn.fadeIn=function(t,e){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,o.call(this).fadeTo(t,n,e)},t.fn.fadeOut=function(t,e){return i(this,t,null,e)},t.fn.fadeToggle=function(e,n){return this.each(function(){var i=t(this);i[0==i.css("opacity")||"none"==i.css("display")?"fadeIn":"fadeOut"](e,n)})}}(Zepto),function(t){var e,n=[];t.fn.remove=function(){return this.each(function(){this.parentNode&&("IMG"===this.tagName&&(n.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",e&&clearTimeout(e),e=setTimeout(function(){n=[]},6e4)),this.parentNode.removeChild(this))})}}(Zepto),function(t){function e(e,i){var u=e[s],c=u&&r[u];if(void 0===i)return c||n(e);if(c){if(i in c)return c[i];var l=a(i);if(l in c)return c[l]}return o.call(t(e),i)}function n(e,n,o){var u=e[s]||(e[s]=++t.uuid),c=r[u]||(r[u]=i(e));return void 0!==n&&(c[a(n)]=o),c}function i(e){var n={};return t.each(e.attributes||u,function(e,i){0==i.name.indexOf("data-")&&(n[a(i.name.replace("data-",""))]=t.zepto.deserializeValue(i.value))}),n}var r={},o=t.fn.data,a=t.camelCase,s=t.expando="Zepto"+ +new Date,u=[];t.fn.data=function(i,r){return void 0===r?t.isPlainObject(i)?this.each(function(e,r){t.each(i,function(t,e){n(r,t,e)})}):0==this.length?void 0:e(this[0],i):this.each(function(){n(this,i,r)})},t.fn.removeData=function(e){return"string"==typeof e&&(e=e.split(/\s+/)),this.each(function(){var n=this[s],i=n&&r[n];i&&t.each(e||i,function(t){delete i[e?a(this):t]})})},["remove","empty"].forEach(function(e){var n=t.fn[e];t.fn[e]=function(){var t=this.find("*");return"remove"===e&&(t=t.add(this)),t.removeData(),n.call(this)}})}(Zepto),function(t){function e(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")}function n(t,e){t=t.replace(/=#\]/g,'="#"]');var n,i,r=s.exec(t);if(r&&r[2]in a&&(n=a[r[2]],i=r[3],t=r[1],i)){var o=Number(i);i=isNaN(o)?i.replace(/^["']|["']$/g,""):o}return e(t,n,i)}var i=t.zepto,r=i.qsa,o=i.matches,a=t.expr[":"]={visible:function(){return e(this)?this:void 0},hidden:function(){return e(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,e){return t===e.length-1?this:void 0},eq:function(t,e,n){return t===n?this:void 0},contains:function(e,n,i){return t(this).text().indexOf(i)>-1?this:void 0},has:function(t,e,n){return i.qsa(this,n).length?this:void 0}},s=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),u=/^\s*>/,c="Zepto"+ +new Date;i.qsa=function(e,o){return n(o,function(n,a,s){try{var l;!n&&a?n="*":u.test(n)&&(l=t(e).addClass(c),n="."+c+" "+n);var f=r(e,n)}catch(h){throw console.error("error performing selector: %o",o),h}finally{l&&l.removeClass(c)}return a?i.uniq(t.map(f,function(t,e){return a.call(t,e,f,s)})):f})},i.matches=function(t,e){return n(e,function(e,n,i){return(!e||o(t,e))&&(!n||n.call(t,null,i)===t)})}}(Zepto),function(t){function e(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down";
}function n(){l=null,h.last&&(h.el.trigger("longTap"),h={})}function i(){l&&clearTimeout(l),l=null}function r(){s&&clearTimeout(s),u&&clearTimeout(u),c&&clearTimeout(c),l&&clearTimeout(l),s=u=c=l=null,h={}}function o(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function a(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var s,u,c,l,f,h={},p=750;t(document).ready(function(){var d,m,v,g,y=0,w=0;"MSGesture"in window&&(f=new MSGesture,f.target=document.body),t(document).bind("MSGestureEnd",function(t){var e=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;e&&(h.el.trigger("swipe"),h.el.trigger("swipe"+e))}).on("touchstart MSPointerDown pointerdown",function(e){(!(g=a(e,"down"))||o(e))&&(v=g?e:e.touches[0],e.touches&&1===e.touches.length&&h.x2&&(h.x2=void 0,h.y2=void 0),d=Date.now(),m=d-(h.last||d),h.el=t("tagName"in v.target?v.target:v.target.parentNode),s&&clearTimeout(s),h.x1=v.pageX,h.y1=v.pageY,m>0&&250>=m&&(h.isDoubleTap=!0),h.last=d,l=setTimeout(n,p),f&&g&&f.addPointer(e.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(!(g=a(t,"move"))||o(t))&&(v=g?t:t.touches[0],i(),h.x2=v.pageX,h.y2=v.pageY,y+=Math.abs(h.x1-h.x2),w+=Math.abs(h.y1-h.y2))}).on("touchend MSPointerUp pointerup",function(n){(!(g=a(n,"up"))||o(n))&&(i(),h.x2&&Math.abs(h.x1-h.x2)>30||h.y2&&Math.abs(h.y1-h.y2)>30?c=setTimeout(function(){h.el.trigger("swipe"),h.el.trigger("swipe"+e(h.x1,h.x2,h.y1,h.y2)),h={}},0):"last"in h&&(30>y&&30>w?u=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=r,h.el.trigger(e),h.isDoubleTap?(h.el&&h.el.trigger("doubleTap"),h={}):s=setTimeout(function(){s=null,h.el&&h.el.trigger("singleTap"),h={}},250)},0):h={}),y=w=0)}).on("touchcancel MSPointerCancel pointercancel",r),t(window).on("scroll",r)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(Zepto),function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(e){if(void 0===this||null===this)throw new TypeError;var n,i=Object(this),r=i.length>>>0,o=0;if("function"!=typeof e)throw new TypeError;if(0==r&&1==arguments.length)throw new TypeError;if(arguments.length>=2)n=arguments[1];else for(;;){if(o in i){n=i[o++];break}if(++o>=r)throw new TypeError}for(;r>o;)o in i&&(n=e.call(t,n,i[o],o,i)),o++;return n})}(),"function"==typeof define&&define(function(t,e,n){return $}),function(){function t(t){return a.raw?t:encodeURIComponent(t)}function e(t){return a.raw?t:decodeURIComponent(t)}function n(e){return t(a.json?JSON.stringify(e):String(e))}function i(t){0===t.indexOf('"')&&(t=t.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return t=decodeURIComponent(t.replace(o," ")),a.json?JSON.parse(t):t}catch(e){}}function r(t,e){var n=a.raw?t:i(t);return $.isFunction(e)?e(n):n}var o=/\+/g,a=$.cookie=function(i,o,s){if(void 0!==o&&!$.isFunction(o)){if(s=$.extend({},a.defaults,s),"number"==typeof s.expires){var u=s.expires,c=s.expires=new Date;c.setTime(+c+864e5*u)}return document.cookie=[t(i),"=",n(o),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var l=i?void 0:{},f=document.cookie?document.cookie.split("; "):[],h=0,p=f.length;p>h;h++){var d=f[h].split("="),m=e(d.shift()),v=d.join("=");if(i&&i===m){l=r(v,o);break}i||void 0===(v=r(v))||(l[m]=v)}return l};a.defaults={},$.removeCookie=function(t,e){return void 0===$.cookie(t)?!1:($.cookie(t,"",$.extend({},e,{expires:-1})),!$.cookie(t))}}();