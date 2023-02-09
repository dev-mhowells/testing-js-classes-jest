class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
   });
  }

  displayMessage() {
    const div = document.createElement('div')
    div.setAttribute('id', 'message')
    const inputVal = document.querySelector('#message-input').value
    div.textContent = inputVal
    const doc = document.querySelector('#main-container')
    doc.append(div)
  }
  hideMessage() {
    const el = document.getElementById('message')
    el.remove()
  }
}

module.exports = MessageView;