/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 * 
 */

"use strict";

/*
$("body").removeClass();
$("body").addClass("dark");
$("body").addClass("dark-sidebar");
$("body").addClass("theme-black");

$(".choose-theme li").removeClass("active");
$(".choose-theme li[title|='black']").addClass("active");
$(".selectgroup-input[value|='2']").prop("checked", true);

$("body").addClass("dark-sidebar");


$(".choose-theme li[title|='black']").addClass("active");

$(".select-layout[value|='1']").prop("checked", true);
$(".select-sidebar[value|='2']").prop("checked", true);

let sidebar_nicescroll_opts = {
        cursoropacitymin: 0,
        cursoropacitymax: 0.8,
        zindex: 892
    },
    now_layout_class = null;

var toggle_sidebar_mini = function(mini) {
    let body = $("body");

    if (!mini) {
        body.removeClass("sidebar-mini");
        $(".main-sidebar").css({
            overflow: "hidden"
        });
        setTimeout(function() {
            $(".main-sidebar").niceScroll(sidebar_nicescroll_opts);
            sidebar_nicescroll = $(".main-sidebar").getNiceScroll();
        }, 500);
        $(".main-sidebar .sidebar-menu > li > ul .dropdown-title").remove();
        $(".main-sidebar .sidebar-menu > li > a").removeAttr("data-toggle");
        $(".main-sidebar .sidebar-menu > li > a").removeAttr(
            "data-original-title"
        );
        $(".main-sidebar .sidebar-menu > li > a").removeAttr("title");
    } else {
        body.addClass("sidebar-mini");
        body.removeClass("sidebar-show");
        sidebar_nicescroll.remove();
        sidebar_nicescroll = null;
        $(".main-sidebar .sidebar-menu > li").each(function() {
            let me = $(this);

            if (me.find("> .dropdown-menu").length) {
                me.find("> .dropdown-menu").hide();
                me.find("> .dropdown-menu").prepend(
                    '<li class="dropdown-title pt-3">' + me.find("> a").text() + "</li>"
                );
            } else {
                me.find("> a").attr("data-toggle", "tooltip");
                me.find("> a").attr("data-original-title", me.find("> a").text());
                $("[data-toggle='tooltip']").tooltip({
                    placement: "right"
                });
            }
        });
    }
};


toggle_sidebar_mini(true);

toggle_sticky_header(true);

body.addClass("sidebar-gone");
body.removeClass("sidebar-show");


$("body").removeClass("light-sidebar");
$("body").addClass("dark-sidebar");


$(".choose-theme li").removeClass("active");
$(".choose-theme li[title|='black']").addClass("active");
$(".selectgroup-input[value|='2']").prop("checked", true);


body.removeClass("sidebar-gone");
body.addClass("sidebar-show");

*/
$("body").addClass("dark dark-sidebar theme-dark sidebar-mini theme-black");