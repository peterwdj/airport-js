function Plane() {
  this.isAirborne = true
}

Plane.prototype.land = function(airport) {
  this.isAirborne = false
  airport.receivePlane(this)
};

Plane.prototype.takeOff = function(airport) {
  airport.release(this)
  this.isAirborne = true
};
