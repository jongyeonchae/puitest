function Parrot(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "This is an image of a parrot";
  this.image = "parrot.png";
}

function Bear(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "This is an image of a bear";
  this.image = "bear.png";
}

function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "This is an image of a cat";
  this.image = "cat.png";
}

// var parrot = new Parrot(parrot, 1, "This is an image of parrot", "parrot.png");
// var bear = new Bear(bear, 2, "This is an image of bear", "bear.png");
// var cat = new Cat(cat, 3, "This is an image of cat", "cat.png");

var animals = [new Parrot(), new Bear(), new Cat()];
var names = ["nameOne", "nameTwo", "nameThree", "nameFour", "nameFive", "nameSix", "nameSeven", "nameEight", "nameNine"];

function generateRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
  let randomIdx = generateRandomIndex(names.length);
  let randomAnimal = names[randomIdx];
}

function generateRandomAge() {
  return generateRandomIndex(7);
}

function generateRandomAnimal() {
  let randomIdx = generateRandomIndex(animals.length);
  let randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Parrot) {
    return new Parrot(generateRandomName(), generateRandomAge());
  } else if (randomAnimal instanceof Bear) {
    return new Parrot(generateRandomName(), generateRandomAge());
  } else if (randomAnimal instanceof Cat) {
    return new Cat(generateRandomName(), generateRandomAge());
  }
}

function onLoad() {
  let animal = generateRandomAnimal();
  console.log(animal);
  document.getElementById("animal-properties").textContent = `${animal.name}, ${animal.age}years old`;
  let imageTag = document.getElementById("animal-img");
  imageTag.setAttribute("src", animal.image);
  imageTag.setAttribute("alt", animal.image_alt);
}
