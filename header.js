document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;

      const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

      document.querySelectorAll(".nav-link").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
          link.setAttribute("aria-current", "page");
        }
      });
    });
});
