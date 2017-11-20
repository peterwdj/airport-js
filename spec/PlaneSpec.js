describe("Landing", function() {
  it("Status should be airborne", function() {
    var boeing = new Plane();
    expect(boeing.isAirborne).toBe(true)
  });
  it("Should not be airborne after landing", function() {
    var boeing = new Plane();
    var stansted = new Airport();
    boeing.land(stansted);
    expect(boeing.isAirborne).toEqual(false)
  });
  it("Should be added to an airport hangar", function() {
    var boeing = new Plane();
    var stansted = new Airport();
    boeing.land(stansted);
    expect(stansted.hangar).toEqual([boeing])
  });
});

describe("Taking off", function() {
  it("should be airborne after taking off", function() {
    var boeing = new Plane();
    var stansted = new Airport();
    boeing.land(stansted);
    boeing.takeOff(stansted);
    expect(boeing.isAirborne).toEqual(true)
  });
});
