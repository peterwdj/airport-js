function Weather(){

};

Weather.prototype.isStormy = function(){
  var forecast = Math.random();
  if (forecast > 0.8) {
    return true;
  } else {
    return false;
  }
};
