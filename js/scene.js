
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
const texture = loader.load('../mty_texture_streets.png')
const heightMap = loader.load('../mty.png')


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


// Objects

const geometry = new THREE.SphereGeometry( 5, 32, 32 );
const geometryBackground = new THREE.PlaneBufferGeometry(500,500);

// Materials
const material = new THREE.MeshStandardMaterial({
    color: 'white',
    //wireframe: true
})

const backgroundMaterial = new THREE.MeshStandardMaterial(
    {color: 'grey'}
)

const plane = new THREE.Mesh(geometry, material);
scene.add(plane);
plane.rotation.x = 181;



// Lights

const pointLight = new THREE.RectAreaLight(0xffffff, 2, 10, 10)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 6
scene.add(pointLight)

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
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 8
camera.position.y = 0
camera.position.z = 20
scene.add(camera)

gui.add(camera.position, 'x').min(0).max(20);
gui.add(camera.position, 'y').min(0).max(20);
gui.add(camera.position, 'z').min(0).max(20);

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

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects

    // Update Orbital Controls
    plane.rotation.z = .3 * elapsedTime

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()