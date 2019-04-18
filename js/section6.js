$(function () {
    var G_myFun = (function () {
        // 热卖爆品tab切换
        function first(){
            $(".hot-list-top1 div").click(function(){
                $(".hot-list-top1").children().eq($(this).index()).addClass("hot-list-left").siblings().removeClass("hot-list-left");
                var pro = $(this).html()
                console.log($(this).html())
                $.ajax({
                    type: "post",
                    url: "api/section6.php",
                    data: {
                       type: pro,
                       type1: "简易录音",
                    },
                    dataType: 'json',
                    success: function (data) { 
                        console.log(data)
                        var html = ejs.render($('.tpl').html(), { data: data["1"]})
                        $(".hot-list-down-one1").html(html);
                        tabOne();
                        var html1 = ejs.render($('.tpl1').html(), { data: data["2"]})
                        $(".hot-list-down-one2").html(html1);
                        tabOne();
                    }
                    
                })
            })
        }
        // 点击热卖爆品
        
        // 热卖爆品滑动
        function tabOne() {
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 2.3,
                spaceBetween: 30,
                freeMode: true,
            });
        }
        // ajax加载
        function second(){
            window.onload=function(){
                $.ajax({
                    type: "post",
                    url: "api/section6-1.php",
                    data: {
                       type: "专业录音",
                       type1:"热门品牌",
                       type2:"影视录音机",
                       type3:"影视录音麦克风",
                    },
                    dataType: 'json',
                    success: function (data) {
                        console.log(data)
                        var html2 = ejs.render($('.tpl2').html(), { data: data["1"]})
                        $(".ly-hot-list").html(html2);
                        var html3 = ejs.render($('.tpl3').html(), { data: data["2"]})
                        $(".MKF-brand").html(html3);
                        var html4 = ejs.render($('.tpl4').html(), { data: data["3"]})
                        $(".Video-recording1").html(html4);
                        var html5 = ejs.render($('.tpl5').html(), { data: data["4"]})
                        $(".Video-recording2").html(html5);
                    }
                })
            }

        }

        function third(){
            $(".related-products1 div").click(function(){
                $(".related-products1").children().eq($(this).index()).addClass("hot-list-left").siblings().removeClass("hot-list-left");
                var all = $(this).html()
                console.log($(this).html())
                $.ajax({
                    type: "post",
                    url: "api/section6-2.php",
                    data: {
                       type: all,
                    },
                    dataType: 'json',
                    success: function (data) { 
                        console.log(data)
                        var html6 = ejs.render($('.tpl6').html(), { data: data["1"]})
                        $(".Video-recording3").html(html6);   
                        tabOne();
                    }
                    
                })
            })
        }
        function autoClickTab(){
            $(".hot-list-top1").children().eq(0).trigger("click");
            $(".hot-list-down").children().eq(0).trigger("click");
            $(".related-products1").children().eq(0).trigger("click");
        }
        return {
            // 热卖爆品tab切换
            first:first,
            // 热卖爆品滑动
            tabOne:tabOne,
            // ajax加载
            second:second,

            third:third,
             // 点击热卖爆品
             autoClickTab:autoClickTab,
        }
    })();
    // 热卖爆品tab切换
    G_myFun.first();
    // 热卖爆品滑动
    G_myFun.tabOne();
    
    // ajax加载
    G_myFun.second();

    G_myFun.third();
    // 点击热卖爆品
    G_myFun.autoClickTab();
})