$(function(){
    var list=(function(){

        var page=0;

        function init(){
            var temp=window.location.search;
            var temp1=decodeURI(temp.split("=")[1]);
            $(".item a").html(temp1);
            if($(".list-item ul").data("flag")){
                $.ajax({
                    type:"get",
                    url:"api/list.php",
                    data:{  
                        type:temp1,
                        page:page,
                    },
                    dataType:"json",
                    success:function(data){
                        delData(data);
                        liClick();
                        page++;
                        loadMore(0);
                        myScroll.refresh();
                    },
                    error:function(err){
                        $(".loadtip p").html('无更多商品...');
                        $(".list-item ul").data("flag","false");
                    }

                })
            }
            
        }
        function delData(data){
            $(".list-item ul .loadtip").remove();
            var tpl=$("#listgoods").html();
            var html=ejs.render(tpl,{list:data});
            $(".list-item ul").append(html);
            var tips="<li class='loadtip'><p>上拉加载更多。。。</p></li>";
            $(".list-item ul").append(tips);
        }
        function liClick(){
            $(".list-item ul li").click(function(){
                var id=$(this).data("id");
                window.location.href="detail.html?id="+id;
            })
        }

        function loadMore(type){
            myScroll = new IScroll("#wrapper",{
                probeType:2
            });
            var flag=false;
            myScroll.on("scroll",function(){
                if(this.y<(this.maxScrollY-10) && !flag){
                    flag=true;
                    $(".loadtip p").html('松手开始刷新...');
                }else if(this.y>(this.maxScrollY-10)  && flag){
                    flag=false;
                    $("loadtip p").html('下拉刷新...');
                }
            })

            myScroll.on("scrollEnd",function(){
               if(flag){
                    $(".loadtip p").html('正在加载...');
                    if(type==0){
                        init();
                    }else if(type==1){
                        sortByPrice(flag)
                    }
                    if($(".list-item ul").data("flag")){
                        $(".loadtip p").html('下拉刷新...');
                    }else{
                        $(".loadtip p").html('无更多商品...');
                    }         
                }
            })
        }


        function selectFun(){
            var flag=true;
            $(".detailTab .price").click(function(){
                $(".list-item ul").html("");
                $(".detailTab .price").children("img").remove();
                if(flag){
                    var imgHtml="<img src='imgs/sort/des.png'>";
                    $(".detailTab .price").append(imgHtml);
                    flag=false;
                }else{
                    var imgHtml="<img src='imgs/sort/res.png'>";
                    $(".detailTab .price").append(imgHtml);
                    flag=true;
                }
                sortByPrice(flag);
            })
        }

        var page2=0;
        function sortByPrice(flag){
            if($(".list-item ul").data("flag")){
                var temp=window.location.search;
                var temp1=decodeURI(temp.split("=")[1]);
                $(".item a").html(temp1);
                $.ajax({
                    type:"get",
                    url:"api/list2.php",
                    data:{  
                        type:temp1,
                        page:page2,
                        order:Number(flag)
                    },
                    dataType:"json",
                    success:function(data){
                        delData(data);
                        liClick();
                        page2++;
                        loadMore(1);
                        myScroll.refresh();
                        console.log(page2)
                    },
                    error:function(err){
                        $(".loadtip p").html('无更多商品...');
                        $(".list-item ul").data("flag","false");
                    }

                })
            }
            
        }


        return{
            init:init,
            selectFun:selectFun
        }
    })()



    list.init();
    list.selectFun();
    
})