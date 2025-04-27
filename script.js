$(window).load(function () {
    $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
});

$(document).ready(function () {
    $(".trigger_popup_fricc").click(function () {
        $('.hover_bkgr_fricc').show();
    });

    $('.hover_bkgr_fricc').click(function () {
        $('.hover_bkgr_fricc').hide();
    });

    $('.popupCloseButton').click(function () {
        $('.hover_bkgr_fricc').hide();
    });

    $("#nav-toggle").click(function () {
        $("#nav-links").toggleClass("show");
    });
});