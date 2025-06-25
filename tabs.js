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
    const categories = ['buildings', 'commercial', 'industrial', 'vegetation', 'infrastructure', 'tools'];
    
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
    commercial: [
        { name: 'building-a.glb', title: 'Commercial Building A' },
        { name: 'building-b.glb', title: 'Commercial Building B' },
        { name: 'building-c.glb', title: 'Commercial Building C' },
        { name: 'building-d.glb', title: 'Commercial Building D' },
        { name: 'building-e.glb', title: 'Commercial Building E' },
        { name: 'building-f.glb', title: 'Commercial Building F' },
        { name: 'building-g.glb', title: 'Commercial Building G' },
        { name: 'building-h.glb', title: 'Commercial Building H' },
        { name: 'building-i.glb', title: 'Commercial Building I' },
        { name: 'building-j.glb', title: 'Commercial Building J' },
        { name: 'building-k.glb', title: 'Commercial Building K' },
        { name: 'building-l.glb', title: 'Commercial Building L' },
        { name: 'building-m.glb', title: 'Commercial Building M' },
        { name: 'building-n.glb', title: 'Commercial Building N' },
        { name: 'building-skyscraper-a.glb', title: 'Skyscraper A' },
        { name: 'building-skyscraper-b.glb', title: 'Skyscraper B' },
        { name: 'building-skyscraper-c.glb', title: 'Skyscraper C' },
        { name: 'building-skyscraper-d.glb', title: 'Skyscraper D' },
        { name: 'building-skyscraper-e.glb', title: 'Skyscraper E' },
        { name: 'low-detail-building-a.glb', title: 'Simple Building A' },
        { name: 'low-detail-building-b.glb', title: 'Simple Building B' },
        { name: 'low-detail-building-c.glb', title: 'Simple Building C' },
        { name: 'low-detail-building-d.glb', title: 'Simple Building D' },
        { name: 'low-detail-building-e.glb', title: 'Simple Building E' },
        { name: 'low-detail-building-f.glb', title: 'Simple Building F' },
        { name: 'low-detail-building-wide-a.glb', title: 'Wide Building A' },
        { name: 'low-detail-building-wide-b.glb', title: 'Wide Building B' },
        { name: 'detail-awning.glb', title: 'Awning' },
        { name: 'detail-awning-wide.glb', title: 'Wide Awning' },
        { name: 'detail-parasol-a.glb', title: 'Parasol A' },
        { name: 'detail-parasol-b.glb', title: 'Parasol B' },
        { name: 'detail-overhang.glb', title: 'Overhang' },
        { name: 'detail-overhang-wide.glb', title: 'Wide Overhang' }
    ],
    industrial: [
        { name: 'industrial-building-a.glb', title: 'Industrial Building A' },
        { name: 'industrial-building-b.glb', title: 'Industrial Building B' },
        { name: 'industrial-building-c.glb', title: 'Industrial Building C' },
        { name: 'industrial-building-d.glb', title: 'Industrial Building D' },
        { name: 'industrial-building-e.glb', title: 'Industrial Building E' },
        { name: 'industrial-building-f.glb', title: 'Industrial Building F' },
        { name: 'industrial-building-g.glb', title: 'Industrial Building G' },
        { name: 'industrial-building-h.glb', title: 'Industrial Building H' },
        { name: 'industrial-building-i.glb', title: 'Industrial Building I' },
        { name: 'industrial-building-j.glb', title: 'Industrial Building J' },
        { name: 'industrial-building-k.glb', title: 'Industrial Building K' },
        { name: 'industrial-building-l.glb', title: 'Industrial Building L' },
        { name: 'industrial-building-m.glb', title: 'Industrial Building M' },
        { name: 'industrial-building-n.glb', title: 'Industrial Building N' },
        { name: 'industrial-building-o.glb', title: 'Industrial Building O' },
        { name: 'industrial-building-p.glb', title: 'Industrial Building P' },
        { name: 'industrial-building-q.glb', title: 'Industrial Building Q' },
        { name: 'industrial-building-r.glb', title: 'Industrial Building R' },
        { name: 'industrial-building-s.glb', title: 'Industrial Building S' },
        { name: 'industrial-building-t.glb', title: 'Industrial Building T' },
        { name: 'chimney-basic.glb', title: 'Basic Chimney' },
        { name: 'chimney-small.glb', title: 'Small Chimney' },
        { name: 'chimney-medium.glb', title: 'Medium Chimney' },
        { name: 'chimney-large.glb', title: 'Large Chimney' },
        { name: 'detail-tank.glb', title: 'Industrial Tank' }
    ],
    vegetation: [
        { name: 'tree-large.glb', title: 'Large tree' },
        { name: 'tree-small.glb', title: 'Small tree' },
        { name: 'planter.glb', title: 'Planter' }
    ],
    infrastructure: [
        // Chemins et allées (Suburban)
        { name: 'path-long.glb', title: 'Long path' },
        { name: 'path-short.glb', title: 'Short path' },
        { name: 'path-stones-long.glb', title: 'Long stone path' },
        { name: 'path-stones-short.glb', title: 'Short stone path' },
        { name: 'path-stones-messy.glb', title: 'Messy stone path' },
        { name: 'driveway-long.glb', title: 'Long driveway' },
        { name: 'driveway-short.glb', title: 'Short driveway' },
        
        // Clôtures (Suburban)
        { name: 'fence.glb', title: 'Fence' },
        { name: 'fence-low.glb', title: 'Low fence' },
        { name: 'fence-1x2.glb', title: 'Fence 1x2' },
        { name: 'fence-1x3.glb', title: 'Fence 1x3' },
        { name: 'fence-1x4.glb', title: 'Fence 1x4' },
        { name: 'fence-2x2.glb', title: 'Fence 2x2' },
        { name: 'fence-2x3.glb', title: 'Fence 2x3' },
        { name: 'fence-3x2.glb', title: 'Fence 3x2' },
        { name: 'fence-3x3.glb', title: 'Fence 3x3' },
        
        // Routes droites
        { name: 'road-straight.glb', title: 'Straight Road' },
        { name: 'road-straight-half.glb', title: 'Half Straight Road' },
        { name: 'road-straight-barrier.glb', title: 'Straight Road with Barrier' },
        { name: 'road-straight-barrier-half.glb', title: 'Half Straight Road with Barrier' },
        { name: 'road-straight-barrier-end.glb', title: 'Straight Road Barrier End' },
        
        // Courbes et virages
        { name: 'road-curve.glb', title: 'Road Curve' },
        { name: 'road-curve-pavement.glb', title: 'Road Curve with Pavement' },
        { name: 'road-curve-intersection.glb', title: 'Curve Intersection' },
        { name: 'road-curve-intersection-barrier.glb', title: 'Curve Intersection with Barrier' },
        { name: 'road-curve-barrier.glb', title: 'Road Curve with Barrier' },
        { name: 'road-bend.glb', title: 'Road Bend' },
        { name: 'road-bend-square.glb', title: 'Square Road Bend' },
        { name: 'road-bend-square-barrier.glb', title: 'Square Road Bend with Barrier' },
        { name: 'road-bend-sidewalk.glb', title: 'Road Bend with Sidewalk' },
        { name: 'road-bend-barrier.glb', title: 'Road Bend with Barrier' },
        
        // Intersections
        { name: 'road-intersection.glb', title: 'Road Intersection' },
        { name: 'road-intersection-path.glb', title: 'Intersection with Path' },
        { name: 'road-intersection-line.glb', title: 'Intersection with Line' },
        { name: 'road-intersection-barrier.glb', title: 'Intersection with Barrier' },
        { name: 'road-crossroad.glb', title: 'Crossroad' },
        { name: 'road-crossroad-path.glb', title: 'Crossroad with Path' },
        { name: 'road-crossroad-line.glb', title: 'Crossroad with Line' },
        { name: 'road-crossroad-barrier.glb', title: 'Crossroad with Barrier' },
        { name: 'road-crossing.glb', title: 'Road Crossing' },
        
        // Rond-point et divisions
        { name: 'road-roundabout.glb', title: 'Roundabout' },
        { name: 'road-roundabout-barrier.glb', title: 'Roundabout with Barrier' },
        { name: 'road-split.glb', title: 'Road Split' },
        { name: 'road-split-barrier.glb', title: 'Road Split with Barrier' },
        { name: 'road-square.glb', title: 'Road Square' },
        { name: 'road-square-barrier.glb', title: 'Road Square with Barrier' },
        
        // Bretelles et sorties
        { name: 'road-side.glb', title: 'Side Road' },
        { name: 'road-side-entry.glb', title: 'Side Entry' },
        { name: 'road-side-entry-barrier.glb', title: 'Side Entry with Barrier' },
        { name: 'road-side-exit.glb', title: 'Side Exit' },
        { name: 'road-side-exit-barrier.glb', title: 'Side Exit with Barrier' },
        { name: 'road-side-barrier.glb', title: 'Side Road with Barrier' },
        
        // Fins de route
        { name: 'road-end.glb', title: 'Road End' },
        { name: 'road-end-round.glb', title: 'Round Road End' },
        { name: 'road-end-round-barrier.glb', title: 'Round Road End with Barrier' },
        { name: 'road-end-barrier.glb', title: 'Road End with Barrier' },
        
        // Allées de garage (Routes)
        { name: 'road-driveway-single.glb', title: 'Single Driveway' },
        { name: 'road-driveway-single-barrier.glb', title: 'Single Driveway with Barrier' },
        { name: 'road-driveway-double.glb', title: 'Double Driveway' },
        { name: 'road-driveway-double-barrier.glb', title: 'Double Driveway with Barrier' },
        
        // Ponts et piliers
        { name: 'road-bridge.glb', title: 'Road Bridge' },
        { name: 'bridge-pillar.glb', title: 'Bridge Pillar' },
        { name: 'bridge-pillar-wide.glb', title: 'Wide Bridge Pillar' },
        
        // Pentes
        { name: 'road-slant.glb', title: 'Slanted Road' },
        { name: 'road-slant-high.glb', title: 'High Slanted Road' },
        { name: 'road-slant-high-barrier.glb', title: 'High Slanted Road with Barrier' },
        { name: 'road-slant-flat.glb', title: 'Flat Slanted Road' },
        { name: 'road-slant-flat-high.glb', title: 'High Flat Slanted Road' },
        { name: 'road-slant-flat-curve.glb', title: 'Flat Slanted Road Curve' },
        { name: 'road-slant-curve.glb', title: 'Slanted Road Curve' },
        { name: 'road-slant-curve-barrier.glb', title: 'Slanted Road Curve with Barrier' },
        { name: 'road-slant-barrier.glb', title: 'Slanted Road with Barrier' },
        
        // Éclairage routier
        { name: 'light-square.glb', title: 'Square Light' },
        { name: 'light-square-double.glb', title: 'Double Square Light' },
        { name: 'light-square-cross.glb', title: 'Cross Square Light' },
        { name: 'light-curved.glb', title: 'Curved Light' },
        { name: 'light-curved-double.glb', title: 'Double Curved Light' },
        { name: 'light-curved-cross.glb', title: 'Cross Curved Light' },
        
        // Signalisation
        { name: 'sign-highway.glb', title: 'Highway Sign' },
        { name: 'sign-highway-wide.glb', title: 'Wide Highway Sign' },
        { name: 'sign-highway-detailed.glb', title: 'Detailed Highway Sign' },
        
        // Construction et barrières
        { name: 'construction-light.glb', title: 'Construction Light' },
        { name: 'construction-cone.glb', title: 'Construction Cone' },
        { name: 'construction-barrier.glb', title: 'Construction Barrier' },
        
        // Tuiles de terrain
        { name: 'tile-high.glb', title: 'High Tile' },
        { name: 'tile-low.glb', title: 'Low Tile' },
        { name: 'tile-slant.glb', title: 'Slanted Tile' },
        { name: 'tile-slantHigh.glb', title: 'High Slanted Tile' }
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