import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Function Factories //
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

// Player Starting State //
const warriorStartingState = {strength: 5, hp: 10, magic: 2};
const mageStartingState = {strength: 2, hp: 10, magic: 10};

// Player State Control //
const mageStateControl = storeState(mageStartingState);
const warriorStateControl = storeState(warriorStartingState);

// const warriorAttack = changeState("hp")(-warriorStateControl().strength)
// Negating affect of player's attack, reducing their own strength value
// When "Player" attacks, their own strength decrements by "-2"
const warriorAttackDecline = changeState("strength")(-2); 
const mageAttackDecline = changeState("strength")(-2);

// User Interface //
$(document).ready(function() {

  $('#warriorSword').click(function() {
    const warriorAttack = changeState("hp")(-warriorStateControl().strength)
    const mage = mageStateControl(warriorAttack);
    warriorStateControl(warriorAttackDecline); 
    $('#mageHp').text(`the mages hp is now: ${mage.hp}`);
  })

  $('#mageMagic').click(function() {
    const mageAttack = changeState("hp")(-mageStateControl().strength)
    const warrior = warriorStateControl(mageAttack);
    mageStateControl(mageAttackDecline);
    $('#warriorHp').text(`the warrior's hp is now: ${warrior.hp}`);
    console.log("mageMagic")
  })
})
