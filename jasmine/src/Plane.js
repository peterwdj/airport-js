function Plane(){
  this.isFlying = true
};

Plane.prototype.land = function(airport){
  this.isFlying = false
  airport.receivePlane(this)
  return true
};

Plane.prototype.takeOff = function(airport){
  this.isFlying = true
  airport.releasePlane(this)
};
