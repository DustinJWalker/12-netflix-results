export default class NetflixResultsView {
  /**
   * el: Element - the existing element represetning one user
   * model: object or array - starting value for model data
   */

  constructor(el, model) {
    this.el = el;
    this.model = model;
  }

  render() {
    document.querySelector('.netflix__show-title').innerText = this.model.show_title;
    document.querySelector('.netflix__category').innerText = this.model.category;
    document.querySelector('.netflix__rating').innerText = this.model.rating;
    document.querySelector('.netflix__poster').src = this.model.poster;
    document.querySelector('.netflix__summary').innerText = this.model.summary;
    document.querySelector('.netflix__show-cast').innerText = this.model.show_cast;
  }

}
