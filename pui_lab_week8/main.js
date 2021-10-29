/*** Object Constructors ***/
function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.image = "cat.jpg";
  this.image_alt = "A cute grey cat with giant green eyes";
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.image = "dog.jpg";
  this.image_alt = "An adorable little dog with big ears and orange fur";
}

function Bird(name, age) {
  this.name = name;
  this.age = age;
  this.image = "bird.jpg";
  this.image_alt = "A puff ball grey and white bird sitting on a branch";
}

/*** Global Variables ***/
let animals = [new Cat(), new Dog(), new Bird()];
let names = ["Toothless", "Marshmallow", "Momo", "Coco", "Ollie", "Oscar", "Bella", "Ruby", "Apples"];

/*** Functions ***/
// get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

// generates either a Cat, Dog, or Bird with a random name and random age
function generateRandomAnimal() {
  let randomIdx = getRandomIndex(animals.length);
  let randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Cat) {
    return new Cat(generateRandomName(), generateRandomAge());
  } else if (randomAnimal instanceof Dog) {
    return new Dog(generateRandomName(), generateRandomAge());
  } else if (randomAnimal instanceof Bird) {
    return new Bird(generateRandomName(), generateRandomAge());
  }
}

// generates a random name from list of names
function generateRandomName() {
  let randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
  return getRandomIndex(5);
}

/*** Document Load ****/
function onLoad() {
  var animal = JSON.parse(localStorage.getItem("savedAnimal"));
  // console.log(animal);

  var hasSavedAnimal = false;

  if (animal === null) {
    document.getElementById("btn-storage").textContent = "Save Animal";
    animal = generateRandomAnimal();
  } else {
    document.getElementById("btn-storage").textContent = "Clear Animal";
    hasSavedAnimal = true;
  }

  document.getElementById("animal-properties").textContent = animal.name + " " + animal.age + "years old";
  document.getElementById("animal-img").setAttribute("src", animal.image);

  document.getElementById("btn-storage").addEventListener("click", function () {
    if (hasSavedAnimal) {
      localStorage.removeItem("savedAnimal");

      hasSavedAnimal = false;

      document.getElementById("btn-storage").style.display = "none";
      document.getElementById("btn-storage").textContent = "Cleared";
      document.getElementById("btn-storage").style.display = "block";
    } else {
      localStorage.setItem("savedAnimal", JSON.stringify(animal));

      document.getElementById("btn-storage").style.display = "none";
      document.getElementById("btn-storage").style.textContent = "Saved!";
      document.getElementById("btn-storage").style.display = "block";
    }
  });
}
