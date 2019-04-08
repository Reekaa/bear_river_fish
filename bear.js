const Bear = function(name,belly) {

  this.name = name;
  this.belly = [];

};

Bear.prototype.roar = function () {
  return "Rrrrrroooooaaaaaaaarrr!!!!";
};

Bear.prototype.foodCount = function () {
  return this.belly.length;
};

Bear.prototype.eatFish = function (river) {
  if (this.belly.length === 5){
    console.log(`${this.name} is full`);
  }else{
    this.belly.push(river.loseFish(fishes));
    console.log(`${this.name} has easten a fish`)
  }
};
module.exports = Bear;
