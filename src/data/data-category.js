const baseUrl = "https://developers.zomato.com/api/v2.1/";
class DataCategory {
  static displayCategory(category) {
    return fetch(`${baseUrl}/search?category=${category}`, {
      headers: {
        "user-key": "7d3e31b643f055a2598a891e21f5cfa3",
      },
    }).then((response) => {
      return response.json();
    });
  }
}

export default DataCategory;
