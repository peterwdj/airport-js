var CAPACITY = 50

function Airport(capacity){
  this.hangar = []
  this.capacity = capacity || CAPACITY
};

Airport.prototype.receivePlane = function(plane){
  this.hangar.push(plane);
};

Airport.prototype.releasePlane = function(plane){
  var planeIndex = this.hangar.indexOf(plane);
  this.hangar.splice(planeIndex, 1);
}
