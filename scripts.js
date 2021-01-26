    
   


    gsap.timeline().from("h1", { x: -1000, duration: 2, delay: 0.5, opacity: 0 })
    .from("button", {x: -300, opacity: 0})
    .from("li", {y: -300, opacity: 0.2, duration: 0.5})
    
    gsap.timeline().from(".fab, .fas", {y: 500, duration: 2, opacity: 0})
    .from(".innerText h2", {y: 1000})
    
    .from("p", {y: 1000, duration: 1})


