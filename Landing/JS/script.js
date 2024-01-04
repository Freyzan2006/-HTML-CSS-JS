

$(function() {
   // Head script
    function h1_show() {
        var tagh1 = $("header #Title_Head h1");
        tagh1.hide(0).show(3000);
        p_show()
    }

    function p_show() {
        var tagp = $("header #Title_Head p")
        tagp.hide(0).show(3000);
        
        Button_div_show()
    }

    function Button_div_show() {
        var tagButton_div = $("header #Title_Head .Button_div");
        tagButton_div.hide(0).show(5000);
        head_bg_img_show()
    }

    function head_bg_img_show() {
        var taghead_bg_img = $("header #Title_Head #head_bg_img");
        taghead_bg_img.hide(0).show(5000);
        main_show()
    }

    function main_show() {
        var tagmain = $("main");
        tagmain.hide(0).show(5000);
        footer_show();
        
    }

    function footer_show() {
        var tagmain = $("footer");
        tagmain.hide(0).show(5000);
        
        
    }

    h1_show();
    
    
});