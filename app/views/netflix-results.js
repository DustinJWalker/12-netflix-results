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
    this.el.querySelector('.netflix__show-title').innerText = this.model.show_title;
    this.el.querySelector('.netflix__category').innerText = this.model.category;
    this.el.querySelector('.netflix__rating').innerText = this.model.rating;
    this.el.querySelector('.netflix__poster').src = this.model.poster;
    this.el.querySelector('.netflix__summary').innerText = this.model.summary;
    this.el.querySelector('.netflix__show-cast').innerText = this.model.show_cast;
  }

}
