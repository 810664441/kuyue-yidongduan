$(function () {

    var regist = (function () {


        // 拖动滑块进行验证
        function btnMoveCheck() {
            var slider2 = new FtSlider({
                id: "slider2",
                width: $("#slider2").width(),
                height: $("#slider2").height(),
                textMsg: "拖动滑块到右边",
                successMsg: "验证成功了哦",
                callback: function (res) {
                    if(res){
                        $("button[type=button]").css("background-color", "green");
                    }
                }
            });

        }

        return {
            btnMoveCheck: btnMoveCheck
        }
    })();

    regist.btnMoveCheck();

})
