function Plane() {
  this.isAirborne = true
}

Plane.prototype.land = function(airport) {
  this.isAirborne = false
  airport.receivePlane(this)
};
