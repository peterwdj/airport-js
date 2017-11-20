describe("Receiving plane", function() {
  it("Should have no planes", function() {
    var stansted = new Airport();
    expect(stansted.hangar).toEqual([])
  });
  it("Should add a received plane to the hangar", function() {
    var boeing = new Plane();
    var stansted = new Airport();
    stansted.receivePlane(boeing);
    expect(stansted.hangar).toEqual([boeing])
  });
});

describe("Releasing a plane", function() {
  it("Hangar should be empty after releasing a plane", function() {
    var boeing = new Plane();
    var stansted = new Airport();
    boeing.land(stansted);
    stansted.release(boeing);
    expect(stansted.hangar).toEqual([])
  });
});
