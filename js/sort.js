$(function(){
    var sort=(function(){
        function navLeft(){
            var Rem=parseInt($("html").css("fontSize").split("px")[0]);
            var navHeight=$(window).height()/Rem-2.56;
            $("nav.left").css({"height":navHeight+"rem"});
            $("section.right").css({"height":navHeight+0.96+"rem"});
            $("div.bottom").css({"height":navHeight+"rem"});
        }
        // ajax请求数据
        function getType(typename){
            var typename=typename||0;
            $.ajax({
                type:"get",
                url:"api/sort.php",
                dataType:"json",
                data:{
                    typename:typename
                },
                success:function(data){
                    addData(data);
                }
            })
        }
        function addData(data){
            var data1=data[0].typelist.split("/");
            var tpl=$("#sortname").html();
            var html=ejs.render(tpl,{list:data1});
            $("section.right .typename").html(html);

            var brandImg=data[0].brandimg.split("/");
            var brandName=data[0].brandname.split("/");
            var data2=[];
            for(var i=0;i<brandName.length;i++){
                var temp={
                    brandname:brandName[i],
                    brandimg:brandImg[i]
                }
                data2.push(temp);
            }
            var tpl2=$("#sortimg").html();
            var html2=ejs.render(tpl2,{list2:data2});
            $("section.right .brand").html(html2);
        }

        function clickList(){
            $("ul.list li").click(function(){
                getType($(this).html());
                $(".right .title span").html("所有"+$(this).html());
                $(this).addClass("active").siblings(".active").removeClass("active");
            })
        }
        function clickItem(){
            $("ul.typename li").click(function(e){
                getType($(this).html());
                $(this).addClass("active").siblings(".active").removeClass("active");
            })
        }


        return{
            navLeft:navLeft,
            getType:getType,
            clickList:clickList,
            clickItem:clickItem
        }
    })()



    sort.navLeft();
    sort.getType();
    sort.clickList();
    sort.clickItem();
})