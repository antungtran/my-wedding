$(document).ready(function () {
    "use strict";

    //----------------------------------------------------
    //--------------------Pre-loader----------------------
    //----------------------------------------------------

    // makes sure the whole site is loaded
    $(window).load(function () {
        // will first fade out the loading animation
        $(".preloader").fadeOut();
        //then background color will fade out slowly
        $("#faceoff").delay(200).fadeOut("slow");
    });

    //----------------------------------------------------
    //--------------------Sticky nav----------------------
    //----------------------------------------------------

    // $("#sticker").sticky({
    //     topSpacing: 0
    // });

    //----------------------------------------------------
    //-----------Appearence of navigation-----------------
    //----------------------------------------------------

    $('.nav-block .nav, footer .nav').onePageNav({
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollOffset: 72 //Height of Navigation Bar
    });

    //----------------------------------------------------
    //--------------- For navigation----------------------
    //----------------------------------------------------

    $('.navbar-collapse ul li a').on("click", function () {
        $('.navbar-toggle:visible').click();
    });

    //----------------------------------------------------
    //--------------- SmoothSroll-------------------------
    //----------------------------------------------------

    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
    $('a.scrollto').bind('click.smoothscroll', function (event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });

    //----------------------------------------------------
    //------------Scroll to Next Section------------------
    //----------------------------------------------------

    $('.next-arrow a').on("click", function () {
        $('html,body').animate({
            scrollTop: $('#story').offset().top - 76
        }, 750);
        return false;
    });
    $('a[href="#contact"]').on("click", function () {
        $('html,body').animate({
            scrollTop: $('#contact').offset().top - 76
        }, 750);
        return false;
    });
    $('a[href="#map"]').on("click", function () {
        $('html,body').animate({
            scrollTop: $('#map').offset().top - 77
        }, 750);
        return false;
    });

    //----------------------------------------------------
    //--------------------Countdown-----------------------
    //----------------------------------------------------

    $('.count-down').each(function () {
        var endTime = $(this).data('time');
        $(this).countdown(endTime, function (tm) {
            var countTxt = '';
            var countDay = 346 - (346/365)*(tm.strftime('%D'));
            var countHour = 346 - (346/24)*(tm.strftime('%H'));
            var countMin = 346 - (346/60)*(tm.strftime('%M'));
            var countSec = 346 - (346/60)*(tm.strftime('%S'));
            countTxt += '<span class="section_count"><span class="count-data"><span class="tcount days">%D </span><span class="text">Days</span></span><svg height="114" width="114"><circle cx="57" cy="57" r="55" stroke-width="4" fill="none" stroke-dashoffset="'+countDay+'"/></svg></span>';
            countTxt += '<span class="section_count"><span class="count-data"><span class="tcount hours">%H</span><span class="text">Hours</span></span><svg height="114" width="114"><circle cx="57" cy="57" r="55" stroke="#00c0ff" stroke-width="4" fill="none" stroke-dashoffset="'+countHour+'"/></svg></span>';
            countTxt += '<span class="section_count"><span class="count-data"><span class="tcount minutes">%M</span><span class="text">Mins</span></span><svg height="114" width="114"><circle cx="57" cy="57" r="55" stroke="#00c0ff" stroke-width="4" fill="none" stroke-dashoffset="'+countMin+'"/></svg></span>';
            countTxt += '<span class="section_count"><span class="count-data"><span class="tcount seconds">%S</span><span class="text">Secs</span></span><svg height="114" width="114"><circle cx="57" cy="57" r="55" stroke="#00c0ff" stroke-width="4" fill="none" stroke-dashoffset="'+countSec+'"/></svg></span>';
            
            $(this).html(tm.strftime(countTxt));
        });
    });
    
    $('.count-down-2').each(function () {
        var endTime = $(this).data('time');
        $(this).countdown(endTime, function (tm) {
            $(this).html(tm.strftime('<span class="section_count"><span class="tcount days">%D </span><span class="text">Days</span></span><span class="section_count"><span class="tcount hours">%H</span><span class="text">Hours</span></span><span class="section_count"><span class="tcount minutes">%M</span><span class="text">Mins</span></span><span class="section_count"><span class="tcount seconds">%S</span><span class="text">Secs</span></span>'));
        });
    });
    

    //---------------------------------------------------
    //---------------- CountTo --------------------
    //---------------------------------------------------
    function animateCountTo(ct) {
        if ($.fn.visible && $(ct).visible() && !$(ct).hasClass('animated')) {
            $(ct).countTo({
                speed: 3000
            });
            $(ct).addClass('animated');
        }
    }

    function initCountTo() {
        var counter = $('.timer');
        counter.each(function () {
            animateCountTo(this);
        });
    }

    initCountTo();

    $(window).on('scroll', function () {
        initCountTo();
    });



    //---------------------------------------------------
    //---------------- Scroll to top --------------------
    //---------------------------------------------------

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#go-to-top').fadeIn('slow');
        } else {
            $('#go-to-top').fadeOut('slow');
        }
    });


    $('#go-to-top a').on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 750);
        return false;
    });

    //---------------------------------------------------
    //------------------- Massonary ---------------------
    //---------------------------------------------------

    var container = document.querySelector('#photo-gallery');
    var msnry;
    // initialize Masonry after all images have loaded
    imagesLoaded(container, function () {
        msnry = new Masonry(container, {
            itemSelector: '.item',
        });
    });

    //---------------------------------------------------
    //------------------- Placeholder -------------------
    //---------------------------------------------------

    $(function () {
        // Invoke the plugin
        $('input, textarea').placeholder();
    });

    //---------------------------------------------------
    //---------------- Magnific Image Popup--------------
    //---------------------------------------------------

    $('.gallery-popup').magnificPopup({
        type: 'image',
        closeBtnInside: true,
        // Delay in milliseconds before popup is removed
        removalDelay: 300,

        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        //mainClass: 'mfp-fade',
        gallery: {
            enabled: true, // set to true to enable gallery

            preload: [0, 2], // read about this option in next Lazy-loading section

            navigateByImgClick: true,

            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

            closeMarkup: '<button title="%title%" class="mfp-close"><i class="mfp-close-icn">&times;</i></button>',

            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)' // title for right button
            //tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        }
    });
    //---------------------------------------------------------
    //--------------- Animate and WOW Animation----------------
    var wow = new WOW({
        //offset: 50,
        mobile: false
        // live: true
    });
    wow.init();


    // --------------RSVP Form Ajax request-----------------------
    $('#contact').hide();
    $('a[href="#contact"]').hide();

    const API_LINK = "https://script.google.com/macros/s/AKfycbynHP8hs3o-TUWvLduER44yR_cI7wUiiG9T2L7TEiHVHexH9CE/exec";

    var bindGuestInfo = function(id){
        $.ajax({
            url: API_LINK,
            type: "GET",
            data: {
                cmd: 'getbyid',
                id:id
            },
            success: function(data){
                if (data && data.value){
                    var guestName = data.value.name;

                    if (!data.value.allow){
                        $('#helloGuest').html(`<b>Xin chào ${guestName}!</b>.</br>Sự hiện diện của ${guestName} là niềm vui và sự chúc phúc lớn nhất cho cô dâu, chú rể và gia đình`);
                        $('#btnSubmit').show();
                    }
                    else{
                        $('#helloGuest').html(`<b>Xin chào ${guestName}!</b>.</br>Cảm ơn bạn đã đồng ý tham gia tiệc mừng`);
                        $('#btnSubmit').hide();
                    }

                    $('a[href="#contact"]').show();
                    $('#contact').show();
                }
            }
        })
    };

    var allow = function(id){
        $.ajax({
            url: API_LINK,
            type: "GET",
            data: {
                cmd: 'allow',
                id:id
            },
            beforeSend: function(){
                $('#btnSubmit').attr('disabled', true);
                $('#btnSubmit').val("ĐANG GỬI...");
            },
            success: function(data){
                if (data && data.value){
                    $('#helloGuest').html('');
                    var heading = $('#helloGuest').parent().find('h3');
                    heading.html(`Cảm ơn bạn đã đồng ý tham dự tiệc mừng`).addClass('heading wow animated fadeInUp');
                    $('#btnSubmit').hide();
                }
            }
        })
    }

    /* =================================
    ===  IE10 ON WINDOWS 8 FIX      ====
    =================================== */
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.querySelector('head').appendChild(msViewportStyle);
    }

    /* 
        Init Map
    */
   
    var mapProp = {
        center: new vbd.LatLng(10.843348, 107.626960),
        zoom: 15
    };

    var map = new vbd.Map(document.getElementById("map"), mapProp);

    var size = new vbd.Size(50, 50);
    var icon = new vbd.Icon({ size: size, url: 'assets/images/icon/map_marker.svg', origin: new vietbando.Point(0, 0) });
    var marker = new vbd.Marker({
        position: new vbd.LatLng(10.843348, 107.626960),
        icon: icon
    });
    marker.setMap(map);

    var html = [];
    
    html.push(`<div class="info-content">`);
    html.push(`    <div class="title">An Tùng & Ngọc Diệp</div>`);
    html.push(`    <div class="item">`);
    html.push(`        <div class="sub-title"><i class="fa fa-map-marker"></i> <b>Địa điểm:</b></div> <div>Nhà hàng Thu Nguyệt</div>`);
    html.push(`    </div>`);
    html.push(`    <div class="item">`);
    html.push(`        <div class="sub-title" style="height:50px"><i class="fa fa-map-marker"></i> <b>Địa chỉ:</b></div> <div>461 Nguyễn Huệ, TT. Tân Minh, Hàm Tân, Bình Thuận</div>`);
    html.push(`    </div>`);
    html.push(`</div>`);
    
    var infowindow = new vbd.InfoWindow({ content: html.join('') });
    infowindow.open(map, marker);

    var url = new URL(location.href);

    if (url){
        var id = url.searchParams.get("id");

        if (id){
           bindGuestInfo(id);
        }
    }

    $('#btnSubmit').on('click', function(e){

        var url = new URL(location.href);

        if (url){
            var id = url.searchParams.get("id");
    
            if (id){
               allow(id);
            }
        }

    });
});