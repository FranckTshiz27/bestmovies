let mainMenu;
let openMenu;
let closeMenu;
let btnMenu;
let nav;
let isVisible = false;
let links = [];
let activeLink;
initComponents();
function initComponents() {
  mainMenu = document.querySelector(".header__nav__ul");
  openMenu = document.querySelector(".openMenu");
  // closeMenu = document.querySelector(".closeMenu");
  // btnMenu = document.querySelector(".navbar-toggler");
  // nav = document.querySelector("#navbarTogglerDemo01");
  getLinks(mainMenu);
}

function getLinks(mainMenu) {
  if (mainMenu != null) {
    let lis = mainMenu.children;
    for (let item of lis) {
      const link = item.children[0];
      console.log(link);
      if (link != null) {
        links.push(link);
      }
    }
  }

  setActions();
}

function setActions() {
  for (let elt of links) {
    elt.addEventListener("click", () => removeActiveLink(elt));
  }
}

function removeActiveLink(elt) {
  activeLink = elt;
  for (let link of links) {
    link.removeAttribute("id");
    console.log(link.textContent);
  }
  activeLink.setAttribute("id", "active1");
}
openMenu.addEventListener("click", show);

openMenu.addEventListener("click", show);

function show() {
  isVisible = !isVisible;

  if (isVisible) {
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
  } else {
    mainMenu.style.display = "none";
  }
}

function close() {
  mainMenu.style.top = "-100%";
}
