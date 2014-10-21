$(function() {
    $("#more").on("click",function(e) {
        e.stopPropagation();
        $("#powered").slideToggle();
    });

    $("body").on("click", function(e) {
        e = e || window.event;
        if(e.target.id != "powered" && e.target.id != "by") {
            $("#powered").slideUp();
        }
    });
});