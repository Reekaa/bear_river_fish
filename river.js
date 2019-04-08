const River = function (name, fishes){

  this.name = name;
  this.fishes = [];

}

River.prototype.fishCount = function () {
  return this.fishes.length;
};

River.prototype.loseFish = function () {
  return this.fishes.pop(fishes);
};



module.exports = River;
