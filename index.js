function bumpCounter(){
  var counter = 0;
  function addBump(){
    counter += 1;
  }

  function getBumps(){
    return counter;
  }

  return {
    addBump,
    getBumps
  };
}

function createAnimal(animalType){
  deadlyDevice => {return {animalType, deadlyDevice}}
}

var sharkCreator = createAnimal('Shark');

var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
