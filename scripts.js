// var sideMenu = document.getElementById("sideMenu");
// var menuIcon = document.getElementById("menuIcon");

// function openMenu() {
//   sideMenu.style.width = "150px";
//   sideMenu.style.height = "100%";

//   menuIcon.style.opacity = "0";
//   menuIcon.style.width = "0px";
//   menuIcon.style.height = "0px";
// }

// function closeMenu() {
//   sideMenu.style.width = "0px";
//   sideMenu.style.height = "0px";

//   menuIcon.style.opacity = "1";
//   menuIcon.style.width = "25px";
//   menuIcon.style.height = "25px";
// }

// Disable right-click
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

// Disable specific keyboard shortcuts (e.g., F12, Ctrl+Shift+I, etc.)
document.addEventListener("keydown", (event) => {
  if (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && ["I", "J", "C"].includes(event.key)) ||
    (event.ctrlKey && event.key === "U") // Ctrl+U
  ) {
    event.preventDefault();
  }
});

// Monitor for dev tools open (using a timing discrepancy method)
let devtoolsOpen = false;
const threshold = 160;
setInterval(() => {
  const start = performance.now();
  debugger; // This triggers a pause if dev tools are open
  const timeTaken = performance.now() - start;
  if (timeTaken > threshold) {
    devtoolsOpen = true;
    alert("Developer tools detected! Please close them to continue.");
  }
}, 1000);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".works-section .card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const cardRect = card.getBoundingClientRect();
      const centerX = cardRect.left + cardRect.width / 2;
      const centerY = cardRect.top + cardRect.height / 2;
      const x = (e.clientX - centerX) / 20;
      const y = (e.clientY - centerY) / 20;

      card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
  });
});
