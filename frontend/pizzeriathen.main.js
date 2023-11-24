const pizzeria = require('./pizzeria');

console.log("cookpizza then...");
console.log("Antes de cookpizza");
//Railtruck pattern:
//then way
//   |-----------------------
//   v                       v
//===X=====X>>>>>X====== resolve
//   |     ^
//   V     |
//   t --> P --> X
//
//
//======================= reject
//               ^
//catch way ------
pizzeria.cookpizza().then( (pizza) => {
    eat(pizza);
});
console.log("Después de cookpizza");
