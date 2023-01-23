import { toast } from "./toast.js";

function showSandwishMenu() {
  const body = document.querySelector("body");
  const sandwish = document.querySelector(".fa-bars");

  const renderMenu = () => {
    const topHeader = document.createElement("div");
    topHeader.classList.add("top__header__expanded");

    const container = document.createElement("ul");

    const topElement = document.createElement("li");
    topElement.classList.add("top__logo");
    topElement.classList.add("topElement");

    const img = document.createElement("img");
    img.src = "../assets/img/spotify.svg";
    const p = document.createElement("p");
    p.innerText = "linkfy";

    const bottomElement = document.createElement("li");
    bottomElement.classList.add("bottomElement");
    const closeIcon = document.createElement("i");
    closeIcon.classList.add("fa-solid", "fa-xmark", "closeIcon");

    body.appendChild(topHeader);
    topHeader.appendChild(container);
    container.append(topElement, bottomElement, closeIcon);
    topElement.append(img, p);

    bottomElement.insertAdjacentHTML(
      "beforeend",
      `<a class='btn' href='../../index.html'>Home</a>
        <a class='btn white' href='./login.html'>Login</a>`
    );

    return hideSandwishMenu(closeIcon);
  };

  sandwish.addEventListener("click", renderMenu);
}
showSandwishMenu();

function hideSandwishMenu(closeButton) {
  closeButton.addEventListener("click", () => {
    const sandwishMenu = document.querySelector(".top__header__expanded");

    sandwishMenu.remove();
  });
}

function singUpVerify() {
  const sendBtn = document.querySelector("#cadastro__form > button");
  const singUpForm = document.querySelector("#cadastro__form");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let [name, email, password] = singUpForm;
    let emailUser = email.value;

    let key = localStorage.getItem(`@kenziefy:user:${emailUser}`);

    if (key) {
      toast("conta já cadastrada faça o login", "#C20803");
      return setTimeout(() => {
        window.location.replace("./singup.html");
      }, 2000);
    } else {
      createUser();
    }
  });
}
singUpVerify();

function createUser() {
  const sendBtn = document.querySelector("#cadastro__form > button");
  const singUpForm = document.querySelector("#cadastro__form");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let [name, email, password] = singUpForm;

    let nameUser = name.value;
    let emailUser = email.value;
    let passwordUser = password.value;

    let userData = { nameUser, emailUser, passwordUser };

    if (nameUser !== "" && emailUser !== "" && passwordUser !== "") {
      let userDataJson = JSON.stringify(userData);

      localStorage.setItem(`@kenziefy:user:${emailUser}`, userDataJson);

      toast("e-mail cadastrado com sucesso", "#08C203");

      setTimeout(() => {
        window.location.replace("./login.html");
      }, 2000);
    } else {
      toast("por favor preencha todos os campos", "#C20803");
    }
  });
}
