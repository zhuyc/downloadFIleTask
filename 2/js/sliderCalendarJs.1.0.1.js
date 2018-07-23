!function(){function t(t,e){return 1===t.nodeType&&(void 0===e?!0:t.tagName.toLowerCase()===e)}function e(t){return"string"==typeof t&&""!==t}function a(t){t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0)}function n(t){return t=t.split("-"),t=new Date(parseInt(t[0],10),parseInt(t[1],10)-1,parseInt(t[2],10)),isNaN(t.getTime())?void 0:t}function s(t){return t.getFullYear()+"-"+i(t.getMonth()+1)+"-"+i(t.getDate())}function i(t){return(10>t?"0":"")+t}function r(t,s){for(var i,r=0,l=s.length;l>r;r++)i=s[r],e(t[i])?t[i]=n(t[i]):I.isDate(t[i])?a(t[i]):t[i]=void 0}function l(t){r(t,["startDate","endDate"]),e(t.currentDate)?t.currentDate=[n(t.currentDate)]:I.isDate(t.currentDate)?(a(t.currentDate),t.currentDate=[t.currentDate]):I.isArray(t.currentDate)?r(t.currentDate,[0,1]):t.currentDate=[]}function o(e){if(e.elem&&t(e.elem,"input")){var a=n(e.elem.value);a?"rangeTo"===e.mode?e.currentDate[1]=a:e.currentDate[0]=a:"rangeTo"===e.mode?e.currentDate[1]&&(e.elem.value=s(e.currentDate[1])):e.currentDate[0]&&(e.elem.value=s(e.currentDate[0]))}}function h(t){"rangeTo"===t.mode&&t.currentDate[0]&&t.startDate.getTime()<t.currentDate[0].getTime()&&(t.startDate=new Date(t.currentDate[0]))}function d(t){this._={},$.extend(this._,t);for(var e,a=["startDate","endDate","zIndex","currentDate","ajaxObj","cache","fn","elem","elems","mode","buildContent","hoverIn","hoverOut","clickSelect","nextMonthFn","previousMonthFn","beforePreviousMonthFn","beforeNextMonthFn"],n=0,s=a.length;s>n;n++)e=a[n],this._[e]=this._[e]||this[e]}function c(t){if(t.elem&&(t.elem=$(t.elem),t.elem.length?(t.elem=t.elem[0],-1===$.inArray(t.elem,this._elems)&&this._elems.push(t.elem)):delete t.elem),t.elems)for(var e=$(t.elems),a=0,n=e.length;n>a;a++)-1===$.inArray(e[a],this._elems)&&this._elems.push(e[a])}function u(t){if($.extend(this,{firstDay:0,clickSelect:!0,zIndex:"1000",startDate:new Date(1900,0,1),endDate:new Date(2100,11,31),dataCache:{},showHeader:!0,_ajaxTotalNum:0,_ajaxNum:0}),void 0!==t&&(l(t),o(t),h(t),$.extend(this,t)),this.wrapper){p.call(this);var e=$(this.wrapper);if(0===e.length)return;e.append(this.panel),d.call(this,t),this.update(),D.call(this)}else this._elems=[],c.call(this,this)}function p(){this.isBigRange?(this.headerMonthHtmlStr='<select name="year" class="sliderCalendar-year"></select><em>年</em><select name="month" class="sliderCalendar-month"></select><em>月</em>',this.updateHeaderMonth=function(t,e,a){var n=$("select",t);n[0]&&(e||(e=parseInt(n[0].value,10),a=parseInt(n[1].value,10)),f(n[0],this._.startDate,this._.endDate,e),m(n[1],this._.startDate,this._.endDate,e,a))},this.getYearAndMonth=function(t){var e=$("select",t);return[parseInt(e[0].value,10),parseInt(e[1].value,10)]}):(this.headerMonthHtmlStr="年月",this.updateHeaderMonth=function(t,e,a){var n=$("h6 span",t);n[0]&&(n[0].innerHTML=e+"年"+a+"月")},this.getYearAndMonth=function(t){var e=$("span",t)[0].innerHTML.split("年");return e[0]=parseInt(e[0],10),e[1]=parseInt(e[1].split("月")[0],10),e});var t=document.createElement("div");t.className="sliderCalendar-panel"+(this.wrapper?"":" sliderCalendar-picker")+(this.className?" "+this.className:""),this.wrapper||(t.style.display="none");var e='<div><div class="sliderCalendar-container">'+g.call(this)+g.call(this)+g.call(this)+"</div>";e+="</div>",this.showHeader&&(e+='<div class="month-nav"><a href="javascript:;" hidefocus="true" class="previous-month"></a><a href="javascript:;" hidefocus="true" class="next-month"></a></div>'),t.innerHTML=e,this.panel=t}function g(){var t='<div class="sliderCalendar-wrapper"><div '+(this.showHeader?"":'style="display:none"')+"><h6><span>"+this.headerMonthHtmlStr+"</span></h6></div><div><table>";t+='<tr class="header">';for(var e,a,n=0;7>n;n++)e=(n+this.firstDay)%7,a=this.dayClassNameMap[e+""],t+="<th"+(a?' class="'+a+'"':"")+">"+this.dayStrs[e]+"</th>";for(t+="</tr>",n=0;6>n;n++){t+="<tr"+(5==n?' class="last-row"':"")+">";for(var s=0;7>s;s++)t+="<td></td>";t+="</tr>"}return t+="</table></div></div>"}function f(t,e,a,n){t.options.length=0;for(var s=e.getFullYear(),i=a.getFullYear();i>=s;s++)t.options.add(new Option(s,s));t.originalValue=t.value=n}function m(t,e,a,n,s){var r=e.getFullYear()===n?e.getMonth()+1:1,l=a.getFullYear()===n?a.getMonth()+1:12;if(1===r&&12===l&&12===t.options.length)return void(t.originalValue=t.value=i(s));for(t.options.length=0;l>=r;r++)t.options.add(new Option(i(r),i(r)));t.originalValue=t.value=i(s)}function v(){var t=this;$(document).on("tap",function(e){for(var a=e.target;a&&document!==a;){if(-1!==$.inArray(a,t._elems)||a===t.panel)return;a=a.parentNode}t.hide()})}function D(){var e=this;"undefined"!=typeof FastClick&&FastClick.attach(this.panel),$(this.panel).on("click",function(a){for(var n=a.target;n!==this;){if(n=$(n),"td"===n[0].tagName.toLowerCase()){if(n.hasClass("invalid-day"))break;e.wrapper||e.hide();var i=e.getYearAndMonth(n.parents(".sliderCalendar-wrapper")),r=new Date(i[0],i[1]-1,parseInt(n[0].getAttribute("data-date"),10));n.hasClass("previous-month-day")?r.setMonth(r.getMonth()-1):n.hasClass("next-month-day")&&r.setMonth(r.getMonth()+1),e._.elem&&t(e._.elem,"input")&&(e._.elem.value=s(r)),$(".from-day",e.panel).removeClass("from-day"),e.clickSelect&&$(n).addClass("from-day"),e.currentDate&&(e.currentDate[0]=r),e._.currentDate[0]=r,"function"==typeof e._.fn&&e._.fn(r.getFullYear(),r.getMonth()+1,r.getDate(),n[0],e._.elem);break}if(n.hasClass("previous-month")){n.hasClass("previous-month-disabled")||b.call(e);break}if(n.hasClass("next-month")){n.hasClass("next-month-disabled")||x.call(e);break}n=n[0].parentNode}a.stopPropagation()}),$(".sliderCalendar-container",this.panel).on("touchstart",function(t){var a=t.touches[0];e._startLocation={x:a.pageX,y:a.pageY},e._switching||(e._isStart=!1)}).on("touchmove",function(t){if(!(t.touches.length>1||t.scale&&1!==t.scale)){var a=t.touches[0],n=a.pageX-e._startLocation.x;if(e._isStart||(e._isStart=Math.abs(n)>Math.abs(a.pageY-e._startLocation.y)),!e._isStart)return e._startLocation.x=a.pageX,void(e._startLocation.Y=a.pageY);if(t.preventDefault(),!e._switching){var s=$(".sliderCalendar-wrapper",e.panel),i=e.getYearAndMonth(s.eq(1)),r=new Date(i[0],i[1]-1,1);if(n>0&&(r.getFullYear()===e._.startDate.getFullYear()&&r.getMonth()===e._.startDate.getMonth()||r.getTime()<e._.startDate.getTime()))return void(e._isStart=!1);if(0>n&&(r.getFullYear()===e._.endDate.getFullYear()&&r.getMonth()===e._.endDate.getMonth()||r.getTime()>e._.endDate.getTime()))return void(e._isStart=!1);var l=$(this);l.css({"-webkit-transform":"translate3d("+n/parseInt(l.width(),10)*100+"%, 0, 0)"}),e._distX=n}}}).on("touchend touchcancel",function(t){e._switching||(e._isStart&&Math.abs(e._distX)/parseInt($(this).width(),10)>=.21?e._distX<0?(t.preventDefault(),x.call(e)):(t.preventDefault(),b.call(e)):$(this).css({"-webkit-transform":"translate3d(0%, 0, 0)"}))}),M.call(this,this.panel)}function M(t){if(this.isBigRange){var e=this;$(".sliderCalendar-year",t).on("change",function(t){_.call(e,this)}),$(".sliderCalendar-month",t).on("change",function(t){y.call(e,this)})}}function _(t){var e=parseInt(t.value,10),a=$(".sliderCalendar-month",t.parentNode)[0],n=parseInt(a.value,10),s=this._.startDate,i=this._.endDate;s.getFullYear()===e&&n<s.getMonth()+1?n=s.getMonth()+1:i.getFullYear()===e&&n>i.getMonth()+1&&(n=i.getMonth()+1);var r=parseInt(t.originalValue);t.originalValue=t.value,m(a,s,i,e,n);var l=new Date(e,n-1,1),o=$(".sliderCalendar-wrapper",this.panel);r>e?(T.call(this,new Date(l),o.first(),1),b.call(this,function(){l.setMonth(l.getMonth()+1),T.call(this,l,o.eq(1),-1)})):(T.call(this,l,o.last(),-1),x.call(this,function(){l.setMonth(l.getMonth()-1),T.call(this,l,o.eq(1),1)}))}function y(t){var e=$(".sliderCalendar-year",t.parentNode)[0],a=parseInt(t.originalValue,10),n=parseInt(t.value,10),s=new Date(parseInt(e.value,10),n-1,1),i=$(".sliderCalendar-wrapper",this.panel);t.originalValue=t.value,a>n?(T.call(this,new Date(s),i.first(),1),b.call(this,function(){s.setMonth(s.getMonth()+1),T.call(this,s,i.eq(1),-1)})):(T.call(this,s,i.last(),-1),x.call(this,function(){s.setMonth(s.getMonth()-1),T.call(this,s,i.eq(1),1)}))}function w(t){var e=$(".sliderCalendar-loading",t);e.length?e.css({display:"block"}):$(t).append('<div class="sliderCalendar-loading"></div>')}function C(t,e){return t.getFullYear()>e.getFullYear()?1:t.getFullYear()===e.getFullYear()?t.getMonth()>e.getMonth()?1:t.getMonth()===e.getMonth()?0:-1:-1}function T(t,e,n){if(e=e||$(".sliderCalendar-wrapper",this.panel),n=n||1,this.today=new Date,a(this.today),"undefined"==typeof t){var s=this.today>this._.startDate&&this.today<this._.endDate?this.today:this._.startDate;t="rangeTo"===this._.mode&&this._.currentDate[1]?new Date(this._.currentDate[1]):this._.currentDate[0]?new Date(this._.currentDate[0]):new Date(s)}1!==e.length&&t.setMonth(t.getMonth()-1),t.setDate(1),t.setMonth(t.getMonth()+n),this._.startDate&&(this._.startDate.getFullYear()===t.getFullYear()&&this._.startDate.getMonth()===t.getMonth()||this._.startDate.getTime()>t.getTime()?$(".previous-month",this.panel).addClass("previous-month-disabled"):$(".previous-month",this.panel).removeClass("previous-month-disabled")),t.setMonth(t.getMonth()-n);for(var i=0,r=e.length;r>i;i++){if(this.updateHeaderMonth(e[i],t.getFullYear(),t.getMonth()+1),this._.ajaxObj&&C(t,this._.startDate)>=0&&C(t,this._.endDate)<=0){this._ajaxTotalNum++;var l=this;!function(t,e,a){var n=$.extend({},l._.ajaxObj);if("function"==typeof n.url?n.url=n.url(e.getFullYear(),e.getMonth()+1):n.url=n.url.replace("{year}",e.getFullYear()).replace("{month}",e.getMonth()+1),l._.cache&&void 0!==l.dataCache[n.url])return k.call(l,t,e,l.dataCache[n.url]),l._ajaxNum++,void(l._ajaxNum===l._ajaxTotalNum&&$(".sliderCalendar-loading",l.panel).css({display:"none"}));"function"==typeof n.data&&(n.data=n.data(e.getFullYear(),e.getMonth()+1));var s=n.success,i=n.complete;n.success=function(a){"function"==typeof s&&(a=s(a)||a),l._.cache&&(l.dataCache[n.url]=a),t.month===e.getFullYear()+"-"+(e.getMonth()+1)&&k.call(l,t,e,a)},n.complete=function(){"function"==typeof i&&i(),l._ajaxNum++,l._ajaxNum===l._ajaxTotalNum&&$(".sliderCalendar-loading",l.panel).css({display:"none"})},t.month=e.getFullYear()+"-"+(e.getMonth()+1),$.ajax(n)}(e[i],new Date(t),i)}else k.call(this,e[i],new Date(t));t.setMonth(t.getMonth()+1)}t.setMonth(t.getMonth()-1),1===e.length?t.setMonth(t.getMonth()+n):t.setMonth(t.getMonth()-n),this._.endDate&&(this._.endDate.getFullYear()===t.getFullYear()&&this._.endDate.getMonth()===t.getMonth()||this._.endDate.getTime()<t.getTime()?$(".next-month",this.panel).addClass("next-month-disabled"):$(".next-month",this.panel).removeClass("next-month-disabled"))}function b(t){if(!this._switching){this._ajaxNum!==this._ajaxTotalNum&&w(this.panel);var e=this;e._switching=!0;var a=$(".sliderCalendar-wrapper",e.panel),n=e.getYearAndMonth(a.first()),s=new Date(n[0],n[1]-1,1);e.beforePreviousMonthFn&&e.beforePreviousMonthFn.call(e,new Date(s));var i=new Date(s);s.setMonth(s.getMonth()-1),T.call(e,s,a.last(),1),$(".sliderCalendar-container",this.panel).animate({"-webkit-transform":"translate3d(100%, 0, 0)"},300,"linear",function(){setTimeout(function(){var t=$(".sliderCalendar-wrapper",e.panel).last();t.remove(),$(".sliderCalendar-container",e.panel).prepend(t).css({"-webkit-transform":"translate3d(0%, 0, 0)"})},0),"function"==typeof t&&t.call(e),e.previousMonthFn&&e.previousMonthFn.call(e,i),e._switching=!1})}}function x(t){if(!this._switching){this._ajaxNum!==this._ajaxTotalNum&&w(this.panel);var e=this;e._switching=!0;var a=$(".sliderCalendar-wrapper",e.panel),n=e.getYearAndMonth(a.last()),s=new Date(n[0],n[1]-1,1);e.beforeNextMonthFn&&e.beforeNextMonthFn.call(e,new Date(s));var i=new Date(s);s.setMonth(s.getMonth()+1),T.call(e,s,a.first(),-1),$(".sliderCalendar-container",this.panel).animate({"-webkit-transform":"translate3d(-100%, 0, 0)"},300,"linear",function(){setTimeout(function(){var t=$(".sliderCalendar-wrapper",e.panel).first();t.remove(),$(".sliderCalendar-container",e.panel).append(t).css({"-webkit-transform":"translate3d(0%, 0, 0)"})},0),"function"==typeof t&&t.call(e),e.nextMonthFn&&e.nextMonthFn.call(e,i),e._switching=!1})}}function F(t){var e=t.getFullYear(),a=t.getMonth()+1,n=t.getDate(),s=S[e+"-"+a+"-"+n];return s?s:(1===a&&1===n?s="元旦":2===a&&14===n?s="情人":5===a&&1===n?s="五一":6===a&&1===n?s="儿童":10===a&&1===n?s="国庆":12===a&&25===n&&(s="圣诞"),s)}function Y(t,e,a){var n=$(t);(e.getTime()<this._.startDate.getTime()||e.getTime()>this._.endDate.getTime())&&n.addClass("invalid-day");var s,i=e.getDate();dateStr=F(e),dateStr&&(s="festival"),e.getTime()===this.today.getTime()&&(dateStr="今天",s="today"),"function"==typeof this._.buildContent?this._.buildContent(t,e,dateStr,a):t.innerHTML='<span class="d">'+(dateStr?dateStr:i)+"</span>",t.setAttribute("data-date",i),s&&n.addClass(s);var r=!1;this._.currentDate[0]&&(e.getTime()>this._.currentDate[0].getTime()?r=!0:e.getTime()===this._.currentDate[0].getTime()&&n.addClass("from-day")),this._.currentDate[1]&&(e.getTime()<this._.currentDate[1].getTime()?r&&n.addClass("range-day"):e.getTime()===this._.currentDate[1].getTime()&&n.addClass("to-day"))}function N(t,e,a){var n=this.dayClassNameMap[e.getDay()+""],s=[];n&&s.push(n),a&&s.push(a),t.className=s.join(" ")}function j(t,e){var a,n=new Date(t),s=e.rows[e.rows.length-1],i=n.getDay();n.setMonth(n.getMonth()+1),n.setDate(n.getDate()-1),a=n.getDate(),a+i>35?$(s).css({display:"table-row"}):$(s).css({display:"none"})}function k(t,e,a){var n,s,i=$("table",t)[0],r=e.getMonth(),l=1,o=new Date(e);for(this.hideLastRow&&j(o,i);o.getDay()!==this.firstDay;)o.setDate(o.getDate()-1),s=i.rows[1].cells[(o.getDay()-this.firstDay+7)%7],this.showOtherMonth?(N.call(this,s,o,"previous-month-day"),Y.call(this,s,o,a)):(s.innerHTML="",N.call(this,s,o,"invalid-day"));for(;e.getMonth()===r;)n=(e.getDay()-this.firstDay+7)%7,s=i.rows[l].cells[n],N.call(this,s,e),Y.call(this,s,e,a),6===n&&l++,e.setDate(e.getDate()+1);for(;7>l;)n=(e.getDay()-this.firstDay+7)%7,s=i.rows[l].cells[n],this.showOtherMonth?(N.call(this,s,e,"next-month-day"),Y.call(this,s,e,a)):(s.innerHTML="",N.call(this,s,e,"invalid-day")),6===n&&l++,e.setDate(e.getDate()+1)}var I={};["Date","Array"].forEach(function(t){I["is"+t]=function(e){return Object.prototype.toString.call(e)==="[object "+t+"]"}}),u.prototype.dayStrs=["日","一","二","三","四","五","六"],u.prototype.dayClassNameMap={0:"sunday",6:"saturday"},u.prototype.pick=function(t){this.wrapper||(this.panel||(p.call(this),document.body.appendChild(this.panel),this.panel.style.zIndex=this.zIndex,v.call(this),D.call(this)),void 0!==t&&(c.call(this,t),"block"===$(this.panel).css("display")&&this._&&this._.elem===t.elem)||(d.call(this,t),l(this._),o(this._),h(this._),this.update(),$(this.panel).css({display:"block","z-index":this._.zIndex}).animate({"-webkit-transform":"translate3d(0, 0%, 0)"},300,"ease")))},u.prototype.hideOtherListDay=function(t,e){var a=$(t)[0],n=a.parentNode,s=n.parentNode;$("tr",s).each(function(t,a){var s=$(a);a===n||s.hasClass("header")||(void 0!==e?e?s.addClass("hide-tr-list"):s.removeClass("hide-tr-list"):s.toggleClass("hide-tr-list"))}),this._switching=!!$(".hide-tr-list",s)[0]},u.prototype.movingOptions=function(t){void 0===t?this._switching=!0:this._switching=!!t},u.prototype.hide=function(){if(this.panel){var t=this.panel;$(this.panel).animate({"-webkit-transform":"translate3d(0, 100%, 0)"},300,"ease",function(){$(t).css({display:"none"})})}},u.prototype.toggle=function(t){"block"===$(this.panel).css("display")?this.hide():this.pick(t)},u.prototype.update=function(t,e){if(this.ajaxObj&&w(this.panel),void 0===t)return void T.call(this,t);if(t=I.isDate(t)?new Date(t.getFullYear(),t.getMonth(),1):new Date(t,e-1,1),isNaN(t.getTime()))t=void 0,T.call(this,t);else{var a=$(".sliderCalendar-wrapper",this.panel),n=this.getYearAndMonth(a.eq(1));n=new Date(n[0],n[1]-1,1),t.getTime()<n.getTime()?(T.call(this,new Date(t),a.first(),1),b.call(this,function(){t.setMonth(t.getMonth()+1),T.call(this,t,a.eq(1),-1)})):t.getTime()>n.getTime()?(T.call(this,t,a.last(),-1),x.call(this,function(){t.setMonth(t.getMonth()-1),T.call(this,t,a.eq(1),1)})):T.call(this,t)}},u.prototype.previousMonth=function(){b.call(this)},u.prototype.nextMonth=function(){x.call(this)};var S={"2021-2-11":"除夕","2021-2-12":"春节","2021-2-16":"元宵","2021-4-4":"清明","2021-6-14":"端午","2021-8-14":"七夕","2021-9-21":"中秋","2020-1-24":"除夕","2020-1-25":"春节","2020-2-8":"元宵","2020-4-4":"清明","2020-6-25":"端午","2020-8-25":"七夕","2020-10-1":"中秋","2019-2-4":"除夕","2019-2-5":"春节","2019-2-19":"元宵","2019-4-5":"清明","2019-6-7":"端午","2019-8-7":"七夕","2019-9-13":"中秋","2018-2-15":"除夕","2018-2-16":"春节","2018-3-2":"元宵","2018-4-5":"清明","2018-6-18":"端午","2018-8-17":"七夕","2018-9-24":"中秋","2017-1-27":"除夕","2017-1-28":"春节","2017-2-11":"元宵","2017-4-4":"清明","2017-5-30":"端午","2017-8-28":"七夕","2017-10-4":"中秋","2016-2-7":"除夕","2016-2-8":"春节","2016-2-22":"元宵","2016-4-4":"清明","2016-6-9":"端午","2016-8-9":"七夕","2016-9-15":"中秋","2015-2-18":"除夕","2015-2-19":"春节","2015-3-5":"元宵","2015-4-5":"清明","2015-6-20":"端午","2015-8-20":"七夕","2015-9-27":"中秋","2014-1-30":"除夕","2014-1-31":"春节","2014-2-14":"元宵","2014-4-5":"清明","2014-6-2":"端午","2014-8-2":"七夕","2014-9-8":"中秋","2013-2-9":"除夕","2013-2-10":"春节","2013-2-24":"元宵","2013-4-4":"清明","2013-6-12":"端午","2013-8-13":"七夕","2013-9-19":"中秋"};$.sliderCalendar=function(t){return new u(t)}}();