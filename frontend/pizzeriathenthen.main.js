const pizzeria = require("./pizzeria");
console.log("cookpizza then, then...");
console.log("Antes de cookpizza");
//Railtruck pattern:
//then way
//   |-----------------------
//   v                       v
//===X=====X=====X=====X>>>>>X========resolve
//   |     ^     |     ^     |
//   V     |     V     |     V
//   t --> P --> t --> P --> X
//
//
//======================= reject
//               ^
//catch way ------
pizzeria.cookpizza().then( (pizza) => {
    let pizzaslides = pizzeria.slice(pizza, 8);
    //return new Promise((resolve, reject) => { resolve(pizzaslides)})
}).then(slicedpizza => {
    pizzeria.eat(slicedpizza);
});
console.log("Después de cookpizza");