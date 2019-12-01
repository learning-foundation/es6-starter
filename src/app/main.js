class App {
  constructor() {
    this.repositories = [];
    this.formEl = document.getElementById("repo-form");
    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  addRepository(event) {
    event.preventDefault();
    this.repositories.push({
      name: "vinicius-serpa",
      description: "description",
      avatar_url: "https://avatars1.githubusercontent.com/u/6933158?s=96&v=4",
      html_url: "https://github.com/vinicius-serpa"
    });

    console.log(this.repositories);
  }
}

new App();
