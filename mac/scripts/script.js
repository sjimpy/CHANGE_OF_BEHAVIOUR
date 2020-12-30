// JavaScript Document
var burgerBTN = document.querySelector("nav .burger");
var expand = document.querySelector("nav .expand");

burgerBTN.addEventListener("click", function() {
  for (var i = 0; i < burgerBTN.querySelectorAll("span").length; i++) {
    burgerBTN.querySelectorAll("span")[i].classList.toggle("clicked");
  }
  expand.classList.toggle("clicked");
})







// var footerh3 = document.querySelector("footer");
var footerh3 = document.querySelector("footer").querySelectorAll("h3");
for (var i = 0; i < footerh3.length; i++) {
  footerh3[i].addEventListener("click", function() {
    if (this.classList.contains("active")) {
      this.nextSibling.nextSibling.style.display = "none"
    }else {
      this.nextSibling.nextSibling.style.display = "block"
    }
    this.classList.toggle("active");
  })
}





var ingetypt = "";
var resetingetyptchecker;

document.addEventListener('keydown', function (event) {
  ingetypt = ingetypt += event.key;
  clearTimeout(resetingetyptchecker)
  resetingetyptchecker = setTimeout(resetingetypt, 1000);

  if (ingetypt == "windows") {
    document.querySelectorAll(".jobs")[0].style.animation = "showjobs 1s forwards";
    setTimeout(function () {
      document.querySelector(".laser").style.animation = "laser 1s 4 linear";
    }, 1000);
    setTimeout(function () {
      document.querySelectorAll(".jobs")[0].style.animation = "hidejobs 1s forwards";
            document.querySelector(".laser").style.animation = "none";
    }, 5000);
  }
});

function resetingetypt() {
  ingetypt = "";
}



var color = document.getElementsByClassName('color');
var changingimg;

for (var i = 0; i < color.length; i++) {
  color[i].addEventListener("click", function() {
    if (this.classList.contains("v2")) {
      changingimg = document.getElementsByClassName("changingmac")[1];
    }
    else {
      changingimg = document.getElementsByClassName("changingmac")[0];
    }

    if (this.classList.contains("color1")) {
      changingimg.src = "../images/macgray.jpg";
    }
    else if (this.classList.contains("color2")) {
      changingimg.src = "../images/macgold.jpg";
    }
    else {
      changingimg.src = "../images/macsilver.jpg";
    }
  })
}
