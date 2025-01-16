class Header extends HTMLElement{
    connectedCallback(){
        this.innerHTML=` <nav class="navbar navbar-expand-md navbar-dark p-3 bg-info" id="headerNav" style=" margin-bottom: 100px;">
  <div class="container-fluid">
    <a class="navbar-brand d-block d-lg-none" href="#">
      <img src="/Logo/Logo4.png" height="80" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">





      </span>
    </button>
    <div class=" collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mx-auto ">
        <li class="nav-item">
          <a class="nav-link mx-2 active" aria-current="page" href="./index.html" style="padding-top:20px;">HOME</a>
        </li>
        <li class="nav-item dropdown">
                    <a class="mx-2 nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown"  >
                     JAPAN
                    </a>
                    <div class="dropdown-menu">

                        <a class="dropdown-item" href="./FoodJapan.html" style="color:black">Food in Japan</a>
                        <a class="dropdown-item" href="./PlaceJapan.html" style="color:black">Place to visit in Japan</a>
                    </div>
                </li>
        <li class="nav-item d-none d-lg-block">
          <a class="nav-link mx-2" href="./index.html">
            <img src="./Img/MicrosoftTeams-image.png" height="50" width="50" class="rounded-circle" />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2" href="./AboutUs.html" style="padding-top:20px;">ABOUT US</a>
        </li>


        <li class="nav-item">
          <a class="nav-link mx-2" href="./Form.html" style="padding-top:20px;">CONTACT US</a>

        </li>
      </ul>
    </div>
  </div>
</nav>`;
    }
}
customElements.define("main-header", Header);
