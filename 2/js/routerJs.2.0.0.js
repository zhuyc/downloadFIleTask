!function(e){function t(e){return this instanceof t?(this.arrShow=e,this.currentUrl=r,t.setRouterArr=[],t.routerTopArr=[],t.historyUrl="",void this.init()):new t(e)}var r=document.location.hash.replace(/#/,"").split("?")[0];t.appendRouter=function(e,t){var r=document.location.hash.replace(/#/,""),o={from:r,to:e};"[object Function]"=={}.toString.call(t)&&t(JSON.stringify(o));var n,c=document.createElement("div");n=e.replace(/\./g,"")+"Page",e&&$("#"+n)[0]||(c.setAttribute("id",n),$("html-view").append(c))},t.open=function(e){window.location.href=window.location.href.split("#")[0]+"#/"+e,t.defineRouteId=e.replace(/\./g,"")+"Page"},t.close=function(){window.history.back()},t.otherwise=function(e){this.defaultRouter=e||""},t.prototype={constructor:t,init:function(e,r,o){function n(e){var r,o,n=$(window).scrollTop(),l=!1;r=e.newURL.replace(/.*#\//,"").split("?")[0],o=e.oldURL.replace(/.*#/,"").split("?")[0],t.historyUrl=e.oldURL||"",c.isStorageRecord(r.replace(/\//g,""));var i=t.setRouterArr.indexOf(r.replace(/\//g,"")),a=t.setRouterArr.indexOf(o.replace(/\//g,""));i>a?(t.routerTopArr.forEach(function(e,t,r){e.ctrl==o&&(l=!0,e.scrollTH!=n&&(e.scrollTH=n))}),c.setRouterTopArr(o,n,l)):(t.routerTopArr.forEach(function(e,t,r){e.ctrl==o&&(l=!0)}),c.setRouterTopArr(o,0,l)),c.init(r,i,a)}var c=this,l=!1;e=e&&e.replace(/\//g,"."),c.currentUrl=c.currentUrl.replace(/\//,"").replace(/\//g,"."),c.ctrlName=e||c.currentUrl,c.launchRouter(c.ctrlName),c.isStorageRecord(c.ctrlName.replace(/\./g,"")),t.defineRouteId=c.ctrlName.replace(/\./g,"")+"Page",c.isMatchRoute(function(n,i){if("true"==n||1==n)c.controller(i.controller,l,i.nested,function(t){seajs.use([t.controller],function(n){n&&(n.callback&&n.callback(t),n.controller&&n.controller(t)),o>r?c.setScrollTop(e):window.scroll(0,0)})});else{if(""!=c.ctrlName&&c.ctrlName!=t.defaultRouter&&t.defaultRouter&&!$("#"+c.ctrlName.replace(/\./g,"")+"Page")[0])return void(window.location.href=window.location.href.split("#")[0]+"#"+t.defaultRouter);var a;$("html-view").children().css("display","none"),a=c.ctrlName.replace(/\./g,"")+"Page",$("#"+a).css("display","block"),o>r?c.setScrollTop(e):window.scroll(0,0)}}),"onhashchange"in window&&(void 0===document.documentMode||document.documentMode>7)&&(window.onhashchange=n)},launchRouter:function(e){""==e&&t.defaultRouter&&(window.location.href=window.location.href.split("#")[0]+"#"+t.defaultRouter)},isExistRouter:function(e,t,r){var o=!1;return t?$("#"+e+"Page").length>0&&($("#"+r+"Page").css("display","block").siblings().css("display","none"),$("#"+e+"Page").css("display","block").siblings().css("display","none"),o=!0):$("#"+e+"Page").length>0&&($("son-view").children("div").css("display","none"),$("#"+e+"Page").css("display","block").siblings().css("display","none"),o=!0),o},isStorageRecord:function(e){var r=!1;t.setRouterArr.length>0&&t.setRouterArr.forEach(function(t,o,n){t==e&&(r=!0)}),r||t.setRouterArr.push(e)},isMatchRoute:function(e){var t,r=this,o=!1,n=r.ctrlName.split(".");n.length>1?r.arrShow.forEach(function(e,n,c){e.nested==r.ctrlName&&(o=!0,t=e)}):r.arrShow.forEach(function(e,r,c){e.url.split("?")[0]=="/"+n&&(o=!0,t=e)}),e(o,t)},controller:function(e,t,r,o){var n,c,l=this;if(r&&r.split(".").length>1){var i=r.split(".");l.arrShow.forEach(function(e,t,r){e.url.split("?")[0]=="/"+i[0]&&(c=e)}),l.isExistRouter(i[0],!1)?setTimeout(function(){o(c),l.arrShow.forEach(function(e){e.url.split("?")[0]=="/"+i[1]&&(c=e)}),l.isExistRouter(i[1],!0,i[0])?o(c):$.ajax({url:c.templateUrl,type:"get",dataType:"html",data:"",error:function(){console.log("Error loading document")},success:function(e){var t,r,n=document.createElement("div");t=i[0]+"Page",r=i[1]+"Page",n.setAttribute("id",r),$(n).append(e),$("#"+t+" son-view").append(n),setTimeout(function(){o(c)},100)}})},100):$.ajax({url:c.templateUrl,type:"get",dataType:"html",data:"",error:function(){console.log("Error loading document")},success:function(e){var t,r=document.createElement("div");t=i[0]+"Page",r.setAttribute("id",t),$(r).append(e),$("html-view").append(r),$("#"+t).css("display","block").siblings().css("display","none"),setTimeout(function(){o(c),l.arrShow.forEach(function(e){e.url.split("?")[0]=="/"+i[1]&&(c=e)}),l.isExistRouter(i[1],!0,i[0])?o(c):$.ajax({url:c.templateUrl,type:"get",dataType:"html",data:"",error:function(){console.log("Error loading document")},success:function(e){var t,r,n=document.createElement("div");t=i[0]+"Page",r=i[1]+"Page",n.setAttribute("id",r),$(n).append(e),$("#"+t+" son-view").append(n),setTimeout(function(){o(c)},100)}})},100)}})}else l.arrShow.forEach(function(e,t,r){e.url.split("?")[0]=="/"+l.ctrlName&&(n=e)}),e==n.controller&&(l.isExistRouter(e.replace("Ctrl",""),!1)?o(n):$.ajax({url:n.templateUrl,type:"get",dataType:"html",data:"",error:function(){console.log("Error loading document")},success:function(e){var t,r=document.createElement("div");t=l.ctrlName.replace(/\./g,"")+"Page",r.setAttribute("id",t),$(r).append(e),$("html-view").append(r),$("son-view").children("div").css("display","none"),$("#"+t).css("display","block").siblings().css("display","none"),setTimeout(function(){o(n)},100)}}))},getCurrentHash:function(){var e=document.location.hash.replace(/#/,"");return e},setScrollTop:function(e){t.routerTopArr.length>0&&t.routerTopArr.forEach(function(t,r,o){t.ctrl=="/"+e&&$(window).scrollTop(t.scrollTH)})},setRouterTopArr:function(e,r,o){if(!o){var n={ctrl:e||"",scrollTH:r};e&&t.routerTopArr.push(n)}}},e.router=t}("object"==typeof exports?exports:window);