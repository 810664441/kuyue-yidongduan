(function () {

    var c_obj = (function () {

        //购物车操作逻辑单选
        function cartOperate(carts) {
            //全选后都选中
            function fanXuan() {
                var qx = $(".carts-box .qx");
                qx.on('click', function () {
                    var dx = $(".carts-middle .dx");
                    if ($(this).data("flag")) {
                        $(this).removeClass('dx2');
                        dx.removeClass('dx2');
                        dx.data("flag", "");
                        $(this).data("flag", "");;
                    } else {
                        $(this).addClass('dx2');
                        dx.addClass('dx2');
                        dx.data("flag", "dx");
                        $(this).data("flag", "dx");
                    }
                    zong();
                })
            }
            fanXuan();
            // 实现单选
            function danXuan() {
                carts.on('click', ".dx", function () {

                    if ($(this).data("flag")) {
                        $(this).removeClass('dx2');
                        $(this).data("flag", "");
                    } else {
                        $(this).addClass('dx2');
                        $(this).data("flag", "dx");
                    }
                    fanxian();
                    zong();
                })

            }
            danXuan();
            //都单选后实现全选
            function fanxian() {
                var middle = $(".carts-middle-box").children(),
                    dx = $(".carts-middle .dx"),
                    n = 0;
                // console.log(middle.length)
                for (var i = 0; i < middle.length; i++) {
                    // console.log(dx.eq(i).data("flag"))
                    if (dx.eq(i).data("flag")) {
                        n++;
                    }
                    if (n === middle.length) {
                        $(".carts-box .qx").addClass('dx2');
                        $(".carts-box .qx").data("flag", "dx");
                    } else {
                        $(".carts-box .qx").removeClass('dx2');
                        $(".carts-box .qx").data("flag", "");
                    }
                }
            }
            // 添加数量
            function jia() {
                carts.on('click', ".add", function () {
                    var val = $(this).prev().val();
                    var ids = $(this).parent().data("id")
                    val++;
                    // console.log($(this).parent().data("id"))
                    $(this).prev().val(val);
                    // pack.html(pack.html()*val);
                    zong();
                    conts(ids,val);

                })
            }
            jia();

            // 把商品数量添加到本地
            function conts(ids,val) {
                
                // 获取本地数据
                var arr = JSON.parse(localStorage.cell);
                // 判断是相同商品，有就数量加一   
                arr.forEach(function (vale, index, arr) {
                    if (vale.Id == ids) {
                        arr.splice(index, 1);
                        addLocs(val,vale,arr);
                    }
                });
            }
            // 减少数量
            function jian() {
                carts.on('click', ".min", function () {

                    var val = $(this).next().val();
                    var ids = $(this).parent().data("id")
                    val--;
                    if (val < 1) {
                        val = 1;
                    }
                    // console.log(val)
                    $(this).next().val(val);
                    zong();
                    conts(ids,val);
                })
            }
            jian();
            //计算总数 总价钱
            var zong = function () {
                var middle = $(".carts-middle-box").children(),
                    dx = $(".carts-middle .dx");
                zongshu = $(".carts-fiexd .settle span"),
                    zongjia = $(".carts-fiexd .sum"),
                    zongs = 0,
                    zs = 0,
                    zongj = 0;
                for (var i = 0; i < middle.length; i++) {
                    // console.log(middle.length)
                    if (dx.eq(i).data("flag")) {
                        // console.log(1)
                        zs += parseInt($(".carts-price .number").eq(i).val()) //获取总数
                        zongs = parseInt($(".carts-price .number").eq(i).val()); //获取单个商品数
                        zongj += parseInt($(".carts-price .pack").eq(i).html()) * zongs; //获取总价
                        // console.log(zongshu.html())
                        // console.log(zongj)

                    }
                }
                zongshu.html(zs);
                zongjia.html(zongj.toFixed(2));
            }

        }

        //删除商品
        function deleS(comp){
            comp.click(function(){
                $(".sum-box").hide();
                $(".settle").hide();
                $(".shant").show();
                $(".shanc").show();
            })
            $(".shanc").click(function(){
                $(".sum-box").show();
                $(".settle").show();
                $(".shant").hide();
                $(".shanc").hide();
                // console.log(111)
                var dx = $(".carts-middle .dx");
                dx.forEach(function(val,index){
                    // console.log(val.className)
                    if (val.className == "dx dx2") {
                        var ids = $(val).next().next().children().eq(2).children().eq(1).data("id");
                        // console.log(ids.data("id"))

                        // 获取本地数据
                        var arr = JSON.parse(localStorage.cell);
                        // 判断相同商品，有就删除
                        arr.forEach(function (val, index, arr) {
                            if (val.Id == ids) {
                                // 删除一条商品
                                arr.splice(index, 1);

                                var value = JSON.stringify(arr);
                                localStorage.cell = value; //重新存入
                                //没有数据就清空本地
                                if(arr.length === 0){
                                    localStorage.clear();
                                }
                                //动态获取本地商品重新渲染到
                                locaS($(".cart-box"), $(".carts-box"));
                            }
                        });
                    }
                })
                
            })
        }

        //动态获取本地商品
        function locaS(cart, carts) {

            if (localStorage.cell) {
                cart.hide();
                carts.show();
                //取出并转换为JSON对象（是数组）
                var cell = JSON.parse(localStorage.cell);
                read(cell); //调用添加数据函数
            } else {
                carts.hide();
                cart.show();
            }
        }

        //把商品渲染到页面
        function read(cell) {

            $(".carts-box .carts-middle-box").html(""); //初始化数据
            var html = ejs.render($('.tpl').html(), {
                foods: cell
            }); //编译数据    
            $(".carts-box .carts-middle-box").prepend(html); //加入页面中
        }

        //本地储存商品
        function addLocs(quantity,data,arr) {
            var p1 = data.Id,
                p2 = data.price,
                p3 = data.info,
                p4 = data.indimg;
            p5 = quantity;
            //将参数以键值对对象储存
            var value = {
                Id: p1,
                price: p2,
                info: p3,
                indimg: p4,
                quantity: p5
            };
            arr.unshift(value); //添加到数组内
            var value = JSON.stringify(arr); //将数组转化为JSON字符串（是数组）
            localStorage.cell = value; //存入电脑客户端
        }

        return {
            cartOperate: cartOperate,
            locaS: locaS,
            deleS:deleS

        }
    })();


    //购物车操作逻辑单选
    c_obj.cartOperate($(".carts-box"));

    //购物车显示商品
    c_obj.locaS($(".cart-box"), $(".carts-box"));

    //删除商品
    c_obj.deleS($(".compile"));
})();