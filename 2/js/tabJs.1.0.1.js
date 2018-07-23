define("tabJs",function(){function t(t){this._options=$.extend({},c,t),this._options.Isrel=this._options.rel?!0:!1,this.init()}function e(t,e,a){for(var n=0,o=a.length;t!=$(a[n]).attr(e);){if(n>o)throw new Error("the rel property of elem is not defiend");n++}return n}function a(t,e){t.thatNav=this,t.moveTo($(this).closest(t.nav).index(),e)}function n(t,a){var n=a._options,o=n.rel;n.Isrel?(a.panel.eq(e(a.nav.eq(t).attr(o),o,a.panel)).addClass(n.panelActiveClass),a.panel.eq(e(a.nav.eq(n.active).attr(o),o,a.panel)).removeClass(n.panelActiveClass)):(a.panel.eq(t).addClass(n.panelActiveClass),a.panel.eq(n.active).removeClass(n.panelActiveClass)),a.nav.eq(t).addClass(n.navActiveClass),a.nav.eq(n.active).removeClass(n.navActiveClass),n.active=t,n.adron&&a.moveAdron(t)}function o(t){var e=this._options;switch(t.type){case"orientationchange":e.large&&l.call(this,this.nav.eq(this._options.active)[0]),this.refresh()}}function i(t){t.navBody.bind("touchstart",s),t.navBody.bind("touchmove",r),t.navBody.bind("touchend",$.proxy(l,t))}function s(t){p={},t.stopPropagation(),d=new Date;var e=$(this);if(f=parseFloat(e.data("translatex"))||0,event.targetTouches&&1==event.targetTouches.length){var a=event.targetTouches[0];p.startleft=a.pageX,p.starttop=a.pageY}}function r(t){t.stopPropagation(),t.preventDefault();var e,a=$(this),n=a.offset(),o=$(this.parentNode).offset();if(1==event.targetTouches.length){var i=event.targetTouches[0];p.moveleft=i.pageX,p.movetop=i.pageY}if(p.moveleft>p.startleft?(e=0,e=f+(p.moveleft-p.startleft),e>0&&(e/=3)):p.moveleft<p.startleft&&(e=0,e=f-(p.startleft-p.moveleft),Math.abs(e)>n.width-o.width&&(e=-(n.width-o.width)-(Math.abs(e)-(n.width-o.width))/3)),!isNaN(e)){var s={};s[h]="translate3d("+e+"px,0,0)",a.css(s).data("translatex",e)}}function l(t,e){t&&t.stopPropagation&&t.stopPropagation();var n=new Date,o=v(d,n),i=this,s=i._options,r=i.navBody,l=r.offset(),c=$(r[0].parentNode).offset();f=parseFloat(r.data("translatex"))||0;var u=l.width-c.width,m={};if(f>0)m[h]="translate3d(0,0,0)",r.animate(m,100).data("translatex",0);else if(u<Math.abs(f))m[h]="translate3d("+-u+"px,0,0)",r.animate(m,100).data("translatex",-u);else if(200>o){var w=$(t.target||t).closest(s.nav)[0],g=i.nav.eq(s.active)[0]!==w;g&&Math.abs(p.startleft-(p.moveleft||p.startleft))<=50&&Math.abs(p.starttop-(p.movetop||p.starttop))<=50&&a.call(w,i,t);var b,C=p.moveleft?p.moveleft-p.startleft:0,y=Math.abs(C)/o*200;if(C>0)b=f+y>0?0:f+y;else if(0!=C&&C||!(e||s.autoScroll&&g))b=Math.abs(f-y)>l.width-c.width?-(l.width-c.width):f-y;else{var N=p.moveleft||p.startleft;if(!N)return void(p={});var x=$(window),_=x.width();b=N>_/2?Math.abs(f)+(N-_/2)<u?f-(N-_/2):-u:Math.abs(f)-(_/2-N)>0?f+(_/2-N):0}m[h]="translate3d("+b+"px,0,0)",r.animate(m,400).data("translatex",b)}p={}}function v(t,e){return e.getTime()-t.getTime()}var c={contenter:null,nav:"li",panel:".tab-panel",adron:!1,adronMode:"end",event:"click",active:0,rel:null,clickFn:function(){return!0},autoScroll:!0,large:!1,navActiveClass:"nav-active",panelActiveClass:"panel-active"},p=p||{},f=f||0,d=new Date;t.prototype.init=function(){var t=this,n=t._options,s=$.proxy(o,t);if(n.contenter&&n.nav&&n.panel){if(t.contenter=$(n.contenter).addClass("ui-tab"),t.panel=$(n.panel,t.contenter),t.nav=$(n.nav,t.contenter),t.nav.length!=t.panel.length)throw new Error("number of the nav with panel are inequality");t.navBody=$(t.nav[0].parentNode).addClass("tab-nav");var r=t.navBody.children("."+n.navActiveClass).index();n.active=isNaN(r)||-1===r?n.active:r;var v=t.nav.eq(n.active);n.adron&&this.design(),v.addClass(n.navActiveClass),n.rel?$(t.panel[e(v.attr(n.rel),n.rel,t.panel)]).addClass(n.panelActiveClass):t.panel.eq(n.active).addClass(n.panelActiveClass),$(window).on("orientationchange",s),n.large?(i(t),n.active>0&&(p={startleft:v.offset().left},d=new Date,l.call(this,t,!0))):t.nav.on(n.event,function(e){a.call(this,t,e)})}},t.prototype.design=function(){var t=this;t.tipNav=t.nav[0].tagName.toLowerCase(),t.tipNav=$(document.createElement(t.tipNav)).appendTo(t.navBody),t.tipNav.addClass("tab-adorn"),t.refresh()},t.prototype.refresh=function(){var t=this;t.calculate(t._options.active)},t.prototype.moveTo=function(t,a){var o=this,i=t;switch(typeof i){case"number":if(o.nav.length-1<i&&(i=o.nav.length-1),o._options.active==i)return i;break;case"string":i=e(t,o._options.rel,o.nav)}if(!a||o._options.clickFn(o.thatNav,t,o.panel[i])!==!1)return n(i,o),o._options.active},t.prototype.calculate=function(t){var e=this,a=e._options,n=$(e.nav[t]),o=n.offset(),i=a.adronOffsetY||0,s=n.position();o.left=s.left,o.top=s.top;var r="top"===a.adronMode?{top:0+i}:{bottom:0+i};a.adron&&e.tipNav.css($.extend({width:o.width,left:o.left},r))},t.prototype.moveAdron=function(t){var e,a=this,n=(a._options,$(a.nav[t]));e=n.offset(),e.left=n.position().left,a.tipNav.animate({left:e.left},200)};var h="";!function(){var t=document.createElement("div");$.each(["webkit","Moz","O","ms"],function(e,a){return void 0!==t.style[a+"Transform"]?(h=["-webkit-","-moz-","-o-","-ms-"][e]+"transform",!1):void 0})}(),$.tab=function(e){return new t(e)},$.fn.tab=function(e){return e.contenter=this,new t(e)}});