var nav = $('.SideNav');
$(window).on('scroll', function () {
    $(document).ready(function () {
        if ($(window).scrollTop() >= nav.offset().top + nav.outerHeight() - window.innerHeight) {
            $('.Scrollable-Part').css("position", "absolute");
            $('.Scrollable-Part').css("bottom", "0%")
            $('.Scrollable-Part').css("width", "100%")

        }
        else {

            $('.Scrollable-Part').css("position", "fixed");
            $('.Scrollable-Part').css("bottom", "unset")
            $('.Scrollable-Part').css("width", "25%")

        }
    });
});