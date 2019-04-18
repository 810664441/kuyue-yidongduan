var fourObj = (function () {

    // 当order-box出现到视窗时，加载其内容
    function loadOrderBoxCont() {
        $(window).scroll(function( ev ){
            var pageY = $(".order-box").offset().top;
            var viewH = window.innerHeight;
            var scrollTop = $(window).scrollTop();
            var flag = $(".order-box").data("flag");
            if( (scrollTop + viewH > pageY - 20) && flag ){
                var html = ejs.render( $("#model-one").html(), {dataArr: dataArr} );
                $(".order-box").html( html );
                $(".order-box").data("flag", false);
            }
        });
    }


    return {
        loadOrderBoxCont: loadOrderBoxCont
    }
})();

fourObj.loadOrderBoxCont();