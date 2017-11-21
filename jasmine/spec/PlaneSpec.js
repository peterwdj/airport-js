
describe("Landing", function(){

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('gatwick', ['receivePlane']);
  });

  it("should be airborne before landing", function(){
    expect(plane.isFlying).toEqual(true)
  });

  it("should not be flying after landing", function(){
    plane.land(airport);
    expect(plane.isFlying).toEqual(false)
  });
});

describe("Takeoff", function(){

  beforeEach(function(){
    plane = new Plane();
    var airport = jasmine.createSpyObj('gatwick', ['receivePlane']);
  });

  it("should be flying after takeoff", function(){
    plane.land(airport);
    plane.takeOff(airport);
    expect(plane.isFlying).toEqual(true)
  });
});
