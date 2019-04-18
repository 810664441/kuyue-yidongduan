$(function(){
    var detail=(function(){
        function init(){
            var temp=window.location.search;
            var temp1=decodeURI(temp.split("=")[1]);
            $.ajax({
                type:"get",
                url:"api/detail.php",
                data:{
                    id:temp1
                },
                dataType:"json",
                success:function(data){
                    $(".banner .swiper-slide img").prop("src","imgs/commonImg/"+data[0].indimg);
                    var tpl=$("#detail").html();
                    var html=ejs.render(tpl,{list:data});
                    $(".bottom").prepend(html);


                },
                error:function(err){
                    console.log(err);
                }

            })
        }
        function addCart(){
            $(".v-btn-red").click(function(){
                var id=$(".ip_price").data("id");
                c_cart.cart(id);
            })
        }





        return{
            init:init,
            addCart:addCart
        }
    })()



    detail.init();
    detail.addCart();


})