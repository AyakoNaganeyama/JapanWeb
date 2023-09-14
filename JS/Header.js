class Header extends HTMLElement{
    connectedCallback(){
        this.innerHTML=` <div style="margin:30px;">
        <nav class="navbar navbar-expand-lg" style="background-color:#18a4bc;">
            
            
              <div class="container" style="background-color:#18a4bc;">
                <!--I created icon for navbar-toggler-icon-->
                <a class="navbar-brand" href="#"><img src="./Img/MicrosoftTeams-image.png" height="50" width="50" class="rounded-circle"></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">

                   



                </span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive" style="background-color:#18a4bc;">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="m nav-link mr-2" href="./index.html">Home
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>
                 
                  <li class="nav-item dropdown">
                    <a class="m mr-2 nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                     Japan       
                    </a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="./JapanHome.html" style="color:black">Japan Home</a>
                        <a class="dropdown-item" href="./FoodJapan.html" style="color:black">Food in Japan</a>
                        <a class="dropdown-item" href="./PlaceJapan.html" style="color:black">Place to visit in Japan</a>
                    </div>
                </li>
              
                <li class="nav-item">
                    <a class="m mr-2 nav-link" href="./AboutUs.html">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="m mr-2 nav-link" href="./Form.html">Contact Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="m mr-2 nav-link" href="./Quiz.html">Quiz</a>
                  </li>

                 
                </ul>
              
                 
               


              </div>
             
            </div>

            <!--A.N I created search bar using CSS 2/10/2022-->
            <div class="Search" style="overflow:hidden;">
                <input class="i" type="search" placeholder="search">
                <a href="#" style="float:right;"><i class="fa fa-search icon-search"></i></a>

            </div>`;
    }
}
customElements.define("main-header", Header);
