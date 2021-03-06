class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="header-container">
            <span class="header-logo"><a href="/index.html">DishesRest</a></span>
            <nav class="main-nav">
            <ul class="main-menu">
           
                <li class="menu-item">
                <button id="category-dropdown">
                    Categories
                    <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-caret-down"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
                    />
                    </svg>
                </button>
                <dropdown-menu></dropdown-menu>
                </li>
             
            </ul>
            <span class="explore"><a href="/category.html">Explore</a></span>
            </nav>
            
        </header>
        `;
  }
}

customElements.get("app-bar") || customElements.define("app-bar", AppBar);
