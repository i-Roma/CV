/* Sandwish */
$(function(){
    document.querySelector( "#nav-toggle" )
        .addEventListener( "click", function() {
            this.classList.toggle( "active" );
        });
});

/* Show Menu */
$(function(){

    $( '#nav-toggle' ).click(function() {
        $('.menu-list').toggleClass( 'menu-list-show');
    });

});

/* Slider */
function slideShowController($scope, $timeout) {
    var slidesInSlideshow = 3;
    var slidesTimeIntervalInMs = 3000;

    $scope.slideshow = 1;
    var slideTimer =
        $timeout(function interval() {
            $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
            slideTimer = $timeout(interval, slidesTimeIntervalInMs);
        }, slidesTimeIntervalInMs);
}

/* Scroll (jQuery) */
$('.smoothScroll').click(function(event) {
    event.preventDefault();
    var href=$(this).attr('href');
    var target=$(href);
    var top=target.offset().top;
    $('html,body').animate({
        scrollTop: top
    }, 2750);
});