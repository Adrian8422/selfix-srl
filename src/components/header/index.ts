const logoSelfix = require("../../assets/LOGO WEB (1).png");

class Header extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  connectedCallback() {
    const style = document.createElement("style");

    style.innerHTML = `
    
    
    * {
      box-sizing: border-box;
    }
    
    body {
      margin: 0;
      padding: 0;
    }
    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 100px;
      background-color: transparent;
      align-items: center;
      padding: 30px 0px;
      position: fixed;
      background-color: whitesmoke;
      height: 50px;
      width: 1002px;
    }
    .header__logo-home {
      margin: 0 28px 0 13px;
      width: 24vh;
      height: 6vh;
      margin-top: 1px;
  }
    }
    .header-name {
      font-family: "Orbitron", sans-serif;
      font-size: 30px;
      color: whitesmoke;
      text-shadow: -3px 3px 3px #000000;
    }
    
    .header__container-link {
      display: none;
    }
    @media (min-width: 960px) {
      .header__container-link {
        display: flex;
        align-items: center;
      }
    }
    
    .header__links {
      font-family: "Poppins", sans-serif;
      font-weight: bold;
      margin-right: 29px;
      color: #040101;
      padding: 6px;
      font-weight: 400;
      text-decoration: none;
  }
    }
    .header__container-link a:hover {
      background-color: teal;
      border-radius: 5px;
      transition: all 550ms ease;
    }
    .header__button-open {
      height: 40px;
      width: 40px;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: transparent;
      border: none;
      margin-right: 27px;
    }
    
    @media (min-width: 960px) {
      .header__button-open {
        display: none;
      }
    }
  .button-open-img {
    height: 35px;
    width: 30px;
  }
  
  /* //  HEADER VENTANA HAMBURGUESA */
  .header__ventana-burger {
    display: none;
    position: absolute;
    background-color: #323b35;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 20px;
  }
  @media (min-width: 960px) {
    .header__ventana-burger {
    }
  }
  
  .header__ventana-burger-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 681px;
    align-items: center;
    position: absolute;
    background-color: #417670;
    top: 0;
    right: 8px;
    left: 0px;
    padding: 5px 21px;
  }
  @media (min-width: 960px) {
    .header__ventana-burger-content {
      display: none;
    }
  }
  .ventana__close {
    width: 50px;
    height: 50px;
    background-color: transparent;
    align-self: flex-end;
    border: none;
  }
  
  .img-close {
    height: 31px;
    width: 30px;
    color: black;
  }
  .header__ventana-links {
    display: flex;
    flex-direction: column;
    padding: 70px;
  }
  .header__ventana-links a:hover {
    background-color: rgb(2, 173, 173);
    border-radius: 7px;
    transition: all 500ms ease;
  }
  
  .link {
    font-family: "Montserrat", sans-serif;
    font-size: 32px;
    text-decoration: none;
    color: black;
    padding: 24px;
    margin-bottom: 56px;
    border: solid 2px #19171708;
    border-radius: 60px;
    box-shadow: 11px 11px 14px 0px #100f0fad;
  }`;

    this.appendChild(style);
  }
  addListeners() {
    const buttonOpenEl = this.querySelector(".header__button-open");
    const buttonCloseEl = this.querySelector(".ventana__close");
    const ventanaEl = this.querySelector(".header__ventana-burger");
    buttonOpenEl.addEventListener("click", () => {
      ventanaEl.setAttribute("style", "display:contents");
    });
    buttonCloseEl.addEventListener("click", () => {
      ventanaEl.setAttribute("style", "display:none");
    });
  }
  render() {
    const div = document.createElement("div");

    div.innerHTML = `
  
  <header class="header">
  <a class="header__logo-home" href="index.html">
  <img class="header__logo-home" src="${logoSelfix}">
  <h3 href="./servicios.html" class="header-name"></h3>
  </a>
    <nav class="header__container-link">
      <a class="header__links" href="./portfolio.html">Portfolio</a>
      <a class="header__links" href="./servicios.html">Servicios</a>
      <a class="header__links" href="./contacto.html">Contacto</a>
    </nav>
    <button class="header__button-open">
      <img
        class="button-open-img"
        src="./medias/header/menu-white.png"
        alt=""
      />
    </button>
    <div class="header__ventana-burger">
      <div class="header__ventana-burger-content">
        <button class="ventana__close">
          <img class="img-close" src="./medias/header/close.png" alt="cerrar" />
        </button>
        <div class="header__ventana-links">
          <a class="link" href="./portfolio.html">Portfolio</a>
          <a class="link" href="./servicios.html">Servicios</a>
          <a class="link" href="./contacto.html">Contacto</a>
        </div>
      </div>
    </div>
  </header>
    
    
    `;
    this.appendChild(div);
    this.addListeners();
  }
}

customElements.define("header-el", Header);
