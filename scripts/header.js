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

      function toggleSidebar() {
        sidebar.classList.toggle("collapsed");
      }


      if (btn && sidebar && content) {

        btn.addEventListener("click", () => {        
          toggleSidebar();
        });
      }

      if (mapsMenu && sidebar && content) {
        mapsMenuBtn.addEventListener("click", () => {                   
          sidebar.classList.add("collapsed");    
        });
      }
      
      sidebar.addEventListener("mouseover", () => {
        if (sidebar.classList.contains("collapsed")) {
          return;
        }
        toggleSidebar();
      });

      sidebar.addEventListener("mouseout", () => {
        if (sidebar.classList.contains("collapsed")) {
          toggleSidebar();
        }
        
      });


    });
});
