describe("Landing", function() {

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('gatwick', ['receivePlane', 'releasePlane']);
    weather = jasmine.createSpy('weather');
  });

  it("should be airborne before landing", function() {
    expect(plane.isFlying).toEqual(true)
  });

  it("should not be flying after landing", function() {
    plane.weather.isStormy = jasmine.createSpy("sunny weather").and.returnValue(false);
    plane.land(airport);
    expect(plane.isFlying).toEqual(false)
  });

  it("should not land if weather is stormy", function() {
    plane.weather.isStormy = jasmine.createSpy("stormy weather").and.returnValue(true);
    expect(function() { plane.land(airport) }).toThrow("Stormy")
  });
});

describe("Takeoff", function() {

  beforeEach(function() {
    plane = new Plane();
    var airport = jasmine.createSpyObj('gatwick', ['receivePlane']);
  });

  it("should be flying after takeoff", function() {
    plane.weather.isStormy = jasmine.createSpy("sunny weather").and.returnValue(false);
    plane.land(airport);
    plane.takeOff(airport);
    expect(plane.isFlying).toEqual(true)
  });

  it ("should not land if weather is stormy", function() {
    plane.weather.isStormy = jasmine.createSpy("sunny weather").and.returnValue(false);
    plane.land(airport);
    plane.weather.isStormy = jasmine.createSpy("stormy weather").and.returnValue(true);
    expect(function() { plane.takeOff(airport) }).toThrow("Stormy")
  });
});
