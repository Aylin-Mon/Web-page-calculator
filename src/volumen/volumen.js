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

  function obtenerVolumen() {
    var volumenResultado = document.getElementById("volumenResultado");
    var textResultado = document.getElementById("textarea1");
    var l = parseInt(document.getElementById("lado").value);
    var h = parseInt(document.getElementById("altura").value);

    var volumen = (l*h)/3;
  
    volumenResultado.innerHTML = "" + volumen;
    textResultado.value = volumen;
  }
  function obtenerVolumenEsfera() {
    var volumenResultado = document.getElementById("volumenResultado");
    var textResultado = document.getElementById("textarea1");
    var r = parseInt(document.getElementById("radio").value);

    var volumen = ((4/3) * Math.PI*(r*r*r));
    
    volumenResultado.innerHTML = "" + volumen;
    textResultado.value = volumen;
  }

  function obtenerVolumenCubo() {
    var volumenResultado = document.getElementById("volumenResultado");
    var textResultado = document.getElementById("textarea1");
    var a = parseInt(document.getElementById("lado").value);

    var volumen = a * a * a;
  
    volumenResultado.innerHTML = "" + volumen;
    textResultado.value = volumen;
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