﻿mui.init();
//主界面和侧滑菜单界面均支持区域滚动；
mui('.offCanvasSideScroll').scroll();
mui('.offCanvasContentScroll').scroll();
mui('.mui-scroll-wrapper').scroll();
//阻止手势侧滑
document.getElementsByClassName('mui-inner-wrap')[0].addEventListener('drag', function(event) {
event.stopPropagation();
});

//实现ios平台原生侧滑关闭页面；
if (mui.os.plus && mui.os.ios) {
    mui.plusReady(function() { //5+ iOS暂时无法屏蔽popGesture时传递touch事件
        plus.webview.currentWebview().setStyle({
            'popGesture': 'none'
        });
    });
}
mui('body').on('tap', '[href^="html"],[href*="html"],[href^="tel:"],[href*="tel:"],[href^="mailto:"],[href*="mailto:"],[href^="http"],[href*="http"],[href^="www."],[href*="www."],[href^="com"],[href*="com"],[href^="php"],[href*="php"],[href^="aspx"],[href*="aspx"],[href^="mobile"],[href*="mobile"]', function() {
    window.top.location.href = this.href;
});