class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<div class="container-fluid mt-20 bg-info fixed-bottom Footer">
        <!--make the content to be center: element from https://getbootstrap.com/docs/4.0/layout/grid/-->
        <div class="row justify-content-between">

            <div class="col-2">
                <nav class="navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <h6 id="FooterTitle" class="text-white">Places</h6>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="./PlaceJapan.html">Japan</a>
                        </li>

                    </ul>

                </nav>
            </div>
            <div class="col-2">
                <nav class="navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <h6 id="FooterTitle" class="text-white">Food</h6>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="./FoodJapan.html">Japan</a>
                        </li>

                    </ul>

                </nav>
            </div>

            <div class="col-2">
                <nav class="navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <h6 id="FooterTitle" class="text-white">Information</h6>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="./AboutUs.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="./Form.html">Contact</a>
                        </li>
                    </ul>

                </nav>
            </div>
            <div class="col-2">
                <nav class="navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <h6 id="FooterTitle" class="text-white">Follow</h6>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fa fa-facebook" style="width: 50px; color:white" href="https://www.facebook.com/profile.php?id=100086984290809"></a>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link fa fa-instagram" style="width: 50px; color:white" href="https://www.instagram.com/japanbodia/"></a>

                        </li>

                    </ul>

                </nav>
            </div>
            <div class="col-2">
                <nav class="navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <h6 id="FooterTitle" class="text-white">More</h6>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link text-white" href="./index.html">Home</a>
                        </li>
                    </ul>

                </nav>
            </div>
    </div>`;
    }
}
customElements.define("main-footer", Footer);
