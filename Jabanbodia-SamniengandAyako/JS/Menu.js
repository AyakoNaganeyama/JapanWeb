window.onload = function (){
    var navElement = document.getElementById("menu");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "Menu.html", false);
    xmlhttp.send();
    navElement.innerHTML = xmlhttp.responseText;


   var navElement = document.getElementById("card1");
var xmlhttp = new XMLHttpRequest();
   xmlhttp.open("GET", "Card.html", false);
   xmlhttp.send();
 navElement.innerHTML = xmlhttp.responseText;

 
 var navElement = document.getElementById("card2");
 var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "Card2.html", false);
    xmlhttp.send();
  navElement.innerHTML = xmlhttp.responseText;

  var navElement = document.getElementById("f");
  var xmlhttp = new XMLHttpRequest();
     xmlhttp.open("GET", "Footer.html", false);
     xmlhttp.send();
   navElement.innerHTML = xmlhttp.responseText;
}

