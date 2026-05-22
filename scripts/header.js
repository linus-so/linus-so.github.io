document.addEventListener("DOMContentLoaded", () => {
  fetch("../docs/newHeader.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;

  
      const btn = document.getElementById("toggleBtn");
      const sidebar = document.getElementById("newSidebar");
      const content = document.getElementById("content");
      const mapsMenu = document.getElementById("mapsMenu");
      const mapsBtn = document.getElementById("mapsMenuBtn");


      if (btn && sidebar && content) {

        btn.addEventListener("click", () => {
          
          sidebar.classList.toggle("collapsed");
          if (window.innerWidth < 768) {
            return;
          }
          content.classList.toggle("collapsed");
          
          console.log(mapsMenu.classList)

          

        });
      }


      if (mapsMenu && sidebar && content) {
        mapsMenuBtn.addEventListener("click", () => {
          
          
          sidebar.classList.add("collapsed");
          if (window.innerWidth < 768) {
            return;
          }
          content.classList.add("collapsed");
          
        });
      }
    });
});