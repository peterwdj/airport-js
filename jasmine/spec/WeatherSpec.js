describe("Weather", function(){

  beforeEach(function(){
    weather = new Weather();
  });

  it("isStormy returns true", function(){
    Math.random = jasmine.createSpy("Math.random spy > 0.8").and.returnValue(0.9)
    // weather.isStormy = jasmine.createSpy("isStormy() spy").and.returnValue(true)
    expect(weather.isStormy()).toEqual(true)
  });

  it("isStormy returns false", function(){
    Math.random = jasmine.createSpy("Math.random spy < 0.8").and.returnValue(0.3)
    // weather.isStormy = jasmine.createSpy("isStormy() spy").and.returnValue(false)
    expect(weather.isStormy()).toEqual(false)
  });
});
