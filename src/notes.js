// threeControl = storeState({num: 3});
// fourControl = storeState({num: 4});
// currentState = {{num: 3}, {num: 4}}
// threeControl.num;

// const stateControl = storeState();

// const initialState = { plant1StateControl, plant2StateControl };


// previously: currentState = {};
// now: currentState = { {soil: 1, water: 2}, {soil: 3, water: 5} }

// plant1Control(bluefood) // soil+=5
// changeState("soil" : (plant1StateControl["soil"] || 0) + 5);

// initialState.plant1StateControl; // {soil: 1, water: 2}
// currentState.plant1StateControl; // {soil: 1, water: 2}

// without initialState
// const plant2 = plant2StateControl(blueFood);
// results in: currentState = { { soil: 5 } }