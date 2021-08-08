const listItemTemplate = document.createElement("template");

listItemTemplate.innerHTML = `
    <div class="container note">
      <h3></h3>
      <div class="list-container">
      </div>
    </div>
`;

class ListItem extends HTMLElement {
  constructor() {
    super();

    this.appendChild(listItemTemplate.content.cloneNode(true));

    let title = this.getAttribute("title");
    this.querySelector("h3").innerHTML = title;

    let itemArray = JSON.parse(this.getAttribute("item-array"));

    let HTMLtxt = "";

    itemArray.forEach( (item, i) => {
      HTMLtxt += `<sushi-item
        title="${i + 1}.${item.title}"
        bites="${item.bites}"
        price="${item.price}"
        price="${item.price}"
        image="${item.image}"
        alt="${item.alt}"
        data-array-index="${i}"
        >
        </sushi-item>
        `;
    });
    this.querySelector(".list-container").innerHTML = HTMLtxt;
  }
}

window.customElements.define("list-item", ListItem);
