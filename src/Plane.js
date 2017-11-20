function Plane() {
  this.isAirborne = true
}

Plane.prototype.land = function() {
  this.isAirborne = false
};
