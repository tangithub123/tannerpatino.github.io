"use strict";

const images = [
  "pics/thunder_plinko_ss.png",
  "pics/jets_ios.png",
  "phone_pics/3 phone mockups.png",
  "pics/iowa_state_gameday.png",
  "logos/centered_flowandmow_logo.png",
];

const transparentColors = [
  "rgba(0, 122, 193, 0.5)", // 50% transparency thunder blue
  "rgba(18, 87, 64, 0.5)", //jets green
  "rgba(70, 56, 114, 0.5)", // kid rock red
  "rgba(145, 17, 37, 0.5)", // iowa state red
  "rgba(0, 0, 0, 0.5)", //flow and mow blue
];

const headerVerbiage = [
  "MICRO GAME<br>DESIGNS",
  "MOBILE WALLET DESIGNS",
  "PLATFORM<br>MOCKUPS",
  "MODULE TILE DESIGNS",
  "LOGO DESIGNS",
];
const paragraphVerbiage = [
  "Click below to view my microgame designs!",
  "Click below to view my mobile wallet designs!",
  "Click below to view my platform mockups!",
  "Click below to view my module tile designs!",
  "Click below to view my logo designs!",
];
const btnVerbiage = [
  "Microgame Designs",
  "Mobile Wallet Designs",
  "Platform Designs",
  "Module Tile Designs",
  "Logo Designs",
];

const indexPages = [
  "microgame.html",
  "mobile_wallet.html",
  "platform.html",
  "module_tile.html",
  "logo_designs.html",
];

let currentIndex = 0;
const leftHeader = document.querySelector(".left-header");
const leftP = document.querySelector(".left-p");
const mainBtn = document.querySelector(".featured-left-button");
const rightImg = document.querySelector(".right-img");
const leftBtn = document.querySelector(".left-button");
const rightBtn = document.querySelector(".right-button");
const backgroundImg = document.querySelector(".featured-background");
const colorOverlay = document.querySelector(".featured-overlay");

// This is the update image function and the featured verbiage
function updatePage() {
  rightImg.src = images[currentIndex];
  backgroundImg.style.backgroundImage = `url(${images[currentIndex].replace(
    / /g,
    "%20"
  )})`;
  colorOverlay.style.backgroundColor = `${transparentColors[currentIndex]}`;

  function loadVerbiage() {
    leftHeader.innerHTML = headerVerbiage[currentIndex];
    leftP.innerHTML = paragraphVerbiage[currentIndex];
    mainBtn.innerHTML = btnVerbiage[currentIndex];

    // Set the onclick event handler for the button
    mainBtn.onclick = function () {
      window.location.href = indexPages[currentIndex];
    };
  }
  loadVerbiage();
}

if (
  window.location.pathname === "/" ||
  window.location.pathname === "/index.html"
) {
  rightBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    updatePage();
  });
  leftBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;

    updatePage();
  });
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
