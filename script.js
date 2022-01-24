// MV全画面表示
$(function(){
    var headWrap = $('.header-wrapper');
    var headWraph = $(window).outerHeight();
    var headWrapw = $(window).outerWidth();
    headWrap.outerHeight(headWraph);
    headWrap.outerWidth(headWrapw);
    $(window).resize(function(){
        var headWraph = $(window).outerHeight();
        var headWrapw = $(window).outerWidth();
        headWrap.outerHeight(headWraph);
        headWrap.outerWidth(headWrapw);
    })
});
// instagramボタンホバー処理
$(function(){
    $('.header-btn').hover(function(){
        $('.off').css('display', 'none');
        $('.on').css('display','block');
    },function(){
        $('.on').css('display', 'none');
        $('.off').css('display','block');
    });
})
// スクロールフェードイン処理
$(function(){
    var fadeIn = $('.is-open');
    $(window).scroll(function () {
    $(fadeIn).each(function () {
        var offset = $(this).offset().top;
        var scroll = $(window).scrollTop(); 
        var windowHeight = $(window).height();
        if (scroll > offset - windowHeight + 200) {
        $(this).addClass("scroll-in");
        }
    });
    });
});
// lightbox
$(function(){
    $('.sample-item').on('click', function(){
        // overlay
        $('.sample').append('<div class="overlay"></div>');
        // lightbox
        $('.sample').append('<div class="lightbox"><img class="l-img" src=""><p class="title"></p></div>');
        // closebtn
        $('.sample').append('<div class="l-close">back</div>');
        var getimg = $(this).find('img').attr('src');
        var getttl = $(this).find('img').attr('alt');
        $('.l-img').attr('src',getimg);
        $('.title').html(getttl);
    });
    //削除部
    $(document).on("click", ".overlay", function(){
        // lightbox
        $('.lightbox').remove();
        // overlay
        $('.overlay').remove();
        // l-close
        $('.l-close').remove();
    });
    //削除部
    $(document).on("click", ".l-close", function(){
        // lightbox
        $('.lightbox').remove();
        // overlay
        $('.overlay').remove();
        // l-close
        $('.l-close').remove();
    });
});

// スクロールトップボタン
$(function(){
    $('.scroll').click(function(){
        $('body,html').animate({
        scrollTop: 0},500);
        return false;
    });
    $(window).scroll(function () {
        $('.scroll').each(function () {
            if($(window).scrollTop() > 600){
                $('.scroll').fadeIn(2000);
            } else if($(window).scrollTop() < 600){
                $('.scroll').fadeOut(2000);
            }
        });
    });
});