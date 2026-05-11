document.addEventListener("DOMContentLoaded", () => {
  fetch("../docs/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;

  
      const btn = document.getElementById("toggleBtn");
      const sidebar = document.getElementById("sidebar");
      const content = document.getElementById("content");

      const tstBtn = document.getElementById("testBtn");

      if (btn && sidebar && content) {
        if (window.innerWidth < 768) {
          content.classList.add("collapsed");
        }

        tstBtn.addEventListener("click", () => {
          content.classList.toggle("collapsed");
        });

        btn.addEventListener("click", () => {
          
          sidebar.classList.toggle("collapsed");
          if (window.innerWidth < 768) {
            return;
          }
          content.classList.toggle("collapsed");
        });
      }

      const mapsMenu = document.getElementById("mapsMenu");
      if (mapsMenu && sidebar && content) {
        mapsMenu.addEventListener("show.bs.collapse", () => {
          sidebar.classList.remove("collapsed");
          content.classList.remove("collapsed");
        });
      }

      const currentPage =
        window.location.pathname.split("/").pop() || "../index.html";

      document.querySelectorAll(".nav-link").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
          link.setAttribute("aria-current", "page");
        }
      });
    });
});