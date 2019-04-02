const Park = function(name, ticketPrice, dinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaurToPark = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaurFromPark = function(dinosaur){
  let dinosaurs = this.dinosaurs;
  for (let i = 0; i < dinosaurs.length; i++) {
    let dino = dinosaurs[i];
    if (dino === dinosaur) {
      dinosaurs.splice(i, 1);
    }
  }
  return dinosaurs;
};

Park.prototype.findMostPopularDinosaur = function(){
  let dinosaurs = this.dinosaurs;
  let guestsAttracted = dinosaurs.map(obj => obj.guestsAttractedPerDay);

  guestsAttracted.sort();
  i_max = (guestsAttracted.length - 1);
  maxGuests = guestsAttracted[i_max];

  for (var i = 0; i < dinosaurs.length; i++) {
    let dinosaur = dinosaurs[i];
    if (dinosaur.guestsAttractedPerDay === maxGuests);
    return dinosaur;
  };

  // function compare(dino_a, dino_b) {
  //   if (dino_a.guestsAttractedPerDay < dino_b.guestsAttractedPerDay)
  //     return 1;
  //   if (dino_a.last_nom > dino_b.last_nom)
  //     return -1;
  //   return 0;
  // }
  // dinosaurs.sort(compare);
  // return dinosaurs[0]
};

Park.prototype.findBySpecies = function(species){
  let dinosaurs = this.dinosaurs;
  let dinosaurSpecies = [];
  for (i = 0; i < dinosaurs.length; i++) {
    let dinosaur = dinosaurs[i];
    if (dinosaur.species === species){
      dinosaurSpecies.push(dinosaur);
    }
    return dinosaurSpecies;
  }
};

Park.prototype.removeDinosaursBySpecies = function(species){
  dinosaurToRemove = Park.prototype.findBySpecies(species);
  Park.prototype.removeDinosaurFromPark(dinosaurToRemove);
}

module.exports = Park;
