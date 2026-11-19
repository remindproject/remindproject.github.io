// Scripts comunes a todas las páginas.

// ===== AJUSTES CENTRALES: edita aquí y se actualiza en todas las páginas =====
var NAV_ITEMS = [
  { href: "index.html",        label: "About the project" },
  { href: "team.html",         label: "Team" },
  { href: "news.html",         label: "News" },
  { href: "publications.html", label: "Contact us" }
];
var CONTACT_EMAIL = "remind.proyecto@uc3m.es";
// ============================================================================

document.addEventListener("DOMContentLoaded", function () {
  // 0. Construye el menú y el correo del pie desde los ajustes de arriba
  var navList = document.querySelector(".nav ul");
  if (navList) {
    navList.innerHTML = "";
    NAV_ITEMS.forEach(function (item) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.label;
      li.appendChild(a);
      navList.appendChild(li);
    });
  }
  document.querySelectorAll(".footer-email").forEach(function (el) {
    var a = document.createElement("a");
    a.href = "mailto:" + CONTACT_EMAIL;
    a.textContent = CONTACT_EMAIL;
    el.innerHTML = "";
    el.appendChild(a);
  });

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
