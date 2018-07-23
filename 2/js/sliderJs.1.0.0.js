define("sliderJs",function(){function t(t,i){var a=this;$.extend(this,{content:"ul",item:"li",loop:!0,speed:400,duration:3e3,autoScroll:!0,nav:!0},i),t=$(t);var n=$(a.content,t),o=$(a.item,t);if(a.elem=t,a.content=n,a.index=0,a.length=o.length,o.length<=1)return a;t.css({overflow:"card"===a.cutType?"initial":"hidden",position:"relative"}),n.css({position:"relative",width:"100%"});for(var l=1,c=o.length;c>l;l++)$(o[l]).css({position:"absolute",width:"100%",top:0,left:100*l+"%"});a.nav&&s.call(a,o.length),a.loop&&$(o.first().clone()).css({position:"absolute",width:"100%",top:0,left:100*o.length+"%"}).appendTo(n),a.allitems=$(a.item,t),"card"===a.cutType&&(a.allitems.eq(0).addClass("active"),a.allitems.addClass("scale").append('<div class="slider-mask"></div>'),t.addClass("slider-cut-card")),a.to(a.active?a.active:0),e.call(a),a.autoScroll&&a.start(),a.isMove=!1}function e(){var t=this;this.elem.on("touchstart",function(e){var i=e.touches[0];t._startLocation={x:i.pageX,y:i.pageY},t._isStart=!1}).on("touchmove",function(e){if(!t.isMove&&!(e.touches.length>1||e.scale&&1!==e.scale)){var i=e.touches[0],s=t.index,n=i.pageX-t._startLocation.x;if(t._isStart||(t._isStart=Math.abs(n)>Math.abs(i.pageY-t._startLocation.y)),t._isStart){e.preventDefault(),clearTimeout(t.timer);var o=s,l=t.elem.width();t.loop?0===s&&n>0&&(o=t.length):n/=0===s&&n>0||s==t.length&&0>n?Math.abs(n)/l+1:1;var c={},r=o-n/l;if(c[a]="translate3d("+-(t.content.width()*r)+"px, 0, 0)",t.content.css(c),t._distX=n,"card"!==t.cutType)return;r=Math.abs(r);var d,h=t.allitems.eq(s),p=s>0?r%s:r,u={},v={};r>s?d=h.next():(p=s>0?1-(r+1)%s:r,d=h.prev()),v[a]="scale("+(.85+.15*p)+")",d.css(v),$(".slider-mask",d).css({opacity:.8-.8*p,display:"block"}),u[a]="scale("+(1-.15*p)+")",h.css(u),$(".slider-mask",h).css({opacity:.8*p,display:"block"})}}}).on("touchend touchcancel",function(e){t._isStart&&(t._distX<0?(e.preventDefault(),t.next()):(e.preventDefault(),t.previous(!0)))}),$(window).on("resize",function(){var e={};e[a]="translate3d(-"+t.index*t.content.width()+"px, 0, 0)",t.content.css(e)})}function i(t,e){var i=this,s={},n={};s[a]="scale(1) translate3d(0,0,0);",n[a]="scale(0.85) translate3d(0,0,0);";var o=i.allitems.eq(t).animate(s,e,"ease");if(o[0].offsetWidth,$(".slider-mask",o).css({display:"none"}).animate({opacity:0},e,"ease",function(){this.offsetWidth}),i.lastIndex!==t){var l=i.allitems.eq(i.lastIndex).animate(n,e,"ease");l[0]&&(l[0].offsetWidth,$(".slider-mask",l).css({display:"block"}).animate({opacity:.8,top:"-1px",left:"-1px",right:"-1px",bottom:"-1px"},e,"ease",function(){this.offsetWidth}))}}function s(t){for(var e='<span class="indicator">',i=0;t>i;i++)e+="<i></i>";e+="</span>",this.elem.append(e);var s=$(".indicator",this.elem);s.css({"margin-left":-s.width()/2+"px"}),this.indicators=$("i",s),$(this.indicators[0]).addClass("active")}$.fn.slider=function(e){for(var i=[],s=0,a=this.length;a>s;s++)i.push(new t(this[s],e));return i};var a="";!function(){var t=document.createElement("div");$.each(["webkit","Moz","O","ms"],function(e,i){return void 0!==t.style[i+"Transform"]?(a=["-webkit-","-moz-","-o-","-ms-"][e]+"transform",!1):void 0})}(),t.prototype.to=function(t){this.stop();var e=this,s={};e.isMove||(s[a]="translate3d(-"+t*e.content.width()+"px, 0, 0)",e.isMove=!0,this.content.animate(s,this.speed,"ease",function(){if(t===e.length){var s={};s[a]="translate3d(0, 0, 0)",e.content.css(s),e.lastIndex=t,"card"===e.cutType&&i.call(e,0,0),t=0}e.index=t,e.allitems.removeClass("active").eq(t).addClass("active"),e.nav&&$(e.indicators.removeClass("active")[t]).addClass("active"),e.lastIndex=t,e.fn&&e.fn(),e.isMove=!1}),"card"===e.cutType&&i.call(e,t,e.speed))},t.prototype.previous=function(t){if(!this.loop&&0===this.index)return void this.to(this.index);var e=this.index-1;if(0===this.index&&(e=this.length-1,!t)){var i={};i[a]="translate3d(-"+that.content.width()*this.length+"px, 0, 0)",this.content.css(i)}this.to(e),this.autoScroll&&this.start()},t.prototype.next=function(){return this.loop||this.index!==this.length-1?(this.to(this.index+1),void(this.autoScroll&&this.start())):void this.to(this.index)},t.prototype.start=function(){var t=this;this.timer=setTimeout(function(){t.next()},this.duration)},t.prototype.stop=function(){clearTimeout(this.timer)}});