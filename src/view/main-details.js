import "regenerator-runtime";
import DataSource from "../data/data-source.js";
import "../components/restaurant-detail.js";
import "../components/dropdown-menu.js";

let restaurantId = document.location.search.replace(/^.*?\=/, "");

function maindetails() {
  const restaurantDetail = document.querySelector("restaurant-detail");
  const dropdownMenu = document.querySelector("dropdown-menu");

  DataSource.getCategories().then((resultCategories) => {
    dropdownMenu.categories = resultCategories;
  });

  DataSource.getRestaurant(restaurantId)
    .then((resultRestaurant) => {
      restaurantDetail.restaurant = resultRestaurant;
    })
    .catch((error) => {
      restaurantDetail.renderError(error);
    });
}

export default maindetails;
