!function(){function e(e){return e&&-1!==e.indexOf("?")?e.split("?")[0]:e}function t(){var e="-40017",t=u.match(/tctravel\/([\d\.]+)/i);return t&&t.length>=2&&(t=t[1].split("."),2==t.length&&t.push(0),3==t.length&&(e=parseInt(t.join("")))),e}function n(){return u.match(/(android)\s+([\d.]+)/)?2:u.match(/(iphone\sos)\s([\d_]+)/)||u.match(/(ipad).*os\s([\d_]+)/)?1:3}function a(){return window.getRefid?window.getRefid():"-40017"}function o(){return w.slice(0,w.length-1)}function r(e){switch(e=e.toLowerCase()){case"cmwap":case"ctwap":case"ct_w_a_p":case"uniwap":case"unnet":case"uninet":case"3gprs":e="2g";break;case"cmnet":case"ctnet":case"3gwap":case"3gnet":case"my3g":case"cdma":e="3g";break;case"wwan":e="wifi";break;case"ctlte":e="4g";break;case"non_network":case"n":case"mobile":case"internet":case"vpdn":case"ygj":e="other"}return e}function i(){return-1!=document.location.protocol.indexOf("file")?"http://vstlog.17usoft.com/monitor/__h5hm.gif":"//vstlog.17usoft.com/monitor/__h5hm.gif"}function s(){return!S.options.openTest&&v.test(h)?!0:!1}function c(){window.setTimeout(function(){S.setup()},0)}function m(){return{staType:"monitor",project:S.options.project,t_brs:g,pageName:S.options.pageName,platform:S.platform,ptc:o(),mbt:y,rid:x,vsn:j,ext_domain:f,ext_path:l}}function d(t){t=e(t),t=t.split("/");var n=t.length,a=t[n-1];return a||(a=S.options.project+"/"+S.options.pageName),a}function p(){try{var e,t="other";if(window.ActiveXObject)return"IE";if(window.opr&&opr.addons||window.opera||u.indexOf("opr/")>=0)return"opera";for(var n=[{ua:"qqbrowser",name:"qq"},{ua:"qq/",name:"qqclient"},{ua:"baiduboxapp",name:"baiduboxapp"},{ua:"miuibrowser",name:"miuibrowser"},{ua:"firefox",name:"firefox"},{ua:"baidubrowser",name:"baidu"},{ua:"sogoumobilebrowser",name:"sogou"},{ua:"mxios",name:"maxthon"},{ua:"mxbrowser",name:"maxthon"},{ua:"maxthon",name:"maxthon"},{ua:"ucbrowser",name:"UC"},{ua:"liebaofast",name:"liebao"},{ua:"lbbrowser",name:"liebao"},{ua:"qhbrowser",name:"360"},{ua:"360browser",name:"360"},{ua:"360se",name:"360"},{ua:"androidbrowser",name:"androidbrowser"},{ua:"samsung",name:"samsung"},{ua:"huawei",name:"huawei"},{ua:"vivo",name:"vivo"},{ua:"oppo",name:"oppo"},{ua:"micromessenger",name:"micromessenger"},{ua:"chrome",name:"chrome"},{ua:"safari",name:"safari"}],a=0;a<n.length;a++)if(e=n[a],u.indexOf(e.ua)>-1){t=e.name;break}return t}catch(o){return"other"}}var u=window.navigator.userAgent.toLowerCase(),f=encodeURIComponent(document.domain),w=window.location.protocol,l=encodeURIComponent(window.location.pathname.toLowerCase().replace(/\//g,"_")),g=p(),h=document.location.hostname,v=/(127[.]0[.]0[.]1)|(localhost)|10(\.([2][0-4]\d|[2][5][0-5]|[01]?\d?\d)){3}|172\.([1][6-9]|[2]\d|3[01])(\.([2][0-4]\d|[2][5][0-5]|[01]?\d?\d)){2}|192\.168(\.([2][0-4]\d|[2][5][0-5]|[01]?\d?\d)){2}/,_=u.indexOf("tctravel")>0,b=u.indexOf("micromessenger")>0,j=t(),y=n(),x=a(),S={options:{url:i(),rate:1,data:{},errStat:0,resTimingStat:0,ajaxTiming:0,pageNameId:"__pageName",projectId:"__projectName",openTest:0,ajaxReqWithOut:4e4},version:"1.3.1.20170322",timeLine:"2017.03.22",timing:{},data:{},getPageNameAndProjectName:function(){"use strict";try{var e=document.getElementById(S.options.pageNameId||"__pageName"),t=document.getElementById(S.options.projectId||"__projectName");return e=e&&e.value&&(S.options.pageName=e.value)||S.options.pageName,t=t&&t.value&&(S.options.project=t.value)||S.options.project,{pageName:e,project:t}}catch(n){}},check:function(){var e=this.getPageNameAndProjectName();if(e.project&&e.pageName)return S.options.project=e.project,S.options.pageName=e.pageName,window.performance&&window.performance.timing&&Math.random()<S.options.rate;throw new Error("project或pageName不能为空")},setPlatform:function(){if(S.options.platform)return void(this.platform=S.options.platform);var e=/android/.test(u)||/webos/.test(u)||/iphone/.test(u)||/ipad/.test(u)||/ipod/.test(u)||/blackberry/.test(u)||/windows phone/.test(u)||/meego/.test(u),t=/windows/.test(u)||/mac/.test(u),n=/tctravel/.test(u);b?this.platform="wechat":n?this.platform="app":e?this.platform="touch":t?this.platform="pc":this.platform="other"},merge:function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},setup:function(){S.timing=window.performance.timing,S.setData(S.timing)&&S.send(S.data)},getResourceLoadTime:function(){try{var e=[];if("performance"in window&&"getEntriesByType"in window.performance&&window.performance.getEntriesByType("resource")instanceof Array){if(e=window.performance.getEntriesByType("resource"),e.length>0){var t,n,a=[],o=0;if(e.forEach(function(e){t=d(e.name),t&&e.duration>0&&(a.push({perTime:e.duration,perName:t,perType:e.initiatorType||"unknown"}),o+=e.duration)}),a.length>0)return n={resAllTime:o,resCount:a.length,resItem:JSON.stringify(a)}}}else;}catch(r){}},setData:function(e){var t=e.navigationStart||e.fetchStart,n=this,a={t_unload:e.unloadEventEnd-e.unloadEventStart,t_redirect:e.redirectEnd-e.redirectStart,t_dns:e.domainLookupEnd-e.domainLookupStart,t_tcp:e.connectEnd-e.connectStart,t_request:e.responseStart-e.requestStart,t_response:e.responseEnd-e.responseStart,t_paint:S.getFirstPaintTime(),t_dom:e.domContentLoadedEventStart-e.domLoading,t_domready:e.domContentLoadedEventStart-t,t_load:e.loadEventStart-e.domLoading,t_onload:e.loadEventStart-t,t_white:e.responseStart-t,t_all:e.loadEventEnd-t};S.options.resTimingStat&&n.getResourceLoadTime()&&S.merge(a,n.getResourceLoadTime());for(var o in a)a.hasOwnProperty(o)&&(a[o]<=0||a[o]>=12e4)&&delete a[o];return S.data=S.merge(a,S.options.data),t>0},getReqServiceName:function(t){var n,a;if("[object Object]"==={}.toString.call(t))a=e(t.servicename||""),n=t.requrl||"",n=e(n);else try{t=JSON.parse(t),a=e(t.servicename||""),n=e(t.requrl||"")}catch(o){}return a||n},processAjax:function(t){var n=this;return function(){var a=[].slice.call(arguments),o=a[0],r=o.beforeSend,i=o.complete,s=o.url,c=o.data||{};return s=e(n.getReqServiceName(c)||s),o.beforeSend=function(){o._ajaxStartTime=+new Date,r&&r.call()},o.complete=function(){var e=[].slice.call(arguments),t=null;if(o._ajaxEndTime=+new Date,o.totalTime=o._ajaxEndTime-o._ajaxStartTime,s&&o.totalTime>0&&o.totalTime<=S.options.ajaxReqWithOut){if(e[0]&&e[0].status)try{t=e[0].status.toString()}catch(n){}var a={interfaceUrl:s.replace(/:/gi,"@"),interfaceTime:o.totalTime,interfaceStatus:t||"-40017"};S.send(a)}i&&i.apply(this,e)},t.apply(this,a)}},rewriteAjax:function(){try{var e,t=this;window.$&&window.$.ajax&&(e=$.ajax,$.ajax=t.processAjax(e)),window.fish&&window.fish.ajax&&(e=fish.ajax,fish.ajax=t.processAjax(e))}catch(n){}},getFirstPaintTime:function(){var e;if("chrome"in window&&"function"==typeof window.chrome.loadTimes){var t=window.chrome.loadTimes();e=t.firstPaintTime-t.startLoadTime,e=Math.round(1e3*e)}else if("performance"in window){var n=window.performance.timing;if(0===n.navigationStart)return;e=n.msFirstPaint-n.navigationStart}return e||0},send:function(e){var t=S.options.url;if(t){var n,a,o=new Image,i=[],s=m();e=this.merge(s,e||{});for(var c in e)e.hasOwnProperty(c)&&e[c]&&("[object Array]"===Object.prototype.toString.call(e[c])&&(e[c]=JSON.stringify(e[c])),i.push(c+"="+encodeURIComponent(e[c])));if(n=t+(t.indexOf("?")<0?"?":"&")+i.join("&"),_)window._tc_bridge_util&&window._tc_bridge_util.get_network_type({param:{},callback:function(e){if(e.CBData){try{a=r(JSON.parse(e.CBData).networkType)}catch(t){a=""}a&&(n+="&networktype="+a),o.src=n+"&rnd="+ +new Date}}});else if(b)try{var d=u.match(/(nettype\/(\w)+)(?=\s)/);d&&d.length>0&&d[0].indexOf("/")>0&&(a=r(d[0].split("/")[1])),a&&(n+="&networktype="+a),o.src=n+"&rnd="+ +new Date}catch(p){}else o.src=n+"&rnd="+ +new Date}},bindEvents:function(){window.onerror=function(e,t,n,a,o){if(t){var r={errFile:d(t).replace(/:/gi,"@")};S.send({errMsg:JSON.stringify(r)})}}},start:function(e){S.options=S.merge(S.options,e),s()||(this.setPlatform(),S.options.errStat&&this.bindEvents(),S.options.ajaxTiming&&this.rewriteAjax(),S.check()?window.performance.timing.loadEventEnd>0?S.setup():window.addEventListener&&window.addEventListener("load",c,!1):S.send())}};window.fedApm=S}();