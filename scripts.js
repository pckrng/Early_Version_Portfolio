
    
 


    gsap.timeline().from("body", {opacity: 0, duration: 1})
    gsap.timeline().from("h1", { x: -1000, duration: 2 })
    .from("button", {x: -300})
    .from("li", {y: -300})
    
    gsap.timeline().from(".fab, .fas", {y: 500, duration: 2})
    .from(".innerText h2", {y: 1000})
    .from("p", {y: 1000, duration: 1})
    

    let scene, camera, rednerer;

    function init() {

        scene = new THREE.scene();
        scene.background = new THREE.color(0xdddddd);

        camera = new THREE.perspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
        
        hlight = new THREE.AmbientLight (0x404040,100);
        scene.add(hlight);

        renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.body.appendChild(renderer.domElement);
    }