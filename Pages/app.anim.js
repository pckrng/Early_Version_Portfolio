var tl = gsap.timeline({repeatDelay: 1});
    gsap.from("body", {opacity: 0, duration: 1, y: -1000, duration: 4, ease: 3});

    function doFade() {
  tl.restart();
}

document.querySelector("li").addEventListener("click", doFade);