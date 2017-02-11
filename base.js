$(document).ready(function() {
    // On mobile devices, scrolls user to top of page
    $("#scroll-to-top").click(function() {
        $("html,body").animate({scrollTop:0}, 150, 'swing');
    });
 
    // On mobile devices, handles the animated navigation
    var nav_menu = $('.nav-menu');
    var nav_menu_wrap = $('.nav-menu-wrap');
    var nav_menu_background = $('.nav-menu-background');
 
    function toggle_menu() {
        nav_menu_wrap.toggleClass('active');
        nav_menu_background.toggleClass('active');
    }

    $('.nav-menu-toggle, .nav-menu-background, .nav-menu .close').on('click', function() {
        toggle_menu();
    });
});
