
// // Este array debe usarse para el ejercicio 10
// const data = [
//     { id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
//     { id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
//     { id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
//     { id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
//     { id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
//     { id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
//     { id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
//     { id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
//     { id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
//     { id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
//     { id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
//     { id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
//     { id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
//     { id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
//     { id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
//     { id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
//     { id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
//     { id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
//     { id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
//     { id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
// ]

// // ==================Ejercicio 1 =======================

// Cada vez que se haga click en este botón,
//  el background de toda esta página debe cambiar a un 
//  color aleatorio.

// function rgbColorGenerator() {
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);

//     return `rgb(${red}, ${green}, ${blue})`;
// }

// const button = document.querySelector("button");

// function colorB() {

//     const body = document.querySelector("body");
//     console.log(button);
//     body.style.background = rgbColorGenerator();

// }

// button.addEventListener('click', colorB);

// ==================Ejercicio 2 =======================

// He aquí un contador y dos botones. Cuando se haga click en el botón 
// de aumentar, el contador debe aumentar en 1.
// Cuando se haga click en el botón de disminuir, debe disminuir en 1.

// const button = document.querySelectorAll("#counter-btns > button")
// console.log(button);

// let contador = 0;

// function aumentar2() {
//     const text = document.getElementById("counter");
//     contador++;
//     text.innerText = contador;
// }


// function aumentar1() {
//     const text = document.getElementById("counter");
//     contador--;
//     text.innerText = contador;
// }

// button[0].addEventListener('click', aumentar2);
// button[1].addEventListener('click', aumentar1);

// ==================Ejercicio 3 =======================

// Cuando se haga click en el botón, el texto debe 
// desaparecer; si se vuelve a hacer click, aparecerá, y así sucesivamente.


// const button = document.querySelector("#ejercicio-3 > button")
// console.log(button);

// const text = document.querySelector("#ejercicio-3 > p");
// console.log(text);


// function aparece() {
//     if (text.style.visibility !== "hidden") {

//         text.style.visibility = "hidden";

//     } else {
//         text.style.visibility = "visible";
//     }
// }

// button.addEventListener("click", aparece);

// ==================Ejercicio 4 =======================

// Cuando se haga click en el botón, debe eliminarse el primer párrafo
//  de la lista. Si no queda ninguno, no debe suceder nada, tampoco mostrar
//   error en la consola.

// const button = document.querySelector("#ejercicio-4 > button")
// console.log(button);
//     const ul = document.querySelector("#ejercicio-4 > ul");

// function delete2() {

//     const lis = document.querySelectorAll("ul > li");

//     if (lis.length !== 0 ) {
//         lis[0].remove()
//     } else {
//           lis[0]
//     }
// }
// button.addEventListener("click", delete2);

// // ==================Ejercicio 5 =======================

// Debajo de este enunciado hay una lista desordenada que no contiene ningún 
// elemento, y, por lo tanto, no es visible (debes mirar en el HTML). Debajo de 
// esa lista verás varios párrafos: cuando se haga click en el botón 
// de cada párrafo, el texto de ese párrafo (y no otro) debe añadirse a la lista.

// const button = document.querySelectorAll(".paragraph-container > button");
// console.log(button);

// function addParr() {
//     let ul = document.querySelector("#ejercicio-5 > ul");
//     let p = document.querySelector(".paragraph-container > p");
//     let nuevoElemento = document.createElement("li");
//     nuevoElemento.appendChild(p);
//     ul.appendChild(nuevoElemento);
// }

// button[0].addEventListener("click", addParr);
// button[1].addEventListener("click", addParr);
// button[2].addEventListener("click", addParr);
// button[3].addEventListener("click", addParr);
// button[4].addEventListener("click", addParr);

// // ==================Ejercicio 6 =======================

// Cuando se haga click en uno de los <div> que están en el cuadro de abajo,
//  ese <div> debe desaparecer. Cuando se haga click en el botón de añadir, 
//  debe aparecer un nuevo <div> con las mismas características que los anteriores.

// const container = document.querySelector("#square-container");
// const addButton = document.querySelector("#ejercicio-6 > button");

// addButton.addEventListener("click", function() {
//   const newDiv = document.createElement("div");
//   newDiv.classList.add("square");

//   container.appendChild(newDiv);

//   newDiv.addEventListener("click", function() {
//     newDiv.remove();
//   });
// });

// const squares = document.querySelectorAll(".square");
// squares.forEach(function(square) {
//   square.addEventListener("click", function() {
//     square.remove();
//   });
// });

// // ==================Ejercicio 7 =======================

// // Cada botón debe cambiar el color del <div> al color indicado.

// const button = document.querySelectorAll("#color_btns button");
// const divColor = document.querySelector(".color-div")

// // button[0].addEventListener("click", () => divColor.style.background = "blue");
// // button[1].addEventListener("click", () => divColor.style.background = "red");
// // button[2].addEventListener("click", () => divColor.style.background = "green");
// // button[3].addEventListener("click", () => divColor.style.background = "black");
// // button[4].addEventListener("click", () => divColor.style.background = "purple");

// const colors = function (event) {
//     console.log(event.target);
//     divColor.style.background = event.target.innerText;
// }

// button.forEach(button => button.addEventListener("click",colors));

// // ==================Ejercicio 8 =======================

// Cuando se haga click en el botón de cerrar, el texto bajo el título de la card 
// debe desaparecer, y el texto del botón debe pasar a ser "Open".
// Cuando se vuelva a hacer click, el texto volverá a aparecer, y el botón pasará a "Close".
// Usa la clase "hidden" que tienes ya descrita en el CSS.

// const button = document.querySelector("#faq-title button");
// const loremP = document.querySelector("#faq-card p");

// function aparece() {
//     const button = document.querySelector("#faq-title button");

//     if (loremP.style.visibility !== "hidden") {
//         button.innerText = "Open"
//         loremP.style.visibility = "hidden";

//     } else {
//         button.innerText = "Close"
//         loremP.style.visibility = "visible";
//     }
// }
// button.addEventListener("click", aparece)


// // ==================Ejercicio 9 =======================

// ¿Has podido completar el ejercicio anterior? Entonces no tendrás ningún problema 
// en programar el desplegable de la sección FAQ del café de altura 
// (la sección con las preguntas frecuentes). ¡Este es un buen momento para hacerlo!


// // ==================Ejercicio 10 =======================

// Usa el array de objetos que encontrarás al inicio del archivo JS de este 
// repositorio para pintar en el DOM un <div> por cada uno de los objetos en la
//  lista. Cada <div> tendrá los siguientes elementos:

// 1.Un <span> con el "id".
// 2.Un <h4> con el "name".
// 3.Una <img> con src igual a "img".



const data = [
    { id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    { id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
    { id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
    { id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    { id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
    { id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
    { id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
    { id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
    { id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
    { id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
    { id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
    { id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
    { id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
    { id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
    { id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
    { id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
    { id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
]

const container = document.querySelector("#ejercicio-10");

data.forEach(pokemon => {
  const div = document.createElement("div");
  
  const span = document.createElement("span");
  span.textContent = pokemon.id;
  div.appendChild(span);
  
  const h4 = document.createElement("h4");
  h4.textContent = pokemon.name;
  div.appendChild(h4);
  
  const img = document.createElement("img");
  img.src = pokemon.img;
  div.appendChild(img);
  
  container.appendChild(div);
});

const divAll = document.querySelectorAll("#ejercicio-10 div");
divAll.forEach((div) => {
    div.classList.add('containerDiv');
  });

  console.log(divAll);