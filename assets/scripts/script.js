let searchIcon = document.querySelector(".search-img");
let searchInput = document.querySelector(".search");
let wrapContainer = document.querySelector(".search-info");


let wrapHeight = wrapContainer.getBoundingClientRect().bottom - wrapContainer.getBoundingClientRect().top;
let topPosition = wrapContainer.getBoundingClientRect().top + (wrapContainer.getBoundingClientRect().bottom - wrapContainer.getBoundingClientRect().top)/2;

let left = searchInput.getBoundingClientRect().left;
searchIcon.style.left = left + 6 + 'px';
searchIcon.style.top = topPosition - 9.5 + 'px';