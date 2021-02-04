import * as tools from '../src/Functions.js';

describe('Warrior', () => {
  test('should make an instance of a new warrior', () => {
    const warrior = tools.storeState(tools.warriorStartingState);
    expect(warrior()).toMatchObject({strength: 10, hp: 10, magic: 2});
  });
});

describe('Paladin', () => {
  test('should make an instance of new paladin', () => {
    const paladin = tools.storeState(tools.warriorStartingState);
    expect(paladin()).toMatchObject(tools.warriorStartingState);
  });

  describe('Mage', () => {
    test('should make an instance of a new mage', () => {
      const mage = tools.storeState(tools.mageStartingState);
      expect(mage()).toMatchObject(tools.mageStartingState);
    });
  });
});