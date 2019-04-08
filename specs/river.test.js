const River = require('../river');

describe('River' , () => {
  test('has a name of Amazon' , () => {
    let river = new River("Amazon");
    expect(river.name).toBe("Amazon");
  });

  test('River has no fish ', () => {
    let river = new River([]);
    expect(river.fishes).toEqual([]);
  });
});
