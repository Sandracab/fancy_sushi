/* Adds scripts to home view on load */
const scriptsArray = [
  "./scripts/libraries/anime.min.js",
  "https://unpkg.com/aos@2.3.1/dist/aos.js",
  "./scripts/components/TheHero.js",
  "./scripts/components/ListItem.js",
  "./scripts/components/SushiItem.js"
];

const addScripts = () => {
  scriptsArray.forEach((script) => {
    let newScript = document.createElement("script");
    newScript.src = script;
    document.body.appendChild(newScript);
  });
};

/* Update number of items in shopping cart */
const shoppingIconNumber = getObject("shopping-icon-number");

const getNumberInCart = () => {
  let numberInCart;

  if (localStorage.getItem("cart") != null) {
    numberInCart = JSON.parse(localStorage.getItem("cart")).length;
  } else {
    numberInCart = [0];
  }
  shoppingIconNumber.innerHTML = numberInCart;
  return numberInCart;
}

(HOME = () => {
  getNumberInCart(),
  getShoppingCartItems(),
  addScripts();
})();







