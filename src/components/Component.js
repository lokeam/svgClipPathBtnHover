

export default class Component {

  constructor (selector) {
  	console.log('inside component constructor');
    this.baseClass = 'component'
    this.$self = document.querySelector(selector)
  }

  getElement (eleName) {
  	console.log('inside getElement');
    return this.$self.querySelector(`.${this.baseClass}__${eleName}`)
  }

  addModifier (modifierName) {
    this.$self.classList.add(`${this.baseClass}--${modifierName}`)
  }

  removeModifier (modifierName) {
    this.$self.classList.remove(`${this.baseClass}--${modifierName}`)
  }
}

