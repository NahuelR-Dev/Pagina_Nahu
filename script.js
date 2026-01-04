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





emailjs.init("w6b79JwFVUFQ501dc");

const form = document.getElementById("recomendacion-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_lmv0ywd",
    "template_zoh0akh",
    this
  ).then(
    () => {
      alert("¡Recomendación enviada! 🔥");
      form.reset();
    },
    (error) => {
      console.log(error);
      alert("Error al enviar 😢");
    }
  );
});



