let nCount = selector => {
    $(selector).each(function () {
      $(this)
        .animate({
          Counter: $(this).text()
        }, {
          // A string or number determining how long the animation will run.
          duration: 4000,
          // A string indicating which easing function to use for the transition.
          easing: "swing",
          /**
           * A function to be called for each animated property of each animated element. 
           * This function provides an opportunity to
           *  modify the Tween object to change the value of the property before it is set.
           */
          step: function (value) {
            $(this).text(Math.ceil(value));
          }
        });
    });
  };
  
  let a = 0;
  $(window).scroll(function () {
    // The .offset() method allows us to retrieve the current position of an element  relative to the document
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
      a++;
      nCount(".rect > h1");
    }
  });

  /* Calculadora geometrica */

  function obtenerPerimetro() {
    var perimetroResultado = document.getElementById("perimetroResultado");
    var textResultado = document.getElementById("textarea1");
    var b = parseInt(document.getElementById("base").value);
    var a = parseInt(document.getElementById("altura").value);
    var c = parseInt(document.getElementById("contor").value);

    var perimetro = b + a + c;
  
    perimetroResultado.innerHTML = "" + perimetro;
    textResultado.value = perimetro;
  }

  function obtenerPerimetroCirculo() {
    var perimetroResultado = document.getElementById("perimetroResultado");
    var textResultado = document.getElementById("textarea1");
    var r = parseInt(document.getElementById("radio").value);

    var perimetro = 2 * Math.PI * r;
    
    perimetroResultado.innerHTML = "" + perimetro;
    textResultado.value = perimetro;
  }

  function obtenerPerimetroCuadrado() {
    var perimetroResultado = document.getElementById("perimetroResultado");
    var textResultado = document.getElementById("textarea1");
    var b = parseInt(document.getElementById("base").value);
    var a = parseInt(document.getElementById("altura").value);
    var c = parseInt(document.getElementById("contor").value);
    var d = parseInt(document.getElementById("lado").value);

    var perimetro = b + a + c + d;
  
    perimetroResultado.innerHTML = "" + perimetro;
    textResultado.value = perimetro;
  }
  /**
   *
   *  sticky navigation
   *
   */
  
  let navbar = $(".navbar");
  
  $(window).scroll(function () {
    // get the complete hight of window
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
      navbar.addClass("sticky");
    } else {
      navbar.removeClass("sticky");
    }
  });