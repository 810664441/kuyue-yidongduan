$(function(){
    var active = (function(){
        //ajax通用函数
        function ajax(x,y,z,q){
            $.ajax({
                type:'post',
                url:'../api/active.php',
                data: {
                    type: x,
                    page:y
                },
                dataType: 'json',
                success: function (data) {
                    addList(data,q);
                },
                error: function (xhr, status, error) {
                        z.data('flag','false');
                }
            })
        }
        //首页加载数据
        function onready(){
            var flag=true;
            $(document).ready(function(){
                if(flag){
                    flag=false;
                    $.ajax({
                        type:'post',
                        url:'../api/active.php',
                        data: {
                            type: '主题专场',
                            page:0
                        },
                        dataType: 'json',
                        success: function (data) {
                            addList(data,1)
                        },
                        error: function (xhr, status, error) {
                            console.log(xhr, status, error)
                        }
                    })
                }
            })
        }
        //ejs数据添加
        function addList(data,q){
            if(q == 1){
                var html = ejs.render($('#tpl1').html(),{goods:data});
                $('.s-warp').append(html);
                
            }else if(q == 2){
                var html = ejs.render($('#tpl2').html(),{goods:data});
                $('.p-warp').append(html);
            }
        }
        //触底动态ajax加载数据
        function downmost(x,y,z,q){
            var page = z;
            $(window).scroll(function(){
                var scrollT = $(window).scrollTop(),
                winH = $(window).height(),
                listT = x.offset().top + x.height();
                if(x.data('flag')){
                    if(winH + scrollT+1 >= listT){
                        var html = y.html();
                        ajax(html,page,x,q);
                        page ++
                        }
                }
            })
        }
        //导航条事件函数
        function gray(x,y,z){
        FastClick.attach(document.body);
            x.on('click','a',function(){
                var index = $(this).index(),
                itemT = z.eq(index).offset().top;
                $(window).scrollTop(itemT);
                $(this).addClass('active').siblings().removeClass('active');
            })
            $(window).scroll(function(){
                var scrollT = $(window).scrollTop(),
                    listT = y.offset().top + y.height()/3;
                    if(scrollT >= listT){
                        x.addClass('post');   
                    }else{
                        x.removeClass('post');  
                    }                
            })
        }
        //回到顶部
        function top(x){
        FastClick.attach(document.body);            
            x.click(function(){
                $(window).scrollTop(0);
            })
        }
        //点击左侧隐藏模块出现
        function navShow(x,y,z,q,s,v){
            var h=$(window).height()*2/100;
            z.css({height:h+'rem'});
            FastClick.attach(document.body);            
            x.click(function(){
                z.css({animation:'move1 1s',animationFillMode:'forwards'});
                q.css({animation:'move1 1s',animationFillMode:'forwards'});
                s.css({animation:'move1 1s',animationFillMode:'forwards'});
                v.css({animation:'move1 1s',animationFillMode:'forwards'});
                y.show();
                q.show();
                z.addClass('main-height');
            })
            q.click(function(){
                z.css({animation:'move2 1s',animationFillMode:'forwards'});
                q.css({animation:'move2 1s',animationFillMode:'forwards'});
                s.css({animation:'move2 1s',animationFillMode:'forwards'});
                v.css({animation:'move2 1s',animationFillMode:'forwards'});
                y.hide();
                q.hide();
                z.removeClass('main-height');
            })
        }
        return {
            onready:onready,
            downmost:downmost,
            gray:gray,
            top:top,
            navShow:navShow
        }

    })()
    active.onready();
    active.downmost($('.s-warp'),$('.s-title'),1,1);
    active.downmost($('.p-warp'),$('.p-title'),0,2);
    active.gray($('.active-gray'),$('.m-nav'),$('.link-holder'));
    active.top($('.ftr-top'));
    active.navShow($('.h-ico'),$('.menu'),$('main'),$('.blocker'),$('.fix-bottom'),$('.ftr-top'));
})