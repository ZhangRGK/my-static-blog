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

    skel.init({
        reset: 'normalize',
        containers: '100%',
        breakpoints: {
            small: {
                media: '(max-width: 1024px)',
                grid: {
                    collapse: true
                }
            }
        }
    });
    $(document).on("resize",function() {
        console.log(skel.isActive("medium"));
        if (skel.isActive('small') || skel.isActive("medium")) {
            $("#main").removeClass("-3u");
        }
    });
});