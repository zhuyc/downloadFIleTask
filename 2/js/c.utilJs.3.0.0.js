define("c.util",function(i,a,n){!function(){var i=".c-util-loading{position:fixed;top:50%;left:50%;z-index:9999;padding:5px 10px;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);background:rgba(0,0,0,.8);border-radius:5px;display:none}.c-util-loading.show-loading,.c-util-page-loadingbg.show-loading{display:block}.c-util-loading div{background:url(http://img1.40017.cn/touch/hb/c/2/img/loading_black1.gif) 0 center no-repeat;padding-left:40px;background-size:36px 36px;min-height:40px}.c-util-loading span{color:#fff;font-size:13px;line-height:1;vertical-align:middle;display:table-cell;padding:13px 0}.c-util-page-loadingbg{background-color:#f2f4f7;width:100%;height:100%;position:fixed;top:0;left:0;z-index:99999;display:none}.c-util-page-loading{position:absolute;top:50%;left:50%;width:71px;height:71px;margin:-33px 0 0 -33px}.c-util-page-loadingimg{width:36px;height:36px;display:block;margin:0 auto}.c-util-page-loadingtxt{margin-top:12px;text-align:center;color:#999;font-size:14px}",a=document.createElement("style");a.innerHTML=i,document.getElementsByTagName("head")[0].appendChild(a)}();var o="http://img1.40017.cn/touch/hb/c/2/img/icon_tg_loading1.gif";0===o.indexOf("//")&&0===location.protocol.indexOf("file")&&(o="http:"+o);var l={loadingTips:'<div class="c-util-loading"><div><span></span></div></div>',pageLoading:'<div class="c-util-page-loadingbg" ontouchmove="return false;"><div class="c-util-page-loading"><img src="'+o+'" class="c-util-page-loadingimg"><p class="c-util-page-loadingtxt">努力加载中</p></div></div>'};$.loadingTips=function(i){var a,n=$(".c-util-loading");n[0]||(n=$(l.loadingTips).appendTo("body")),i&&(a=$("span",n),a.html(i)),n.addClass("show-loading")},$.hideLoadingTips=function(){$(".c-util-loading").removeClass("show-loading")},$.pageLoading=function(i){var a,n=$(".c-util-page-loadingbg");n[0]||(n=$(l.pageLoading).appendTo("body")),i&&(a=$(".c-util-page-loadingtxt",n),a.html(i)),i===!1?n.removeClass("show-loading"):n.addClass("show-loading")},n.exports={loadingTips:$.loadingTips,hideLoadingTips:$.hideLoadingTips,pageLoading:$.pageLoading}});