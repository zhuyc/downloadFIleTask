!function(){function e(e){var t,r;t=-1!==e.split(",")[0].indexOf("base64")?atob(e.split(",")[1]):decodeURI(e.split(",")[1]),r=e.split(",")[0].split(":")[1].split(";")[0];for(var a=new Array,n=0;n<t.length;n++)a[n]=t.charCodeAt(n);var i,o=new Uint8Array(a);try{i=new Blob([o],{type:r})}catch(l){if(window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,"TypeError"==l.name&&window.BlobBuilder){var d=new BlobBuilder;d.append(o.buffer),i=d.getBlob(r)}else"InvalidStateError"==l.name&&(i=new Blob([array.buffer],{type:r}))}return i}function t(t,r,a){if(!t)return a(!1);var n=document.createElement("canvas"),i=$("<img >")[0];i.onload=function(){var o=n.getContext("2d"),l=this.width*r.scale,d=this.height*r.scale;n.width=l,n.height=d,o.drawImage(i,0,0,l,d),t=n.toDataURL(r.type,r.quality);var u;u=r.base64?t:e(t),a(u)},i.src=t}$.imgReduce={},$.imgReduce.support=canvasSupported=function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))}(),$.imgReduce.zip=function(e,r,a){var n={scale:.5,quality:.7,type:"image/jpeg"};if($.extend(n,a||{}),!canvasSupported)return r(e);if(1==n.scale&&1==n.quality)return r(e);"[object Array]"!==Object.prototype.toString.call(e)&&(e=[e]);for(var i=e.length,o=[],l=0,d=e.length;d>l;l++){var u=new FileReader;u.onload=function(e){var a=e.target.result;t(a,n,function(e){e&&o.push(e),i--,0>=i&&r&&r(o)})},u.readAsDataURL(e[l])}}}();