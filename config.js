// Global application configuration
const CONFIG = {
    BOARD_SIZE: 8,
    CASE_SIZE: 64,
    
    // Camera settings
    CAMERA: {
        POSITION: { x: 300, y: 300, z: 300 },
        LOOK_AT: { x: 0, y: 0, z: 0 },
        FRUSTUM_SIZE: {
            MOBILE: 1800,
            DESKTOP: 1600
        }
    },
    
    // Controls settings
    CONTROLS: {
        MIN_ZOOM: 0.3,
        MAX_ZOOM: 4.0,
        ZOOM_SPEED: 1.2,
        PAN_SPEED: 1.0
    },
    
    // Object placement height
    OBJECT_HEIGHT: 2.1,
    
    // Colors
    COLORS: {
        BOARD_LINES: 0x000000,
        HOVER_SURFACE: 0xffffff,
        BACKGROUND: 0x333333
    }
};

// Global variables
let scene, camera, renderer, controls;
let raycaster, mouse;
let gltfLoader;
let cases = [];
let placedObjects = new Map();
let selectedCases = new Set();
let selectedAsset = null;
let loadedModels = new Map(); 