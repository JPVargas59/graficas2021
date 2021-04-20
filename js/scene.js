
/*const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x = 0
camera.position.y = 0
camera.position.z = 3

scene.add(camera);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const planeGeometry = new THREE.laneGeometry(10, 10);
const planeMaterial = new THREE.MeshStandardMaterial({wireframe: true});
const plane2 = new THREE.Mesh(planeGeometry, planeMaterial);
*/
const gui = new dat.GUI();

const loader = new THREE.TextureLoader();

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const stairs = new Stairs({scene})
stairs.render()

const buildings = new Buildings({scene})
buildings.render()

// Lights

const pointLight = new THREE.DirectionalLight(0xffffff, 20, 10, 10)
const hemiLight = new THREE.HemisphereLight( 0xFF87CEEB, 0x4487CEEB, 0.6 ); 
scene.add(pointLight)
scene.add(hemiLight)

gui.add(pointLight.position, 'x')
gui.add(pointLight.position, 'y')
gui.add(pointLight.position, 'z')


const col = {color: '#00ff00'}
gui.addColor(col, 'color').onChange(() => {
    pointLight.color.set(col.color);
})

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
camera.position.x = 8
camera.position.y = 50
camera.position.z = 50
scene.add(camera)

gui.add(camera.position, 'x')
gui.add(camera.position, 'y')
gui.add(camera.position, 'z')

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({antialiasing: true})
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0xFF87CEEB, 1);
const fogColor = 0xFF000000;
const density = 0.01;
//     scene.fog = new THREE.FogExp2(fogColor, density);

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects

    // Update Orbital Controls

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()