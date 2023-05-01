/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = "Kevin Dorgeles Tetede";


// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerText = myName;


// Step 3: declare and instantiate a variable to hold the current year
const currentYear = "2023";

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerText = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
const newPath = 'images/kevin.jpg';

// Step 6: copy your image into the "images" folder
// DONE

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', newPath);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favoriteFoods= ['Graine', 'Arachide', 'Gombo Grille'];

// Step 2: place the values of the favorite foods variable into the HTML file


let list = document.querySelector('#food');
favoriteFoods.forEach(food => {
  const para = document.createElement('p');
  para.innerText = food;
  list.appendChild(para);
});

// Step 3: declare and instantiate a variable to hold another favorite food
const anotherFavoriteFood = 'Bahouin';

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFoods.push(anotherFavoriteFood);

// Step 5: repeat Step 2

favoriteFoods.forEach(food => {
  const para = document.createElement('p');
  para.textContent = food;
  list.appendChild(para);
});


// Step 6: remove the first element in the favorite foods array
favoriteFoods.shift();


// Step 7: repeat Step 2

favoriteFoods.forEach(food => {
  const para = document.createElement('p');
  para.textContent = food;
  list.appendChild(para);
});


// Step 8: remove the last element in the favorite foods array
favoriteFoods.pop();


// Step 7: repeat Step 2

favoriteFoods.forEach(food => {
  const para = document.createElement('p');
  para.textContent = food;
  list.appendChild(para);
});