// Assets and thumbnails management

// Mapping des assets vers leurs nouveaux chemins organisés
const ASSET_PATHS = {
    // Bâtiments résidentiels (Suburban)
    'building-type-a.glb': 'assets/Suburban/GLB format/building-type-a.glb',
    'building-type-b.glb': 'assets/Suburban/GLB format/building-type-b.glb',
    'building-type-c.glb': 'assets/Suburban/GLB format/building-type-c.glb',
    'building-type-d.glb': 'assets/Suburban/GLB format/building-type-d.glb',
    'building-type-e.glb': 'assets/Suburban/GLB format/building-type-e.glb',
    'building-type-f.glb': 'assets/Suburban/GLB format/building-type-f.glb',
    'building-type-g.glb': 'assets/Suburban/GLB format/building-type-g.glb',
    'building-type-h.glb': 'assets/Suburban/GLB format/building-type-h.glb',
    'building-type-i.glb': 'assets/Suburban/GLB format/building-type-i.glb',
    'building-type-j.glb': 'assets/Suburban/GLB format/building-type-j.glb',
    'building-type-k.glb': 'assets/Suburban/GLB format/building-type-k.glb',
    'building-type-l.glb': 'assets/Suburban/GLB format/building-type-l.glb',
    'building-type-m.glb': 'assets/Suburban/GLB format/building-type-m.glb',
    'building-type-n.glb': 'assets/Suburban/GLB format/building-type-n.glb',
    'building-type-o.glb': 'assets/Suburban/GLB format/building-type-o.glb',
    'building-type-p.glb': 'assets/Suburban/GLB format/building-type-p.glb',
    'building-type-q.glb': 'assets/Suburban/GLB format/building-type-q.glb',
    'building-type-r.glb': 'assets/Suburban/GLB format/building-type-r.glb',
    'building-type-s.glb': 'assets/Suburban/GLB format/building-type-s.glb',
    'building-type-t.glb': 'assets/Suburban/GLB format/building-type-t.glb',
    'building-type-u.glb': 'assets/Suburban/GLB format/building-type-u.glb',
    
    // Végétation (Suburban)
    'tree-large.glb': 'assets/Suburban/GLB format/tree-large.glb',
    'tree-small.glb': 'assets/Suburban/GLB format/tree-small.glb',
    'planter.glb': 'assets/Suburban/GLB format/planter.glb',
    
    // Infrastructure (Suburban)
    'path-long.glb': 'assets/Suburban/GLB format/path-long.glb',
    'path-short.glb': 'assets/Suburban/GLB format/path-short.glb',
    'path-stones-long.glb': 'assets/Suburban/GLB format/path-stones-long.glb',
    'path-stones-short.glb': 'assets/Suburban/GLB format/path-stones-short.glb',
    'path-stones-messy.glb': 'assets/Suburban/GLB format/path-stones-messy.glb',
    'fence.glb': 'assets/Suburban/GLB format/fence.glb',
    'fence-low.glb': 'assets/Suburban/GLB format/fence-low.glb',
    'fence-1x2.glb': 'assets/Suburban/GLB format/fence-1x2.glb',
    'fence-1x3.glb': 'assets/Suburban/GLB format/fence-1x3.glb',
    'fence-1x4.glb': 'assets/Suburban/GLB format/fence-1x4.glb',
    'fence-2x2.glb': 'assets/Suburban/GLB format/fence-2x2.glb',
    'fence-2x3.glb': 'assets/Suburban/GLB format/fence-2x3.glb',
    'fence-3x2.glb': 'assets/Suburban/GLB format/fence-3x2.glb',
    'fence-3x3.glb': 'assets/Suburban/GLB format/fence-3x3.glb',
    'driveway-long.glb': 'assets/Suburban/GLB format/driveway-long.glb',
    'driveway-short.glb': 'assets/Suburban/GLB format/driveway-short.glb',
    
    // Routes (Roads)
    'road-straight.glb': 'assets/Roads/GLB format/road-straight.glb',
    'road-straight-half.glb': 'assets/Roads/GLB format/road-straight-half.glb',
    'road-straight-barrier.glb': 'assets/Roads/GLB format/road-straight-barrier.glb',
    'road-straight-barrier-half.glb': 'assets/Roads/GLB format/road-straight-barrier-half.glb',
    'road-straight-barrier-end.glb': 'assets/Roads/GLB format/road-straight-barrier-end.glb',
    'road-curve.glb': 'assets/Roads/GLB format/road-curve.glb',
    'road-curve-pavement.glb': 'assets/Roads/GLB format/road-curve-pavement.glb',
    'road-curve-intersection.glb': 'assets/Roads/GLB format/road-curve-intersection.glb',
    'road-curve-intersection-barrier.glb': 'assets/Roads/GLB format/road-curve-intersection-barrier.glb',
    'road-curve-barrier.glb': 'assets/Roads/GLB format/road-curve-barrier.glb',
    'road-intersection.glb': 'assets/Roads/GLB format/road-intersection.glb',
    'road-intersection-path.glb': 'assets/Roads/GLB format/road-intersection-path.glb',
    'road-intersection-line.glb': 'assets/Roads/GLB format/road-intersection-line.glb',
    'road-intersection-barrier.glb': 'assets/Roads/GLB format/road-intersection-barrier.glb',
    'road-crossroad.glb': 'assets/Roads/GLB format/road-crossroad.glb',
    'road-crossroad-path.glb': 'assets/Roads/GLB format/road-crossroad-path.glb',
    'road-crossroad-line.glb': 'assets/Roads/GLB format/road-crossroad-line.glb',
    'road-crossroad-barrier.glb': 'assets/Roads/GLB format/road-crossroad-barrier.glb',
    'road-crossing.glb': 'assets/Roads/GLB format/road-crossing.glb',
    'road-bridge.glb': 'assets/Roads/GLB format/road-bridge.glb',
    'road-bend.glb': 'assets/Roads/GLB format/road-bend.glb',
    'road-bend-square.glb': 'assets/Roads/GLB format/road-bend-square.glb',
    'road-bend-square-barrier.glb': 'assets/Roads/GLB format/road-bend-square-barrier.glb',
    'road-bend-sidewalk.glb': 'assets/Roads/GLB format/road-bend-sidewalk.glb',
    'road-bend-barrier.glb': 'assets/Roads/GLB format/road-bend-barrier.glb',
    'road-roundabout.glb': 'assets/Roads/GLB format/road-roundabout.glb',
    'road-roundabout-barrier.glb': 'assets/Roads/GLB format/road-roundabout-barrier.glb',
    'road-split.glb': 'assets/Roads/GLB format/road-split.glb',
    'road-split-barrier.glb': 'assets/Roads/GLB format/road-split-barrier.glb',
    'road-square.glb': 'assets/Roads/GLB format/road-square.glb',
    'road-square-barrier.glb': 'assets/Roads/GLB format/road-square-barrier.glb',
    'road-side.glb': 'assets/Roads/GLB format/road-side.glb',
    'road-side-entry.glb': 'assets/Roads/GLB format/road-side-entry.glb',
    'road-side-entry-barrier.glb': 'assets/Roads/GLB format/road-side-entry-barrier.glb',
    'road-side-exit.glb': 'assets/Roads/GLB format/road-side-exit.glb',
    'road-side-exit-barrier.glb': 'assets/Roads/GLB format/road-side-exit-barrier.glb',
    'road-side-barrier.glb': 'assets/Roads/GLB format/road-side-barrier.glb',
    'road-end.glb': 'assets/Roads/GLB format/road-end.glb',
    'road-end-round.glb': 'assets/Roads/GLB format/road-end-round.glb',
    'road-end-round-barrier.glb': 'assets/Roads/GLB format/road-end-round-barrier.glb',
    'road-end-barrier.glb': 'assets/Roads/GLB format/road-end-barrier.glb',
    'road-driveway-single.glb': 'assets/Roads/GLB format/road-driveway-single.glb',
    'road-driveway-single-barrier.glb': 'assets/Roads/GLB format/road-driveway-single-barrier.glb',
    'road-driveway-double.glb': 'assets/Roads/GLB format/road-driveway-double.glb',
    'road-driveway-double-barrier.glb': 'assets/Roads/GLB format/road-driveway-double-barrier.glb',
    'road-slant.glb': 'assets/Roads/GLB format/road-slant.glb',
    'road-slant-high.glb': 'assets/Roads/GLB format/road-slant-high.glb',
    'road-slant-high-barrier.glb': 'assets/Roads/GLB format/road-slant-high-barrier.glb',
    'road-slant-flat.glb': 'assets/Roads/GLB format/road-slant-flat.glb',
    'road-slant-flat-high.glb': 'assets/Roads/GLB format/road-slant-flat-high.glb',
    'road-slant-flat-curve.glb': 'assets/Roads/GLB format/road-slant-flat-curve.glb',
    'road-slant-curve.glb': 'assets/Roads/GLB format/road-slant-curve.glb',
    'road-slant-curve-barrier.glb': 'assets/Roads/GLB format/road-slant-curve-barrier.glb',
    'road-slant-barrier.glb': 'assets/Roads/GLB format/road-slant-barrier.glb',
    
    // Éclairage routier
    'light-square.glb': 'assets/Roads/GLB format/light-square.glb',
    'light-square-double.glb': 'assets/Roads/GLB format/light-square-double.glb',
    'light-square-cross.glb': 'assets/Roads/GLB format/light-square-cross.glb',
    'light-curved.glb': 'assets/Roads/GLB format/light-curved.glb',
    'light-curved-double.glb': 'assets/Roads/GLB format/light-curved-double.glb',
    'light-curved-cross.glb': 'assets/Roads/GLB format/light-curved-cross.glb',
    
    // Signalisation
    'sign-highway.glb': 'assets/Roads/GLB format/sign-highway.glb',
    'sign-highway-wide.glb': 'assets/Roads/GLB format/sign-highway-wide.glb',
    'sign-highway-detailed.glb': 'assets/Roads/GLB format/sign-highway-detailed.glb',
    
    // Construction et barrières
    'construction-light.glb': 'assets/Roads/GLB format/construction-light.glb',
    'construction-cone.glb': 'assets/Roads/GLB format/construction-cone.glb',
    'construction-barrier.glb': 'assets/Roads/GLB format/construction-barrier.glb',
    
    // Ponts et piliers
    'bridge-pillar.glb': 'assets/Roads/GLB format/bridge-pillar.glb',
    'bridge-pillar-wide.glb': 'assets/Roads/GLB format/bridge-pillar-wide.glb',
    
    // Tuiles de terrain
    'tile-high.glb': 'assets/Roads/GLB format/tile-high.glb',
    'tile-low.glb': 'assets/Roads/GLB format/tile-low.glb',
    'tile-slant.glb': 'assets/Roads/GLB format/tile-slant.glb',
    'tile-slantHigh.glb': 'assets/Roads/GLB format/tile-slantHigh.glb',
    
    // Bâtiments commerciaux (Commercial)
    'building-a.glb': 'assets/Commercial/GLB format/building-a.glb',
    'building-b.glb': 'assets/Commercial/GLB format/building-b.glb',
    'building-c.glb': 'assets/Commercial/GLB format/building-c.glb',
    'building-d.glb': 'assets/Commercial/GLB format/building-d.glb',
    'building-e.glb': 'assets/Commercial/GLB format/building-e.glb',
    'building-f.glb': 'assets/Commercial/GLB format/building-f.glb',
    'building-g.glb': 'assets/Commercial/GLB format/building-g.glb',
    'building-h.glb': 'assets/Commercial/GLB format/building-h.glb',
    'building-i.glb': 'assets/Commercial/GLB format/building-i.glb',
    'building-j.glb': 'assets/Commercial/GLB format/building-j.glb',
    'building-k.glb': 'assets/Commercial/GLB format/building-k.glb',
    'building-l.glb': 'assets/Commercial/GLB format/building-l.glb',
    'building-m.glb': 'assets/Commercial/GLB format/building-m.glb',
    'building-n.glb': 'assets/Commercial/GLB format/building-n.glb',
    
    // Gratte-ciels (Commercial)
    'building-skyscraper-a.glb': 'assets/Commercial/GLB format/building-skyscraper-a.glb',
    'building-skyscraper-b.glb': 'assets/Commercial/GLB format/building-skyscraper-b.glb',
    'building-skyscraper-c.glb': 'assets/Commercial/GLB format/building-skyscraper-c.glb',
    'building-skyscraper-d.glb': 'assets/Commercial/GLB format/building-skyscraper-d.glb',
    'building-skyscraper-e.glb': 'assets/Commercial/GLB format/building-skyscraper-e.glb',
    
    // Bâtiments low-detail (Commercial)
    'low-detail-building-a.glb': 'assets/Commercial/GLB format/low-detail-building-a.glb',
    'low-detail-building-b.glb': 'assets/Commercial/GLB format/low-detail-building-b.glb',
    'low-detail-building-c.glb': 'assets/Commercial/GLB format/low-detail-building-c.glb',
    'low-detail-building-d.glb': 'assets/Commercial/GLB format/low-detail-building-d.glb',
    'low-detail-building-e.glb': 'assets/Commercial/GLB format/low-detail-building-e.glb',
    'low-detail-building-f.glb': 'assets/Commercial/GLB format/low-detail-building-f.glb',
    'low-detail-building-g.glb': 'assets/Commercial/GLB format/low-detail-building-g.glb',
    'low-detail-building-h.glb': 'assets/Commercial/GLB format/low-detail-building-h.glb',
    'low-detail-building-i.glb': 'assets/Commercial/GLB format/low-detail-building-i.glb',
    'low-detail-building-j.glb': 'assets/Commercial/GLB format/low-detail-building-j.glb',
    'low-detail-building-k.glb': 'assets/Commercial/GLB format/low-detail-building-k.glb',
    'low-detail-building-l.glb': 'assets/Commercial/GLB format/low-detail-building-l.glb',
    'low-detail-building-m.glb': 'assets/Commercial/GLB format/low-detail-building-m.glb',
    'low-detail-building-n.glb': 'assets/Commercial/GLB format/low-detail-building-n.glb',
    'low-detail-building-wide-a.glb': 'assets/Commercial/GLB format/low-detail-building-wide-a.glb',
    'low-detail-building-wide-b.glb': 'assets/Commercial/GLB format/low-detail-building-wide-b.glb',
    
    // Détails commerciaux (Commercial)
    'detail-awning.glb': 'assets/Commercial/GLB format/detail-awning.glb',
    'detail-awning-wide.glb': 'assets/Commercial/GLB format/detail-awning-wide.glb',
    'detail-overhang.glb': 'assets/Commercial/GLB format/detail-overhang.glb',
    'detail-overhang-wide.glb': 'assets/Commercial/GLB format/detail-overhang-wide.glb',
    'detail-parasol-a.glb': 'assets/Commercial/GLB format/detail-parasol-a.glb',
    'detail-parasol-b.glb': 'assets/Commercial/GLB format/detail-parasol-b.glb',
    
    // Bâtiments industriels (Industrial)
    'industrial-building-a.glb': 'assets/Industrial/GLB format/building-a.glb',
    'industrial-building-b.glb': 'assets/Industrial/GLB format/building-b.glb',
    'industrial-building-c.glb': 'assets/Industrial/GLB format/building-c.glb',
    'industrial-building-d.glb': 'assets/Industrial/GLB format/building-d.glb',
    'industrial-building-e.glb': 'assets/Industrial/GLB format/building-e.glb',
    'industrial-building-f.glb': 'assets/Industrial/GLB format/building-f.glb',
    'industrial-building-g.glb': 'assets/Industrial/GLB format/building-g.glb',
    'industrial-building-h.glb': 'assets/Industrial/GLB format/building-h.glb',
    'industrial-building-i.glb': 'assets/Industrial/GLB format/building-i.glb',
    'industrial-building-j.glb': 'assets/Industrial/GLB format/building-j.glb',
    'industrial-building-k.glb': 'assets/Industrial/GLB format/building-k.glb',
    'industrial-building-l.glb': 'assets/Industrial/GLB format/building-l.glb',
    'industrial-building-m.glb': 'assets/Industrial/GLB format/building-m.glb',
    'industrial-building-n.glb': 'assets/Industrial/GLB format/building-n.glb',
    'industrial-building-o.glb': 'assets/Industrial/GLB format/building-o.glb',
    'industrial-building-p.glb': 'assets/Industrial/GLB format/building-p.glb',
    'industrial-building-q.glb': 'assets/Industrial/GLB format/building-q.glb',
    'industrial-building-r.glb': 'assets/Industrial/GLB format/building-r.glb',
    'industrial-building-s.glb': 'assets/Industrial/GLB format/building-s.glb',
    'industrial-building-t.glb': 'assets/Industrial/GLB format/building-t.glb',
    
    // Cheminées industrielles (Industrial)
    'chimney-basic.glb': 'assets/Industrial/GLB format/chimney-basic.glb',
    'chimney-small.glb': 'assets/Industrial/GLB format/chimney-small.glb',
    'chimney-medium.glb': 'assets/Industrial/GLB format/chimney-medium.glb',
    'chimney-large.glb': 'assets/Industrial/GLB format/chimney-large.glb',
    
    // Détails industriels (Industrial)
    'detail-tank.glb': 'assets/Industrial/GLB format/detail-tank.glb'
};

// Fonction pour obtenir le chemin correct d'un asset
function getAssetPath(assetName) {
    return ASSET_PATHS[assetName] || `assets/GLB format/${assetName}`;
}

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
        getAssetPath(assetName),
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
        const assetPath = getAssetPath(assetName);
        
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