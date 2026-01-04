const tables = document.querySelectorAll(".tabla");
const paneles = document.querySelectorAll(".panel");

tables.forEach(tab => {
  tab.addEventListener("click", () => {

    
    tables.forEach(t => t.classList.remove("activa"));
    tab.classList.add("activa");

    
    paneles.forEach(panel => panel.classList.remove("activo"));

   
    const texto = tab.textContent.trim().toLowerCase();

    
    document.getElementById(texto).classList.add("activo");
  });
});

