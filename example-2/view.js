class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }
  addParagraph(text) {
    const newPara = document.createElement("p")
    newPara.textContent = `${text}`
    this.mainContainerEl.append(newPara)
  }
  clearParagraphs() {
    let el = this.mainContainerEl
    while (el.firstChild) {
      el.removeChild(el.firstChild)
    }
  }
}

module.exports = View;