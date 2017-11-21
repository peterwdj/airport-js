describe("Takeoff", function(){

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('boeing');
  });

  it("hangar should be an empty array", function(){
    expect(airport.hangar).toEqual([])
  });

  it("after landing plane should be in hangar", function(){
    console.log(plane);
    airport.receivePlane(plane);
    expect(airport.hangar).toEqual([plane])
  });
});
