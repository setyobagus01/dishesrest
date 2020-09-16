import "./trending-item.js";
class TrendingList extends HTMLElement {
  set trendinglist(trendinglist) {
    this._trendinglist = trendinglist;
    this.render();
  }

  render() {
    this._trendinglist.forEach((trending) => {
      const trendingItem = document.createElement("trending-item");
      trendingItem.trendingitem = trending.restaurant;
      this.appendChild(trendingItem);
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

customElements.define("trending-list", TrendingList);

export default TrendingList;
