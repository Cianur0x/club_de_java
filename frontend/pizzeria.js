
function eat(pizza) {
    console.log("Comer rica pizza " + JSON.stringify(pizza));
}

function slice(pizza, portions) {
    console.log("Trocear pizza " + pizza + " en " + portions + " porciones.");
    return { 'nombre': pizza, 'trozos': 8};
}

function cookpizza() {
    return new Promise(function (resolve, reject) {

        setTimeout(() => {
            console.log("Pizza!");
            let pizza = "Margarita";
            resolve(pizza);
        }, "4000");

    });
}

async function cookpizzaawait() {
    let pizzaawait = await cookpizza();
    eat(pizzaawait);
}

module.exports = {cookpizza, cookpizzaawait, eat, slice};







