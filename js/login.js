var loginJs = (function () {

    var flag = true;

    // 当页面加载完成时，读取本地cookie
    function readCookie() {
        var user, pwd;
        var str = document.cookie;
        if (str) {
            var arr = str.split("; ");
            for (var i = 0; i < arr.length; i++) {
                var temp = arr[i].split("=");
                if (temp[0] === "user") {
                    user = temp[1];
                } else if (temp[0] === "pwd") {
                    pwd = temp[1];
                }
            }
            $("input[name=username]").val( user );
            $("input[name=pass]").val( pwd );
        }
    }
    readCookie();

    // 验证用户输入的用户名和密码是否合法
    function checkLogin() {
        $("button[type=button]").click(function () {
            var regexp1 = /^((\w)|([\u4e00-\u9fa5])){2,12}$/i,
                regexp2 = /^\w{6,12}$/ig,
                name = $("input[name=username]").val(),
                pwd = $("input[name=pass]").val(),
                msgBox = $(".login-msg-tip");
            if (!name) {
                handleAnimate(msgBox, "请输入您的邮箱/会员账号/手机号");
            } else if (!regexp1.test(name)) {
                handleAnimate(msgBox, "用户名必须是2~12位的字母数字组合或汉字");
            } else if (!pwd) {
                handleAnimate(msgBox, "请输入您的密码");
            } else if (!regexp2.test(pwd)) {
                handleAnimate(msgBox, "密码必须是6~12位的字母数字组合");
            } else {
                if (flag) {
                    flag = false;
                    handleServerCheck(msgBox, name, pwd);
                }
            }
        });
    }

    // 前台验证成功后，把数据传递给后台验证
    function handleServerCheck(obj, name, pwd) {
        $("button[type=button]").html("登录中...");
        $.post("./api/checkLogin.php", { name: name, pwd: pwd }, function (data) {
            if (data.tag == 1) {
                handleAnimate(obj, "抱歉！用户名不存在");
                $("input[name=username]")[0].focus();
            } else if (data.tag == 2) {
                handleAnimate(obj, "密码输入错误");
                $("input[name=pass]")[0].focus();
            }else if( data.tag === 0 ){
                var exp = new Date();
                exp.setDate(exp.getDate() + 7);
                document.cookie = "user=" + name + ";path=/;expires=" + exp.toGMTString();
                document.cookie = "pwd=" + pwd + ";path=/;expires=" + exp.toGMTString();
                location.href = "./index.html";
            }
            $("button[type=button]").html("登录");
            flag = true;
        }, "json");
    }


    // 动画提示函数
    function handleAnimate(obj, str) {
        obj.html(str);
        obj.animate({
            width: "6.5rem",
            height: "1.5rem",
            opacity: 1
        }, 300, function () {
            setTimeout(function () {
                obj.animate({
                    width: 0,
                    height: 0,
                    opacity: 0
                }, 500);
            }, 2000);
        });
    }

    return {
        checkLogin: checkLogin
    }
})();


loginJs.checkLogin();