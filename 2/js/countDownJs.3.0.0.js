define("countDown",function(){function e(e,r,n,i){var a=Object.prototype.toString.call(e);if(1===i?this.formatDate=function(e){return Math.round(e/1e3)}:2===i?this.formatDate=function(e){return Math.floor(e/1e3)}:this.formatDate=function(e){var t=e/1e3;return e=Math.floor(t),e=t>e?e+=1:e},"[object Object]"===a){var c=e.startTime,f=Object.prototype.toString.call(c);if(c=t(c,f),e=t(e.endTime,Object.prototype.toString.call(e.endTime),c),c===!1||e===!1)return;c=c.getTime(),e=e.getTime();var u=(new Date).getTime();if(c>=e)return;if(!(u>=c)){var l=this;return e=new Date(e),void setTimeout(function(){o.call(l,e,r,n)},c-u)}e="[object Number]"===f||"[object Array]"===f?new Date(e-(u-c)):new Date(e)}else e=t(e,a);e!==!1&&o.call(this,e,r,n)}function t(e,t,r){if("[object Date]"===t);else if("[object Number]"===t)e=1e3*e,e=n(e,r);else if("[object String]"===t)e=new Date(e.replace(/-/gi,"/"));else{if("[object Array]"!==t)return!1;for(var o=0,i=[1,60,3600,86400],a=e.length-1;a>=0;a--)o+=e[a]*i[a];e=n(1e3*o,r)}return e}function r(e,t){if(0>=e)return[0,0,0,0];e=t(e);for(var r=[],n=[86400,3600,60],o=0;o<n.length;o++)r.push(Math.floor(e/n[o])),e%=n[o];return r.push(e),r.reverse(),r}function n(e,t){var r=t||new Date;return r=r.getTime(),r+=e,new Date(r)}function o(e,t,n){function o(){return i=e.getTime()-(new Date).getTime(),i>0?void t(r(i,a.formatDate)):(t([0,0,0,0]),"function"==typeof n&&n(),!0)}var i,a=this;if(!o()){var c=setInterval(function(){o(),0>=i&&clearInterval(c)},1e3);this.timer=c}}e.prototype={clear:function(){clearInterval(this.timer)}},$.countDown=function(t,r,n,o){return new e(t,r,n,o)}});