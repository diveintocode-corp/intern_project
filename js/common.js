//タブ切り替え
$(function() {
    $('.tab li').click(function() {
        event.preventDefault();
        var index = $('.tab li').index(this);
        $('.tab-content > div').css('display','none');
        $('.tab-content > div').eq(index).fadeIn("slow");
        $('.tab li').removeClass('select');
        $(this).addClass('select')
    });
});

//スクロールで現れるトップへ戻るボタン
$(function() {
    var topBtn = $('.pagetop');
    //ボタンを非表示にする
    topBtn.hide();
    //スクロールしてページトップから100に達したらボタンを表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
　　　　　　　//フェードインで表示
            topBtn.fadeIn();
        } else {
　　　　　　　//フェードアウトで非表示
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップへ戻る
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});