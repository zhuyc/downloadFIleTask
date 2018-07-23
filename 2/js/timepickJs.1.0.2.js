define("timepickJs",["selectJs","selectCss"],function(t,e,a){function n(t,e,a,n){var i=[],t=parseInt(t,10),e=parseInt(e,10);n=parseInt(n,10)||1;for(var s=0;e-t>=s;s+=n)i.push([t+s,t+s+a]);return i}function i(t){t.startDate&&t.endDate&&(this.options=this.options||{},$.extend(this.options,D),$.extend(this.options,t),this.init())}function s(t){return t%100===0?t%400===0:t%4===0}function r(t){var e=this,a=e.options,i=(t[0],parseInt($(t[1]).attr("data-id"),10)),r=e.times;if("month"==t[0])e.selectDate[1]=i;else if("year"==t[0]){if(a.topList&&e.searchTopList(i,["month","day"]))return;e.selectDate[0]=i}else"day"==t[0]&&(e.selectDate[2]=i);if("year"==t[0]||"month"==t[0]){var o,l=1,c=12,D=1;if("year"==t[0]){e.selectDate[0]==r.SY&&(l=r.SM),e.selectDate[0]==r.EY&&(c=r.EM,e.selectDate[1]>=c&&(o=a.endDate.getDate()));var d=n(l,c,"月"),m=e.selectDate[1];m>d[d.length-1][0]?m=d[d.length-1][0]:m<d[0][0]&&(m=d[0][0]),e.selectObj.updateSelect({name:"month",data:d,index:m}),e.selectDate[1]=m}if(!e.options.day)return;o||(o=s(e.selectDate[0])&&2==e.selectDate[1]?29:p[e.selectDate[1]-1]),e.selectDate[0]==r.SY&&e.selectDate[1]==r.SM&&(D=a.startDate.getDate());var d=n(D,o,"日"),m=e.selectDate[2];m>d[d.length-1][0]?m=d[d.length-1][0]:m<d[0][0]&&(m=d[0][0]),e.selectObj.updateSelect({name:"day",data:d,index:m}),e.selectDate[2]=m}}function o(t){var e=this,a=e.options,i=(t[0],$(t[1]).attr("data-id")),s=e.times;if("hour"==t[0])e.selectDate[1]=i;else if("days"==t[0]){if(a.topList&&e.searchTopList(i,["hour","min"]))return;e.selectDate[0]=i}else"min"==t[0]&&(e.selectDate[2]=i);if("hour"==t[0]||"days"==t[0]){var r,o=0,l=23,c=0,D=new Date(e.selectDate[0].replace(/-/gi,"/")).getTime(),p=new Date(s.SY+"/"+s.SM+"/"+s.SD).getTime(),d=new Date(s.EY+"/"+s.EM+"/"+s.ED).getTime();if(D==p?o=s.SH:D==d&&(l=s.EH),"days"==t[0]){var m=n(o,l,"时"),h=e.selectDate[1];h>m[m.length-1][0]?h=m[m.length-1][0]:h<m[0][0]&&(h=m[0][0]),e.selectObj.updateSelect({name:"hour",data:m,index:h}),e.selectDate[1]=h}D==d&&e.selectDate[1]>=l&&(r=s.EMI),r||(r=59),D==p&&e.selectDate[1]==s.SH&&(c=s.SMI);var m=n(c,r,"分",a.timeInterval),h=e.selectDate[2];h>m[m.length-1][0]?h=m[m.length-1][0]:h<m[0][0]&&(h=m[0][0]),e.selectObj.updateSelect({name:"min",data:m,index:h}),e.selectDate[2]=h}}function l(t){var e=new Date;if(t){switch(Object.prototype.toString.call(t)){case"[object Array]":var a=t.length;0==a?t=e:(t[1]=t[1]-1,t[1]<0&&(t[1]=0),t[2]=t[2]||1,t=new Date(t[0],t[1]||1,t[2]||1));break;case"[object Date]":t=t;break;case"[object String]":t=new Date(t.replace(/-/gi,"/"));break;default:t=e}return t}}function c(t,e){if(!t)return"";t=t.toString();for(var a=0,n=e-t.length;n>a;a++)t="0"+t;return t}t("selectJs");var D={mask:!0,width:"100%",btnPosition:"top",larger:!0,day:!0,title:"选择日期",changeFn:function(t){},itemPrintFn:function(t){return'<span data-id="'+t[0]+'">'+t[1]+"</span>"}},p=[31,28,31,30,31,30,31,31,30,31,30,31];i.prototype.init=function(){var t=this,e=t.options;e.timeInterval?t.options.changeFn=$.proxy(o,t):t.options.changeFn=$.proxy(r,t),t.selectFn=t.options.selectFn||function(){},t.options.selectFn=function(e){for(var a=[],n=0;n<e.length;n++)a.push($(e[n][1]).attr("data-id"));return t.selectFn(a)},e.timeInterval=e.timeInterval?parseInt(e.timeInterval,10):!1,e.timeInterval!==!1&&e.timeInterval<1440?t.createTimeArr():t.createDateArr(),t.selectObj=$.Select(t.options)},i.prototype.formats=function(){var t=this,e=t.options;e._normalDate=e.normalDate,e.normalDate=l(e.normalDate),e.startDate=l(e.startDate),e.endDate=l(e.endDate),e.endDate.getTime()-e.startDate.getTime()<864e5?e.endDate=e.normalDate=e.startDate:e.normalDate=new Date(Math.max(e.startDate.getTime(),Math.min(e.normalDate.getTime(),e.endDate.getTime()))),t.times={ST:e.startDate.getTime(),SY:e.startDate.getFullYear(),SM:e.startDate.getMonth()+1,ET:e.endDate.getTime(),EY:e.endDate.getFullYear(),EM:e.endDate.getMonth()+1,NT:e.normalDate.getTime(),NY:e.normalDate.getFullYear(),NM:e.normalDate.getMonth()+1}},i.prototype.createTimeArr=function(){function t(t,e){var a=new Date(e),n=a.getFullYear(),i=c(a.getMonth()+1,2),s=c(a.getDate(),2);t.push([n+"-"+i+"-"+s,n+"年"+i+"月"+s+"日"])}this.formats();var e=this,a=e.options;$.extend(e.times,{SD:a.startDate.getDate(),ED:a.endDate.getDate(),ND:a.normalDate.getDate(),SH:a.startDate.getHours(),EH:a.endDate.getHours(),NH:a.normalDate.getHours(),SMI:a.startDate.getMinutes(),EMI:a.endDate.getMinutes(),NMI:a.normalDate.getMinutes()});for(var i=e.times,s=[],r=a.startDate.getTime();r<a.endDate.getTime();r+=864e5)t(s,r);parseInt(s[s.length-1][0].split("-")[2])<a.endDate.getDate()&&t(s,a.endDate);var o=n(i.SY===i.NY&&i.SM===i.NM&&i.SD===i.ND?i.SH:0,i.EY===i.NY&&i.EM===i.NM&&i.ED===i.ND?i.EH:23,"时",Math.floor(parseInt(a.timeInterval,10)/60)),l=n(i.SY===i.NY&&i.SM===i.NM&&i.SD===i.ND&&i.SH===i.NH?i.SMI:0,i.EY===i.NY&&i.EM===i.NM&&i.ED===i.ND&&i.EH===i.NH?i.EMI:59,"分",a.timeInterval);e.selectDate=[i.NY+"-"+i.NM+"-"+i.ND,i.NH,i.NMI];var D=i.NY+"-"+c(i.NM,2)+"-"+c(i.ND,2);a.topList?this.setTopList(s,"days",D):a.data=[{name:"days",data:s,index:D}],a.topList&&a.topList.active==a._normalDate?a.data=e.options.data.concat([{name:"hour",data:[]},{name:"min",data:[]}]):a.data=e.options.data.concat([{name:"hour",data:o,index:i.NH},{name:"min",data:l,index:i.NMI}])},i.prototype.setTopList=function(t,e,a){var n=this,i=n.options,s=[].concat(i.topList.data),r=i._normalDate==i.topList.active,o=r?i.topList.active:a;i.data=[{name:e,data:s.concat(t),index:o}],r&&(n.selectDate=[i.topList.active,"",""])},i.prototype.searchTopList=function(t,e){for(var a=this.options.topList.data,n=!1,i=0;i<a.length;i++)t==a[i][0]&&(n=!0);if(n){this.selectDate=[t,"",""];for(var i=0;i<e.length;i++)this.selectObj.updateSelect({name:e[i],data:this.options.topListShowChildList?[["",""]]:[]})}return n},i.prototype.title=function(t){return this.selectObj.title(t)},i.prototype.createDateArr=function(){this.formats();var t=this,e=t.times,a=t.options,i=n(e.SY,e.EY,"年"),r=n(e.NY===e.SY?e.SM:1,e.EY===e.SY?e.EM:12,"月"),o=[],l=1,c=0;e.NY===e.SY&&e.NM===e.SM&&(l=a.startDate.getDate()),c=s(e.NY)&&2==e.NM?29:e.NY===e.EY&&e.NM===e.EM?a.endDate.getDate():p[e.NM-1],o=n(l,c,"日"),t.selectDate=[e.NY,e.NM],a.topList?this.setTopList(i,"year",e.NY):a.data=[{name:"year",data:i,index:e.NY}],a.topList&&a.topList.active==a._normalDate?(a.data.push({name:"month",data:[]}),a.day&&a.data.push({name:"day",data:[]})):(a.data.push({name:"month",data:r,index:e.NM}),a.day&&(a.data.push({name:"day",data:o,index:a.normalDate.getDate()}),t.selectDate.push(a.normalDate.getDate())))},i.prototype.open=function(t){var e=this,a=e.options;t?(e.options=$.extend(D,t),e.selectFn=e.options.selectFn,a.timeInterval!==!1&&a.timeInterval<1440?e.createTimeArr():e.createDateArr(),e.options.data.forEach(function(t){e.selectObj.updateSelect(t)}),this.selectObj.open()):this.selectObj.open()},i.prototype.close=function(t){this.selectObj.close()},i.prototype.destroy=function(){this.selectObj.destroy(),this.selectObj=null},$.pickDate=function(t){return new i(t)},function(){var t,a;e.datePick=function(e,n){var i=e;i.selectTime=i.selectTime||i.startTime;var s={normalDate:i.selectTime,startDate:i.startTime,endDate:i.endTime,timeInterval:i.timeInterval,title:i.title,topList:i.topList,selectFn:function(t){t[1]=c(t[1],2),t[2]=c(t[2],2),t[1]||t[2]?i.timeInterval?t=t[0]+" "+t[1]+":"+t[2]:t.join("-"):t=t[0],n&&n(t)}};if(s.timeInterval){var r=t;return t=t||$.pickDate(s),t.open(r&&s)}var o=a;a=a||$.pickDate(s),a.open(o&&s)}}()});