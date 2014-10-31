$(document).ready(function () {
    loadPartial("#content", "/orders");
    $(".nav a").on("click", function () {
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
});

$("a.useajax").click(function (event) {
    event.preventDefault();
    var url = event.target.href;
    var self = this;
    loadPartial("#content", url);
});
