import Crystal from './Crystal';

class InsiderNav extends Crystal {

  constructor (selector) {

    super(selector);
    this.baseClass = 'nav';
    this.isOpen = false;

    // Cache profile img element selector
    this.$profile = this.getElement('profile');
    this.$profile.addEventListener('click', (e) => { this.open(e) });
    this.$profile.addEventListener('touchend', (e) => { this.open(e) });

    this.init();
  }

  init() {
    console.log('init');
    document.addEventListener('DOMContentLoaded', function () {
      new InsiderNav('#nav');
    });
  }

  open (event) {
    event.preventDefault();

    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.addModifier('active');
    } else {
      this.removeModifier('active');
    }
  }
}

export default InsiderNav;
