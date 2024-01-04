$(function() {
    function header_show() {
        var tagheader = $("#header");
        tagheader.hide(0).show(3000);
        
        
        main_show();
    }

    function main_show() {
        var tagmain = $("#main")
        tagmain.hide(0).show(3000);
    }

    header_show();

});