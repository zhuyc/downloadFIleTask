!function(e){function r(e){return this instanceof r?(this.arrShow=r.arrShow=e,this.currentUrl=t,r.setRouterArr=[],r.routerTopArr=[],r.historyUrl="",void this.init()):new r(e)}var t=document.location.hash.replace(/#/,"").split("?")[0];r.getParams=function(){var e=document.location.hash.replace(/#/,"").split("?")[0],r="";return e=e.replace(/\//,"").replace(/\//g,"."),this.verifyParam(e)||(r=decodeURIComponent(e.split(".")[1])),r},r.appendRouter=function(e,r){var t=document.location.hash.replace(/#/,""),o={from:t,to:e};"[object Function]"=={}.toString.call(r)&&r(JSON.stringify(o));var n,i;i=e.replace(/\./g,"")+"Page",e&&$("#"+i)[0]||(n="<div id='"+i+"'></div>",$("html-view").append(n))},r.open=function(e,t){var o="";o=void 0==t?"":"/"+encodeURIComponent(JSON.stringify(t)),window.location.href=window.location.href.split("#")[0]+"#/"+e+o,r.defineRouteId=e.replace(/\./g,"")+"Page"},r.close=function(){window.history.back()},r.otherwise=function(e){this.defaultRouter=e||""},r.verifyParam=function(e){var r=!1;return(e.split(".").length=2)&&this.arrShow.forEach(function(t,o,n){t.nested==e&&(r=!0)}),r},r.prototype={constructor:r,init:function(e,t,o){function n(e){var t,o,n=$(window).scrollTop(),l=!1;t=e.newURL.replace(/.*#\//,"").split("?")[0],o=e.oldURL.replace(/.*#/,"").split("?")[0],r.historyUrl=e.oldURL||"",i.isStorageRecord(t.replace(/\//g,""));var c=r.setRouterArr.indexOf(t.replace(/\//g,"")),a=r.setRouterArr.indexOf(o.replace(/\//g,""));c>a?(r.routerTopArr.forEach(function(e,r,t){e.ctrl==o&&(l=!0,e.scrollTH!=n&&(e.scrollTH=n))}),i.setRouterTopArr(o,n,l)):(r.routerTopArr.forEach(function(e,r,t){e.ctrl==o&&(l=!0)}),i.setRouterTopArr(o,0,l)),i.init(t,c,a)}var i=this,l=!1;e=e&&e.replace(/\//g,"."),i.currentUrl=i.currentUrl.replace(/\//,"").replace(/\//g,"."),i.ctrlName=e||i.currentUrl,r.verifyParam(i.ctrlName)||(i.ctrlName=i.ctrlName.split(".")[0]),i.launchRouter(i.ctrlName),i.isStorageRecord(i.ctrlName.replace(/\./g,"")),r.defineRouteId=i.ctrlName.replace(/\./g,"")+"Page",i.isMatchRoute(function(n,c){if("true"==n||1==n)i.controller(c.controller,l,c.nested,function(r){seajs.use([r.controller],function(n){n&&(n.callback&&n.callback(r),n.controller&&n.controller(r)),o>t?i.setScrollTop(e):window.scroll(0,0)})});else{if(""!=i.ctrlName&&i.ctrlName!=r.defaultRouter&&r.defaultRouter&&!$("#"+i.ctrlName.replace(/\./g,"")+"Page")[0])return void(window.location.href=window.location.href.split("#")[0]+"#"+r.defaultRouter);var a;$("html-view").children().css("display","none"),a=i.ctrlName.replace(/\./g,"")+"Page",$("#"+a).css("display","block"),o>t?i.setScrollTop(e):window.scroll(0,0)}}),"onhashchange"in window&&(void 0===document.documentMode||document.documentMode>7)&&(window.onhashchange=n)},launchRouter:function(e){""==e&&r.defaultRouter&&(window.location.href=window.location.href.split("#")[0]+"#"+r.defaultRouter)},isExistRouter:function(e,r,t){var o=!1;return r?$("#"+e+"Page").length>0&&($("#"+t+"Page").css("display","block").siblings().css("display","none"),$("#"+e+"Page").css("display","block").siblings().css("display","none"),o=!0):$("#"+e+"Page").length>0&&($("son-view").children("div").css("display","none"),$("#"+e+"Page").css("display","block").siblings().css("display","none"),o=!0),o},isStorageRecord:function(e){var t=!1;r.setRouterArr.length>0&&r.setRouterArr.forEach(function(r,o,n){r==e&&(t=!0)}),t||r.setRouterArr.push(e)},isMatchRoute:function(e){var r,t=this,o=!1,n=t.ctrlName.split(".");n.length>1?t.arrShow.forEach(function(e,n,i){e.nested==t.ctrlName&&(o=!0,r=e)}):t.arrShow.forEach(function(e,t,i){e.url.split("?")[0]=="/"+n&&(o=!0,r=e)}),e(o,r)},controller:function(e,r,t,o){var n,i,l=this;if(t&&t.split(".").length>1){var c=t.split(".");l.arrShow.forEach(function(e,r,t){e.url.split("?")[0]=="/"+c[0]&&(i=e)}),l.isExistRouter(c[0],!1)?setTimeout(function(){o(i),l.arrShow.forEach(function(e){e.url.split("?")[0]=="/"+c[1]&&(i=e)}),l.isExistRouter(c[1],!0,c[0])?o(i):$.ajax({url:i.templateUrl,type:"get",dataType:"html",data:"",error:function(){console.log("Error loading document")},success:function(e){var r,t,n;t=c[0]+"Page",n=c[1]+"Page",r="<div id='"+n+"'>"+e+"</div>",$("#"+t+" son-view").append(r),setTimeout(function(){o(i)},100)}})},100):$.ajax({url:i.templateUrl,type:"get",dataType:"html",data:"",error:function(){console.log("Error loading document")},success:function(e){var r,t;t=c[0]+"Page",r="<div id='"+t+"'>"+e+"</div>",$("html-view").append(r),$("#"+t).css("display","block").siblings().css("display","none"),setTimeout(function(){o(i),l.arrShow.forEach(function(e){e.url.split("?")[0]=="/"+c[1]&&(i=e)}),l.isExistRouter(c[1],!0,c[0])?o(i):$.ajax({url:i.templateUrl,type:"get",dataType:"html",data:"",error:function(){console.log("Error loading document")},success:function(e){var r,t,n;t=c[0]+"Page",n=c[1]+"Page",r="<div id='"+n+"'>"+e+"</div>",$("#"+t+" son-view").append(r),setTimeout(function(){o(i)},100)}})},100)}})}else l.arrShow.forEach(function(e,r,t){e.url.split("?")[0]=="/"+l.ctrlName&&(n=e)}),e==n.controller&&(l.isExistRouter(e.replace("Ctrl",""),!1)?o(n):$.ajax({url:n.templateUrl,type:"get",dataType:"html",data:"",error:function(){console.log("Error loading document")},success:function(e){var r=l.ctrlName.replace(/\./g,"")+"Page",t="<div id='"+r+"'>"+e+"</div>";$("html-view").append(t),$("son-view").children("div").css("display","none"),$("#"+r).css("display","block").siblings().css("display","none"),setTimeout(function(){o(n)},100)}}))},getCurrentHash:function(){var e=document.location.hash.replace(/#/,"");return e},setScrollTop:function(e){r.routerTopArr.length>0&&r.routerTopArr.forEach(function(r,t,o){r.ctrl=="/"+e&&$(window).scrollTop(r.scrollTH)})},setRouterTopArr:function(e,t,o){if(!o){var n={ctrl:e||"",scrollTH:t};e&&r.routerTopArr.push(n)}}},e.router=r}("object"==typeof exports?exports:window);