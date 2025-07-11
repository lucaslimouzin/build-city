// Main application

// Initialize 3D application
function init() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(CONFIG.COLORS.BACKGROUND);

    // Create orthographic camera for isometric view
    const aspect = window.innerWidth / window.innerHeight;
    // Mobile adjustment: more zoom to see the whole board
    const frustumSize = window.innerWidth < 768 ? CONFIG.CAMERA.FRUSTUM_SIZE.MOBILE : CONFIG.CAMERA.FRUSTUM_SIZE.DESKTOP;
    camera = new THREE.OrthographicCamera(
        frustumSize * aspect / -2,
        frustumSize * aspect / 2,
        frustumSize / 2,
        frustumSize / -2,
        1,
        1000
    );

    // Isometric position (45° in Y and ~35.26° in X for true isometry)
    camera.position.set(CONFIG.CAMERA.POSITION.x, CONFIG.CAMERA.POSITION.y, CONFIG.CAMERA.POSITION.z);
    camera.lookAt(CONFIG.CAMERA.LOOK_AT.x, CONFIG.CAMERA.LOOK_AT.y, CONFIG.CAMERA.LOOK_AT.z);

    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(renderer.domElement);

    // Camera controls with zoom and panning enabled
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    
    // Disable rotation for fixed isometric view
    controls.enableRotate = false;
    
    // Enable zoom and panning
    controls.enableZoom = true;
    controls.enablePan = true;
    
    // Zoom configuration
    controls.minZoom = CONFIG.CONTROLS.MIN_ZOOM;
    controls.maxZoom = CONFIG.CONTROLS.MAX_ZOOM;
    controls.zoomSpeed = CONFIG.CONTROLS.ZOOM_SPEED;
    
    // Panning configuration
    controls.panSpeed = CONFIG.CONTROLS.PAN_SPEED;
    controls.screenSpacePanning = true;
    
    // Touch support
    controls.touches.ONE = THREE.TOUCH.PAN;
    controls.touches.TWO = THREE.TOUCH.DOLLY;

    // Initialize GLB loader
    gltfLoader = new THREE.GLTFLoader();

    // Create board
    createBoard();

    // Lighting
    createLighting();

    // Initialize raycaster and mouse
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);
    
    // Handle mouse and touch events
    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('click', onMouseClick, false);
    
    // Touch support for mobile
    window.addEventListener('touchmove', onTouchMove, false);
    window.addEventListener('touchend', onTouchEnd, false);

    // Generate asset thumbnails
    generateAssetPreviews();
    
    // Initialize zoom buttons
    initZoomButtons();
}

// Render loop
function animate() {
    requestAnimationFrame(animate);
    
    // Update controls
    controls.update();
    
    // Render scene
    renderer.render(scene, camera);
}

// Zoom button functions
function initZoomButtons() {
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    
    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => zoomCamera(1.2));
        zoomInBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            zoomCamera(1.2);
        });
    }
    
    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => zoomCamera(0.8));
        zoomOutBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            zoomCamera(0.8);
        });
    }
}

function zoomCamera(factor) {
    if (camera && controls) {
        // For orthographic cameras, we need to adjust the camera scale
        const currentZoom = camera.zoom;
        const newZoom = currentZoom * factor;
        
        // Apply zoom limits
        const clampedZoom = THREE.MathUtils.clamp(
            newZoom, 
            CONFIG.CONTROLS.MIN_ZOOM, 
            CONFIG.CONTROLS.MAX_ZOOM
        );
        
        camera.zoom = clampedZoom;
        camera.updateProjectionMatrix();
        
        // Update controls internal zoom state
        controls.update();
    }
}

// Start application
window.addEventListener('load', () => {
    init();
    animate();
});
