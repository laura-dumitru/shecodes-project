let vegSpaghettiRecipe = document.getElementById("vegSpaghetti");
let vegSpaghetti = ["spaghetti", "parmesan", "basil", "tomatoes", "vegballs"];

let avocadoToastRecipe = document.getElementById("avocadoToast");
let avocadoToast = ["avocado", "bread", "eggs"];

let pizzaRecipe = document.getElementById("pizza");
let pizza = ["tomatoes", "flour", "mozarella", "sweetcorn", "courgettes"];

let babaGanoushRecipe = document.getElementById("babaGanoush");
let babaGanoush = ["aubergine", "garlic", "lemon"];

let cherryCakeRecipe = document.getElementById("cherryCake");
let cherryCake = ["cherries", "flour", "sugar", "eggs", "milk", "butter"];

let courgettePastaRecipe = document.getElementById("courgettePasta");
let courgettePasta = ["courgettes", "pasta", "garlic"];

let watermelonSmoothieRecipe = document.getElementById("watermelonSmoothie");
let watermelonSmoothie = ["watermelon", "strawberries", "lime"];

let ratatouilleRecipe = document.getElementById("ratatouille");
let ratatouille = ["aubergine", "courgettes", "tomatoes", "garlic"];

let cherrySmoothieRecipe = document.getElementById("cherrySmoothie");
let cherrySmoothie = ["strawberries", "cherries", "milk"];

let tomatoMozarellaBakeRecipe = document.getElementById("tomatoMozarellaBake");
let tomatoMozarellaBake = [
  "tomatoes",
  "mozarella",
  "spaghetti",
  "parmesan",
  "basil",
];

let freshTomatoPastaRecipe = document.getElementById("freshTomato");
let freshTomatoPasta = ["pasta", "tomatoes", "mozarella"];

let bakedCourgettesRecipe = document.getElementById("bakedCourgettes");
let bakedCourgettes = ["courgettes", "parmesan", "basil", "garlic"];

let VeggieMozarellaRecipe = document.getElementById("veggieMozarella");
let veggieMozarella = ["vegballs", "mozarella", "courgette", "basil"];

let parmesanPastaRecipe = document.getElementById("parmesanPasta");
let parmesanPasta = ["parmesan", "pasta", "garlic", "basil"];

let sourdoughMozarellaRecipe = document.getElementById("sourdoughMozarella");
let sourdoughMozarella = ["bread", "mozarella", "tomatoes"];

let lemonMuffinRecipe = document.getElementById("lemonMuffin");
let lemonMuffin = ["lemon", "cherries", "sugar", "flour"];

let queasyRecipe = document.getElementById("queasy");
let queasy = [
  ["eggs", "strawberries"],
  ["lemon", "butter"],
  ["mozarella", "cherries"],
  ["mozarella", "milk"],
  ["tomatoes", "sugar"],
  ["spaghetti", "sugar"],
  ["watermelon", "avocado"],
  ["eggs", "mozarella"],
  ["flour", "watermelon"],
  ["pasta", "spaghetti"],
  ["pasta", "flour"],
  ["parmesan", "milk"],
  ["parmesan", "flour"],
];

let sickRecipe = document.getElementById("sick");
let sick = [
  ["milk", "garlic"],
  ["mozarella", "watermelon"],
  ["avocado", "pasta"],
  ["tomatoes", "strawberries"],
  ["parmesan", "sweetcorn"],
  ["aubergine", "eggs"],
  ["vegballs", "watermelon"],
  ["eggs", "lemon"],
  ["mozarella", "lime"],
  ["garlic", "sugar"],
  ["basil", "milk"],
  ["spaghetti", "strawberries"],
  ["parmesan", "eggs"],
  ["parmesan", "sugar"],
  ["milk", "lemon"],
  ["avocado", "cherries"],
  ["spaghetti", "cherries"],
];

function compareToChecked(recipe) {
  let checked = document.querySelectorAll("*:checked");
  checked = Array.from(checked).map(function (element) {
    return element.name;
  });
  return (
    checked.length >= 2 &&
    checked.every(function (ingredient) {
      return recipe.includes(ingredient);
    })
  );
}

function compareAllToChecked(ingredients) {
  return ingredients.some(function (ingredients) {
    return compareToChecked(ingredients);
  });
}

function filterRecipe() {
  let recipes = Array.from(document.querySelectorAll(".recipe"));
  function hide(recipe) {
    recipe.style.setProperty("display", "none");
  }
  recipes.forEach(hide);

  if (compareToChecked(vegSpaghetti)) {
    vegSpaghettiRecipe.style.setProperty("display", "inherit");
  } else if (compareToChecked(avocadoToast)) {
    avocadoToastRecipe.style.setProperty("display", "inherit");
  } else if (compareToChecked(pizza)) {
    pizzaRecipe.style.setProperty("display", "inherit");
  } else if (compareToChecked(babaGanoush)) {
    babaGanoushRecipe.style.setProperty("display", "inherit");
  } else if (compareToChecked(cherryCake)) {
    cherryCakeRecipe.style.setProperty("display", "inherit");
  } else if (compareToChecked(courgettePasta)) {
    courgettePastaRecipe.style.setProperty("display", "inherit");
  } else if (compareToChecked(watermelonSmoothie)) {
    watermelonSmoothieRecipe.style.setProperty("display", "inherit");
  } else if (compareToChecked(ratatouille)) {
    ratatouilleRecipe.style.setProperty("display", "inherit");
  } else if (compareToChecked(cherrySmoothie)) {
    cherrySmoothieRecipe.style.setProperty("display", "inherit");
  } else if (compareToChecked(tomatoMozarellaBake)) {
    tomatoMozarellaBakeRecipe.style.setProperty("display", "inherit");
  } else if (compareToChecked(freshTomatoPasta)) {
    freshTomatoPastaRecipe.style.setProperty("display", "inherit");
  } else if (compareToChecked(bakedCourgettes)) {
    bakedCourgettesRecipe.style.setProperty("display", "inherit");
  } else if (compareToChecked(veggieMozarella)) {
    VeggieMozarellaRecipe.style.setProperty("display", "inherit");
  } else if (compareToChecked(parmesanPasta)) {
    parmesanPastaRecipe.style.setProperty("display", "inherit");
  } else if (compareToChecked(sourdoughMozarella)) {
    sourdoughMozarellaRecipe.style.setProperty("display", "inherit");
  } else if (compareToChecked(lemonMuffin)) {
    lemonMuffinRecipe.style.setProperty("display", "inherit");
  } else if (compareAllToChecked(queasy)) {
    queasyRecipe.style.setProperty("display", "inherit");
  } else if (compareAllToChecked(sick)) {
    sickRecipe.style.setProperty("display", "inherit");
  }
}

function joinUs() {
  let name = prompt("What is your name?");
  let contact = prompt("What is your e-mail address?");
  let dish = prompt("What is your favourite dish?");

  let subscribe = document.querySelector(".subscribe");
  subscribe.innerHTML = `<strong>Thank you <span><em>${name}</em></span> ! We'll be in touch soon about upcoming recipes. Happy cooking!</strong>`;
}
let letsCook = document.querySelector("button");
letsCook.addEventListener("click", joinUs);
