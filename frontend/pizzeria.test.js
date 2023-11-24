//Previo habiendo instalado node y npm, en un terminal de intellij en el directorio frontend
//C:\Users\usuario\IdeaProjects\borrar\club_de_java\frontend>npm init
//C:\Users\usuario\IdeaProjects\borrar\club_de_java\frontend>npm install --save-dev jest
//C:\Users\usuario\IdeaProjects\borrar\club_de_java\frontend>npm test

// Testing con jest en javascript para resolver las dependencias en el IDE:
// Settings > Languages & Frameworks > Javascript > Libraries > Download > busca jest y descarga e instala

//Lista completa de matchers:
//https://jestjs.io/es-ES/docs/expect
const pizzeria = require('./pizzeria');

test('promise con then', async () => {
    expect.assertions(1);
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
    let pizzaawait = await pizzeria.cookpizza();
    pizzeria.eat(pizzaawait);
    console.log("Después de cookpizza");
    expect(true).toBe(true);
}, 20000);

