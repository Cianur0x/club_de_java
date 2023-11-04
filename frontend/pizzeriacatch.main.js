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
    return new Promise((resolve, reject) => { //reject("Pizza quemada");
         resolve(pizzaslides)
        });
}).then(slicedpizza => {
    pizzeria.eat(slicedpizza);
}).catch(reason => {
    console.log(reason);
    return new Promise( (resolve, reject) => {
        let clearedpizza = "Margarita con algún trozo quemado";
        resolve(clearedpizza)} );
}).then(pizza => {
        //chequea undefined a false
        if (pizza) {
            pizzeria.eat(pizza);
        }
    }
);
console.log("Después de cookpizza");