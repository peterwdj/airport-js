describe("Landing", function() {
  it("Status should be airborne", function() {
    var plane = new Plane();
    expect(plane.isAirborne).toBe(true)
  });
  it("Should not be airborne after landing", function() {
    var plane = new Plane();
    plane.land();
    expect(plane.isAirborne).toBe(false)
  });
});
