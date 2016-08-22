"use strict";
$(document).ready(function () {

    $(".nav-btn").click(function () {
        $(".nav-bar").addClass("open-nav-bar");
        $(".wrap").addClass("show-wrap");
        $("body").addClass("scroll-off");
        $(".login-window").removeClass("show-login");
    });

    $(".nav-bar-close-btn").click(function () {
        $(".nav-bar").removeClass("open-nav-bar");
        $(".wrap").removeClass("show-wrap");
        $("body").removeClass("scroll-off");
    });

    $(".user").click(function () {
        $(".login-window").toggleClass("show-login");
        var width = $(window).width();
        if (width <= 770) {
            $("body").addClass("scroll-off");
        }
    });

    $(".admin-btn").click(function () {
        $(".user-popup").toggleClass("show-popup");
    });

    $("#open-login-btn").click(function () {
        $(".login-window").addClass("show-login");
        $(".nav-bar").removeClass("open-nav-bar");
        $(".wrap").removeClass("show-wrap");
    });

    $("#close-login-btn").click(function () {
        $(".login-window").removeClass("show-login");
        $("body").removeClass("scroll-off");
    });

    $(".seller-offer-btn").click(function () {
        $(".seller-admin-offer").addClass("show-popup");
        $("body").addClass("scroll-off");
        $(".wrap").addClass("show-wrap");
    });

    $(".extra-date-btn").click(function () {
        $(".extra-day").addClass("show-popup");
        $("body").addClass("scroll-off");
        $(".wrap").addClass("show-wrap");
    });

    $(".extra-day-close-btn").click(function () {
        $(".extra-day").removeClass("show-popup");
        $("body").removeClass("scroll-off");
        $(".wrap").removeClass("show-wrap");
    });

    $(".admin-item-btn").click(function () {
        $(".market-detail").addClass("show-popup");
        $("body").addClass("scroll-off");
        $(".wrap").addClass("show-wrap");
    });

    $(".marker").click(function () {
        $(".change-marker").addClass("show-popup");
        $("body").addClass("scroll-off");
        $(".wrap").addClass("show-wrap");
    });

    $(".add-market-item").click(function () {
        $(".add-market").addClass("show-popup");
        $("body").addClass("scroll-off");
        $(".wrap").addClass("show-wrap");
    });

    $(".add-btn").click(function () {
        $(".for-add").addClass("show-popup");
        $("body").addClass("scroll-off");
        $(".wrap").addClass("show-wrap");
    });

    $(".edit-btn").click(function () {
        $(".for-edit").addClass("show-popup");
        $("body").addClass("scroll-off");
        $(".wrap").addClass("show-wrap");
    });

    $(".delete-btn").click(function () {
        $(".confirm-delete").addClass("show-popup");
        $("body").addClass("scroll-off");
        $(".wrap").addClass("show-wrap");
    });

    $(".add-btn").click(function () {
        $(".confirm-save").addClass("show-save");
    });

    $(".close-popup-btn").click(function () {
        $(".popup").removeClass("show-popup");
        $(".confirm-save").removeClass("show-save");
        $("body").removeClass("scroll-off");
        $(".wrap").removeClass("show-wrap");
    });

    setSize();

    $(window).resize(function() {
        setSize();
        var width = $(window).width();
        if (($(".login-window").hasClass("show-login")) && (width <= 770)) {
            $("body").addClass("scroll-off");
        }
        else
        if (($(".login-window").hasClass("show-login")) && (width >= 770)) {
            $("body").removeClass("scroll-off");
        }

    });

    $(".filter-btn").click(function () {
        $(".filter").addClass("show-filter");
        $(".wrap").addClass("show-wrap");
        $("body").addClass("scroll-off");
    });

    $(".filter-close-btn").click(function () {
        $(".filter").removeClass("show-filter");
        $(".wrap").removeClass("show-wrap");
        $("body").removeClass("scroll-off");
    });

    $(".follow-btn").click(function () {
        if (!$(this).hasClass("follower")) {
            $(this).toggleClass("follower");
            $(this).html("Follower");
        }
        else {
            $(this).toggleClass("follower");
            $(this).html("Follow");
        }
    });

    $('.follow-btn').hover(
        function () {
            if ($(this).hasClass("follower")) {
                $(this).html("Unfollow");
            }
        },

        function () {
            if ($(this).hasClass("follower")) {
                $(this).html("Follower");
            }
        }
    );

    $(".wrap").click(function () {
        $(".nav-bar").removeClass("open-nav-bar");
        $(".market-popup").removeClass("show-popup");
        $(this).removeClass("show-wrap");
        $("body").removeClass("scroll-off");
        $(".filter").removeClass("show-filter");
        $(".popup").removeClass("show-popup");
    });

    $(".tabs .btn").click(function () {
        if (!$(this).hasClass("selected")) {
            $(".tabs .btn").toggleClass("selected");
            $(".items").toggleClass("show-items");
        }
    });


    $(".day-radio").on("click", function () {
        $(this).closest(".extra-day").find(".time").toggleClass("display");
        $(this).attr("checked", true);
    });

    $("select.gray").change(function () {
        $(this).addClass("change-select");
    });

});

function setSize() {
    var width = $(window).width();

    var roundImg = $(".seller-img img").width();
    $(".seller-img img").css({'height':roundImg+'px'});

    var roundImg2 = $(".item-img img").width();
    $(".item-img img").css({'height':roundImg2+'px'});

    if (width >= 770) {
        var popupHeight = $(".seller-admin-offer").height();
        var halfHeight = popupHeight/2;
        $(".seller-admin-offer").css({'top': "calc(50% - " + halfHeight + "px)"});
    }
}

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
//var keys = {
//    37: 1,
//    38: 1,
//    39: 1,
//    40: 1
//};
//
//function preventDefault(e) {
//    e = e || window.event;
//    if (e.preventDefault)
//        e.preventDefault();
//    e.returnValue = false;
//}
//
//function preventDefaultForScrollKeys(e) {
//    if (keys[e.keyCode]) {
//        preventDefault(e);
//        return false;
//    }
//}
//
//function disableScroll() {
//    if (window.addEventListener) // older FF
//        window.addEventListener('DOMMouseScroll', preventDefault, false);
//    window.onwheel = preventDefault; // modern standard
//    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//    window.ontouchmove = preventDefault; // mobile
//    document.onkeydown = preventDefaultForScrollKeys;
//}
//
//function enableScroll() {
//    if (window.removeEventListener)
//        window.removeEventListener('DOMMouseScroll', preventDefault, false);
//    window.onmousewheel = document.onmousewheel = null;
//    window.onwheel = null;
//    window.ontouchmove = null;
//    document.onkeydown = null;
//}



