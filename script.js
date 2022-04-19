console.log("this is svg script");

let svg = document.getElementById("menu-svg");


  svg.addEventListener("click", function () {
    console.log("clicked");
    document.location.href = "about us.html";
  });

