$(function() {
    $('code, pre').addClass('prettyprint');
    prettyPrint();

    var nav = $("nav");

    $("#top").on("click", function() {
        $("body").animate({scrollTop:0}, '500', 'swing');
    });

    $("h2").each(function(index,node) {
        $(node).before("<a id='"+index+"'>");
        var span = document.createElement('span');
        $(span).html($(node).html())
            .on("click", function() {
                console.log($(node).offset());
                $("body").animate({scrollTop:$(node).offset().top}, '700', 'swing');
            });
        nav.append(span);
    });
});
