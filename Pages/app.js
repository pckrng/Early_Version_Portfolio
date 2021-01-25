//Variables for setup

let container;
let camera;
let renderer;
let scene;
let bust;

function init() {
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();

  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 10000;

  //Camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(-50, -5, 800);

  const ambient = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(50, 50, 40);
  light.color.set('rgba(14, 246, 208, 0.05)')
  scene.add(light);
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  //Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("./3d/scene.gltf", function(gltf) {
    scene.add(gltf.scene);
    bust = gltf.scene.children[0];
    animate();
  });
}



function animate() {
  requestAnimationFrame(animate);
  bust.rotation.z += 0.005;
  renderer.render(scene, camera);
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);

}

  window.addEventListener('resize', onWindowResize);

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

