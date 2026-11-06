// Scripts comunes a todas las páginas.

document.addEventListener("DOMContentLoaded", function () {
  // 1. Marca como activa la pestaña de la página actual
  var page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(function (link) {
    if (link.getAttribute("href") === page) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  // 2. Menú desplegable en móvil
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // 3. Año actual en el pie de página
  document.querySelectorAll(".year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // 4. Botones "BibTeX" de la página de publicaciones
  document.querySelectorAll("[data-bibtex]").forEach(function (button) {
    button.addEventListener("click", function () {
      var box = document.getElementById(button.getAttribute("data-bibtex"));
      if (box) box.classList.toggle("open");
    });
  });
});
