const baseUrl = "https://developers.zomato.com/api/v2.1/";

class DataSource {
  static getSearch(query) {
    return fetch(`${baseUrl}search?entity_id=74&entity_type=city&q=${query}`, {
      headers: {
        "user-key": "f86c3cf877a094dcd07a470f71b7390c",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        if (responseJSON.restaurants.length > 0) {
          return Promise.resolve(responseJSON.restaurants);
        } else {
          return Promise.reject(`Keyword is not found`);
        }
      });
  }

  static getCategories() {
    return fetch(`${baseUrl}categories`, {
      headers: {
        "user-key": "f86c3cf877a094dcd07a470f71b7390c",
      },
    }).then((response) => {
      return response.json();
    });
  }

  static displayCategory(category) {
    return fetch(
      `${baseUrl}search?entity_id=74&entity_type=city&category=${category}`,
      {
        headers: {
          "user-key": "f86c3cf877a094dcd07a470f71b7390c",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        if (responseJSON.restaurants.length > 0) {
          return Promise.resolve(responseJSON.restaurants);
        } else {
          return Promise.reject(`Category is not found`);
        }
      });
  }

  static displayTrending() {
    return fetch(
      `${baseUrl}search?entity_id=74&entity_type=city&collection_id=1`,
      {
        headers: {
          "user-key": "f86c3cf877a094dcd07a470f71b7390c",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        if (responseJSON.restaurants.length > 0) {
          return Promise.resolve(responseJSON.restaurants);
        } else {
          return Promise.reject(`No Trending this week`);
        }
      });
  }

  static getRestaurant(ids) {
    return fetch(`${baseUrl}restaurant?res_id=${ids}`, {
      headers: {
        "user-key": "f86c3cf877a094dcd07a470f71b7390c",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        if (responseJSON) {
          return Promise.resolve(responseJSON);
        } else {
          return Promise.reject(`Restaurant not found`);
        }
      });
  }
}

export default DataSource;
