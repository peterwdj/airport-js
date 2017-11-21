describe("Weather", function() {

  beforeEach(function() {
    weather = new Weather();
  });

  it("isStormy returns true", function() {
    Math.random = jasmine.createSpy("Math.random spy > 0.8").and.returnValue(0.9)
    expect(weather.isStormy()).toEqual(true)
  });

  it("isStormy returns false", function() {
    Math.random = jasmine.createSpy("Math.random spy < 0.8").and.returnValue(0.3)
    expect(weather.isStormy()).toEqual(false)
  });
});
