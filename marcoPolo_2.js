document.addEventListener('DOMContentLoaded', () => {
  let oroAcumulado = 0
  function updateOro(cantidad) {
    oroAcumulado += cantidad
    document.getElementById('oro-acumulado').innerHTML = `Oro acumulado: ${oroAcumulado}`
  }
  function restarOro(cantidad) {
    oroAcumulado -= cantidad
    document.getElementById('oro-acumulado').innerHTML = `Oro acumulado: ${oroAcumulado}`
  }

  // Funcion para "cerrar" el modal. En realidad lo oculta.
  function cerrarModal() {
    const modal = document.querySelector('.modal-background')
    modal.style.display = 'none'
  }

  const btnMusic = document.getElementById("music")

  const btn1 = document.getElementById('one')
  const btn2 = document.getElementById('two')
  const btn3 = document.getElementById('three')
  const btn4 = document.getElementById('four')
  const btn5 = document.getElementById('five')
  const btn6 = document.getElementById('six')
  const btn7 = document.getElementById('seven')
  const btn8 = document.getElementById('eight')
  const btn9 = document.getElementById('nine')
  const btn10 = document.getElementById('ten')
  const btn11 = document.getElementById('eleven')
  const btn12 = document.getElementById('twelve')
  const btn13 = document.getElementById('thirteen')
  const btn14 = document.getElementById('fourteen')
  const btn15 = document.getElementById('fifteen')

  btnMusic.addEventListener("click", () => {
    let audio = document.getElementById("musica")
    audio.play()
    btnMusic.style.display = "none"
  })

  // Aca le agrego la funcion para cerrar el modal al hacer click en el fondo del mismo.
  const mainModal = document.querySelector('.modal-background')
  mainModal.addEventListener('click', cerrarModal)

  function mostrarMensajeRespuestaIncorrecta() {
    const modal = document.querySelector('.modal-background');
    const respuestaElement = document.querySelector('.respuesta');
    // Primero, oculta el modal si ya está visible
    if (modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
    // Establece el mensaje de respuesta incorrecta
    respuestaElement.innerHTML = `<span class='red'> Parece que la respuesta es incorrecta. ¡Tirá nuevamente el dado!</span>`
    modal.style.display = 'flex'; // Muestra el modal
    modal.style.animation = 'aparecer 1s forwards';
    // Hacer que el modal desaparezca después de 3 segundos
    setTimeout(() => {
      modal.style.display = 'none';
      modal.style.animation = 'desaparecer 1s forwards';
    }, 3000);
  }

  function mostrarMensajeRespuestaCorrecta() {
    const modal = document.querySelector('.modal-background');
    const respuestaElement = document.querySelector('.respuesta');
    // Primero, oculta el modal si ya está visible
    if (modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
    respuestaElement.innerHTML = `<span class='green'>¡RESPUESTA CORRECTA! ¡SEGUÍ ASÍ!</span>`;
    modal.style.display = 'flex'; // Muestra el modal
    modal.style.animation = 'aparecer 1s forwards';
    // Hacer que el modal desaparezca después de 3 segundos
    setTimeout(() => {
      modal.style.display = 'none';
      modal.style.animation = 'desaparecer 1s forwards';
    }, 3000);
  }

  btn1.addEventListener('mouseover', () => {
    const abrirModal = () => {
      let h4 = document.querySelector('.respuesta')
      h4.innerHTML = `<h4>¡Bienvenido al juego! Este consiste en avanzar lo más que se pueda hasta llegar al último casillero. En el camino, podrás obtener oro como recompensa según los casilleros que avances. A su vez, estos dependen del número que te salga en el dado. Recordá que tu respuesta también es válida si escribes la letra correspondiente a la respuesta que piensas que es la correcta. ¿Estás listo?</h4>`
      h4.style.fontFamily = 'Times-New-Roman'
      let modal = document.querySelector('.modal-background')
      modal.style.width = '100%'
      modal.style.height = '100%'
      modal.style.display = 'flex'
      modal.style.animation = 'aparecer 1s forwards'
      setTimeout(() => {
        modal.style.display = 'none'
        modal.style.animation = 'desaparecer 1s forwards'
      }, 15000)
    }; abrirModal()
  })

  btn2.addEventListener('click', () => {
    respuesta = prompt(
      '¿De qué país era originario Marco Polo?' +
      '\n' +
      'a) Italia' +
      '\n' +
      'b) China' +
      '\n' +
      'c) Francia' +
      '\n' +
      'd) Alemania'
    )
    if (respuesta == 'Italia' || respuesta == 'a') {
      const abrirModal = () => (mostrarMensajeRespuestaCorrecta())
      abrirModal()
      updateOro(500)
    } else {
      const abrirModal = () => mostrarMensajeRespuestaIncorrecta()
      abrirModal()
    }
    abrirModal()
    restarOro(500)
  }
  ); cerrarModal()

  btn3.addEventListener('click', () => {
    respuesta = prompt(
      '¿En que año nació Marco Polo?' +
      '\n' +
      'a) 1240' +
      '\n' +
      'b) 1254' +
      '\n' +
      'c) 1260' +
      '\n' +
      'd) 1270'
    )
    if (respuesta == '1254' || respuesta == 'b') {
      const abrirModal = () => mostrarMensajeRespuestaCorrecta()
      abrirModal()
      updateOro(500)
    } else {
      const abrirModal = () => mostrarMensajeRespuestaIncorrecta()
      abrirModal()
      restarOro(250)
    }
  }); cerrarModal()

  btn4.addEventListener('click', () => {
    respuesta = prompt(
      'Si fueras Marco Polo y viajaras desde Venecia hacia China, ¿cuál de los siguientes animales sería más probable que vieras en tus viajes por las rutas comerciales de Asia?' +
      '\n' +
      'a) León' +
      '\n' +
      'b) Camello' +
      '\n' +
      'c) Caballo' +
      '\n' +
      'd) Canguro'
    )
    if (respuesta == 'b' || respuesta == 'Camello' || respuesta == "camello") {
      const abrirModal = () => mostrarMensajeRespuestaCorrecta()
      abrirModal()
      updateOro(350)
    }
    else {
      const abrirModal = () => mostrarMensajeRespuestaIncorrecta()
      abrirModal(600)
    }

  })

  btn5.addEventListener('click', () => {
    respuesta = prompt('¿Marco Polo estuvo en China?' + '\n' + 'a) Si' + '\n' + 'b) No')
    if (respuesta == 'si' || respuesta == 'a') {
      const abrirModal = () => mostrarMensajeRespuestaCorrecta()
      abrirModal()
      updateOro(100)
    } else {
      const abrirModal = () => mostrarMensajeRespuestaIncorrecta()
      abrirModal()
      restarOro(500)
    }
  })

  btn6.addEventListener('click', () => {
    respuesta = prompt('¿Te estas divirtiendo?' + '\n' + 'a) Si' + '\n' + 'b) No')
    if (respuesta == 'si') {
      const abrirModal = () => {
        document.querySelector('.respuesta').innerHTML = `<span class='green'>¡Fantástico! Seguí descubriendo la rica historia de Marco Polo</span>`
        let modal = document.querySelector('.modal-background')
        modal.style.display = 'flex'
        modal.style.animation = 'aparecer 1s forwards'
      }
      abrirModal()
      updateOro(1000)
    } else if (respuesta == 'no') {
      const abrirModal = () => {
        document.querySelector('.respuesta').innerHTML = `<span class='red'>Nos alegra que hayas querido jugar esta gran trivia.¡Hasta pronto!</span>`
        let modal = document.querySelector('.modal-background')
        modal.style.display = 'flex'
        modal.style.animation = 'aparecer 1s forwards'
      }
      abrirModal()
      restarOro(oroAcumulado)
    }
  })

  btn7.addEventListener('click', () => {
    respuesta = prompt(
      '¿A qué imperio llegó Marco Polo en Asia?' +
      '\n' +
      'a) Imperio Otomano' +
      '\n' +
      'b) Imperio Mongol' +
      '\n' +
      'c) Imperio Chino' +
      '\n' +
      'd) Imperio Romano'
    )
    if (respuesta == 'Imperio Mongol' || respuesta == 'b') {
      const abrirModal = () => mostrarMensajeRespuestaCorrecta()
      abrirModal()
      updateOro(800)
    } else {
      const abrirModal = () => mostrarMensajeRespuestaIncorrecta()
      abrirModal()
      restarOro(300)
    }
  })

  btn8.addEventListener('click', () => {
    const abrirModal = () => {
      document.querySelector('.respuesta').innerHTML = `<h3>¡UPS! PERDISTE <i>1600 DE ORO</i></h3>`
      let modal = document.querySelector('.modal-background')
      modal.style.display = 'flex'
      modal.style.animation = 'aparecer 1s forwards'
      setTimeout(() => {
        modal.style.display = 'none'
        modal.style.animation = 'desaparecer 1s forwards'
      }, 4000)
    }
    abrirModal()
    restarOro(1600)
  })

  btn9.addEventListener('click', () => {
    const abrirModal = () => {
      document.querySelector('.respuesta').innerHTML = `<h3>¡ASI SE HACE! GANASTE <i>500 DE ORO</i></h3>`
      let modal = document.querySelector('.modal-background')
      modal.style.display = 'flex'
      modal.style.animation = 'aparecer 1s forwards'
      setTimeout(() => {
        modal.style.display = 'none'
        modal.style.animation = 'desaparecer 1s forwards'
      }, 4000)
    }
    abrirModal()
    updateOro(500)
  })

  btn10.addEventListener('click', () => {
    respuesta = prompt(
      '¿Cuál es el título del famoso libro que narra las aventuras de Marco Polo?' +
      '\n' +
      'a) El libro de Marco Polo' +
      '\n' +
      'b) Viajes' +
      '\n' +
      'c) Mis dias en alta mar' +
      '\n' +
      'd) Las aventuras de Marco Polo'
    )
    if (respuesta == 'Las aventuras de Marco Polo' || respuesta == 'd') {
      const abrirModal = () => mostrarMensajeRespuestaCorrecta()
      abrirModal()
      updateOro(1000)
    } else {
      const abrirModal = () => mostrarMensajeRespuestaIncorrecta()
      abrirModal()
      restarOro(400)
    }
  })

  btn11.addEventListener('click', () => {
    const abrirModal = () => {
      document.querySelector('.respuesta').innerHTML = `<h3>"¡FELICIDADES! GANASTE <i>2000 DE ORO</i></h3>`
      let modal = document.querySelector('.modal-background')
      modal.style.display = 'flex'
      modal.style.animation = 'aparecer 1s forwards'
      setTimeout(() => {
        modal.style.display = 'none'
        modal.style.animation = 'desaparecer 1s forwards'
      }, 4000)
    }
    abrirModal()
    updateOro(2000)
  })

  btn12.addEventListener('click', () => {
    respuesta = prompt(
      '¿Cuál fue la principal ruta comercial que Marco Polo ayudó a establecer? ' +
      '\n' +
      'a) La Ruta del Oro' +
      '\n' +
      'b) La Ruta de la Seda' +
      '\n' +
      'c) La Ruta del Mar' +
      '\n' +
      'd) Ruta del Desierto'
    )
    if (
      respuesta == 'la Ruta de la Seda' ||
      respuesta == 'b' ||
      respuesta == 'la ruta de la seda'
    ) {
      const abrirModal = () => mostrarMensajeRespuestaCorrecta()
      abrirModal()
      updateOro(750)
    } else {
      const abrirModal = () => mostrarMensajeRespuestaIncorrecta()
      abrirModal()
      restarOro(1500)
    }
  })

  btn13.addEventListener('click', () => {
    respuesta = prompt(
      '¿Qué famoso explorador se inspiró en los viajes de Marco Polo?' +
      '\n' +
      'a) Vasco da Gama' +
      '\n' +
      'b) Cristobal Colon' +
      '\n' +
      'c) Fernando Magallanes' +
      '\n' +
      'd) Juan Sebastian Elcano'
    )
    if (respuesta == 'Cristobal Colon' || respuesta == 'b') {
      const abrirModal = () => mostrarMensajeRespuestaCorrecta()
      abrirModal()
      updateOro(1000)
    } else {
      const abrirModal = () => mostrarMensajeRespuestaIncorrecta()
      abrirModal()
      restarOro(500)
    }
  })

  btn14.addEventListener('click', () => {
    respuesta = prompt(
      '¿En qué ciudad italiana pasó Marco Polo sus últimos años y murió? ' +
      '\n' +
      'a) Roma' +
      '\n' +
      'b) Florencia' +
      '\n' +
      'c) Verona' +
      '\n' +
      'd) Venecia'
    )
    if (respuesta == 'Venecia' || respuesta == 'd') {
      const abrirModal = () => mostrarMensajeRespuestaCorrecta()
      abrirModal()
      updateOro(200)
    } else {
      const abrirModal = () => mostrarMensajeRespuestaIncorrecta()
      abrirModal()
      restarOro(1500)
    }
  })

  btn15.addEventListener('click', () => {
    const abrirModal = () => {
      document.querySelector('.respuesta').innerHTML = `<h3>¡LLEGASTE AL FINAL DEL JUEGO! ¡OBTENDRÁS <i>5000 DE ORO</i>! Gracias por quedarte hasta el final. Esperamos que hayas aprendido mucho sobre la rica historia de Marco Polo.</h3>`
      let modal = document.querySelector('.modal-background')
      modal.style.display = 'flex'
      modal.style.animation = 'aparecer 1s forwards'
      setTimeout(() => {
        modal.style.display = 'none'
        modal.style.animation = 'desaparecer 1s forwards'
      }, 7000)
    }
    abrirModal()
    updateOro(5000)
  })

})