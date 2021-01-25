var tl = gsap.timeline({repeatDelay: 1});
    gsap.from("body", {opacity: 0, duration: 1, y: -1000, duration: 4, ease: 3});

    function doFade() {
  tl.restart();
}

$(document).ready(function(){
    // to fade in on page load
    $("body").css("display", "none");
    $("body").fadeIn(400); 
    // to fade out before redirect
    $('a').click(function(e){
        redirect = $(this).attr('href');
        e.preventDefault();
        $('body').fadeOut(400, function(){
            document.location.href = redirect
        });
    });
})