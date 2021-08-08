const heroTemplate = document.createElement("template");

heroTemplate.innerHTML = `
<style>
  .hero-container {
  background-color: #DCCDE8;
  height: 70vh;
  padding: 0;
  overflow: hidden;
}

.hero-container .container {
  height: 100%;
  width: 100vw;
  grid-template-rows: repeat(5, 1fr);
  overflow: visible;
}

#maki-img {
  width: 20%;
  grid-column: 1/13;
  grid-row: 1/3;
  align-self: center;
  transform: scale(1.75);
}

#sushi-chef {
  width: 100%;
  grid-column: 10/13;
  grid-row: 1/2;
  margin-top: -20vh;
  opacity: 0;
}

.hero-container h2 {
  font-weight: 900;
  grid-row: 3/4;
  grid-column: 2/12;
  line-height: 1;
  margin: 0;
  opacity: 1;
  align-self: flex-end;
  text-align: center;
}

.hero-container p {
  font-size: 1.125rem;
  grid-row: 4/5;
  grid-column: 2/12;
  opacity: 1;
  align-self: center;
  text-align: center;
}

.hero-container .btn {
  font-size: 1.125rem;
  grid-row: 5/6;
  grid-column: 1/13;
  opacity: 1;
  margin: 0;
  text-align: center;
  align-self: flex-start;
}

/* Small laptop */
@media (min-width: 900px){
  html {
    font-size: 16px;
  }

  .hero-container .container {
    grid-template-rows: repeat(5, 1fr);
  }

  #maki-img {
    width: 40%;
    grid-column: 1/6;
    grid-row: 1/6;
    transform: scale(1.85);
  } 

  #sushi-chef {
    grid-column: 10/12;
    grid-row: 1/2;
    margin-top: 0;
  }

  .hero-container h2 {
  grid-row: 2/3;
  grid-column: 7/12;
  text-align: left;
}

.hero-container p {
  font-size: 1.125rem;
  grid-row: 3/4;
  grid-column: 7/12;
  text-align: left;
  justify-self: flex-start;
}

.hero-container .btn {
  font-size: 1.125rem;
  grid-row: 4/5;
  grid-column: 7/12;
  justify-self: flex-start;

}
</style>
<section class="section hero-container" id="hero">
  <div class="container">
  <img src="../images/banner/chef1.png" alt="" id="sushi-chef">
    <img id="maki-img" src="../images/banner/maki.png" alt="">
    <h2 class="hero-content" id="hero-heading">Delikat sushi som kan nytes hjemme</h2>
    <p class="hero-content" id="hero-p">Ikke spis kjedelig sushi, få en matopplevelse du sent vil glemme.</p>
    <a class="hero-content btn" id="hero-btn" href="#menu-section">Bestill sushi nå</a>
  </div>
</section>
`;

class TheHero extends HTMLElement {
  constructor() {
    super();

    this.appendChild(heroTemplate.content.cloneNode(true));
  }
}

window.customElements.define("the-hero", TheHero);

anime({
  targets: "#sushi-chef",
  keyframes: [
    {
      opacity: 1,
      duration: 0,
      translateX: "0vw",
      translateY: "40vh",
    },
    {
      delay: 9600,
      rotate: "90deg",
      translateY: "45vh",
      skewY: "20deg",
      duration: 500,
    },
    {
      opacity: 0,
      duration: 3000,
    },
  ],
  easing: "easeOutElastic(1, .6)",
});

var tl = anime.timeline();
tl
.add({
  targets: "#maki-img",
  keyframes: [
    {
      duration: 0,
      translateX: "-20vw",
      translateY: "-40vh",
      scale: 0.8,
    },
    {
      delay: 200,
      translateX: "30vw",
      translateY: "-10vh",
      rotate: "360deg",
      scale: 1.4,
      duration: 3000,
    },
    {
      translateX: "-20vw",
      translateY: "15vh",
      rotate: "0deg",
      scale: 2.2,
      duration: 4000,
    },
    {
      translateX: "75vw",
      rotate: "360deg",
      duration: 5000,
    },
    {
      opacity: 0,
      duration: 500,
    },
    {
      delay: 500,
      translateX: 0,
      translateY: 0,
      rotate: "0deg",
    },
    {
      opacity: 1,
      duration: 1000,
      easing: "linear",
    },
  ],
  easing: "easeInOutElastic(1, .6)",
})
.add({
  targets: "#hero-heading, #hero-p, #hero-btn",
  keyframes: [
    { opacity: 0, duration: 0 },
    { opacity: 1, duration: 2300 }
  ]
})

