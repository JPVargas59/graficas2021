var speed = 2;
let moveCamera = false;

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    console.log(keyCode)
    if (keyCode == 87) {
        // W
        camera.translateZ(-speed)
    }
    if (keyCode == 83) {
        // S
        camera.translateZ(speed)
    }
    if (keyCode == 65) {
        // A
        camera.translateX(-speed)
    }
    if (keyCode == 68) {
        // D
        camera.translateX(speed)
    }
    if (keyCode == 32) {
        // Shift
        camera.translateY(speed)
    }
    if (keyCode == 17) {
        // Ctrl
        camera.translateY(-speed)
    }
    if (keyCode == 81) {
        // Q
        camera.rotation.z += speed / 10
    }
    if (keyCode == 69) {
        camera.rotation.z -= speed / 10
    }
    renderer.render(scene, camera);
};

document.addEventListener('mousemove', onMouseMove, false);
function onMouseMove(event) {
    let {movementX, movementY} = event
    movementX = movementX / 1000;
    movementY = movementY / 1000;
    if (moveCamera) {
        const angleY = -movementX
        const angleX = -movementY
        camera.rotateX(angleX)
        camera.rotateY(angleY)
        renderer.render(scene, camera)
    }
}

document.addEventListener('mousedown', onMouseDown, false);
function onMouseDown(event) {
    moveCamera = true
}

document.addEventListener('mouseup', onMouseUp, false);
function onMouseUp(event) {
    moveCamera = false
}
