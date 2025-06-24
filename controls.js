// Controls and events management

// Update mouse position
function updateMousePosition(clientX, clientY) {
    const rect = renderer.domElement.getBoundingClientRect();
    
    mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    
    // Update raycaster
    raycaster.setFromCamera(mouse, camera);
    
    // Reset previous hovers
    cases.forEach(caseObj => {
        if (caseObj.userData.hoverPlane && !selectedCases.has(caseObj)) {
            caseObj.userData.hoverPlane.visible = false;
        }
    });
    
    // Intersection with cells
    const intersects = raycaster.intersectObjects(cases);
    if (intersects.length > 0) {
        const hoveredCase = intersects[0].object;
        if (hoveredCase.userData.hoverPlane && !selectedCases.has(hoveredCase)) {
            hoveredCase.userData.hoverPlane.visible = true;
        }
    }
}

// Handle mouse movement
function onMouseMove(event) {
    updateMousePosition(event.clientX, event.clientY);
}

// Handle touch movement (don't interfere with zoom/pan)
function onTouchMove(event) {
    // Don't preventDefault to let OrbitControls handle zoom/pan
    if (event.touches.length === 1) {
        const touch = event.touches[0];
        updateMousePosition(touch.clientX, touch.clientY);
    }
}

// Common function to handle clicks/touches
function handleInteraction(clientX, clientY, eventType = 'click') {
    console.log(`🖱️ ${eventType} detected at position:`, clientX, clientY);
    
    // Calculate normalized coordinates
    mouse.x = (clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(clientY / window.innerHeight) * 2 + 1;
    console.log(`📐 Normalized coordinates:`, mouse.x, mouse.y);

    // Update raycaster
    raycaster.setFromCamera(mouse, camera);

    // Intersection with cells
    const intersects = raycaster.intersectObjects(cases);
    console.log(`🎯 Intersections found:`, intersects.length);

    if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        const { row, col } = clickedObject.userData;
        console.log(`📍 Cell clicked: row=${row}, column=${col}`);
        
        if (selectedAsset) {
            // Check if cell already has an object
            if (placedObjects.has(clickedObject)) {
                console.log(`🔄 Rotating existing object on cell`);
                // Rotate existing object instead of replacing
                rotateObjectOnCase(clickedObject);
            } else {
                console.log(`🎨 Placing asset: ${selectedAsset}`);
                // Place selected asset on empty cell
                loadAndPlaceModel(selectedAsset, clickedObject);
            }
            clickedObject.userData.hoverPlane.visible = false;
        } else {
            console.log(`🗑️ Delete mode activated`);
            // Delete mode
            removeObjectFromCase(clickedObject);
            clickedObject.userData.hoverPlane.visible = false;
            if (selectedCases.has(clickedObject)) {
                selectedCases.delete(clickedObject);
            }
        }
    } else {
        console.log(`❌ No cell found at ${eventType}`);
    }
}

// Handle mouse clicks
function onMouseClick(event) {
    // Avoid clicks on interface
    if (event.target.classList.contains('asset-btn') || event.target.closest('#controls')) {
        return;
    }
    
    handleInteraction(event.clientX, event.clientY, 'mouse click');
}

// Handle touch events (for selection only)
function onTouchEnd(event) {
    // Avoid touches on interface
    if (event.target.classList.contains('asset-btn') || event.target.closest('#controls')) {
        return;
    }
    
    // Only for simple tap (not zoom/pan gestures)
    if (event.changedTouches.length === 1) {
        const touch = event.changedTouches[0];
        handleInteraction(touch.clientX, touch.clientY, 'touch');
    }
}

// Handle window resize
function onWindowResize() {
    const aspect = window.innerWidth / window.innerHeight;
    const frustumSize = window.innerWidth < 768 ? CONFIG.CAMERA.FRUSTUM_SIZE.MOBILE : CONFIG.CAMERA.FRUSTUM_SIZE.DESKTOP;
    
    camera.left = frustumSize * aspect / -2;
    camera.right = frustumSize * aspect / 2;
    camera.top = frustumSize / 2;
    camera.bottom = frustumSize / -2;
    camera.updateProjectionMatrix();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
} 