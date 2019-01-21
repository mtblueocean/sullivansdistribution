(function($) {
  "use strict";

  jQuery(document).ready(function(){

    
    /*--
        Header dropdowns
    ---------------------------*/
    $(".dropdown-toggle").on("click", function() {
        $(this).toggleClass('open').next('.dropdown-menu').toggleClass('open');
        $(this).parents().siblings().find('.dropdown-menu, .dropdown-toggle').removeClass('open');
    });

    // Closing the dropdown by clicking in the menu button or anywhere in the screen
    $('body').on('click', function (e) {
        var target = e.target;
        if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
            $('.dropdown-toggle, .dropdown-menu').removeClass('open');
        }
    });

    // Prevent closing dropdown upon clicking inside the dropdown
    $(".dropdown-menu,.main-search-active").on("click", function(e) {
        e.stopPropagation();
    });
    
    
    /*--
        Mobile Menu
    ------------------------*/
    var menuNav = $('nav.main-navigation');
    menuNav.meanmenu({
        meanScreenWidth: '991',
        meanMenuContainer: '.mobile-menu',
        meanMenuClose: '<span class="menu-close"></span>',
        meanMenuOpen: '<span class="menu-bar"></span>',
        meanRevealPosition: 'right',
        meanMenuCloseSize: '0',
    });

    /*--
       Sidebar Search Active
    -----------------------------*/
    function sidebarSearch() {
        var searchTrigger = $('.trigger-search'),
            container = $('.main-search-active');
        
        searchTrigger.on('click', function() {
            container.slideToggle('inside');
        });
    };
    sidebarSearch();
    // Closing the button or anywhere in the screen
    $('body').on('click', function (e) {
        var target = e.target;
        if (!$(target).is('.trigger-search') && !$(target).parents().is('.trigger-search')) {
            $('.main-search-active').slideUp();
        }
    });

     /*--
        Magnific Popup
    ------------------------*/
    $('.img-poppu').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });

    /*--
        Count Down Timer
    ----------------------------*/
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown day"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hours</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>mins</p></span> <span class="cdown second"><span class="time-count">%S</span> <p>secs</p></span>'));
        });
    }); 
    /*--
    Category menu Activation
    ------------------------------*/
    $('.category-sub-menu li.has-sub > a').on('click', function () {
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        } else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    }); 

    /*--
        showlogin toggle function
    --------------------------*/
    $( '#showlogin' ).on('click', function() {
        $('#checkout-login' ).slideToggle(500);
    }); 

    /*--
        showcoupon toggle function
    --------------------------*/
    $( '#showcoupon' ).on('click', function() {
        $('#checkout-coupon' ).slideToggle(500);
    });

    /*--
        Checkout 
    --------------------------*/
    $("#chekout-box").on("change",function(){
        $(".account-create").slideToggle("100");
    });

    /*-- 
        Checkout 
    ---------------------------*/
    $("#chekout-box-2").on("change",function(){
        $(".ship-box-info").slideToggle("100");
    });   
    
    /* ---
       payment-accordion
    * --------------------------------*/ 
        $(".payment-accordion").collapse({
            accordion:true,
          open: function() {
            this.slideDown(550);
          },
          close: function() {
            this.slideUp(550);
          }		
        }); 

    /* --
        counterUp 
    -----------------------------*/
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });

    /*--
        ScrollUp Active
    -----------------------------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 

    /* Match Heigh   
        $('.item').matchHeight(); 
  */


  });
  
})(jQuery);
