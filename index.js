class Example {

  constructor(_content) {
    this.content = _content;
  }

  render() {
    return this.content;
  }
}

const example = new Example('ES2015 Example');
const app = document.getElementById("app");

window.onload = (e) => {
  let sectionElement = document.createElement("h3");
  sectionElement.textContent = example.render();
  app.appendChild(sectionElement);
}
