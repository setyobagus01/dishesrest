class TrendingItem extends HTMLElement {
  set trendingitem(trendingitem) {
    this._trendingitem = trendingitem;
    this.render();
  }

  render() {
    const altImg = "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png";
    this.innerHTML = `
        <div class="trending-card">
            <a href="details.html?id=${this._trendingitem.id}">
            <img src="${
              this._trendingitem.thumb ? this._trendingitem.thumb : altImg
            }" />
            </a>
            <div class="trending-description">
              <span class="trending-name">${this._trendingitem.name}</span>
              <span class="trending-rating">Rating: ${
                this._trendingitem.user_rating.aggregate_rating
              }/5 (${this._trendingitem.user_rating.votes} Reviews)</span>
              <span class="trending-location">${
                this._trendingitem.location.locality
              }</span>
            </div>
          </div>
        `;
  }
}

customElements.define("trending-item", TrendingItem);
