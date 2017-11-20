describe("Landing", function() {
  it("Status should be airborne", function() {
    var plane = new Plane();
    expect(plane.isAirborne()).toEqual(true)
  });
});
