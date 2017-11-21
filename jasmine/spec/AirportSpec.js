describe("Takeoff", function(){

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('boeing');
  });

  it("hangar should be an empty array", function(){
    expect(airport.hangar).toEqual([])
  });
});
