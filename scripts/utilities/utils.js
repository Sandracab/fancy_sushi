/* Get object from DOM */
const getObject = (id) => {
  return document.getElementById(id);
};

/* Generate HTML for shopping view */
const generateHTMLShopping = () => {
  const orderListContainer = getObject("order-list-container");
  const totalPrice = getObject("total-price");
  const cookingTime = getObject("cooking-time");
  let currentShoppingCart = getShoppingCartItems();
  console.log(currentShoppingCart);

  let htmlTxt = "";
  let priceCounter = 0;
  let timeCounter = 0;

  if (currentShoppingCart != null) {
    currentShoppingCart.forEach((item) => {
      htmlTxt += `
      <article class="order-list-item note">
        <img src="../images/food/${item.image}" alt="${item.alt}">
        <h4>${item.title}</h4>
        <p>${item.bites} Biter</p>
        <span>${item.price},-</span>
      </article>
      `;
      priceCounter += item.price;
      timeCounter += item.cookingTime;
    });
  } else {
    htmlTxt += `
      <article>
        <h4>Du har ingenting i handlekurven enda. Gå til meny i navigasjonen for å bestille!</h4>
      </article>
      `;
  }

  orderListContainer.innerHTML = htmlTxt;
  totalPrice.innerHTML = priceCounter;
  cookingTime.innerHTML = timeCounter;
};

const getShoppingCartItems = () => {
  let itemsInCart = JSON.parse(localStorage.getItem("cart"));

  return itemsInCart;
};

/* Generate HTML for review view */
const generateHTMLReview = () => {
  let totalScore = getObject("total-score");
  const basedOnNmb = getObject("based-on-nmb");
  const reviewListBox = getObject("review-list-box");

  let currentReviewArray = getReviewItems();
  let totalScoreCalculated = 0;

  if (currentReviewArray != null) {
    currentReviewArray = JSON.parse(localStorage.getItem("review"));
  } else {
    localStorage.setItem("review", JSON.stringify(reviewsList));
  }

  let HTMLtxt = "";

  currentReviewArray.forEach((item) => {
    totalScoreCalculated += item.stars;
    console.log(item.stars);
    HTMLtxt += `
      <article class="review-list-item review-container">
        <img src="./images/other/star.png"><span> ${item.stars}</span>
        <p><strong>${item.name}</strong></p>
        <p>${item.description}</p>
      </article>
    `;
  });

  reviewListBox.innerHTML = HTMLtxt;

  let averageScore = totalScoreCalculated / currentReviewArray.length;
  totalScore.innerHTML = Math.round(averageScore * 100) / 100;
  basedOnNmb.innerHTML = `Basert på ${currentReviewArray.length} kundeanmelderser`;

};

const getReviewItems = () => {
  let itemsInLS = JSON.parse(localStorage.getItem("review"));

  return itemsInLS;
};


const addReview = () => {
  alert();
  let nameTxt = getObject("name-txt");
  let starScore = getObject("starscore");
  let reviewTxt = getObject("review-txt");

  let reviewArray;

  if (localStorage.getItem("review") != null) {
    reviewArray = JSON.parse(localStorage.getItem("review"));
  } else {
    reviewArray = [];
  }

  let nameR = nameTxt.value;
  let starsR = parseInt(starScore.value);
  let reviewR = reviewTxt.value;

  let newReview = { name: nameR, stars: starsR, description: reviewR }

  reviewArray.push( newReview );

	localStorage.setItem("review", JSON.stringify(reviewArray));

  generateHTMLReview();
}

