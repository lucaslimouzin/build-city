// Assets and thumbnails management

// Generate 3D thumbnails for buttons
function generateAssetPreviews() {
    // Use tab function if it exists
    if (typeof generateCategoryPreviews === 'function') {
        generateCategoryPreviews();
    } else {
        // Fallback to old method
        const deleteCanvas = document.querySelector('[onclick="selectAsset(null)"] .asset-preview');
        if (deleteCanvas) {
            createDeleteIcon(deleteCanvas);
        }
        
        const assetButtons = document.querySelectorAll('[data-asset]');
        assetButtons.forEach(button => {
            const assetName = button.getAttribute('data-asset');
            const canvas = button.querySelector('.asset-preview');
            if (canvas) {
                generateModelPreview(assetName, canvas);
            }
        });
    }
}

// Create delete icon
function createDeleteIcon(canvas) {
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, size, size);
    
    // Draw stylized trash can (proportional to size)
    const scale = size / 50;
    ctx.strokeStyle = '#ff4444';
    ctx.lineWidth = 2 * scale;
    ctx.fillStyle = '#ff4444';
    
    // Trash can body
    ctx.fillRect(14 * scale, 18 * scale, 20 * scale, 22 * scale);
    ctx.strokeRect(14 * scale, 18 * scale, 20 * scale, 22 * scale);
    
    // Lid
    ctx.fillRect(11 * scale, 15 * scale, 26 * scale, 3 * scale);
    
    // Handle
    ctx.strokeStyle = '#ff4444';
    ctx.beginPath();
    ctx.arc(24 * scale, 13 * scale, 3 * scale, Math.PI, 0);
    ctx.stroke();
    
    // Vertical lines
    ctx.beginPath();
    ctx.moveTo(19 * scale, 22 * scale);
    ctx.lineTo(19 * scale, 36 * scale);
    ctx.moveTo(24 * scale, 22 * scale);
    ctx.lineTo(24 * scale, 36 * scale);
    ctx.moveTo(29 * scale, 22 * scale);
    ctx.lineTo(29 * scale, 36 * scale);
    ctx.stroke();
}

// Shared renderer for all thumbnails (to avoid WebGL context limit)
let sharedPreviewRenderer = null;
let sharedPreviewCanvas = null;

// Initialize shared preview renderer
function initSharedPreviewRenderer() {
    if (!sharedPreviewRenderer) {
        // Create an offscreen canvas for rendering
        sharedPreviewCanvas = document.createElement('canvas');
        sharedPreviewCanvas.width = 44;
        sharedPreviewCanvas.height = 44;
        
        sharedPreviewRenderer = new THREE.WebGLRenderer({ 
            canvas: sharedPreviewCanvas, 
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true
        });
        sharedPreviewRenderer.setSize(44, 44);
        sharedPreviewRenderer.setClearColor(CONFIG.COLORS.BACKGROUND, 1);
    }
}

// Generate 3D thumbnail for a GLB model using shared renderer
function generateModelPreview(assetName, targetCanvas) {
    // Initialize shared renderer if needed
    initSharedPreviewRenderer();
    
    // Configure thumbnail scene
    const previewScene = new THREE.Scene();
    previewScene.background = new THREE.Color(CONFIG.COLORS.BACKGROUND);
    
    // Camera for thumbnail
    const previewCamera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    previewCamera.position.set(2, 2, 2);
    previewCamera.lookAt(0, 0, 0);
    
    // Lighting for thumbnail
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    previewScene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    previewScene.add(directionalLight);
    
    // Load model
    gltfLoader.load(
        `assets/GLB format/${assetName}`,
        (gltf) => {
            const model = gltf.scene.clone();
            
            // Center and resize model for thumbnail
            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3());
            const center = box.getCenter(new THREE.Vector3());
            
            // Normalize size
            const maxDimension = Math.max(size.x, size.y, size.z);
            if (maxDimension > 0) {
                model.scale.setScalar(1.5 / maxDimension);
            }
            
            // Center model
            model.position.sub(center.multiplyScalar(model.scale.x));
            
            previewScene.add(model);
            
            // Render to shared canvas
            sharedPreviewRenderer.render(previewScene, previewCamera);
            
            // Copy rendered result to target canvas
            const targetCtx = targetCanvas.getContext('2d');
            targetCtx.drawImage(sharedPreviewCanvas, 0, 0);
            
            // Clean up scene
            previewScene.clear();
        },
        undefined,
        (error) => {
            // Create default thumbnail
            createFallbackPreview(targetCanvas, assetName);
        }
    );
}

// Create fallback thumbnail
function createFallbackPreview(canvas, assetName) {
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, size, size);
    
    // Draw simple 3D cube
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 1;
    
    const scale = size / 50;
    
    // Front face
    ctx.strokeRect(10 * scale, 15 * scale, 20 * scale, 20 * scale);
    // Right face
    ctx.beginPath();
    ctx.moveTo(30 * scale, 15 * scale);
    ctx.lineTo(35 * scale, 10 * scale);
    ctx.lineTo(35 * scale, 30 * scale);
    ctx.lineTo(30 * scale, 35 * scale);
    ctx.stroke();
    // Top face
    ctx.beginPath();
    ctx.moveTo(10 * scale, 15 * scale);
    ctx.lineTo(15 * scale, 10 * scale);
    ctx.lineTo(35 * scale, 10 * scale);
    ctx.lineTo(30 * scale, 15 * scale);
    ctx.stroke();
    
    // Indicator text
    ctx.fillStyle = '#aaa';
    ctx.font = `${8 * scale}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('GLB', 25 * scale, 45 * scale);
}

// Asset selection
function selectAsset(assetName) {
    selectedAsset = assetName;
    
    // Remove selection from all buttons
    document.querySelectorAll('.asset-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selection to the right button
    if (assetName) {
        // Find button corresponding to asset
        const targetBtn = document.querySelector(`[data-asset="${assetName}"]`);
        if (targetBtn) {
            targetBtn.classList.add('selected');
        }
        
        // Handle tab switching if function exists
        if (typeof handleAssetTabSwitch === 'function') {
            handleAssetTabSwitch(assetName);
        }
    } else {
        // Delete mode: select first button (trash)
        const deleteBtn = document.querySelector('[onclick="selectAsset(null)"]');
        if (deleteBtn) {
            deleteBtn.classList.add('selected');
        }
    }
}

// Load and place a GLB model
function loadAndPlaceModel(assetName, caseObject) {
    if (loadedModels.has(assetName)) {
        // Model already cached, clone directly
        const originalModel = loadedModels.get(assetName);
        const clonedModel = originalModel.clone();
        placeModelOnCase(clonedModel, caseObject);
    } else {
        // Load model for the first time
        const assetPath = `assets/GLB format/${assetName}`;
        
        gltfLoader.load(
            assetPath,
            (gltf) => {
                const model = gltf.scene;
                loadedModels.set(assetName, model);
                
                const clonedModel = model.clone();
                placeModelOnCase(clonedModel, caseObject);
            },
            undefined,
            (error) => {
                createFallbackObject(caseObject);
            }
        );
    }
}

// Place model on a cell
function placeModelOnCase(model, caseObject) {
    const { x, z } = caseObject.userData;
    
    // Remove old object if it exists
    if (placedObjects.has(caseObject)) {
        const oldObject = placedObjects.get(caseObject);
        scene.remove(oldObject);
        placedObjects.delete(caseObject);
    }
    
    // Position the new model
    model.position.set(x, CONFIG.OBJECT_HEIGHT, z);
    
    // Resize model to 100% of cell (64x64)
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const maxDimension = Math.max(size.x, size.z); // Use X and Z for base
    
    if (maxDimension > 0) {
        const scale = CONFIG.CASE_SIZE / maxDimension;
        model.scale.setScalar(scale);
    }
    
    // Add to scene and remember
    scene.add(model);
    placedObjects.set(caseObject, model);
}

// Create fallback object for debugging
function createFallbackObject(caseObject) {
    const { x, z } = caseObject.userData;
    
    const geometry = new THREE.BoxGeometry(CONFIG.CASE_SIZE * 0.8, 20, CONFIG.CASE_SIZE * 0.8);
    const material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(x, CONFIG.OBJECT_HEIGHT, z);
    
    // Remove old object if it exists
    if (placedObjects.has(caseObject)) {
        const oldObject = placedObjects.get(caseObject);
        scene.remove(oldObject);
    }
    
    scene.add(cube);
    placedObjects.set(caseObject, cube);
}

// Remove object from a cell
function removeObjectFromCase(caseObject) {
    if (placedObjects.has(caseObject)) {
        const object = placedObjects.get(caseObject);
        scene.remove(object);
        placedObjects.delete(caseObject);
    }
}

// Rotate object on a cell by 90 degrees
function rotateObjectOnCase(caseObject) {
    if (placedObjects.has(caseObject)) {
        const object = placedObjects.get(caseObject);
        object.rotation.y += Math.PI / 2;
    }
} 