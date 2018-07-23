define("calendar",function(e,a,t){function r(e){return e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),e}function n(e){return"string"==typeof e&&""!==e}function i(e){if(this.today=r(new Date),$.extend(this,e),d.call(this),l.call(this),this.tips||(this.tips=["请选择起始时间","请选择结束时间"]),!this.wrapper){var a=this.name||"calendar",t=a+"Page";this.title||"选择日期";this.wrapper=$("#"+t),this.normalWrapper=!0,this.wrapper.length?$(".calendar",this.wrapper).remove():(window._fedRouter&&window._fedRouter.appendRouter?(window._fedRouter.appendRouter(a),this.elem=$("#"+t).addClass("page")):$("body").append('<div id="'+t+'" class="page"></div>'),this.wrapper=$("#"+t))}o.call(this),m.call(this)}function d(){s(this,["startDate","endDate"]),this.currentDate?s(this.currentDate,[0,1]):this.currentDate=[]}function s(e,a){for(var t,i=0,d=a.length;d>i;i++)t=a[i],n(e[t])?e[t]=Date.ParseString(e[t]):e[t]instanceof Date?r(e[t]):e[t]=void 0}function l(){if(this.startDate||(this.startDate=this.today),!this.endDate){var e=new Date(this.today);e.setMonth(e.getMonth()+6),e.setDate(e.getDate()-1),this.endDate=e}}function c(e,a){if(a){var t=e.param.reqbody;t?(t="string"==typeof t?JSON.parse(t):t,e.param.reqbody=$.extend(t,a)):e.param.reqbody=a}}function o(){var e,a,t='<div class="calendar">';if(this.ajaxObj?(v=0,D=[],b=0,e=p):e=function(e){t+=h.call(this,e)},this.reverseOrder){a=new Date(this.endDate),a.setDate(1);var r=new Date(this.startDate);for(r.setDate(1);a.getTime()>=r;)e.call(this,new Date(a),v++),a.setMonth(a.getMonth()-1)}else for(a=new Date(this.startDate),a.setDate(1);a.getTime()<=this.endDate;)e.call(this,new Date(a),v++),a.setMonth(a.getMonth()+(this.growInterval||1));if("range"===this.mode){t+='<div class="calendar-tips fixed">'+this.tips[0]+"</div>";var n=this;setTimeout(function(){$(".calendar-tips",n.wrapper).animate({"margin-left":"-100px"},300,"ease-in-out")},300)}t+="</div>",this.wrapper[this.normalWrapper?"append":"html"](t)}function p(e,a){var t=$.extend({},this.ajaxObj),r=this,n=e.getMonth()+1,i=t.processData({year:e.getFullYear(),month:(10>n?"0":"")+n,growInterval:r.growInterval||1});c(t,i),t.callback=function(t){r.ajaxObj.callback&&(t=r.ajaxObj.success(callback)||t),D[a]=D[a]||"";for(var n=(r.growInterval||1)-1;n>=0;n--)D[a]+=h.call(r,e,t),e.setDate(1);b++,b===v&&$(".calendar",r.elem).html(D.join(""))},_tc_bridge_util.get_data(t)}function h(e,a){for(var t=e.getMonth(),r=new Date(e),n='<div class="calendar-wrapper" data-year="'+e.getFullYear()+'" data-month="'+(e.getMonth()+1)+'"><h3>'+e.getFullYear()+"年"+(e.getMonth()+1)+'月</h3><table><tr><th class="sunday">日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th class="saturday">六</th></tr><tr>';0!==r.getDay();)r.setDate(r.getDate()-1),n+='<td class="disabled"></td>';var i=this.startDate;for("rangeTo"===this.mode&&this.currentDate[0]&&this.currentDate[0].getTime()>this.startDate.getTime()&&(i=this.currentDate[0]);e.getMonth()===t;)n+=g.call(this,e,i,a),e.setDate(e.getDate()+1),0===e.getDay()&&e.getMonth()===t&&(n+="</tr><tr>");for(;0!==e.getDay();)n+='<td class="disabled"></td>',e.setDate(e.getDate()+1);return n+="</tr></table></div>"}function g(e,a,t){var r=[];0===e.getDay()?r.push("sunday"):6===e.getDay()&&r.push("saturday"),(e.getTime()<a.getTime()||e.getTime()>this.endDate.getTime())&&r.push("disabled");var n,i,d=u(e),s=f(e);if(s?(n=s,i="festival"):e.getTime()===this.today.getTime()&&(n="今天",i="today"),i&&r.push(i),this.currentDate){var l=this.currentDate[0],c=this.currentDate[1];l&&(e.getTime()===l.getTime()?r.push("from-day"):e.getTime()>l.getTime()&&c&&e.getTime()<c.getTime()&&r.push("range-day")),c&&c.getTime()===e.getTime()&&r.push("to-day")}var o;return o=this.buildContent?this.buildContent(e,n,r,t):n?n:e.getDate(),"<td"+(r.length?' class="'+r.join(" ")+'"':"")+' data-day="'+e.getDate()+'">'+(d?'<i class="holidays">休</i>':"")+"<div>"+o+"</div></td>"}function u(e){var a=e.getFullYear(),t=e.getMonth()+1,r=e.getDate();return-1!==y.indexOf(a+"-"+t+"-"+r)}function f(e){var a=e.getFullYear(),t=e.getMonth()+1,r=e.getDate(),n=w[a+"-"+t+"-"+r];return n?n:(1===t&&1===r?n="元旦":2===t&&14===r?n="情人":5===t&&1===r?n="五一":6===t&&1===r?n="儿童":10===t&&1===r?n="国庆":12===t&&25===r&&(n="圣诞"),n)}function m(){var e=this;if("range"===e.mode){var a,t=!0,r=[];$(".calendar",e.wrapper).undelegate("td","click.calendar").delegate("td","click.calendar",function(n){var i=$(this);if(!i.hasClass("disabled")){var d=i.parents(".calendar-wrapper");if(a=[d.attr("data-year"),d.attr("data-month"),i.attr("data-day")],t){for(var s,l=["from-day","range-day","to-day"],c=0;s=l[c++];)$("."+s,e.wrapper).removeClass(s);i.addClass("from-day"),$(".calendar-tips",e.wrapper).css({"margin-left":"50%"}).html(e.tips[1]).animate({"margin-left":"-100px"},300,"ease-in-out"),r=[a],t=!1}else r.push(a),e.fn(r),t=!0}})}else $(".calendar",e.wrapper).undelegate("td","click.calendar").delegate("td","click.calendar",function(a){var t=$(this);if(!t.hasClass("disabled")&&"function"==typeof e.fn){var r=t.parents(".calendar-wrapper");e.fn([r.attr("data-year"),r.attr("data-month"),t.attr("data-day")],t)}})}!function(){var e=".calendar{padding:0 10px 20px;font-family:helvetica,arial,sans-serif;background:#fff}.calendar-wrapper{margin-top:10px}.calendar-wrapper table{width:100%;border-collapse:collapse}.calendar-wrapper h3{text-align:center;font-size:16px;font-weight:400;line-height:30px}.calendar-wrapper tr{height:48px}.calendar-wrapper tr:first-child{height:40px;background-image:-webkit-linear-gradient(bottom,transparent 50%,#dcdcdc 50%);background-image:linear-gradient(to bottom,transparent 50%,#dcdcdc 50%);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}.calendar-wrapper th{width:14.2857143%;color:#999;font-weight:400}.calendar-wrapper td{text-align:center;vertical-align:middle;font-size:14px;padding:0 2px;position:relative}.calendar-wrapper tr:nth-child(2) td{padding-top:2px}.calendar-wrapper td>div{height:40px;line-height:40px}.calendar-wrapper td>div .day,.calendar-wrapper td>div .price{line-height:20px;padding-top:0;height:20px;display:block}.calendar-wrapper td>div .price{font-size:12px;color:#666}.calendar-wrapper td>.holidays{position:absolute;left:2px;top:2px;font-size:10px;font-style:normal;color:#50b400}.calendar .saturday,.calendar .saturday .day,.calendar .saturday .price,.calendar .saturday p,.calendar .sunday,.calendar .sunday .day,.calendar .sunday .price,.calendar .sunday p{color:#50b400}.calendar-wrapper td span{display:block;padding-top:6px;line-height:14px}.calendar-wrapper td p{font-size:12px;line-height:16px;color:#50b400}.calendar .today>div{background:#f0f0f0;color:#333;border-radius:5px}.calendar .disabled,.calendar .disabled>div{color:#ccc}.calendar-wrapper .from-day>div,.calendar-wrapper .to-day>div{background:#50b400;color:#fff;border-radius:5px}.calendar-wrapper .from-day p,.calendar-wrapper .to-day p{color:#fff}.calendar-tips{background:rgba(0,0,0,.8);color:#fff;width:180px;padding:10px;border-radius:5px;text-align:center}.calendar-tips.fixed{left:50%;margin-left:50%;bottom:20px}",a=document.createElement("style");a.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(a)}();-1===navigator.userAgent.toLowerCase().indexOf("tctravel");Date.ParseString=function(e){var a=/(\d{4})-(\d{1,2})-(\d{1,2})(?:\s+(\d{1,2}):(\d{1,2}):(\d{1,2}))?/i,t=a.exec(e),r=0,n=null;return r=t&&t.length?t.length>5&&t[6]?Date.parse(e.replace(a,"$2/$3/$1 $4:$5:$6")):Date.parse(e.replace(a,"$2/$3/$1")):Date.parse(e),isNaN(r)||(n=new Date(r)),n},$.calendar=function(e){return new i(e)};var v,D,b,w={"2016-2-7":"除夕","2016-2-8":"春节","2016-2-22":"元宵","2016-4-4":"清明","2016-6-9":"端午","2016-8-9":"七夕","2016-9-15":"中秋","2016-10-19":"重阳","2017-1-27":"除夕","2017-1-28":"春节","2017-2-11":"元宵","2017-4-4":"清明","2017-5-30":"端午","2017-8-28":"七夕","2017-10-4":"中秋","2017-10-28":"重阳","2018-2-15":"除夕","2018-2-16":"春节","2018-3-2":"元宵","2018-4-5":"清明","2018-6-18":"端午","2018-8-17":"七夕","2018-9-24":"中秋","2018-10-17":"重阳","2019-2-4":"除夕","2019-2-5":"春节","2019-2-19":"元宵","2019-4-5":"清明","2019-6-7":"端午","2019-8-7":"七夕","2019-9-13":"中秋","2019-10-7":"重阳","2020-1-24":"除夕","2020-1-25":"春节","2020-2-8":"元宵","2020-4-4":"清明","2020-6-25":"端午","2020-8-25":"七夕","2020-10-1":"中秋","2020-10-25":"重阳"},y=["2017-1-1","2017-1-2","2017-1-27","2017-1-28","2017-1-29","2017-1-30","2017-1-31","2017-2-1","2017-2-2","2017-4-2","2017-4-3","2017-4-4","2017-4-29","2017-4-30","2017-5-1","2017-5-28","2017-5-29","2017-5-30","2017-10-1","2017-10-2","2017-10-3","2017-10-4","2017-10-5","2017-10-6","2017-10-7","2017-10-8"];!function(){function e(e,a,t){return e+"/"+(1==a.toString().length?"0"+a:a)+"/"+(1==t.toString().length?"0"+t:t)}var t={};a.show=function(a,r,n){var i;if(n&&(i=t["calCache"+n])&&t.calendarLastActive==="calCache"+n)return void _tc_bridge_public.openRouter("calendar");n&&(t["calCache"+n]=t["calCache"+n]||{},t["calCache"+n].param=a);var d,s=a.param,l={};if(i&&i.dataList)l=i.dataList;else if(s.priceConf&&(d=s.priceConf.priceList)){for(var c=s.priceConf.match||{},o=c.date||"date",p=c.price||"price",h=0;h<d.length;h++){var g=d[h][o].split("-");g[1]=parseInt(g[1],10),g[2]=parseInt(g[2],10),l["t"+new Date(d[h][o]).getTime()]={date:g.join("/"),price:d[h][p],defaultdata:d[h]}}n&&(t["calCache"+n].dataList=l)}var u={startDate:s.startDate,endDate:s.endDate,currentDate:[s.selectedDate],fn:function(t,n){_tc_bridge_bar.set_navbar_hidden(),_tc_bridge_public.closeRouter("calendar");var i=e(t[0],t[1],t[2]);r(a,{tagname:a.param.tagname,CBData:{selectedDate:i.replace(/\//gi,"-"),proceInfo:l["t"+new Date(i).getTime()]}})},buildContent:function(e,a,t,r){var n;return(n=l["t"+e.getTime()])?'<span class="day">'+(a||e.getDate())+'</span><em class="price">¥'+n.price+"</em>":a||e.getDate()}};$.calendar(u),_tc_bridge_public.openRouter("calendar"),t.calendarLastActive="calCache"+n,_tc_bridge_bar.set_navbar({param:{center:[{tagname:"",value:"选择日历"}]},callback:function(e){}})}}()});