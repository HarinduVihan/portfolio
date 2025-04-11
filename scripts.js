var sideMenu = document.getElementById("sideMenu");
var menuIcon = document.getElementById("menuIcon");

function openMenu() {
  sideMenu.style.width = "150px";
  sideMenu.style.height = "100%";

  menuIcon.style.opacity = "0";
  menuIcon.style.width = "0px";
  menuIcon.style.height = "0px";
}

function closeMenu() {
  sideMenu.style.width = "0px";
  sideMenu.style.height = "0px";

  menuIcon.style.opacity = "1";
  menuIcon.style.width = "25px";
  menuIcon.style.height = "25px";
}
