const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;
  let dinosaur6;

  let dinosaurs;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 35);
    dinosaur3 = new Dinosaur('Dilophosaurus', 'carnivore', 15);
    dinosaur4 = new Dinosaur('triceratops', 'herbivore', 12);
    dinosaur5 = new Dinosaur('brachiosaurus', 'herbivore', 37);
    dinosaur6 = new Dinosaur('parasaurolophus', 'herbivore', 19);

    dinosaurs = [dinosaur1, dinosaur2, dinosaur3, dinosaur4];

    park = new Park('Jurassic Park', 200, dinosaurs);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 200);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3, dinosaur4])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaurToPark(dinosaur5);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3, dinosaur4, dinosaur5]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaurFromPark(dinosaur3);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur4]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.findMostPopularDinosaur();
    assert.deepStrictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.findBySpecies('t-rex');
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    const actual = park.removeDinosaursBySpecies('triceratops');
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3]);
  });

});
