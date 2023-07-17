export default class MakeElement {
  constructor() {
    this.element = null;
    this.createElement(param);
  }

  createElement(param) {
    this.element = document.createElement(param.tag);
  }
}