$(function () {
    var G_myFun = (function () {
        // 热卖精选ajax
        function first() {
            window.onload = function () {
                var Bval = $(".left-sale").contents().filter(function () { return this.nodeType == 3; }).text().trim(),
                    Bval1 = $(".right-sale").contents().filter(function () { return this.nodeType == 3; }).text().trim();
                $.ajax({
                    type: "post",
                    url: "api/section5.php",
                    data: {
                        type: Bval,
                        type1: Bval1,
                        type2:"精选",
                        type3:"付费"
                    },
                    dataType: 'json',
                    success: function (data) {  
                        console.log(data) 
                        if (!data.err) {
                            var html = ejs.render($('.tpl').html(), { data: data[2]})
                            $(".suit-div-top").html(html);
                            var html1 = ejs.render($('.tpl1').html(), { data: data[1]})
                            $(".suit-div-down").html(html1);
                            var html2 = ejs.render($('.tpl2').html(), { data: data[3]})
                            $(".product-introduction-down").html(html2);
                            var html3 = ejs.render($('.tpl3').html(), { dataArr:dataArr})
                            $(".K-song").html(html3);
                            var html4 = ejs.render($('.tpl4').html(), { dataAll:dataAll})
                            $(".maikefeng").html(html4);
                            var html5 = ejs.render($('.tpl5').html(), { data: data[4]})
                            $(".live-equipment-down2").html(html5);
                        }
                    }
                })

            }
        }
        // 热卖爆品切换
        function tabOne() {
            $(".h-sale-tab div").click(function () {
                $(this).css({ backgroundColor: "#ff3076", color: "white" }).siblings().css({ backgroundColor: "#333", color: "white" });
                $(".suit-div").children().eq($(this).index()).removeClass("suit-div-list").siblings().addClass("suit-div-list");
            })

        }
        // 手机直播相关设备tab切换
        function senond(){
            $(".live-equipment-list div").click(function(){
                $(".live-equipment-list").children().eq($(this).index()).addClass("equipment-list").siblings().removeClass("equipment-list");
                var pro = $(this).html()
                console.log(pro)
                $.ajax({
                    type: "post",
                    url: "api/section5-1.php",
                    data: {
                       type: pro
                    },
                    dataType: 'json',
                    success: function (data) { 
                        console.log(data["1"])
                        var html = ejs.render($('.tpl6').html(), { data: data["1"]})
                        $(".live-equipment-down1").html(html);
                    }
                    
                })
            })
        }
        // 手机直播相关设备tab切换 触发自身点击
        function autoClickTab(){
            $(".live-equipment .live-equipment-list").children().eq(0).trigger("click");
        }
        return {
            // 热卖精选
            first:first,
            // 热卖爆品切换
            tabOne: tabOne,
// 手机直播相关设备tab切换
            senond:senond,
// 手机直播相关设备tab切换 触发自身点击
            autoClickTab:autoClickTab

        }
    })();
    // 热卖精选
    G_myFun.first();
    // 热卖爆品切换
    G_myFun.tabOne();
// 手机直播相关设备tab切换
    G_myFun.senond();
// 手机直播相关设备tab切换 触发自身点击
    G_myFun.autoClickTab();
})