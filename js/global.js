// document.addEventListener("DOMContentLoaded", function () {
//   const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
//   const mobileMenuBtnClose = document.querySelector(".mobile-menu-btn-close");
//   const menuBar = document.querySelector(".menu-bar");

//   function toggleMenu() {
//     menuBar.classList.toggle("active");
//     mobileMenuBtn.classList.toggle("hidden");
//     mobileMenuBtnClose.classList.toggle("hidden");
//   }

//   mobileMenuBtn.addEventListener("click", toggleMenu);
//   mobileMenuBtnClose.addEventListener("click", toggleMenu);

//   //  theme change
//   const themeLight = document.getElementById("theme-light");
//   const themeDark = document.getElementById("theme-dark");
//   let isOriginalTheme = true;

//   // Apply saved theme preference
//   const savedTheme = localStorage.getItem("theme");
//   if (savedTheme == "dark") {
//     applyDarkTheme();
//     isOriginalTheme = false;
//   } else {
//     applyLightTheme();
//     toggleIcons();
//   }

//   themeDark.addEventListener("click", function () {
//     if (isOriginalTheme) {
//       applyDarkTheme();
//       localStorage.setItem("theme", "dark");
//     } else {
//       applyLightTheme();
//       localStorage.setItem("theme", "light");
//     }
//     isOriginalTheme = !isOriginalTheme;
//   });
//   themeLight.addEventListener("click", function () {
//     if (isOriginalTheme) {
//       applyDarkTheme();
//       localStorage.setItem("theme", "dark");
//     } else {
//       applyLightTheme();
//       localStorage.setItem("theme", "light");
//     }
//     isOriginalTheme = !isOriginalTheme;
//   });

//   function applyDarkTheme() {
//     document.body.classList.add("dark");
//     document.body.style.color = "#FFFFFF";

//     document.querySelector(".nav-container").style.backgroundColor = "#1E1E1E";

//     document.querySelector("footer").style.backgroundColor = "#1E1E1E";
//     document.querySelector(".menu-bar").style.backgroundColor = "#1E1E1E";
//     document.querySelectorAll(".menu-bar li a").forEach((link) => {
//       link.style.color = "white";
//     });
//     themeDark.classList.remove("hidden");
//     themeLight.classList.add("hidden");
//   }
//   function applyLightTheme() {
//     document.body.classList.remove("dark");
//     document.body.style.color = "#252525";
//     document.querySelector(".nav-container").style.backgroundColor = "#FFFFFF";

//     document.querySelector("footer").style.backgroundColor = "white";
//     document.querySelector(".menu-bar").style.backgroundColor = "white";
//     document.querySelectorAll(".menu-bar li a").forEach((link) => {
//       link.style.color = "#252525";
//     });

//     themeDark.classList.remove("hidden");
//     themeLight.classList.add("hidden");
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenuBtnClose = document.querySelector(".mobile-menu-btn-close");
  const menuBar = document.querySelector(".menu-bar");
  const themeLight = document.getElementById("theme-light");
  const themeDark = document.getElementById("theme-dark");
  let isDarkTheme = false; // Changed variable name to reflect the theme state more accurately

  // Apply saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    applyDarkTheme();
  } else {
    applyLightTheme();
  }

  // Toggle mobile menu
  function toggleMenu() {
    menuBar.classList.toggle("active");
    mobileMenuBtn.classList.toggle("hidden");
    mobileMenuBtnClose.classList.toggle("hidden");
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !menuBar.contains(event.target) &&
      !mobileMenuBtn.contains(event.target)
    ) {
      menuBar.classList.remove("active");
      mobileMenuBtn.classList.remove("hidden");
      mobileMenuBtnClose.classList.add("hidden");
    }
  });

  // Theme change event listeners
  themeDark.addEventListener("click", function () {
    applyDarkTheme();
    localStorage.setItem("theme", "dark");
  });

  themeLight.addEventListener("click", function () {
    applyLightTheme();
    localStorage.setItem("theme", "light");
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

    themeDark.classList.add("hidden");
    themeLight.classList.remove("hidden");
    isDarkTheme = true;
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

    themeDark.classList.remove("hidden");
    themeLight.classList.add("hidden");
    isDarkTheme = false;
  }

  // Toggle mobile menu on button clicks
  mobileMenuBtn.addEventListener("click", toggleMenu);
  mobileMenuBtnClose.addEventListener("click", toggleMenu);
});
