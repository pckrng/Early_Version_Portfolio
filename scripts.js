    gsap.timeline().from("body", {opacity: 0, duration: 1})
    gsap.timeline().from("h1", { x: -1000, duration: 2 })
    .from("button", {x: -300})
    .from("li", {y: -300})
    
    gsap.timeline().from(".fab, .fas", {y: 500, duration: 2})
    .from(".innerText h2", {y: 1000})
    .from("p", {y: 1000, duration: 1})
    