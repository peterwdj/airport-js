describe("Landing", function() {

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('boeing');
  });

  it("hangar should be an empty array", function() {
    expect(airport.hangar).toEqual([])
  });

  it("after landing plane should be in hangar", function() {
    airport.receivePlane(plane);
    expect(airport.hangar).toEqual([plane])
  });

  it("should not accept any planes if the hangar is full", function() {
    for (var i = 0; i < 50; i++) {
      airport.hangar.push(new Plane());
    }
    expect(function() { airport.receivePlane(new Plane()) }).toThrow("Full")
  })

});

describe("Takeoff", function() {

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('boeing');
  });

  it("hangar is empty after releasing plane", function() {
    airport.releasePlane(plane);
    expect(airport.hangar).toEqual([])
  });
});

describe("CAPACITY", function() {

  it("should have a default capacity of 50 planes", function() {
    expect(airport.capacity).toEqual(50);
  });

  it("should have a capacity of 60 planes", function() {
    var stansted = new Airport(60);
    expect(stansted.capacity).toEqual(60);
  });
});
