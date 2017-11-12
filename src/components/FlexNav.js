import Component from './Component';

class FlexNav extends Component {

  constructor (selector) {

    // Call parent constructor method
    super(selector)

    // Set some properties
    this.baseClass = 'nav'
    this.isOpen = false
    
    // Cache burger element selector
    this.$burger = this.getElement('burger')
    console.log('showing burger');
    console.log(this.$burger);

    // Bind events
    this.$burger.addEventListener('click', (e) => { console.log('clicked'); this.open(e) })
    this.$burger.addEventListener('touchend', (e) => { this.open(e) })
  }
  
  open (event) {

    event.preventDefault()

    this.isOpen = !this.isOpen
    console.log('inside open, showing this: ', this);
    if (this.isOpen) {
      this.addModifier('opened')
    } else {
      this.removeModifier('opened')
    }
  }
}

export default FlexNav;
