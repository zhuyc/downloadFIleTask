define("imgpreview",function(t,e,a){function i(){"none"!==f.css("display")&&(m=f.offset(),X=m.width,g=m.height,clearTimeout(v),v=setTimeout(function(){var t=$("ul",f),e=parseInt(t.data("active"),10);r.call(t,e)},200))}function n(t){var e=$("img",t),a=[e];a.push($("img",t.prev("li"))),a.push($("img",t.next("li"))),a.forEach(function(t){t[0]&&$('<img src="'+t.data("src")+'" />').on("load",function(){var e,a="auto";this.height>g&&(a=g,e=this.width/(this.height/a),e>X&&(e=X,a=this.height/(this.width/X))),t[0].style.height=a+"px",e&&(t[0].style.width=e+"px"),t[0].src=t.data("src")})})}function s(t,e){e=e&&e>=1?e:1;for(var a=-(e-1)*X,i="<span><i>"+e+"</i>/"+t.length+'</span><ul style="transform: translate3d('+a+'px, 0px, 0px);" data-move-len="'+a+'" data-active="'+e+'"  data-last-active="'+e+'" data-lengths="'+t.length+'">',s=0;s<t.length;s++){var r=t[s],l=r.url||r,c=r.title;i+='<li class="list-loading"><span data-skewingx="0" data-skewingy="0"><img style="" data-scale="1" data-src="'+l+'" title="'+c+'"/></span></li>'}i+='</ul><div class="view-title"><p>'+(t[e-1].title||"")+"</p></div>",i=$(i);var h=$("li",i).off("touchstart touchmove touchend touchcancel",p);$("ul",f).off("touchstart touchmove touchend touchcancel",o),k.webp&&x.loadWebp&&x.loadWebp({attr:"data-src",img:$("img",h)}),f.html(i),$("img",i).on("load",function(){$(this).parents("li").removeClass("list-loading")}),n(h.eq(e-1)),$("li",i).on("touchstart touchmove touchend touchcancel",p),$("ul",f).on("touchstart touchmove touchend touchcancel",o)}function o(t){t.stopPropagation();var e=$(this);switch(t.type){case"touchstart":if(t.touches.length>1)return;P.startTime=(new Date).getTime();var a=t.touches[0];P.startX=a.pageX,P.startY=a.pageY,P.startMovePosition=parseFloat(e.data("move-len"),10),z=t.touches.length>=2?!1:!0;break;case"touchmove":t.preventDefault();var a=t.touches[0];if(P.moveX=P.moveX=a.pageX,P.moveY=P.moveY=a.pageY,1===t.touches.length&&z&&!F){var i=P.moveX-P.startX,n=P.startMovePosition+i;e.css({"-webkit-transform":"translate3d("+n+"px,0,0)",transform:"translate3d("+n+"px,0,0)"}),q=n}break;case"touchend":case"touchcancel":if(0!==t.touches.length)return;if(T||!z||F)return;var s=(new Date).getTime(),o=parseInt(e.data("active"),10);if(s-P.startTime<250){var l=P.moveX?P.moveX-P.startX:0,c=P.moveY?P.moveY-P.startY:0;if(Math.abs(l)>90&&Math.abs(l/c)>=1.5&&Math.abs(c)<220)r.call(this,!(l>0));else if(z&&r.call(this,o),Math.abs(l)<30&&Math.abs(c)<30)if("img"!==t.target.tagName.toLocaleLowerCase()){var h=f.data("maskFn");h&&h()}else{var p=f.data("imgTapFn");p&&p()}}else if(z){var d=P.moveX?P.moveX-P.startX:0;halfWidth=X/3,Math.abs(d)>halfWidth&&(0>d?o++:o--),r.call(this,parseInt(o,10),!1)}P.moveX=0,P.moveY=0}}function r(t,e){if(!D){var a=$(this),i=parseInt(a.data("active"),10),s=i,o=parseInt(a.data("lengths"),10),r=i;if(t===!0)i++;else if(t===!1)i--;else{if("number"!=typeof t)return;i=t}i=1>i?1:i,i=i>o?o:i;var l=$("li",a).eq(r-1),c=$("li",a).eq(i-1),h=(i-1)*X;D=!0,q=-h,a.data("move-len",-h).animate({transform:"translate3d(-"+h+"px,0,0)","-webkit-transform":"translate3d(-"+h+"px,0,0)"},200,function(){if(D=!1,s!=i){$("span",l).css({transform:"translate3d(0,0,0)","-webkit-transform":"translate3d(0,0,0)"}).data("skewingx",0).data("skewingy",0),$("img",l).css({transform:"scale(1)","-webkit-transform":"scale(1)"}).data("scale",1);var t=$("img",c);$(".view-title p",f).html(t.attr("title")),k.slideFn&&k.slideFn(i,s,t),n(c)}}).data("active",i),$("i",f.children("span")).html(i)}}function l(t){P.startX=t.touches[0].pageX,P.startY=t.touches[0].pageY}function c(t,e){var a=t.offset(),i=X-a.width,n=g-a.height,s=e.data("skewingx"),o=e.data("skewingy"),r=s,l=o;i>0?r=0:a.left>0?r=s-a.left:a.left<0&&i-a.left>0&&(r=s+(i-a.left)),n>0?l=0:a.top>0?l-=a.top:a.top<0&&n-a.top>0&&(l=s+(n-a.top)),h(e,r,l)}function h(t,e,a){t.css({transform:"translate3d("+e+"px,"+a+"px,0)","-webkit-transform":"translate3d("+e+"px,"+a+"px,0)"}).data("skewingx",e).data("skewingy",a)}function p(t){switch(t.type){case"touchstart":var e=t.touches;2===e.length&&$(e[0].target).closest("li")[0]===$(e[1].target).closest("li")[0]?(M=!0,I=e,w=d(e)):(M=!1,E={x:e[0].pageX,y:e[0].pageY});break;case"touchmove":var a=t.touches;if(q%X!==0)return;var i=$("img",this),n=$("span",this),s=n.offset(),o=i.offset();if(o.left=o.left-m.left,o.top=o.top-m.top,s.left=s.left-m.left,s.top=s.top-m.top,M&&w&&2===t.touches.length){t.stopPropagation();var r=d(a),h=i.data("scale");b=r/w*h,1>b&&(b=1),i.css({transform:"scale("+b+")","-webkit-transform":"scale("+b+")"}).data("scale",b),h>b&&c(i,n),w=r,F=!0,Y=!1}else if(1===t.touches.length&&!M&&Y&&"img"===t.target.tagName.toLocaleLowerCase()){var p={x:a[0].pageX,y:a[0].pageY},f=parseFloat(i.data("scale"));if(!isNaN(f)&&!(o.width>X||o.height>g))return void(T=!1);var u=n.data("skewingy"),v=n.data("skewingx"),x=parseFloat(v)+(p.x-E.x),k=parseFloat(u)+(p.y-E.y),y=o.width-X;if(o.width>X)if(p.x>E.x)if(y>=0){if(o.left>=0)return T=!1,void(v=-Math.abs((o.width-s.width)/2));t.stopPropagation(),l(t),v=x,T=!0}else{if(Math.abs(o.left)>=Math.abs(y))return T=!1,t.stopPropagation(),void l(t);t.stopPropagation(),l(t),v=x,T=!0}else if(0>y){if(o.left<=0)return void(T=!1);v=x,T=!1}else{if(Math.abs(o.left)>=Math.abs(y))return void(T=!1);t.stopPropagation(),l(t),v=x,T=!0}var P=o.height-g;p.y>E.y?P>=0&&o.top<=0&&o.top<=0&&(u=k):P>=0&&Math.abs(o.top)<Math.abs(P)&&(u=k),n.css({transform:"translate3d("+v+"px,"+u+"px,0)","-webkit-transform":"translate3d("+v+"px,"+u+"px,0)"}).data("skewingx",v).data("skewingy",u),E={x:p.x,y:p.y}}t.preventDefault();break;case"touchend":case"touchcancel":0===t.touches.length&&(Y=!0,setTimeout(function(){F=!1},50)),2===t.touches.length?setTimeout(function(){M=!0},300):M=!1}}function d(t){var e=t[0],a=t[1],i=Math.abs(e.pageX-a.pageX),n=Math.abs(e.pageY-a.pageY);return Math.sqrt(i*i+n*n)}!function(){var t='.ui-img-preview{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;width:100%;background:#000}.ui-img-preview>span{position:absolute;top:10px;left:50%;transform:translate3d(-50%,0,0);color:#fff;z-index:100}.ui-img-preview>span i{font-style:normal}.ui-img-preview ul{padding:0;height:100%;white-space:nowrap;font-size:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0)}.ui-img-preview li{display:inline-block;width:100%;height:100%;text-align:center}.ui-img-preview li>span{display:inline-block;max-width:100%}.ui-img-preview li:after{display:inline-block;width:0;height:100%;content:"";vertical-align:middle}.ui-img-preview li img{max-width:100%;vertical-align:middle;-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-transform:translateZ(0);-webkit-user-select:none;-webkit-user-drag:none}.ui-img-preview .list-loading>span{width:100%}.ui-img-preview .list-loading img{background:url(http://img1.40017.cn/touch/hb/c/2/img/bg-loading.png?v=2016052702) no-repeat center center;background-size:contain;max-width:640px;width:100%;display:block;transform:translate3d(0,50%,0);-webkit-transform:translate3d(0,50%,0)}.ui-img-preview .view-title{position:absolute;bottom:50px;color:#fff;left:0;width:100%;word-break:break-all;padding:0 5px}',e=document.createElement("style");e.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(e)}();var f,g,u,m,v,w,b,x=window,k={init:function(t){return t.container?(this.container(t.container),f[0]||(f=$('<div class="ui-img-preview"></div>').appendTo(y)),t.data&&this.setData(t.data,t.index),m=f.offset(),X=m.width,g=m.height,u=X/g,this.winBindEvent(),f.data("maskFn",t.maskFn),f.data("imgTapFn",t.imgTapFn),this):void 0},webp:!0,container:function(t){y=$(t),f=$(".ui-img-preview",y)},setData:function(t,e){t&&t[0]&&(this.data=t,s(t,e))},show:function(t,e,a){if(t||this.data||f[0]){for(var i,n,s,o=Array.prototype.slice.apply(arguments),r=0;r<o.length;r++){var l=o[r];"number"==typeof l?i=l:"object"==typeof l?n=l:"function"==typeof l&&(s=l)}this.setData(n,i),s?s(f):f.css({opacity:0,display:"block"}).animate({opacity:1},300),this.winBindEvent()}},winBindEvent:function(){this.winOffEvent().on("resize.imgpreview orientationchange.imgpreview",i)},winOffEvent:function(){return $(x).off("resize.imgpreview orientationchange.imgpreview")},close:function(t){return t?void t(f):(f.css({opacity:1,display:"block"}).animate({opacity:0},300,function(){$(this).css({display:"none"})}),M=!1,F=!1,Y=!0,T=!1,E={},P={},D=!1,z=!1,I=[],void this.winOffEvent())},setIndex:function(t){var e=$("ul",f),a=(t-1)*X,i=e.data("active");if(e.data("active")!==t){e.css({"-webkit-transform":"translate3d(-"+a+"px,0,0)",transform:"translate3d(-"+a+"px,0,0)"}).data("active",t);var s=$("li",e).eq(t-1),o=$("img",s);$(".view-title p",f).html(o.attr("title")),$("i",f.children("span")).html(t),k.slideFn&&k.slideFn(t,i,o),n(s)}},slideFn:function(t,e,a){},resize:function(){i()}},y=$("body"),X=y.width(),M=!1,F=!1,Y=!0,T=!1,E={},P={},D=!1,z=!1,I=[],q=0;a.exports=k,$.imgPreview=k});