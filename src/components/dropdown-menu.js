import "./dropdown-items.js";

class DropdownMenu extends HTMLElement {
  set categories(categories) {
    this._categories = categories;
    this.render();
  }

  render() {
    this.innerHTML = `
    <span class="category-text">Category</span>
    `;
    this._categories.categories.forEach((category) => {
      const dropdownItems = document.createElement("dropdown-items");
      dropdownItems.category = category ? category : null;
      this.appendChild(dropdownItems);
    });
  }
}
customElements.get("dropdown-menu") ||
  customElements.define("dropdown-menu", DropdownMenu);
