// JavaScript Document
console.log("hi");

var deMenuButton = document.querySelector("header button:last-of-type");
var deNav = document.querySelector("header nav");
var deSluitButton = document.querySelector ("header nav button");
var deSearchButton = document.querySelector("header > button:first-of-type");
var deZoekbalk = document.querySelector("header form");

deMenuButton.addEventListener("click", toggleHetMenu);
deSluitButton.addEventListener("click", toggleHetMenu);
deSearchButton.addEventListener("click", toggleDeZoekbalk);

function toggleHetMenu() {
	deNav.classList.add("open");
}

function toggleDeZoekbalk() {
    deZoekbalk.classList.add("open");
}