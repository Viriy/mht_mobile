(function(doc, win) {
        if(doc.documentElement.currentStyle) {
            var user_webset_font=doc.documentElement.currentStyle['fontSize'];
        }
        else {
            var user_webset_font=getComputedStyle(doc.documentElement,false)['fontSize'];
        }
        var view_jsset_font,result_font;
        var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        clientWidth,
        recalc = function() {
            clientWidth = docEl.clientWidth;
            if(!clientWidth) return;
            if(!doc.addEventListener) return;
            if(clientWidth<540){
                view_jsset_font=75 * (clientWidth / 750);
                docEl.style.fontSize = view_jsset_font + 'px';
                }
            else{
                docEl.style.fontSize = 54 + 'px';
                }
        };
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);