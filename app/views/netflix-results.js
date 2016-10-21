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
    console.log(this);
    document.querySelector('.netflix__show-title').innerText = this.model.show - title;
    document.querySelector('.netflix__category').innerText = this.model.category;
    document.querySelector('.netflix__rating').innerText = this.model.rating;
    document.querySelector('.netflix__poster').innerText = this.model.poster;
    document.querySelector('.netflix__summary').innerText = this.model.summary;
    document.querySelector('.netflix__show-cast').innerText = this.model.cast;
  }

}
