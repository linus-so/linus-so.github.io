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
      var sidebarLocked = false;

      function toggleSidebar() {
        sidebar.classList.toggle("collapsed");
      }

      function onDesktop() {
        return window.innerWidth >= 769;
      }


      if (btn && sidebar && content) {

        btn.addEventListener("click", () => {        
          toggleSidebar();
          console.log("Clicked")
        });

        
      }

      if (mapsMenu && sidebar && content) {
        mapsMenuBtn.addEventListener("click", () => {                   
          sidebar.classList.add("collapsed");    
        });
      }

      
      
        sidebar.addEventListener("mouseover", () => {
          if (onDesktop() && !sidebar.classList.contains("collapsed")) {
            toggleSidebar();
          }

        });

        sidebar.addEventListener("mouseout", () => {
          if (onDesktop() && sidebar.classList.contains("collapsed")) {
            toggleSidebar();

          }

        });
        

    });
});
