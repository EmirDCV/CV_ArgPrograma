// Menu fijo
window.onscroll = function() {myFunction()};
        
var nav = document.getElementById("menu-fijo");
var fijo = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset > fijo) {
    nav.classList.add("fijo");
  } else {
    nav.classList.remove("fijo");
  }
}

// Mostrar Secciones
  function mostrarSeccion1() {
    document.getElementById('seccion1').style.display = 'block';
  }

  function mostrarSeccion2() {
    document.getElementById('seccion2').style.display = 'block';
  }

  function mostrarSeccion3() {
    document.getElementById('seccion3').style.display = 'block';
  }

  function mostrarSeccion4() {
    document.getElementById('seccion4').style.display = 'block';
  }
