define("fedRouter",function(t,e,r){function o(t){return this instanceof o?($.extend(this,{$$curRoute:"",$$events:{},rootEvent:{},$ctrlName:"",$setRouterArr:[],$routerTopArr:[]},{$$routeArr:t}),o.$$routeArr=t,void this.$$init()):new o(t)}o.$$setDefaultRouter=function(t){this.defaultRouter=t||""},o.getParams=function(){var t=document.location.hash.replace(/#/,"").split("?")[0],e="";return t=t.replace(/\//,"").replace(/\//g,"."),this.verifyParam(t)||(e=decodeURIComponent(t.split(".")[1])),e},o.appendRouter=function(t,e){var r=document.location.hash.replace(/#/,""),o={from:r,to:t};"[object Function]"=={}.toString.call(e)&&e(JSON.stringify(o));var n,i=document.createElement("div");n=t.replace(/\./g,"")+"Page",t&&$("#"+n)[0]||(i.setAttribute("id",n),$("html-view").append(i))},o.open=function(t,e){var r="";r=void 0==e?"":"/"+encodeURIComponent(JSON.stringify(e)),window.location.href=window.location.href.split("#")[0]+"#/"+t+r,this.defineRouteId=t.replace(/\./g,"")+"Page"},o.close=function(){window.history.back()},o.verifyParam=function(t){var e=!1;return(t.split(".").length=2)&&o.$$routeArr.forEach(function(r,o,n){r.nested==t&&(e=!0)}),e},o.prototype={constructor:o,$$init:function(t,e,r){var n=this,i=document.location.hash.replace(/#/,"").split("?")[0];t=t&&t.replace(/\//g,"."),n.currentUrl=i.replace(/\//,"").replace(/\//g,"."),n.$ctrlName=t||n.currentUrl,n.$$verifyNest(n.$ctrlName)||(n.$ctrlName=n.$ctrlName.split(".")[0]),n.$$verifyRouter(n.$ctrlName),n.$$hisRecord(n.$ctrlName.replace(/\./g,"")),o.defineRouteId=n.$ctrlName.replace(/\./g,"")+"Page",n.$$matchRoute(function(t,i){if("true"==t||1==t){var c={},l={};if(i.nested&&i.nested.split(".").length>1){var s=i.nested.split(".");n.$$routeArr.forEach(function(t,e,r){t.url.split("?")[0]=="/"+s[0]&&(c=t)}),n.$$loadCtrl(c.controller,function(t){this.$$curRoute=s[0],this.curView=t(),n.$$createRoot(),n.$$unbindEvent(),n.$$bindEvent(),n.$$show(),this.curView.$init(),n.$$routeArr.forEach(function(t){t.url.split("?")[0]=="/"+s[1]&&(l=t)}),n.$$loadCtrl(l.controller,function(t){this.$$curRoute=s[1],this.curChildView=t(),n.$$createChildRoot(s[0]+"Page",s[1]+"Page"),n.$$unbindEvent(),n.$$bindEvent(),n.$$show(),this.curChildView.$init()})})}else n.$$loadCtrl(i.controller,function(t){this.$$curRoute=n.$ctrlName,this.curView=t(),n.$$createRoot(),n.$$unbindEvent(),n.$$bindEvent(),n.$$show(),this.curView.$init()});r>e?n.$$setScrollTop(n.$ctrlName):window.scroll(0,0)}else{if(""!=n.$ctrlName&&n.$ctrlName!=o.defaultRouter&&o.defaultRouter&&!$("#"+n.$ctrlName.replace(/\./g,"")+"Page")[0])return void(window.location.href=window.location.href.split("#")[0]+"#"+o.defaultRouter);var u;$("html-view").children().css("display","none"),u=n.$ctrlName.replace(/\./g,"")+"Page",$("#"+u).css("display","block"),r>e?n.$$setScrollTop(n.$ctrlName):window.scroll(0,0)}}),n.rootEvent.onchange=function(t){var e,r,o=$(window).scrollTop(),i=!1;e=t.newURL.replace(/.*#\//,"").split("?")[0],r=t.oldURL.replace(/.*#/,"").split("?")[0],n.$$hisRecord(e.replace(/\//g,""));var c=n.$setRouterArr.indexOf(e.replace(/\//g,"")),l=n.$setRouterArr.indexOf(r.replace(/\//g,""));c>l?(n.$routerTopArr.forEach(function(t,e,n){t.ctrl==r&&(i=!0,t.scrollTH!=o&&(t.scrollTH=o))}),n.$$setRouterTopArr(r,o,i)):(n.$routerTopArr.forEach(function(t,e,o){t.ctrl==r&&(i=!0)}),n.$$setRouterTopArr(r,0,i)),n.$$init(e,c,l)},"onhashchange"in window&&(void 0===document.documentMode||document.documentMode>7)&&(window.onhashchange=n.rootEvent.onchange)},$$bindEvent:function(){var t,e,r,o,n,i=this.curView.events,c=/^(\S+)\s*(.*)$/;for(t in i)e=i[t],"[object Function]"!={}.toString.call(e)&&(e=this.curView[i[t]]),e&&(r=t.match(c),o=r[1],n=r[2],o+=".delegateUIEvents"+this.$$curRoute,""===n?this.$$el.on(o,e):this.$$el.on(o,n,e));return this},$$unbindEvent:function(){return this.$$el.off(".delegateUIEvents"+this.$$curRoute),this},$$matchRoute:function(t){},$$show:function(){this.$$el.css("display","block").siblings().css("display","none")},$$loadCtrl:function(t,e){var r=this;seajs.use(t,function(t){return null==t?void console.log("view is null"):void(e&&e.call(r,t))})},$$createRoot:function(){var t="",e="";this.curView.$style&&($("#style_"+this.$$curRoute).length>0||(t='<style id="style_'+this.$$curRoute+'" class="page-style">'+this.curView.$style+"</style>",$("head").append(t))),$("#"+this.$$curRoute+"Page").length>0||(e='<div style="display: none; " id="'+this.$$curRoute+'Page">'+this.curView.$html+"</div>",$("html-view").append(e)),this.$$el=$("#"+this.$$curRoute+"Page"),this.curView.$root=this.$$el,$("son-view").children("div").css("display","none"),window.scrollTo(0,0)},$$createChildRoot:function(t,e){var r="",o="";this.curChildView.$style&&($("#style_"+this.$$curRoute).length>0||(r='<style id="style_'+this.$$curRoute+'" class="page-style">'+this.curChildView.$style+"</style>",$("head").append(r))),$("#"+e).length>0||(o='<div style="display: none; " id="'+e+'">'+this.curChildView.$html+"</div>",$("#"+t+" son-view").append(o)),this.$$el=$("#"+e),this.curChildView.$root=this.$$el,window.scrollTo(0,0)},$$inherit:function(t){function e(t){return"[object Object]"=={}.toString().call(t)?!0:!1}function r(){return this instanceof r?void 0:new r}var o=[],n=o.slice;if(0==arguments.length||arguments.length>1)throw"参数不正确！";var i=null,c=n.call(arguments);if("function"==typeof c[0]&&(i=c.shift()),c=c[0],r.superclass=i,i){var l=function(){};l.prototype=i.prototype,r.prototype=new l}var s=r.superclass&&r.superclass.prototype;for(var $ in c){var u=c[$];if(s&&"function"==typeof u){var a=/^\s*function\s*\(([^\(\)]*?)\)\s*?\{/i.exec(u.toString())[1].replace(/\s/g,"").split(",");"$super"===a[0]&&s[$]&&(u=function(t,e){return function(){var r=this,o=[function(){return s[t].apply(r,arguments)}];return e.apply(this,o.concat(n.call(arguments)))}}($,u))}if(r.prototype[$])if(e(r.prototype[$])&&e(u)){var h={};_.extend(h,r.prototype[$]),_.extend(h,u),r.prototype[$]=h}else r.prototype[$]=u;else r.prototype[$]=u}for(key in i)i.hasOwnProperty(key)&&"prototype"!==key&&"superclass"!==key&&(r[key]=i[key]);return r.prototype.$init||(r.prototype.$init=function(){}),r.prototype.constructor=r,r},$$verifyNest:function(t){var e=!1;return 2==t.split(".").length&&this.$$routeArr.forEach(function(r,o,n){r.nested==t&&(e=!0)}),e},$$verifyRouter:function(t){""==t&&o.defaultRouter&&(window.location.href=window.location.href.split("#")[0]+"#"+o.defaultRouter)},$$hisRecord:function(t){var e=!1,r=this;r.$setRouterArr.length>0&&r.$setRouterArr.forEach(function(r,o,n){r==t&&(e=!0)}),e||r.$setRouterArr.push(t)},$$matchRoute:function(t){var e,r=this,o=!1,n=r.$ctrlName.split(".");n.length>1?r.$$routeArr.forEach(function(t,n,i){t.nested==r.$ctrlName&&(o=!0,e=t)}):r.$$routeArr.forEach(function(t,r,i){t.url.split("?")[0]=="/"+n&&(o=!0,e=t)}),t&&t(o,e)},$$setRouterTopArr:function(t,e,r){var o=this;if(!r){var n={ctrl:t||"",scrollTH:e};t&&o.$routerTopArr.push(n)}},$$setScrollTop:function(t){var e=this;e.$routerTopArr.length>0&&e.$routerTopArr.forEach(function(e,r,o){e.ctrl=="/"+t&&$(window).scrollTop(e.scrollTH)})}},window._fedRouter=o,r.exports=o});