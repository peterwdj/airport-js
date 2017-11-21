function Plane(){
  this.isFlying = true
  this.weather = new Weather();
};

Plane.prototype.land = function(airport){
  if (this.weather.isStormy() === true) {
    throw("Stormy");
  }
  this.isFlying = false
  airport.receivePlane(this)
  return true
};

Plane.prototype.takeOff = function(airport){
  this.isFlying = true
  airport.releasePlane(this)
};
