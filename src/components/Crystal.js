

export default class Crystal {

  constructor (selector) {
    this.baseClass = 'component';
    this.$self = document.querySelector(selector);
  }

  getElement (elName) {
    return this.$self.querySelector(`.${this.baseClass}__${elName}`);
  }

  addModifier (modifierName) {
    this.$self.classList.add(`${this.baseClass}--${modifierName}`);
  }

  removeModifier (modifierName) {
    this.$self.classList.remove(`${this.baseClass}--${modifierName}`);
  }
}
