# Marco Polo


Hola Emi! 

Te dejo este readme para explicarte algunas cosas que hice. 
Vas a ver que hay varios archivos de Javascript numerados. Cuanto mayor el numero de versión, más optimizaciones le fui haciendo al codigo, tratando de hacerlo entendible para que lo puedas seguir y vayas viendo que hice. 
En el archivo HTML vas a tener los distintos scripts de JS comentados, para ir probando uno por uno.

* **marcoPolo.js:** Basicamente consta en el mismo archivo que me pasaste originalmente, y le agregué una función `cerrarModal` que permite que puedas cerrar el modal y continuar con el juego sin necesidad de recargar la pagina. Ahi dentro deje dos comentarios tambien.
* **marcoPolo_2.js**: En este archivo, hay 2 funciones nuevas `mostrarMensajeRespuestaCorrecta` y `mostrarMensajeRespuestaIncorrecta` que justamente hacen lo que indican. De esa forma, evitas tener mucho codigo repetido. Sin embargo, hay lugares donde no las usé ya que el mensaje era distinto (por ejemplo: `¡ASI SE HACE! GANASTE 500 DE ORO`). 
* **marcoPolo_3.js**: En este archivo, elimino las 2 funciones anteriores para usar una más generica llamada `mostrarMensaje` que recibe 2 parametros: 
  * **tipo**: Es un parametro de tipo `string` o texto, que puede ser cualquiera de las palabras `incorrecto`, `correcto` o `info`. Cualquier otra cosa hace que la funcion arroje un error.
  * **texto**: Es otro parametro de tipo `string` o texto que representa el texto que se quiere enviar. Puede tener tags tipo `<h3>Respuesta correcta </h3>`


