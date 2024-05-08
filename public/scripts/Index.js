import paints from "./paints.js";
import pictures from "./pictures.js";

class Index {
  constructor() {
    this.main = document.querySelector("main");
  }

  async displayPaint() {
    const paintSection = document.createElement("section");
    paintSection.classList.add("paints");
    const paintsWrapper = document.createElement("ul");

    paints.forEach((paint) => {
      const paintItem = document.createElement("li");
      const paintImgWrapper = document.createElement("figure");

      paintImgWrapper.innerHTML = `<img src="${paint}" alt="paint" />`;
      paintItem.appendChild(paintImgWrapper);
      paintsWrapper.appendChild(paintItem);
    });

    paintSection.appendChild(paintsWrapper);
    this.main.appendChild(paintSection);
  }

  async displayPicture() {
    const pictureSection = document.createElement("section");
    pictureSection.classList.add("pictures");
    const picturesWrapper = document.createElement("ul");

    pictures.forEach((picture) => {
      const pictureItem = document.createElement("li");
      const pictureImgWrapper = document.createElement("figure");

      pictureImgWrapper.innerHTML = `<img src="${picture}" alt="picture" />`;
      pictureItem.appendChild(pictureImgWrapper);
      picturesWrapper.appendChild(pictureItem);
    });

    pictureSection.appendChild(picturesWrapper);
    this.main.appendChild(pictureSection);
  }

  async initApp() {
    await this.displayPicture();
    await this.displayPaint();
  }
}

const index = new Index();
index
  .initApp()
  .then(() => console.log("Index successfully initialized"))
  .catch((err) => console.error(`Cannot initialize Index : ${err}`));
