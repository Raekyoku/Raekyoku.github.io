(function ($)) {
    $(document).ready(function ()) {
        var slides = $("#slideshow > li");
        var count = 0;

        function toggle_slide() {
            count = (count + 1) % 5;
            slides = removeClass("current");
            slides.removeClass("current").eq(count).addClass("current");
            setInterval(toggle_slide, 3000);
        }
    });


})(jQuery);
