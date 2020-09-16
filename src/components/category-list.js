import "./category-item.js";
class CategoryList extends HTMLElement {
  set categorylist(categorylist) {
    this._categorylist = categorylist;
    this.render();
  }

  render() {
    this._categorylist.forEach((restaurant) => {
      const categoryItems = document.createElement("category-item");
      categoryItems.categoryitem = restaurant.restaurant;
      this.appendChild(categoryItems);
    });
  }

  renderError(message) {
    this.innerHTML = `
    <div class="some-container>
        <span class="some-text">${message}</span>
      </div>
    `;
  }
}

customElements.define("category-list", CategoryList);

export default CategoryList;
