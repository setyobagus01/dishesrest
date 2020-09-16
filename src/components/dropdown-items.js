class DropdownItems extends HTMLElement {
  set category(category) {
    this._category = category;
    this.render();
  }

  render() {
    const ids = this._category.categories.id;
    const categoryName = this._category.categories.name;

    this.innerHTML = `
            <a id=${ids} href="category.html?ids=${ids}">${categoryName}</a>
        `;
  }
}

customElements.get("dropdown-items") ||
  customElements.define("dropdown-items", DropdownItems);
