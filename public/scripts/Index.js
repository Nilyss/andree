class Index {
  constructor() {}

  async initApp() {}
}

const index = new Index();
index
  .initApp()
  .then(() => console.log("Index successfully initialized"))
  .catch((err) => console.error(`Cannot initialize Index : ${err}`));
