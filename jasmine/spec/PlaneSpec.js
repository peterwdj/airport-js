describe("Landing", function(){

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpy('gatwick');
  });

  it("should be airborne before landing", function(){
    expect(plane.isFlying).toEqual(true)
  });
  
  it("should not be flying after landing", function(){
    plane.land();
    expect(plane.isFlying).toEqual(false)
  });
});
