const Bear = require('../bear');

describe('Bear' , ()=> {

  test('bear has a name of Yogi', () => {
    let bear = new Bear('Yogi');
    expect(bear.name).toBe('Yogi');
  });

  test('bear has an empty belly', () => {
    let bear = new Bear([]);
    expect(bear.belly).toEqual([]);
  });

  test('bear has foodcount ', () => {
    let bear = new Bear([]);
    expect(bear.belly.length).toEqual(0);

  });

  test('bear can roar', () => {
    let bear = new Bear("Yogi");
    expect(bear.roar()).toEqual('Rrrrrroooooaaaaaaaarrr!!!!');

  });

});
