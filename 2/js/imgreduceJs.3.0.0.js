define("imgreduce",function(){function e(e){var t,r;t=-1!==e.split(",")[0].indexOf("base64")?atob(e.split(",")[1]):decodeURI(e.split(",")[1]),r=e.split(",")[0].split(":")[1].split(";")[0];for(var n=new Array,a=0;a<t.length;a++)n[a]=t.charCodeAt(a);var i,o=new Uint8Array(n);try{i=new Blob([o],{type:r})}catch(l){if(window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,"TypeError"==l.name&&window.BlobBuilder){var d=new BlobBuilder;d.append(o.buffer),i=d.getBlob(r)}else"InvalidStateError"==l.name&&(i=new Blob([array.buffer],{type:r}))}return i}function t(t,r,n){if(!t)return n(!1);var a=document.createElement("canvas"),i=$("<img >")[0];i.onload=function(){var o=a.getContext("2d"),l=this.width*r.scale,d=this.height*r.scale;a.width=l,a.height=d,o.drawImage(i,0,0,l,d),t=a.toDataURL(r.type,r.quality);var u;u=r.base64?t:e(t),n(u)},i.src=t}$.imgReduce={},$.imgReduce.support=canvasSupported=function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))}(),$.imgReduce.zip=function(e,r,n){var a={scale:.5,quality:.7,type:"image/jpeg"};if($.extend(a,n||{}),!canvasSupported)return r(e);if(1==a.scale&&1==a.quality)return r(e);"[object Array]"!==Object.prototype.toString.call(e)&&(e=[e]);for(var i=e.length,o=[],l=0,d=e.length;d>l;l++){var u=new FileReader;u.onload=function(e){var n=e.target.result;t(n,a,function(e){e&&o.push(e),i--,0>=i&&r&&r(o)})},u.readAsDataURL(e[l])}}});