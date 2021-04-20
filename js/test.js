// Canvas and Renderer settings

const renderer = new THREE.WebGLRenderer({antialiasing: true})
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Camera setup

const fov = 75;
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
camera.position.y = 0.5;
camera.position.x = 1;



// Scene setup

const scene = new THREE.Scene();
const color = 0xFF000000;
const density = 0.1;
// scene.fog = new THREE.FogExp2(color, density);

// Objects

const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

const material = new THREE.MeshPhongMaterial({color: 0x44aa88});


const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

renderer.render(scene, camera);


// Lights

const LightColor = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(LightColor, intensity);
light.position.set(-1, 2, 4);
scene.add(light);
renderer.render(scene, camera);

// Render animations

function render(time) {
    time *= 0.001;  // convert time to seconds
   
    cube.rotation.x = time;
    cube.rotation.y = time;
   
    renderer.render(scene, camera);
   
    requestAnimationFrame(render);
  }

  // requestAnimationFrame(render);