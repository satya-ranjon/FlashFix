document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenuBtnClose = document.querySelector(".mobile-menu-btn-close");
  const menuBar = document.querySelector(".menu-bar");

  function toggleMenu() {
    menuBar.classList.toggle("active");
    mobileMenuBtn.classList.toggle("hidden");
    mobileMenuBtnClose.classList.toggle("hidden");
  }

  mobileMenuBtn.addEventListener("click", toggleMenu);
  mobileMenuBtnClose.addEventListener("click", toggleMenu);

  //  theme change
  const themeChangeBtn = document.querySelector(".theme-change");
  let isOriginalTheme = true;

  // Apply saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme == "dark") {
    applyDarkTheme();
    isOriginalTheme = false;
  } else {
    applyLightTheme();
  }

  themeChangeBtn.addEventListener("click", function () {
    if (isOriginalTheme) {
      applyDarkTheme();
      localStorage.setItem("theme", "dark");
    } else {
      applyLightTheme();
      localStorage.setItem("theme", "light");
    }
    isOriginalTheme = !isOriginalTheme;
  });

  function applyDarkTheme() {
    document.body.classList.add("dark");
    document.body.style.color = "#FFFFFF";

    document.querySelector(".nav-container").style.backgroundColor = "#1E1E1E";

    document.querySelector("footer").style.backgroundColor = "#1E1E1E";
    document.querySelector(".menu-bar").style.backgroundColor = "#1E1E1E";
    document.querySelectorAll(".menu-bar li a").forEach((link) => {
      link.style.color = "white";
    });
  }
  function applyLightTheme() {
    document.body.classList.remove("dark");
    document.body.style.color = "#252525";
    document.querySelector(".nav-container").style.backgroundColor = "#FFFFFF";

    document.querySelector("footer").style.backgroundColor = "white";
    document.querySelector(".menu-bar").style.backgroundColor = "white";
    document.querySelectorAll(".menu-bar li a").forEach((link) => {
      link.style.color = "#252525";
    });
  }
});
