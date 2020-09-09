//form mobile screen setup
function responsiveToMobile() {
  var nav = document.getElementById("navbar");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}
