class Stairs {

    constructor({scene, numSteps = 11, stepHeight = 0.3, stepDepth = 10, stepWidth = 0.5, rests = 3}) {
        this.scene = scene
        this.numSteps = numSteps
        this.stepHeight = stepHeight
        this.stepWidth = stepWidth
        this.stepDepth = stepDepth
        this.rests = rests
    }

    render() {
        const stepMaterial = new THREE.MeshPhongMaterial({
            color: 'white'
        })
        let stepsGeometries = []

        for (let i = 1 ; i <= this.numSteps ; i++) {
            const stepGeometry = new THREE.BoxGeometry(this.stepHeight * 2 * (this.numSteps - i + 1), this.stepWidth,  this.stepDepth)
            stepGeometry.translate(i * -this.stepHeight, i * this.stepHeight, this.stepWidth)
            console.log(this.stepHeight * (this.numSteps - i))
            stepsGeometries.push(stepGeometry)    
        }
    
        const stairsGeometry = THREE.BufferGeometryUtils.mergeBufferGeometries(stepsGeometries)
        const stairsObj = new THREE.Mesh(stairsGeometry, stepMaterial)
        return stairsObj
    }

    renderV2() {
        const vertices = [
            // front
            { pos: [-1, -1,  1], norm: [ 0,  0,  1], uv: [0, 0], },
            { pos: [ 1, -1,  1], norm: [ 0,  0,  1], uv: [1, 0], },
            { pos: [-1,  1,  1], norm: [ 0,  0,  1], uv: [0, 1], },
           
            { pos: [-1,  1,  1], norm: [ 0,  0,  1], uv: [0, 1], },
            { pos: [ 1, -1,  1], norm: [ 0,  0,  1], uv: [1, 0], },
            { pos: [ 1,  1,  1], norm: [ 0,  0,  1], uv: [1, 1], },
            // right
            { pos: [ 1, -1,  1], norm: [ 1,  0,  0], uv: [0, 0], },
            { pos: [ 1, -1, -1], norm: [ 1,  0,  0], uv: [1, 0], },
            { pos: [ 1,  1,  1], norm: [ 1,  0,  0], uv: [0, 1], },
           
            { pos: [ 1,  1,  1], norm: [ 1,  0,  0], uv: [0, 1], },
            { pos: [ 1, -1, -1], norm: [ 1,  0,  0], uv: [1, 0], },
            { pos: [ 1,  1, -1], norm: [ 1,  0,  0], uv: [1, 1], },
            // back
            { pos: [ 1, -1, -1], norm: [ 0,  0, -1], uv: [0, 0], },
            { pos: [-1, -1, -1], norm: [ 0,  0, -1], uv: [1, 0], },
            { pos: [ 1,  1, -1], norm: [ 0,  0, -1], uv: [0, 1], },
           
            { pos: [ 1,  1, -1], norm: [ 0,  0, -1], uv: [0, 1], },
            { pos: [-1, -1, -1], norm: [ 0,  0, -1], uv: [1, 0], },
            { pos: [-1,  1, -1], norm: [ 0,  0, -1], uv: [1, 1], },
            // left
            { pos: [-1, -1, -1], norm: [-1,  0,  0], uv: [0, 0], },
            { pos: [-1, -1,  1], norm: [-1,  0,  0], uv: [1, 0], },
            { pos: [-1,  1, -1], norm: [-1,  0,  0], uv: [0, 1], },
           
            { pos: [-1,  1, -1], norm: [-1,  0,  0], uv: [0, 1], },
            { pos: [-1, -1,  1], norm: [-1,  0,  0], uv: [1, 0], },
            { pos: [-1,  1,  1], norm: [-1,  0,  0], uv: [1, 1], },
            // top
            { pos: [ 1,  1, -1], norm: [ 0,  1,  0], uv: [0, 0], },
            { pos: [-1,  1, -1], norm: [ 0,  1,  0], uv: [1, 0], },
            { pos: [ 1,  1,  1], norm: [ 0,  1,  0], uv: [0, 1], },
           
            { pos: [ 1,  1,  1], norm: [ 0,  1,  0], uv: [0, 1], },
            { pos: [-1,  1, -1], norm: [ 0,  1,  0], uv: [1, 0], },
            { pos: [-1,  1,  1], norm: [ 0,  1,  0], uv: [1, 1], },
            // bottom
            { pos: [ 1, -1,  1], norm: [ 0, -1,  0], uv: [0, 0], },
            { pos: [-1, -1,  1], norm: [ 0, -1,  0], uv: [1, 0], },
            { pos: [ 1, -1, -1], norm: [ 0, -1,  0], uv: [0, 1], },
           
            { pos: [ 1, -1, -1], norm: [ 0, -1,  0], uv: [0, 1], },
            { pos: [-1, -1,  1], norm: [ 0, -1,  0], uv: [1, 0], },
            { pos: [-1, -1, -1], norm: [ 0, -1,  0], uv: [1, 1], },
          ];

          const positions = [];
          const normals = [];
          const uvs = [];
          for (const vertex of vertices) {
            positions.push(...vertex.pos);
            normals.push(...vertex.norm);
            uvs.push(...vertex.uv);
          }

          const geometry = new THREE.BufferGeometry();
          const positionNumComponents = 3;
          const normalNumComponents = 3;
          const uvNumComponents = 2;
          geometry.setAttribute(
              'position',
              new THREE.BufferAttribute(new Float32Array(positions), positionNumComponents));
          geometry.setAttribute(
              'normal',
              new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents));
          geometry.setAttribute(
              'uv',
              new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents));
        
            makeInstance(geometry, 0x88FF88,  0)
            makeInstance(geometry, 0x8888FF, -4)
            makeInstance(geometry, 0xFF8888,  4)
        }
        
        renderV3() {

            const geometry = new THREE.BufferGeometry()
            let positions = []
            let positionsArr = []

            for (let i = 0 ; i < 8 ; i += 4) {
                const zPos = Math.floor(i / 4);

                positions[i] = [-1, -1 * zPos, -zPos] 
                positionsArr.push(...positions[i])
                positions[i + 1] = [-1, (-1 * zPos) - 1, -zPos]
                positionsArr.push(...positions[i + 1])
                positions[i + 2] = [1, (1 * zPos) + 1, -zPos]
                positionsArr.push(...positions[i + 2]) 
                positions[i + 3] = [1, 1 * zPos, -zPos]
                positionsArr.push(...positions[i + 3])
            }
            for (let i = 8 ; i < 12 ; i+=4) {
                positions[i] = [-1, 0, -2] 
                positionsArr.push(...positions[i])

                positions[i + 3] = [1, 0, -2]
                positionsArr.push(...positions[i + 3])
                
                positions[i + 2] = [1, 2, -2]
                positionsArr.push(...positions[i + 2])

                positions[i + 1] = [-1, -2, -2]
                positionsArr.push(...positions[i + 1])
            }
            console.log(positions)

            geometry.setAttribute(
                'position',
                new THREE.BufferAttribute(new Float32Array(positionsArr), 3));

            makeInstance(geometry, 0x88FF88, 0)
            geometry.setIndex([
                0, 2, 1,    0, 3, 2,
                1, 7, 4,    1, 2, 7,
                4, 6, 5,    4, 7, 6,
                5, 10, 9,   5, 6, 10,
                8, 10, 9,   8, 11, 10,
                0, 11, 8,   0, 3, 11,
                3, 7, 2,    3, 11, 7,   7, 11, 6,   6, 11, 19,
                
            ])
        }

}