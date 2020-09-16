import "regenerator-runtime";
import "regenerator-runtime";
import DataSource from "../data/data-source.js";
import "../components/category-list.js";
import "../components/dropdown-menu.js";

let searchQuery = document.location.search.replace(/^.*?\=/, "");
function mainsearch() {
  const categoryList = document.querySelector("category-list");
  const dropdownMenu = document.querySelector("dropdown-menu");
  DataSource.getCategories().then((resultCategories) => {
    dropdownMenu.categories = resultCategories;
  });

  DataSource.getSearch(searchQuery)
    .then((searchResult) => {
      categoryList.categorylist = searchResult;
    })
    .catch((error) => {
      categoryList.renderError(error);
    });
}

export default mainsearch;
