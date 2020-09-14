"use strict";

// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
}

// navigate to a new view/page by changing href
function navigateTo(pageId) {
  location.href = `#${pageId}`;
}

// set default page or given page by the hash url
// function is called 'onhashchange'
function pageChange() {
  let page = "index";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}

// navknap
function menuknap() {
  let nav = document.querySelector('nav');
  nav.classList.toggle("show")
}

pageChange(); // called by default when the app is loaded for the first time