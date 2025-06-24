// Game board management

// Create 8x8 board with optimized borders
function createBoard() {
    const boardGroup = new THREE.Group();
    
    // Material for black lines
    const lineMaterial = new THREE.LineBasicMaterial({ 
        color: CONFIG.COLORS.BOARD_LINES,
        linewidth: 2
    });

    for (let row = 0; row < CONFIG.BOARD_SIZE; row++) {
        for (let col = 0; col < CONFIG.BOARD_SIZE; col++) {
            // Cell position
            const x = (col - CONFIG.BOARD_SIZE/2 + 0.5) * CONFIG.CASE_SIZE;
            const z = (row - CONFIG.BOARD_SIZE/2 + 0.5) * CONFIG.CASE_SIZE;

            // Create only necessary borders to avoid duplicates
            const halfSize = CONFIG.CASE_SIZE / 2;
            
            // Top border (only if first row)
            if (row === 0) {
                const topGeometry = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(x - halfSize, 0, z - halfSize),
                    new THREE.Vector3(x + halfSize, 0, z - halfSize)
                ]);
                const topLine = new THREE.Line(topGeometry, lineMaterial);
                boardGroup.add(topLine);
            }
            
            // Bottom border (only if last row)
            if (row === CONFIG.BOARD_SIZE - 1) {
                const bottomGeometry = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(x - halfSize, 0, z + halfSize),
                    new THREE.Vector3(x + halfSize, 0, z + halfSize)
                ]);
                const bottomLine = new THREE.Line(bottomGeometry, lineMaterial);
                boardGroup.add(bottomLine);
            }
            
            // Left border (only if first column)
            if (col === 0) {
                const leftGeometry = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(x - halfSize, 0, z - halfSize),
                    new THREE.Vector3(x - halfSize, 0, z + halfSize)
                ]);
                const leftLine = new THREE.Line(leftGeometry, lineMaterial);
                boardGroup.add(leftLine);
            }
            
            // Right border (only if last column)
            if (col === CONFIG.BOARD_SIZE - 1) {
                const rightGeometry = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(x + halfSize, 0, z - halfSize),
                    new THREE.Vector3(x + halfSize, 0, z + halfSize)
                ]);
                const rightLine = new THREE.Line(rightGeometry, lineMaterial);
                boardGroup.add(rightLine);
            }
            
            // Interior horizontal lines
            if (row < CONFIG.BOARD_SIZE - 1) {
                const hLineGeometry = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(x - halfSize, 0, z + halfSize),
                    new THREE.Vector3(x + halfSize, 0, z + halfSize)
                ]);
                const hLine = new THREE.Line(hLineGeometry, lineMaterial);
                boardGroup.add(hLine);
            }
            
            // Interior vertical lines
            if (col < CONFIG.BOARD_SIZE - 1) {
                const vLineGeometry = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(x + halfSize, 0, z - halfSize),
                    new THREE.Vector3(x + halfSize, 0, z + halfSize)
                ]);
                const vLine = new THREE.Line(vLineGeometry, lineMaterial);
                boardGroup.add(vLine);
            }

            // Create invisible cube for hover detection
            const caseGeometry = new THREE.BoxGeometry(CONFIG.CASE_SIZE, 4, CONFIG.CASE_SIZE);
            const invisibleMaterial = new THREE.MeshBasicMaterial({ 
                transparent: true, 
                opacity: 0 
            });
            const invisibleCube = new THREE.Mesh(caseGeometry, invisibleMaterial);
            invisibleCube.position.set(x, 0, z);

            // Create white hover surface (initially invisible)
            const planeGeometry = new THREE.PlaneGeometry(CONFIG.CASE_SIZE, CONFIG.CASE_SIZE);
            const hoverMaterial = new THREE.MeshBasicMaterial({ 
                color: CONFIG.COLORS.HOVER_SURFACE, 
                transparent: true,
                opacity: 0.8
            });
            const hoverPlane = new THREE.Mesh(planeGeometry, hoverMaterial);
            hoverPlane.rotation.x = -Math.PI / 2;
            hoverPlane.position.set(x, CONFIG.OBJECT_HEIGHT, z);
            hoverPlane.visible = false;

            // Store references
            invisibleCube.userData = { 
                hoverPlane: hoverPlane,
                row: row,
                col: col,
                x: x,
                z: z
            };
            
            cases.push(invisibleCube);
            boardGroup.add(invisibleCube);
            boardGroup.add(hoverPlane);
        }
    }

    scene.add(boardGroup);
}

// Create lighting
function createLighting() {
    const ambientLight = new THREE.AmbientLight(0x6b6b6b, 0.6);
    scene.add(ambientLight);

    const hemisphereLight = new THREE.HemisphereLight(0x87CEEB, 0x8B4513, 0.5);
    hemisphereLight.position.set(0, 200, 0);
    scene.add(hemisphereLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(200, 400, 200);
    directionalLight.castShadow = true;
    
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 1000;
    directionalLight.shadow.camera.left = -600;
    directionalLight.shadow.camera.right = 600;
    directionalLight.shadow.camera.top = 600;
    directionalLight.shadow.camera.bottom = -600;
    directionalLight.shadow.bias = -0.0001;

    scene.add(directionalLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-200, 300, -200);
    scene.add(fillLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 0.6, 800);
    pointLight1.position.set(-300, 250, -300);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.6, 800);
    pointLight2.position.set(300, 250, 300);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffffff, 0.4, 600);
    pointLight3.position.set(-300, 200, 300);
    scene.add(pointLight3);

    const pointLight4 = new THREE.PointLight(0xffffff, 0.4, 600);
    pointLight4.position.set(300, 200, -300);
    scene.add(pointLight4);
} 