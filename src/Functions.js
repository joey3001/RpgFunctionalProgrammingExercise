
// Function Factories //
//import * as currentStates from './main.js'

export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const changeState = (prop) => {
    return (value) => {
      return (state) => {
        return {
          ...state,
          [prop] : (state[prop] || 0) + value
        }
      }
    }
  }


// Players //
// Warrior
export const warriorStartingState = {strength: 10, hp: 10, magic: 2};
export let warriorCurrentState = {strength: 10, hp: 10, magic: 2};  
const warrior = storeState(warriorStartingState); 

// Paladin
const paladinStartingState = {strength: 5, hp: 10, magic: 6}; 
const paladin = storeState(paladinStartingState);

// Mage
export const mageStartingState = {strength: 2, hp: 10, magic: 10}
const mage = storeState(mageStartingState);


//Battle Weapons Warrior
//warriorAttack Function
//export const warriorAttack = changeState("hp")(-warriorStartingState.strength)
export const warriorAttack = changeState("hp")(-warriorCurrentState.strength)
//chageState("hp")(currentStateOfWarrior)


//Battle Weapons - Mage
//mageAttack Function
export const mageAttack = changeState("hp")(-mageStartingState.strength)







// Players
// warrior - high strength / hp, low magic 
// mage - low strength / hp , high magic 
// paladin - medium strength, hp, and magic 

// const blueFood = changeState("soil")(5);
// const propagate = changeState("babies")(-1);