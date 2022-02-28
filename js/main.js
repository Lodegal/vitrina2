'use strict';

jQuery(function ($) {
  $(document).ready(function () {
    stickySidebar();
  });

  function stickySidebar() {
    var $sidebar = $(".sidebar__inner");

    if ($(".sidebar__inner").length && $(".sidebar__inner:visible")) {
      var fixSidebar = function fixSidebar() {
        var $sidebarParent = $sidebar.parent(),
            $sidebarWidth = $sidebar.parent().width(),
            $sidebarOffsetY = $sidebarParent.offset().top,
            $sidebarHeight = $sidebar.outerHeight(),
            $sidebarParentHeight = $sidebarParent.outerHeight(),
            $endPoint = $sidebarParentHeight - $sidebarHeight + $sidebarOffsetY;

        if ($sidebarParentHeight > $sidebarHeight) {
          if ($(window).scrollTop() < $sidebarOffsetY) {
            $sidebar.removeAttr("style");
          } else if ($(window).scrollTop() >= $sidebarOffsetY && $(window).scrollTop() < $endPoint) {
            $sidebar.css({
              "position": 'fixed',
              "top": 0,
              "width": $sidebarWidth
            });
          } else if ($(window).scrollTop() >= $endPoint) {
            $sidebar.css({
              "position": 'absolute',
              "top": $sidebarParentHeight - $sidebarHeight,
              "width": $sidebarWidth
            });
          }
        }
      };

      fixSidebar();
      $(window).scroll(fixSidebar).resize(fixSidebar).on("orientationchange", function (event) {
        fixSidebar();
      });
    }
  }
});