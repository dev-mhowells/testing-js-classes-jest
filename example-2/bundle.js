(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // view.js
  var require_view = __commonJS({
    "view.js"(exports, module) {
      var View2 = class {
        constructor() {
          this.mainContainerEl = document.querySelector("#main-container");
          console.log(this.mainContainerEl);
        }
        addParagraph(text) {
          const newPara = document.createElement("p");
          newPara.textContent = `${text}`;
          this.mainContainerEl.append(newPara);
        }
        clearParagraphs() {
          let el = this.mainContainerEl;
          while (el.firstChild) {
            el.removeChild(el.firstChild);
          }
        }
      };
      module.exports = View2;
    }
  });

  // index.js
  var View = require_view();
  var view = new View();
  view.addParagraph("some text");
  var target2 = document.querySelector("#second-paragraph");
  console.log(target2);
})();
