# 3D City Editor

3D web application for creating and editing cities on an 8x8 board with GLB assets.

## Project Structure

The code has been split into multiple modules for better organization:

### Main Files

- **`index.html`** - Main HTML structure and user interface
- **`style.css`** - All responsive CSS styles
- **`config.js`** - Global configuration and shared variables
- **`app.js`** - Main initialization and render loop
- **`board.js`** - Game board and lighting management
- **`assets.js`** - 3D assets and thumbnails management
- **`controls.js`** - Controls and user event handling
- **`tabs.js`** - Tab system and category organization

### Assets Folder

- **`assets/GLB format/`** - 3D models in GLB format (buildings, trees, etc.)

## Features

- ✅ 8x8 isometric board with optimized black borders
- ✅ 3D GLB object placement system
- ✅ Responsive touch interface (zoom, pan)
- ✅ Inventory organized by thematic tabs
- ✅ 3D asset thumbnails
- ✅ Mobile and desktop support
- ✅ Object deletion mode
- ✅ Professional 3D lighting

## Technologies Used

- **Three.js r128** - 3D engine
- **OrbitControls** - Camera controls
- **GLTFLoader** - 3D model loading
- **CSS Grid** - Responsive interface
- **Canvas 2D** - Fallback thumbnails

## Script Loading Order

Scripts must be loaded in this specific order:

1. Three.js + OrbitControls + GLTFLoader (CDN)
2. `config.js` - Global variables
3. `board.js` - Board functions
4. `assets.js` - Assets management
5. `controls.js` - User events
6. `tabs.js` - Tab system
7. `app.js` - Initialization and startup

## Controls

### Desktop
- **Left click** : Place/remove an object
- **Mouse wheel** : Zoom
- **Right click + drag** : Move view

### Mobile
- **Tap** : Place/remove an object
- **Pinch** : Zoom
- **1 finger drag** : Move view

## Available Assets by Category

### 🛠️ Tools Tab
- Deletion mode (clear cell)

### 🏢 Buildings Tab
- Building types A to J (extensible up to U)
- Different architectural styles

### 🌳 Vegetation Tab
- Large tree
- Small tree
- Planter

### 🛤️ Infrastructure Tab
- Long and short paths
- Stone paths
- Various fences (normal, low, 1x2, 1x3)
- Long and short driveways

The interface is organized in thematic tabs for intuitive navigation. The inventory grid automatically adapts to screen width.

## Credits

3D Assets provided by [Kenney.nl](https://kenney.nl/) - Free game assets supported by community donations. 