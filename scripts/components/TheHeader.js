const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
  <style>
    header .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: visible;
    }

    header a {
      text-decoration: none;
    }

    #logo {
      margin-left: 0.5em;
    }

    #logo span {
      font-weight: 600;
      letter-spacing: -3px;
    }

    nav {
      display: flex;
      flex-direction: row;
    }

    nav div {
      display: flex;
      flex-direction: row;
      padding: 0 1em;
    }

    nav div span {
      font-weight: 600;
      background-color: #EDC0BF;
      border-radius: 50px;
      width: 25px;
      height: 25px;
      text-align: center;
      line-height: 0.5;
      padding: 5px;
      border: 2px solid #011627;
    }

    i {
      display: flex;
      cursor: pointer;
      color: #011627;
    }

    #menu-icon {
      padding: 0 1em;
    }

    ul {
      margin: 30px 0 0 0;
      padding: 0;
      list-style: none;
      display: none;
      position: absolute;
      text-align: center;
      right: 0;
      width: 100%;
    }

    li {
      position: relative;
      padding: 1em;
      text-align: center;
      background-color: #F9F1F4;
      border-bottom: solid 2px #EDC0BF;
    }

    a {
      display: block;
      text-align: center;
    }

    /* Small laptop */
    @media (min-width: 900px){
      html {
        font-size: 16px;
      }

      #logo {
      margin-left: 0;
      }

      nav div span {
        margin-left: -16px;
      }

      #menu-icon {
        display: none;
      }

      ul {
        display: flex;
        flex-direction: row;
        position: relative;
        right: unset;
        margin: 0;
      }

      li {
        padding: 0px;
        border-bottom: none;
        background-color: #fff;
      }

      li a:hover {
        color: #922D50;
        text-decoration: underline solid #EDC0BF 8px;
      }

      li ul {
        display: none;
        position: absolute;
        top: 100%;
        width: 100%;
        padding: 0 10px;
      }

      li:hover ul {
        display: block;
      }

      li ul a {
        background-color: #EDC0BF;
        color: #922D50;
        padding-bottom: 8px;
      }

      li ul a:hover {
        background-color: #922D50;
        color: #EDC0BF;
        text-decoration: none;
      }

      a {
        padding: 10px 10px 0 10px;
      }
    }
  </style>
  <header>
      <div class="container">
        <a class="view-link" data-view="home" href="#nogo">
          <h1 id="logo" data-view="home">Fancy<span data-view="home">Sushi</span>
          </h1>
        </a>
        <nav>
          <ul id="menu-list">
            <li><a class="view-link" data-view="home" href="#menu-section">Meny</a></li>
            <li><a class="view-link" data-view="home" href="#contact-section">Kontakt Oss</a></li>
            <li><a class="view-link" data-view="reviews" href="#nogo">Anmeldelser</a></li>
            <li><a class="view-link" data-view="universal-design" href="#nogo">Universell Utforming</a>
              <ul class="dropdown">
                <li><a class="view-link" data-view="universal-design" href="#WCAG 1.4.3">WCAG 1.4.3</a>
                <li><a class="view-link" data-view="universal-design" href="#WCAG 1.1.1">WCAG 1.1.1</a>
              </ul>
            </li>
          </ul>
          <div>
            <i id="shopping-cart-icon" class="material-icons">
              <a class="view-link" data-view="shopping-cart" href="#nogo">shopping_basket</a>
            </i>
            <span id="shopping-icon-number">0</span>
          </div>
          <i id="menu-icon" class="material-icons">menu</i>
        </nav>
      </div>
    </header>
`;

class TheHeader extends HTMLElement {
  constructor() {
    super();

    this.appendChild(headerTemplate.content.cloneNode(true));
  }
}

window.customElements.define("the-header", TheHeader);

/* Hamburger menu */
const menuIcon = getObject("menu-icon");
const menuList = getObject("menu-list");

const showMenu = () => {

  if( menuList.style.display == "none" ){
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }
}

menuIcon.addEventListener( "click" , showMenu );

/* Views */
const viewLinks = document.querySelectorAll(".view-link");
const output = getObject("output");

const showView = ( e ) => {

  let url;
  let currentView;
  if( e.target ){
    url = `views/${e.target.dataset.view}.html`;
    currentView = e.target.dataset.view;
  } else {
    url = `views/${ e }.html`;
    currentView = e;
  }

  fetch(url)
    .then( ( result ) => { return result.text(); } )
    .then((html) => {
      output.innerHTML = html;
      let viewScript = document.createElement("script");
      viewScript.src = `./scripts/views/${currentView}.js`;
      output.appendChild(viewScript);
    });

  if( document.body.offsetWidth < 900 ){
    menuList.style.display = "none";
  }
}

viewLinks.forEach( link => link.addEventListener( "click" , showView ));

(
  HOME = () => {
    showView( "home" )
  }
)();

