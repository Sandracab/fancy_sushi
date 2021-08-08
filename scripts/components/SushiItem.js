const sushiItemTemplate = document.createElement("template");

sushiItemTemplate.innerHTML = `
  <article class="sushi-item">
    <img>
    <h4></h4>
    <p></p>
    <span class="price"></span>
    <input type="button" value="Kjøp" class="btn sushi-item-btn">
  </article>
`;

class SushiItem extends HTMLElement {
  constructor() {
    super();

    this.appendChild(sushiItemTemplate.content.cloneNode(true));

    const image = this.getAttribute("image");
    this.querySelector("img").src = `../images/food/${image}`;

    const title = this.getAttribute("title");
    this.querySelector("h4").innerHTML = title;

    const alt = this.getAttribute("alt");
    this.querySelector("img").alt = alt;

    const bites = this.getAttribute("bites");
    this.querySelector("p").innerHTML = `${bites} Bites`;

    const price = this.getAttribute("price");
    this.querySelector(".price").innerHTML =  `${price},-`;

    const dataArrayIndex = this.getAttribute("data-array-index");
    this.querySelector("input").dataset.arrayIndex = dataArrayIndex;

    const getArrayIndex = ( chosenIndex ) => { 
      let shoppingArray;

      if (localStorage.getItem("cart") != null) {
        shoppingArray = JSON.parse(localStorage.getItem("cart"));
      } else {
        shoppingArray = [];
      }

      let chosenSushi = sushiList[ chosenIndex.dataset.arrayIndex ];
      shoppingArray.push( chosenSushi );

      localStorage.setItem("cart", JSON.stringify(shoppingArray));      
    }
    this.querySelector("input").addEventListener("click", function(){
      getArrayIndex(this);
      getNumberInCart();
    });
  }
}

window.customElements.define("sushi-item", SushiItem);
