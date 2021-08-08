const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
<style>
  footer {
    background-color: #011627;
    color: #F0FAF8;
    margin-top: auto;
  }

  .footer {
    grid-column: span 12;
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    color: #f2f5eacc;
    display: block;
    margin-bottom: -30vh;
  }

  #contact-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
  }

  .contact-container {
    display: flex;
    align-items: center;
    padding: 0.5em 1em;
  }

  .contact-container p {
    padding-left: 15px;
  }

  .contact-container p span {
    font-weight: 600;
  }

  #social-media-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  #social-media-section a {
    padding: 0em 2em 4em;
  }

  @media (min-width: 900px) {
    .footer {
      padding: 1.5em;
    }

    #contact-footer {
      flex-direction: row;
      justify-content: center;
    }
  }
</style>
  <footer>
    <section id="contact-footer" class="section">
      <div class="contact-container">
        <i class="fas fa-clock fa-lg"></i>
        <p class="contact-text"><span>Åpningstider: </span>13:00-22:00</p>
      </div>
      <div class="contact-container">
        <i class="fas fa-phone fa-lg"></i>
        <p class="contact-text"><span>Telefon: </span>222 22 222</p>
      </div>
      <div class="contact-container">
        <i class="fas fa-home fa-lg"></i>
        <p class="contact-text">
          <span>Adresse: </span>Karl Johans Gate 13
        </p>
      </div>
    </section>
    <section id="social-media-section">
      <a href="#ng"><i class="fab fa-facebook-square fa-2x"></i></i></a>
      <a href="#ng"><i class="fab fa-instagram fa-2x"></i></i></a>
      <a href="#ng"><i class="fab fa-pinterest-square fa-2x"></i></i></a>
    </section>
  </footer>
`;

class TheFooter extends HTMLElement {
  constructor() {
    super();

    this.appendChild(footerTemplate.content.cloneNode(true));
  }
}

window.customElements.define("the-footer", TheFooter);
