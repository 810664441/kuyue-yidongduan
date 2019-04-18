var c_cart = (function () {
    //本地储存要加入购物车的商品
    function cart(idj) {
            $.ajax({
            type: "get",
            url: "../api/cart.php",
            data: {
                id: idj
            },
            dataType: "json",
            success: function (data) {
                //  console.log(data.res[0].Id);
                if (data.res) {
                    locaS(data.res);
                }
            }
        })
        
    }
    // 查询到数据存入本地
    function locaS(data) {
        // console.log(data[0]);
        var arr=[];
        var flag =false;
         if (localStorage.cell) {
            var count = 0;
            arr = JSON.parse(localStorage.cell);
            // 判断是否存在相同商品，有就数量加一   
            arr.forEach(function (val,index,arr) {
                count++;
                if(val.Id === data[0].Id){
                    var quantity = val.quantity;
                    quantity++;
                    arr.splice(index, 1);
                    addLocs(quantity)
                    
                }else if(arr.length === count){
                    flag =true;
                }                
            });
            // 没有相同商品，就存入本地  
            if(flag){
                addLocs(1);
                flag =false;
            }
        } else {
            arr = [];  
            addLocs(1);
        }

        //本地储存商品
        function addLocs(quantity){
            var p1 = data[0].Id,
            p2 = data[0].price,
            p3 = data[0].info,
            p4 = data[0].indimg;
            p5= quantity;
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
            // 跳转到购物车
            // window.location.href="../cart.html";
            //判断登录状态
            logVerify();
        }
        //判断登录状态,跳转到购物车或登录
        function logVerify(){
            var cookieSti = document.cookie;
            if(cookieSti){
                window.location.href="../cart.html";
            }else{
                window.location.href="../login.html";
            }
        }
    }

    return {
        cart:cart
    }
})();
// c_cart.cart(idj);  //本地储存要加入购物车的商品
