class Stairs {

    constructor({scene, numSteps = 10, stepHeight = 1, stepDepth = 1, stepWidth = 3}) {
        this.scene = scene
        this.numSteps = numSteps
        this.stepHeight = stepHeight
        this.stepWidth = stepWidth
        this.stepDepth = stepDepth
    }

    render() {
        const stepMaterial = new THREE.MeshPhongMaterial({
            color: 'white'
        })

        for (let i = 1 ; i <= this.numSteps ; i++) {
            const stepGeometry = new THREE.BoxGeometry(this.stepHeight * 2 * (this.numSteps - i + 1), this.stepDepth, this.stepWidth)
            console.log(this.stepHeight * (this.numSteps - i))
            const step = new THREE.Mesh(stepGeometry, stepMaterial)
            scene.add(step)
            step.position.y = i * this.stepHeight
            step.position.x = i * -this.stepHeight
        }
    }

}