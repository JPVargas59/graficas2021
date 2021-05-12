
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

const loader = new THREE.TextureLoader();

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

function makeInstance(geometry, color, x) {
    const material = new THREE.MeshPhongMaterial({color});

    const instance = new THREE.Mesh(geometry, material);
    scene.add(instance);

    return instance;
  }

const stairs = new Stairs({scene}).render(numSteps = 10)
const stairsStep = new THREE.Mesh(new THREE.BoxGeometry(5.5, 3, 10), stairs.material)
stairsStep.position.set(-6.3, 2.05, 0.5)
stairs.position.set(0,0,0)

const stairs1 = new Stairs({scene}).render(numSteps = 10)
const stairsStep1 = new THREE.Mesh(new THREE.BoxGeometry(5.5, 3, 10), stairs.material)
stairsStep1.position.set(-18, 5.05, 0.5)
stairs1.position.set(-11.8,3,0)

const stairs2 = new Stairs({scene}).render(numSteps = 10)
const stairsStep2 = new THREE.Mesh(new THREE.BoxGeometry(5.5, 3, 10), stairs.material)
stairsStep2.position.set(-30.05, 8.05, 0.5)
stairs2.position.set(-23.7,6,0)

const stairsBase = new THREE.BoxGeometry(50, 1, 40)
const stairsBaseMesh = new THREE.Mesh(stairsBase, stairs.material)
stairsBaseMesh.position.set(-20, -0.8, 0)
scene.add(stairsBaseMesh)

const stairsWall1 = new THREE.BoxGeometry(38, 5, 1)
const stairsWall1Mesh = new THREE.Mesh(stairsWall1, stairs.material)
stairsWall1Mesh.position.set(-14.8, 2, -5)
scene.add(stairsWall1Mesh)

const stairsWall2 = new THREE.BoxGeometry(19, 5, 1)
const stairsWall2Mesh = new THREE.Mesh(stairsWall2, stairs.material)
stairsWall2Mesh.position.set(-24.3, 7, -5)
scene.add(stairsWall2Mesh)


const stairsWall3Mesh = new THREE.Mesh(stairsWall1, stairs.material)
stairsWall3Mesh.position.set(-14.8, 2, 5.95)
scene.add(stairsWall3Mesh)

const stairsWall4Mesh = new THREE.Mesh(stairsWall2, stairs.material)
stairsWall4Mesh.position.set(-24.3, 7, 5.95)
scene.add(stairsWall4Mesh)

const upperStreet = new THREE.BoxGeometry(15, 10, 40)
const upperStreetMesh = new THREE.Mesh(upperStreet, stairs.material)
upperStreetMesh.position.set(-38.5, 4.5, 0)
scene.add(upperStreetMesh)


const character1 = new THREE.PlaneGeometry(1, 3)
const texture = loader.load('../textureMaps/your_name_taki.png')
const material = new THREE.MeshBasicMaterial({map: texture, transparent: true})
const character1Mesh = new THREE.Mesh(character1, material)
character1Mesh.position.set(10,10,0)
scene.add(character1Mesh)

scene.add(stairsStep)
scene.add(stairs)
scene.add(stairsStep1)
scene.add(stairs1)
scene.add(stairsStep2)
scene.add(stairs2)
// const buildings = new Buildings({scene})
// buildings.render()

// Lights

const pointLight = new THREE.DirectionalLight(0xffffff, 20, 10, 10)
const hemiLight = new THREE.HemisphereLight( 0xFF87CEEB, 0x4487CEEB, 0.6 ); 
scene.add(pointLight)
scene.add(hemiLight)



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
camera.position.x = 32
camera.position.y = 11
camera.position.z = -18
camera.rotation.set(x = 2.7046390441579597, y = 1.4787792520724299, z = -2.7463916419071435)
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({antialiasing: true, alpha: true})
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
    character1Mesh.lookAt(camera.position)
    // Update Orbital Controls

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()