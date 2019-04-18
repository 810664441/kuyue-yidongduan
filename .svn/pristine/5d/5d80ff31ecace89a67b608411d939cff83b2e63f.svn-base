$(function(){
    var section2=(function(){

        function tabList(){
            $(".tablist ul.one li").click(function(){
                console.log($(this).index());
                $(this).addClass("active").siblings(".active").removeClass("active");
                $(this).parent().next().children("li").eq($(this).index()).addClass("on").siblings(".on").removeClass("on");
            })
        }

        function scrollLoad(){
            var num=0;
            var winH=$(window).height();
            $(window).scroll(function(){
                var falg=$(".info .swiper-wrapper").eq(num).data("flag");
                if(falg){
                    var offT=$(".info .swiper-wrapper").eq(num).offset().top;
                    var scrollT=$(window).scrollTop();
                    if(winH+scrollT+100 >= offT){
                        $(".info .swiper-wrapper").eq(num).data("flag","false");                       
                        var type=$(".goods .swiper-wrapper").eq(num).children().eq(0).html();
                        ajaxReq(type,num,dealscrollData);
                        num++;
                    }
                }

            })
        }

        function ajaxReq(type,num,fun,tab){
            $.ajax({
                type:"get",
                url:"api/section2.php",
                data:{
                    type:type
                },
                dataType:"json",
                success:function(data){
                    fun(data,num,tab);        
                }
            })
        }

        function dealscrollData(data,num){
            var tpl=$("#tabData").html();
            var html=ejs.render(tpl,{list:data});
            $(".info .swiper-wrapper").eq(num).html(html);
            var mySwiper = new Swiper ('.info', {
                slidesPerView : 2.6,
                freeMode : true,
            })
        }

        function dealtabData(data,num,tab){
            $(".goods-list .info").eq(tab).children().eq(0).html();
            var htmlStr="<div class='swiper-wrapper' data-flag='true'></div>"
            $(".goods-list .info").eq(tab).append(htmlStr);
            var tpl=$("#tabData").html();
            var html=ejs.render(tpl,{list:data});
            $(".goods-list .info").eq(tab).children().eq(0).html(html);
            var mySwiper = new Swiper ('.info', {
                slidesPerView : 2.6,
                freeMode : true,
            })
        }


        function tabClick(){
            $(".goods .swiper-slide").click(function(){
                $(this).addClass("active").siblings(".active").removeClass("active");
                var type=$(this).html();
                var tab=$(this).parent().parent().next().data("num");
                var num=$(this).index();
                ajaxReq(type,num,dealtabData,tab);
            })
        }






        return {
            tabList:tabList,
            scrollLoad:scrollLoad,
            tabClick:tabClick
        }
    })()



    section2.tabList();
    section2.scrollLoad();
    section2.tabClick();
})