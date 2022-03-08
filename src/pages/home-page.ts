import { Router } from "@vaadin/router";
const welcomeImg = require("../assets/sustentabilidad-resicom.jpg");
const imgGestion = require("../assets/GESTAO-DE-RESIDUOS-580x640.jpg");
const imgProcesoReciclado = require("../assets/icon-relleno-sanitario.svg");

class HomePage extends HTMLElement {
  connectedCallback() {
    this.render();

    const style = document.createElement("style");

    style.innerHTML = `
    * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  .welcome {
    height: 681px;
    background-image: url("${welcomeImg}");
    background-position: 19%;
    background-size: cover;
    padding-top: 80px;
    font-family: "Montserrat", sans-serif;
    margin: 0 auto;
  }
  
  
  .welcome-container-img {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 153px 0;
    align-items: center;
    color: whitesmoke;
    
  }

  
  @media (min-width: 832px) {
    .welcome-container-img {
      flex-direction: row;
      justify-content: center;
      
    }
  }
  .welcome-img-gestion {
    width: 36vh;
    font-size: 48px;
  }
  .container-titles{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -58px;


  }
  .title-welcome-img{
    font-size: 55px;
    font-family: 'Montserrat';
    color: black;
    text-align: center;



  }
  .welcome__title-two {
    font-size: 23px;
    padding: 0 25px 0 27px;
    color: black;
    font-family: 'Montserrat';
    max-width: 57vh;
    margin-top: -10px;
  }
  
  /* SECTION DOS QUIEN SOY */
  
  .container__persona {
  }
  @media (min-width: 1062px) {
    .container__persona {
      /* padding: 5vh; */
      margin: 25px 25px;
    }
  }
  
  .presentacion__persona-img {
    display: none;
  }
  @media (min-width: 1062px) {
    .presentacion__persona-img {
      display: flex;
      height: 480px;
      width: 380px;
    }
  }
  
  .presentacion {
    height: 538px;
    width: 100%;
    background-color: #8cff87;
  }
  @media (min-width: 1062px) {
    .presentacion {
      display: flex;
      justify-content: center;
      background-color: #8cff87;
      margin-top: 28px;
    }
  }
  .container-gestion-full{
    display: flex;
    padding: 10vh;
    flex-direction: column;
  }
  .container-img-gestion{
    display: flex;
    justify-content: center;

  }
  .container-text-mision{
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
  .text-mision{
    max-width: 50vh;
  }
  
  .presentacion__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 538px;
    padding: 7vh 34px;
    color: whitesmoke;
  }
  
  @media (min-width: 388px) {
    .presentacion__container {
      padding: 150px 34px;
    }
  }
  @media (min-width: 1062px) {
    .presentacion__container {
      color: #141414;
    }
  }
  .p__container-title {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-size: 32px;
    margin-top: -20px;
  }
  @media (min-width: 1062px) {
    .p__container-title {
      margin-right: 72%;
    }
  }
  .p__container-text {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    margin-top: 45px;
    max-width: 51vh;
    text-align: center;
  }
  @media (min-width: 1062px) {
    .p__container-text {
      margin-top: 30px;
      margin-right: 1vh;
      text-align: inherit;
  
      max-width: 471px;
    }
  }
  
  /* SECTION SERVICES */
  
  .services {
    width: 100%;
    background-color: #fafafa;
  }
  @media (min-width: 1168px) {
    .services {
      max-width: 1650px;
      margin: 0 auto;
      margin-top: 36px;
    }
  }
  
  .serv__cont-title {
    margin: 0 auto;
    align-items: center;
    display: flex;
    font-family: "Montserrat", sans-serif;
    justify-content: center;
    font-size: 32px;
    padding: 45px;
  }
  @media (min-width: 1168px) {
    .serv__cont-title {
      padding: inherit;
  
      margin-top: 16px;
      margin-bottom: 68px;
    }
  }
  
  .services__container {
    width: 100%;
  }
  @media (min-width: 1168px) {
    .services__container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
  .services__item {
    font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 315px;
    height: 505px;
    margin-bottom: 50px;
    box-shadow: rgb(0 0 0 / 15%) 6px 5px 8px;
  }
  @media (min-width: 720px) {
    .services__item {
      margin-top: 25px;
      width: 315px;
      height: 505px;
    }
  }
  
  .ss__cont-img-subtitle {
    font-size: 24px;
    margin: 17px 0;
  }
  .ss__cont-img-text {
    font-size: 16px;
    max-width: 400px;
    padding: 14px;
    margin: 0;
  
    text-align: center;
  }
  
    
    
    `;
    this.appendChild(style);
  }
  render() {
    const div = document.createElement("div");
    div.innerHTML = `

 <div class="container-home">
     <header-el></header-el> 
    <section class="welcome">
    
  </section>
  <div class="welcome-div">
    <div class="welcome-container-img">
      <img class="welcome-img-gestion" src="${imgGestion}"/>
      <div class="container-titles">
         <h2 class="title-welcome-img">Quienes somos</h2>
         <p class="welcome__title-two">Selfix es una Empresa prestadora de Servicios de Higiene urbana en la Provincia de Mendoza
         Sustentabilidad: parte activa de lo que somos y hacemos todos los días </p>

      </div>
    </div>
  </div>
  <div class="presentacion">
    <div class="container-gestion-full">
         <div class="container-img-gestion">
            <img class="welcome-img-gestion" src="${imgProcesoReciclado}" />
        </div>
         <div class="container-text-mision">
             <h3 class="title-mision">Nuestra misión</h3>
          <p class="text-misión">Recolección, tratamiento y disposición final de residuos, bajo el cumplimiento máximo de leyes ambientales</p>
    
        </div>
    </div>
  
  
  </div>

  <div id="presentacion-content">
    <div class="container__persona">
      <img
        class="presentacion__persona-img"
        src="./medias/welcome/persona-png.png"
        alt=""
      />
    </div>
    <div class="presentacion__container">
      <h2 class="p__container-title">Soy Adri</h2>
      <p class="p__container-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ipsa
        dolorum rem distinctio sunt modi assumenda, accusamus officiis
        laudantium corporis repudiandae repellendus quis sed doloribus
        obcaecati cum, nihil officia deleniti Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Perspiciatis eum vel, reprehenderit
        doloribus in accusamus at quibusdam
      </p>
    </div>
  </div>

  <section class="services">
    <h3 class="serv__cont-title">Mis servicios</h3>
    <div class="services__container"></div>
  </section>
  <div id="services-div">
    <div class="services__item">
      <img class="ss__cont-img" src="./medias/welcome/pc.svg" alt="" />
      <h3 class="ss__cont-img-subtitle">Y tambien otras cosas</h3>
      <p class="ss__cont-img-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
        voluptate ad. Laudantium harum incidunt porro dicta deleniti, totam
        optio, neque, officiis earum quo cupiditate praesentium ea molestias
        veniam quas velit!
      </p>
    </div>
  </div>
 
 </div>
    
    
    
    
    `;

    this.appendChild(div);
  }
}
customElements.define("home-page", HomePage);
