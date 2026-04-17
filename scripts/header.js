document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;

      // ✅ Sidebar toggle (must be here)
      const btn = document.getElementById("toggleBtn");
      const sidebar = document.getElementById("sidebar");
      const content = document.getElementById("content");

      if (btn && sidebar && content) {
        btn.addEventListener("click", () => {
          sidebar.classList.toggle("collapsed");
          content.classList.toggle("collapsed");
        });
      }

      // ✅ Active link highlight
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