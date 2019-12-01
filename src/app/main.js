class App {
  constructor() {
    this.repositories = [];
    this.formEl = document.getElementById("repo-form");
    this.listEl = document.getElementById("repo-list");
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

    this.render();
  }

  render() {
    this.listEl.innerHTML = "";

    this.repositories.forEach(repo => {
      let imageEl = document.createElement("img");
      imageEl.setAttribute("src", repo.avatar_url);

      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement("p");
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.setAttribute("href", repo.html_url);
      linkEl.appendChild(document.createTextNode("Access"));

      let listItemEl = document.createElement("li");
      listItemEl.appendChild(imageEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);
    });
  }
}

new App();
