"use strict";

const menuBtn = document.querySelector(".burger__button");
const menu = document.querySelector(".burger__menu");

const menuBtnIntro = document.querySelector(".burger__button_intro");
const menuIntro = document.querySelector(".burger__menu_intro");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

menuBtnIntro.addEventListener("click", function () {
  menuBtnIntro.classList.toggle("active");
  menuIntro.classList.toggle("active");
});