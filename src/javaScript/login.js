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
        <a class='btn white' href='./singup.html'>Cadastre-se</a>`
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

function loginVerify() {
  const loginBtn = document.querySelector("#loginBtn");

  const loginForm = document.querySelector("#login__form");

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let [email, password] = loginForm;
    let emailUser = email.value;
    let passwordUser = password.value;

    if (emailUser !== "" && passwordUser !== "") {
      let key = localStorage.getItem(`@kenziefy:user:${emailUser}`);

      if (!key) {
        toast("conta não cadastrada", "#C20803");
        return setTimeout(() => {
          window.location.replace("./singup.html");
        }, 2000);
      } else {
        const keyUser = JSON.parse(key);
        if (
          keyUser.emailUser == emailUser &&
          keyUser.passwordUser == passwordUser
        ) {
          toast("login efetuado com sucesso", "#08C203");

          setTimeout(() => {
            window.location.replace("./dashBoard.html");
          }, 2000);
        } else {
          toast("dados incorretos", "#C20803");
        }
      }
    } else {
      toast("preencha os campos vazios", "#C20803");
    }
  });
}
loginVerify();
