class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    let moreInfo;
    let moreInfo2 = this._restaurant.highlights;
    console.log(moreInfo2.length);
    moreInfo = moreInfo2.splice(0, 10);

    console.log(moreInfo);
    console.log(moreInfo2);

    let cuisineInfo = this._restaurant.cuisines;
    let cuisineArray = cuisineInfo.split(", ");

    let cuisineResult = cuisineArray.map((cuisine) => {
      return `
        <span class="cuisines-name">${cuisine}</span>
        `;
    });

    let restaurantinfo = moreInfo.map((info) => {
      return `
        <span class="info-item">${info}</span>
        `;
    });

    let restaurantinfo2 = moreInfo2.map((info) => {
      return `
          <span class="info-item">${info}</span>
          `;
    });
    this.innerHTML = `
    <div class="details-container">
    <img src="${this._restaurant.featured_image}" />
    <div class="details-restaurant">
      <div class="details-left">
        <span class="details-name">
          ${this._restaurant.name}
        </span>
        <span class="details-cost">
          Cost per two - Rp.${this._restaurant.average_cost_for_two}
        </span>
        <span class="details-hours">
          ${this._restaurant.timings}
        </span>
      </div>
      <div class="details-right">
        <span class="rating-text">Rating : ${
          this._restaurant.user_rating.aggregate_rating
        }/5 &nbsp;</span>
        <span class="votes-text">(${
          this._restaurant.user_rating.votes
        } votes)</span>
      </div>
    </div>
    <div class="details-cuisines">
      <span class="name-info">Cuisines</span>
      <div class="cuisines">
        ${cuisineResult.join("")}
      
      </div>
    </div>
    <div class="details-info">
      <span class="name-info">More info</span>
      <div class="info-list">
        <div class="info-left">
          ${restaurantinfo.join("")}
        </div>
        <div class="info-right">
        ${restaurantinfo2.join("")}
        </div>
      </div>
    </div>
    <div class="details-contact">
      <span class="name-info">Contact</span>
      <span class="details-text">${this._restaurant.phone_numbers}</span>
    </div>
  </div>
        
        
        `;
  }

  renderError(message) {
    this.innerHTML = `
        <div class="some-container>
        <span class="some-text">${message}</span>
      </div>
        `;
  }
}

customElements.define("restaurant-detail", RestaurantDetail);
