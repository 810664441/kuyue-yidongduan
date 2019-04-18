$(function () {
    var G_myFun = (function () {
        function first() {
            console.log(dataArr)
            if (!dataArr.err) {
                var html = ejs.render($('.tpl').html(), { dataArr: dataArr })
                $(".content").html(html);
            }
            // var pro;
            // $.ajax({
            //     type: "post",
            //     url: "api/brand.php",
            //     data: {
            //         type: pro
            //     },
            //     dataType: 'json',
            //     success: function (data) {

            //     }
            // })
        }
        return {
            first: first,
        }
    })();
    G_myFun.first();
})