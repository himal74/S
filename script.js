// Define the cube as an object with each face and its respective blocks
const cube = {
    top: ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
    front: ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green'],
    left: ['orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange'],
    right: ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'],
    bottom: ['yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'],
    back: ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue']
};

function updateCube() {
    // Loop through each face and update the blocks based on the cube state
    for (const face in cube) {
        const blocks = document.querySelectorAll(`.face.${face} .block`);
        const colors = cube[face];
        
        blocks.forEach((block, index) => {
            block.style.backgroundColor = colors[index];
        });
    }
}

function rotateFace(face) {
    const newFace = [...cube[face]];
    // Rotate the array of blocks 90 degrees clockwise
    cube[face] = [
        newFace[6], newFace[3], newFace[0],
        newFace[7], newFace[4], newFace[1],
        newFace[8], newFace[5], newFace[2]
    ];

    // Update the cube visual representation
    updateCube();
}

// Initialize the cube
updateCube();
