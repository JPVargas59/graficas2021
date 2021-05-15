class Buildings {

    buildings = [];

    constructor({scene, numBuildings = 20, rows = 20}) {
        this.scene = scene
        this.numBuildings = numBuildings
        this.rows = rows
    }

    render() {

        const textures = []
        const numTextures = 4
        for (let i = 1 ; i <= numTextures ; i++) {
            textures.push(loader.load(`../textureMaps/building_${i}.jpg`))
        }

        for (let i = 0 ; i < this.rows ; i++) {
            this.buildings[i] = []
            for (let j = 0 ; j < this.numBuildings ; j++) {
                const buildingMaterial = new THREE.MeshBasicMaterial({
                    color: 'grey', 
                    map: textures[Math.floor(Math.random() * numTextures)]
                })
                let height = Math.floor(Math.random() * 200) + 20
                let width = 30
                const buildingGeometry = new THREE.BoxGeometry(width, height, width)
                this.buildings[i][j] = new THREE.Mesh(buildingGeometry, buildingMaterial)
                this.buildings[i][j].position.z = -(this.numBuildings * (width + width / 2) / 2) + (i * (width + width / 2))
                this.buildings[i][j].position.y += height / 2 - 20
                this.buildings[i][j].position.x = ((width + width / 2) * j) - (this.numBuildings * (width + width / 2) / 2) - 20 

                if (i >= (this.numBuildings / 2)  && i <= (this.numBuildings / 2) && j >= (this.rows / 2) && j <= (this.rows / 2)) {
                    this.buildings[i][j] = undefined
                }
                scene.add(this.buildings[i][j])
            }
        }
    }

}