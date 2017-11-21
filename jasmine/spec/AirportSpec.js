describe("Landing", function(){

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('boeing');
  });

  it("hangar should be an empty array", function(){
    expect(airport.hangar).toEqual([])
  });

  it("after landing plane should be in hangar", function(){
    airport.receivePlane(plane);
    expect(airport.hangar).toEqual([plane])
  });
});
describe("Takeoff", function(){

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('boeing');
  });

  it("hangar is empty after releasing plane", function(){
    airport.releasePlane(plane);
    expect(airport.hangar).toEqual([])
  });
});
