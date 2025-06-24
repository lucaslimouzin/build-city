// Category tabs management

// Tab variables
let currentTab = 'buildings';

// Function to switch tabs
function switchTab(tabName) {
    // Hide all panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Deactivate all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activate selected panel
    const targetPanel = document.querySelector(`[data-panel="${tabName}"]`);
    if (targetPanel) {
        targetPanel.classList.add('active');
    }
    
    // Activate selected tab button
    const targetBtn = document.querySelector(`[data-tab="${tabName}"]`);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }
    
    // Remember current tab
    currentTab = tabName;
}

// Function to generate previews by category
function generateCategoryPreviews() {
    // Generate thumbnails for each tab
    const categories = ['buildings', 'vegetation', 'infrastructure', 'tools'];
    
    categories.forEach(category => {
        const panel = document.querySelector(`[data-panel="${category}"]`);
        if (panel) {
            const buttons = panel.querySelectorAll('[data-asset]');
            buttons.forEach(button => {
                const assetName = button.getAttribute('data-asset');
                const canvas = button.querySelector('.asset-preview');
                if (assetName && canvas) {
                    generateModelPreview(assetName, canvas);
                }
            });
            
            // Generate delete icon for tools tab
            if (category === 'tools') {
                const deleteCanvas = panel.querySelector('[onclick="selectAsset(null)"] .asset-preview');
                if (deleteCanvas) {
                    createDeleteIcon(deleteCanvas);
                }
            }
        }
    });
}

// Available asset categories
const ASSET_CATEGORIES = {
    buildings: [
        { name: 'building-type-a.glb', title: 'Building A' },
        { name: 'building-type-b.glb', title: 'Building B' },
        { name: 'building-type-c.glb', title: 'Building C' },
        { name: 'building-type-d.glb', title: 'Building D' },
        { name: 'building-type-e.glb', title: 'Building E' },
        { name: 'building-type-f.glb', title: 'Building F' },
        { name: 'building-type-g.glb', title: 'Building G' },
        { name: 'building-type-h.glb', title: 'Building H' },
        { name: 'building-type-i.glb', title: 'Building I' },
        { name: 'building-type-j.glb', title: 'Building J' },
        { name: 'building-type-k.glb', title: 'Building K' },
        { name: 'building-type-l.glb', title: 'Building L' },
        { name: 'building-type-m.glb', title: 'Building M' },
        { name: 'building-type-n.glb', title: 'Building N' },
        { name: 'building-type-o.glb', title: 'Building O' },
        { name: 'building-type-p.glb', title: 'Building P' },
        { name: 'building-type-q.glb', title: 'Building Q' },
        { name: 'building-type-r.glb', title: 'Building R' },
        { name: 'building-type-s.glb', title: 'Building S' },
        { name: 'building-type-t.glb', title: 'Building T' },
        { name: 'building-type-u.glb', title: 'Building U' }
    ],
    vegetation: [
        { name: 'tree-large.glb', title: 'Large tree' },
        { name: 'tree-small.glb', title: 'Small tree' },
        { name: 'planter.glb', title: 'Planter' }
    ],
    infrastructure: [
        { name: 'path-long.glb', title: 'Long path' },
        { name: 'path-short.glb', title: 'Short path' },
        { name: 'path-stones-long.glb', title: 'Long stone path' },
        { name: 'path-stones-short.glb', title: 'Short stone path' },
        { name: 'path-stones-messy.glb', title: 'Messy stone path' },
        { name: 'fence.glb', title: 'Fence' },
        { name: 'fence-low.glb', title: 'Low fence' },
        { name: 'fence-1x2.glb', title: 'Fence 1x2' },
        { name: 'fence-1x3.glb', title: 'Fence 1x3' },
        { name: 'fence-1x4.glb', title: 'Fence 1x4' },
        { name: 'fence-2x2.glb', title: 'Fence 2x2' },
        { name: 'fence-2x3.glb', title: 'Fence 2x3' },
        { name: 'fence-3x2.glb', title: 'Fence 3x2' },
        { name: 'fence-3x3.glb', title: 'Fence 3x3' },
        { name: 'driveway-long.glb', title: 'Long driveway' },
        { name: 'driveway-short.glb', title: 'Short driveway' }
    ],
    tools: [
        { name: null, title: 'Clear cell', icon: 'delete' }
    ]
};

// Function to get an asset's category
function getAssetCategory(assetName) {
    for (const [category, assets] of Object.entries(ASSET_CATEGORIES)) {
        if (assets.some(asset => asset.name === assetName)) {
            return category;
        }
    }
    return 'infrastructure'; // Default category
}

// Function to handle tab switching when asset is selected
function handleAssetTabSwitch(assetName) {
    if (assetName) {
        const category = getAssetCategory(assetName);
        if (category !== currentTab) {
            switchTab(category);
        }
    }
} 