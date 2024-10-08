const btnDarkMode = document.querySelector(".dark-mode-btn");

// check dark mode in sistem setting level
if (window.matchMedia && window.matchMedia("(prefers-colors-scheme: dark)").matches) {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}

// Check dark mode in localStorage
if (localStorage.getItem('darkMode') == 'dark') {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') == 'light') {
  btnDarkMode.classList.remove("dark-mode-btn--active");
  document.body.classList.remove("derk");
}

// if change sistems setting when change and the scheme
window
  .matchMedia("(prefers-colors-sheme: dark)")
  .addEventListener('change', (event) => {
  const newColorSheme = event.matches ? "dark" : "light";

  if (newColorSheme == 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
    localStorage.setItem("darkMode", "dark");
  } else {
    btnDarkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove("dark");
    localStorage.setItem("darkMode", "light");
  }
})

// Dark Mode turn on after click on the button 
btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle('dark');

  if (isDark) {
    localStorage.setItem('darkMode', 'dark')
  } else {
    localStorage.setItem('darkMode', 'light')
  }
}