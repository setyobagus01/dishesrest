import "regenerator-runtime";
import DataSource from "../data/data-source.js";
import "../components/category-list.js";
import "../components/dropdown-menu.js";

let categoryId = document.location.search.replace(/^.*?\=/, "");

function maincategory() {
  const categoryList = document.querySelector("category-list");
  const dropdownMenu = document.querySelector("dropdown-menu");

  DataSource.displayCategory(categoryId)
    .then((resultcategory) => {
      categoryList.categorylist = resultcategory;
    })
    .catch((error) => {
      categoryList.renderError(error);
    });

  DataSource.getCategories().then((resultCategories) => {
    dropdownMenu.categories = resultCategories;
  });
}

export default maincategory;
