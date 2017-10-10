/**
 * Restarter Theme
 *
 * @author      Mahdi Yazdani
 * @package     Restarter
 * @since       1.0.0
 */
function restarterGoBack(){window.history.back()}!function(t,o,e){"use strict";o("a[href=#]").on("click",function(t){t.preventDefault()});var a=o(".scroll-to-top-btn");a.length>0&&(o(t).on("scroll",function(){o(t).scrollTop()>600?a.addClass("visible"):a.removeClass("visible")}),a.on("click",function(t){t.preventDefault(),o("html").velocity("scroll",{offset:0,duration:1e3,easing:"easeOutExpo",mobileHA:!1})})),o(".scroll-to").on("click",function(t){var e=o(this).data("offset-top");o("html").velocity("scroll",{offset:o(this.hash).offset().top-e,duration:1e3,easing:"easeOutExpo",mobileHA:!1}),t.preventDefault()}),o(".data-background").each(function(){o(this).attr("data-background")&&o(this).css("background-image","url("+o(this).attr("data-background")+")")}),o(t).on("load",function(){var e=t.navigator.userAgent,a=e.indexOf("MSIE "),n=e.indexOf("Trident/"),r=e.indexOf("Edge/");a>0||n>0||r>0?o("body.parallax").length>0&&o("body.parallax").stellar({scrollProperty:"scroll",verticalOffset:0,horizontalOffset:0,horizontalScrolling:!1,responsive:!0}):Modernizr.touch||o("body.parallax").length>0&&o("body.parallax").stellar({scrollProperty:"scroll",verticalOffset:50,horizontalOffset:0,horizontalScrolling:!1,responsive:!0})});var n=o(".menu-item-has-children");n.on("mouseover",function(){o(this).addClass("active")}),n.on("mouseout",function(){o(this).removeClass("active")}),o(".menu-item-has-children > a",".main-navigation").on("click",function(){o(this).parent().toggleClass("open").find(".sub-menu").toggleClass("expanded")}),o(".nav-toggle",".navbar").on("click",function(){o(this).toggleClass("active").parents(".navbar").find(".mobile-dropdown").toggleClass("expanded")}),o(".search-btn > i").on("click",function(){o(this).parent().find(".search-box").addClass("open")}),o(".search-btn").on("click",function(t){t.stopPropagation()}),o(document).on("click",function(t){o(".search-box").removeClass("open")});var r=o(".share-btn > i"),l=o(".share-btn, .navbar");r.on("click",function(){o(this).parent().toggleClass("active").find(".dropdown").toggleClass("expanded")}),l.on("click",function(t){t.stopPropagation()}),o(document).on("click",function(t){l.removeClass("active").find(".dropdown").removeClass("expanded")});var i=o(".custom-controls .bullets li");o(".custom-controls .prev-btn").on("click",function(){i.filter(".active").prev("li").find('a[data-toggle="tab"]').tab("show")}),o(".custom-controls .next-btn").on("click",function(){i.filter(".active").next("li").find('a[data-toggle="tab"]').tab("show")});var s=o('[data-toggle="tooltip"]');s.length>0&&s.tooltip(),o('input[type="checkbox"], input[type="radio"]').length&&o("input").iCheck(),(o('iframe[src*="youtube"]').length>0||o('iframe[src*="vimeo"]').length>0)&&o('iframe[src*="youtube"], iframe[src*="vimeo"]').parent().fitVids();var c=o(".format-gallery .post-thumb .gallery");c.length>0&&c.each(function(){var t="1"===restarter_vars.gallery_loop,e="1"===restarter_vars.gallery_autoplay,a=parseInt(restarter_vars.gallery_timeout),n="1"===restarter_vars.gallery_auto_height,r="1"===restarter_vars.gallery_dots;o(this).owlCarousel({items:1,loop:t,margin:0,nav:!0,dots:r,navText:[,],autoplay:e,autoplayTimeout:a,autoHeight:n})}),o(t).on("load resize scroll",function(){var e=o("header.navbar"),a=Math.max(o(t).width(),t.innerWidth),n=o(t).scrollTop(),r=o("#wpadminbar");r.length&&(a>600?e.css("top",r.height()+"px"):a<=600&&n>=5?e.css("top","0"):a<=600&&n<=5&&e.css("top",r.height()+"px"))})}(this,jQuery);