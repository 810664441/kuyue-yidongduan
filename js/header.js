FastClick.attach(document.body);
$(".aside-nav-toggle").on("click", function () {
    var tag = $(this).data("flag");
    if (tag === true) {
        $(".aside-nav").css("display", "block");
        $(".cont").css({ height: window.innerHeight, overflow: "hidden"});
        $(this).data("flag", false);
        $(".aside-nav").animate({
            width: "2.70rem"
        }, 300);
        $(".cont").css("marginLeft", 0);

        $(".cont").animate({
            marginLeft: "2.70rem"
        }, 300);

        $(".fixed-bottom").animate({
            left: "2.70rem"
        }, 300);

    }else if (tag === false) {
        $(this).data("flag", true);
        $(".cont").css({ height: "auto", overflow: "auto"});
        $(".aside-nav").animate({
            width: 0
        }, 300, function () {
            $(".aside-nav").css("display", "none");
        });
        $(".cont").animate({
            marginLeft: 0
        }, 300);

        $(".fixed-bottom").animate({
            left: 0
        }, 300);
    }
});
