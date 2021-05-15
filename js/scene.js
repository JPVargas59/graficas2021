const loader = new THREE.TextureLoader()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


const buildings = new Buildings({scene})
buildings.render()

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


const character2 = new THREE.PlaneGeometry(1, 3)
const texture2 = loader.load('../textureMaps/your_name_mitsuha.png')
const material2 = new THREE.MeshBasicMaterial({map: texture2, transparent: true})
const character2Mesh = new THREE.Mesh(character2, material2)
character2Mesh.position.set(-13,7.2,0)
scene.add(character2Mesh)


const character1 = new THREE.PlaneGeometry(1, 3)
const texture = loader.load('../textureMaps/your_name_taki.png')
const material = new THREE.MeshBasicMaterial({map: texture, transparent: true})
const character1Mesh = new THREE.Mesh(character1, material)
character1Mesh.position.set(-17,8.2,0)
scene.add(character1Mesh)


const tree = new THREE.PlaneGeometry(6, 10)
const treeTexture = loader.load('../textureMaps/tree.png')
const treeMaterial = new THREE.MeshBasicMaterial({map: treeTexture, transparent: true})
const treeMesh = new THREE.Mesh(tree, treeMaterial)
treeMesh.position.set(-33,14,6)
scene.add(treeMesh)

const tree1Material = new THREE.MeshBasicMaterial({map: treeTexture, transparent: true})
const tree1Mesh = new THREE.Mesh(tree, tree1Material)
tree1Mesh.position.set(-33,14,-5)
scene.add(tree1Mesh)

const tree2Material = new THREE.MeshBasicMaterial({map: treeTexture, transparent: true})
const tree2Mesh = new THREE.Mesh(tree, tree2Material)
tree2Mesh.position.set(-33,14,14)
scene.add(tree2Mesh)

const tree3Material = new THREE.MeshBasicMaterial({map: treeTexture, transparent: true})
const tree3Mesh = new THREE.Mesh(tree, tree3Material)
tree3Mesh.position.set(-33,14,-13)
scene.add(tree3Mesh)

scene.add(stairsStep)
scene.add(stairs)
scene.add(stairsStep1)
scene.add(stairs1)
scene.add(stairsStep2)
scene.add(stairs2)
// const buildings = new Buildings({scene})
// buildings.render()

// Lights

const particleLight = new THREE.Mesh(
    new THREE.SphereGeometry( 5, 5, 5 ),
    new THREE.MeshBasicMaterial( { color: 0xffffff } )
);
particleLight.position.set(10, 1000, 0)
scene.add( particleLight );
// scene.add(new THREE.AmbientLight( 0xffffff ))
scene.add(new THREE.DirectionalLight('#ffffff'))


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
camera.position.x = -20
camera.position.y = 9
camera.position.z = 4.2
camera.rotation.set(x = 0, y = -1.3, z = -0.06)
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
const fogColor = 0xFF87CEEB;
const density = 0.01;
scene.fog = new THREE.FogExp2(fogColor, density);

/**
 * Animate
 */

const clock = new THREE.Clock()
const effect = new OutlineEffect( renderer, {defaultThickness: 0.005} );
effect.defaultThickness = 0.001


const tick = () =>
{   
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // character1Mesh.lookAt(camera.position)
    // .lookAt() hace rotar al objeto en todos los ejes, si vieramos la escena desde arriba entonces los personajes parecerían "acostados". 
    // con esta linea calculamos el angulo en el eje y entre la camara y el personaje para aplicarlo directamente a su rotación
    character1Mesh.rotation.y = Math.atan2( ( camera.position.x - character1Mesh.position.x ), ( camera.position.z - character1Mesh.position.z ) );
    character2Mesh.rotation.y = Math.atan2( ( camera.position.x - character2Mesh.position.x ), ( camera.position.z - character2Mesh.position.z ) );
    treeMesh.rotation.y = Math.atan2( ( camera.position.x - treeMesh.position.x ), ( camera.position.z - treeMesh.position.z ) );
    tree1Mesh.rotation.y = Math.atan2( ( camera.position.x - tree1Mesh.position.x ), ( camera.position.z - tree1Mesh.position.z ) );
    tree2Mesh.rotation.y = Math.atan2( ( camera.position.x - tree2Mesh.position.x ), ( camera.position.z - tree2Mesh.position.z ) );
    tree3Mesh.rotation.y = Math.atan2( ( camera.position.x - tree3Mesh.position.x ), ( camera.position.z - tree3Mesh.position.z ) );

    // Render
    renderer.render(scene, camera)
    effect.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()