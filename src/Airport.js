function Airport() {
  this.hangar = []
}

Airport.prototype.receivePlane = function(plane) {
  this.hangar.push(plane)
};
