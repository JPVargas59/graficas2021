class Buildings {

    buildings = [];

    constructor({scene, numBuildings = 20, rows = 20}) {
        this.scene = scene
        this.numBuildings = numBuildings
        this.rows = rows
    }

    render() {
        const buildingMaterial = new THREE.MeshPhongMaterial({
            color: 'grey'
        })


        for (let i = 0 ; i < this.rows ; i++) {
            this.buildings[i] = []
            for (let j = 0 ; j < this.numBuildings ; j++) {
                let height = Math.floor(Math.random() * 100) + 50
                let width = 30
                const buildingGeometry = new THREE.BoxGeometry(width, height, width)
                this.buildings[i][j] = new THREE.Mesh(buildingGeometry, buildingMaterial)
                this.buildings[i][j].position.z = -(this.numBuildings * (width + width / 2) / 2) + (i * (width + width / 2))
                this.buildings[i][j].position.y += height / 2
                this.buildings[i][j].position.x = ((width + width / 2) * j) - (this.numBuildings * (width + width / 2) / 2)

                if (i >= (this.numBuildings / 2)  && i <= (this.numBuildings / 2) && j >= (this.rows / 2) && j <= (this.rows / 2)) {
                    this.buildings[i][j] = undefined
                }
                scene.add(this.buildings[i][j])


            }
        }
    }

}