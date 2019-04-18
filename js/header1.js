    function init(){
        var Rem=parseInt($("html").css("fontSize").split("px")[0]);
        var navHeight=$(window).height()/Rem;
        $("nav.slide").css({"height":navHeight+"rem"});
        $(".all").css({"height":navHeight+"rem"});
    }
    function menuClick(){
        var flag=true;
        $(".home-icon").click(function(){
            if(flag){
                $(".all").css({marginLeft:2.3+"rem",overflow:"hidden"})
                $("footer").css({marginLeft:2.3+"rem"})
                $("nav.slide").show();
                flag=false;
            }else{
                $(".all").css({marginLeft:0,overflow:"auto"}).children("nav.slide").hide();
                $("footer").css({marginLeft:0})
                $("nav.slide").hide();
                flag=true;
            }
        })
    }
    function goTop(){
        $(window).scroll(function(){
            var scroll=$(window).scrollTop();
            if(scroll>300){
                $(".gotop").show();
            }else{
                $(".gotop").hide();
            }
        })
        $(".gotop").click(function(){
            $(window).scrollTop(0);
        })

            
    }

        
    init();
    menuClick();
    goTop();