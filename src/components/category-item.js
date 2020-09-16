class CategoryItem extends HTMLElement {
  set categoryitem(categoryitem) {
    this._categoryitem = categoryitem;
    this.render();
  }

  render() {
    const altImg = "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png";

    this.innerHTML = `
    <div class="category-card">
          <div class="category-top">
            <img src="${
              this._categoryitem.thumb ? this._categoryitem.thumb : altImg
            }" />
            <div class="category-description">
              <span class="category-establishment">${
                this._categoryitem.establishment
              }</span>
              <span class="restaurant-name">${this._categoryitem.name}</span>
              <span class="restaurant-address"
                >${this._categoryitem.location.address} (${
      this._categoryitem.location.locality
    })</span
              >
              <span class="restaurant-rating"
                >Rating: ${
                  this._categoryitem.user_rating.aggregate_rating
                }/5 <span class="votes">(${
      this._categoryitem.user_rating.votes
    } votes)</span></span
              >
            </div>
          </div>
          <div class="card-border"></div>
          <div class="category-bottom">
            <div class="category-details">
              <span class="detail-name">Cuisines</span>
              <span class="detail-value">${this._categoryitem.cuisines}</span>
            </div>
            <div class="category-details">
              <span class="detail-name">Avg Cost for Two</span>
              <span class="detail-value">Rp.${
                this._categoryitem.average_cost_for_two
              }</span>
            </div>
            <div class="category-details">
              <span class="detail-name">Hours</span>
              <span class="detail-value"
                >${this._categoryitem.timings}</span
              >
            </div>
          </div>
          <div class="category-restaurant">
            <a id="view-restaurant" href="details.html?id=${
              this._categoryitem.id
            }">View Restaurant</a>
          </div>
        </div>
        
        `;
  }
}

customElements.get("category-item") ||
  customElements.define("category-item", CategoryItem);
