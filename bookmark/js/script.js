//Array of tabs
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

// Menu button event listener
btn.addEventListener("click", () => toggleMenu());

function toggleMenu() {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");

  //If the menu is open
  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
}

function onTabClick(e) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });

  // Hide all panels
  panels.forEach((panel) => {
    panel.classList.add("hidden");
  });

  // Activate a new tab & panel based on the target
  e.target.classList.add("border-softRed", "border-b-4");
  const classString = e.target.getAttribute("data-target");
  document.querySelector(`.${classString}`).classList.remove("hidden");
}
