import "regenerator-runtime";
import "../data/data-source.js";
import DataSource from "../data/data-source.js";
import "../components/dropdown-menu.js";
import "../components/trending-list.js";
function main() {
  const dropdownMenu = document.querySelector("dropdown-menu");
  const trendingList = document.querySelector("trending-list");
  const searchButton = document.querySelector("#search-button");
  const searchRestaurant = document.querySelector("#search-restaurant");

  DataSource.getCategories().then((resultCategories) => {
    dropdownMenu.categories = resultCategories;
  });

  DataSource.displayTrending()
    .then((resultTrendings) => {
      trendingList.trendinglist = resultTrendings;
    })
    .catch((error) => {
      trendingList.renderError(error);
    });

  searchButton.addEventListener("click", (e) => {
    window.document.location = `./search.html?query=${searchRestaurant.value}`;
  });

  const categoryDropdown = document.querySelector("#category-dropdown");
  categoryDropdown.addEventListener("click", (e) => {
    dropdownMenu.classList.toggle("dropdown-open");
  });
}

export default main;
