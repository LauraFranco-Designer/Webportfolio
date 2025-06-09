// Select navigation and menu elements
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Select filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".project-list .project-item");

// Open menu when the menu open button is clicked
menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the menu close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when any navigation link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
});

// Define the filterCards function
const filterCards = e => {
  // Remove "active" class from the currently active filter button
  const activeButton = document.querySelector(".filter-buttons .active");
  if (activeButton) {
    activeButton.classList.remove("active");
  }

  // Add "active" class to the clicked filter button
  e.target.classList.add("active");

  // Get the filter type from the clicked button's dataset
  const filterType = e.target.dataset.filter;

  // Filter the cards based on the selected filter type
  filterableCards.forEach(card => {
    if (filterType === "all" || card.dataset.category === filterType) {
      card.classList.remove("hide"); // Show the card
    } else {
      card.classList.add("hide"); // Hide the card
    }
  });
};

// Add click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click", filterCards));

// Interactive map button toggle
$(document).ready(function(){
  $(".hide").hide();

  $(".marker-islanda").hover(function(){
    $(".hide").hide();
    $(".islanda-text").fadeIn();
  });

  $(".marker-olanda").hover(function(){
    $(".hide").hide();
    $(".olanda-text").fadeIn();
  });

  $(".marker-uk").hover(function(){
    $(".hide").hide();
    $(".uk-text").fadeIn();
  });

  $(".marker-svezia").hover(function(){
    $(".hide").hide();
    $(".svezia-text").fadeIn();
  });

  $(".marker-italia").hover(function(){
    $(".hide").hide();
    $(".italia-text").fadeIn();
  });

});




