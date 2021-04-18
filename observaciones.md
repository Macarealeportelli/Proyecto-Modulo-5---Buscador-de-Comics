Querida Maca, 

Primero lo primero, felicitarte por un hermoso trabajo. Se que el tiempo no estuvo de tu lado, pero cuando me advertiste que no estaba listo me esperaba otra cosa. Si bien hay algunas funcionalidades faltantes, tu TP esta perfecto para entregar y publicar. Me alegra notar que priorizaste entregar un trabajo funcional a agregar funcionalidades que no pudiste terminar y que quedaran a medias.  El maquetado es hermoso, las funcionalidades principales estan, y en general todo funciona como lo espero. 

A nivel visual, tu web se ve impecable para desktop. El responsive no esta implementado, y te diria que, de querer continuar mejorando este proyecto, deberia ser lo primero que encares - es absolutamente vital si vas a publicar este trabajo en tus redes o agregarlo a un portfolio. Nota que en mi monitor tampoco se ve bien en desktop, asi que deberias controlar que al menos se vea bien en distintas resoluciones de escritorio (aumentar y reducir el zoom de tu navegador te deberia dar una idea de como se ve en distintas resoluciones)

Otras dos cosas que considero prioritarias del aspecto visual es, en primer lugar, una indicacion de que las tarjetas son links - `cursor:pointer` en css cuando les hacemos hover, por ejemplo, e idealmente alguna animacion. Queremos invitar al usuario a hacer click - sino no tiene manera de saber que puede cliquearlas! En segundo lugar, y esto ya es un detalle, el hover sobre los botones. El color rojo se pone en el span, no el boton, y por eso no se ve tan bien como debiera. 

A nivel comportamiento, hay varias cositas que faltan, y estaria bueno que puedas empezar a pensar en agregarlas. Algunas de las cosas que noto que se deberian arreglar son:

- No esta implementada con toda la informacion la seccion de detalles de personaje.
- Cuando vemos el detalle de un comic, las tarjetas de personajes no son links.
- Cuando hacemos la busqueda de un personaje, las tarjetas no son links. 
- Los botones de paginado no se deshabilitan en la primera o ultima pagina
- Los botones siguen funcionando en el detalle de un comic, y me llevan a la busqueda
- Si la descripcion no viene en la api, se ve "null" en tu pagina. 
- No hay busqueda por comics mas y menos antiguos. 
- Si un comic no tiene guionista, todo el detalle se ve en blanco (falla tu codigo)

No se bien si comentarte una o varias de estas cosas en mas detalle. Tengo entendido que lo que te faltó fue tiempo, y no que no pudieras hacer estas cosas, pero en caso de que hayas tenido una traba de tipo tecnico para poder resolver estas cosas, no dejes de consultarme. 

A nivel codigo, 

Tu HTML esta muy bien. Usas buen las etiquetas semanticas, la accesibilidad esta aceptable. Usaste bien las clases. El sass esta muy bien, aunque podrias haber declarado mas variables (los colores, tamaños, margenes y padding, etc) y hacer mas mixins. A nivel arquitectura, esta perfecto. 

Tu JS no esta bien. Si bien usas a la perfeccion los conocimientos que fuimos viendo a lo largo del modulo, la calidad de tu codigo sufre mucho. Hay muchisimos console log olvidados y comentarios, que a esta altura ya sabes que no me podes dejar en una entrega. El indentado es muy malo para ser una entrega a esta altura. Pero lo que mas me preocupa es la cantidad de codigo que se repite: podriamos reducir la longitud de tu JS practicamente a la mitad si tan solo ponemos en funciones reutilizables todo tu codigo repetido. La misma funcion declarada tanto en un if como en un else, la misma logica condicional repetida cuatro veces en los botones de busqueda, etc. Poder funcionalizar, poder abstraer la logica para no tener que repetir, poder ahorrar codigo usando variables y funciones, es una habilidad muy importante. Tenelo en cuenta para la revision que hagas de este codigo. Se como podes codear cuando le pones tiempo y ganas: este trabajo, en cambio, no refleja lo que se que sos capaz de hacer, y no querria que este codigo sea para los demas la prueba de lo que podes hacer, porque se que das para mucho mas.  

Con respecto a tu github, celebro que hayas ido trabajando correctamente commit a commit y que tengas varias branches. el readme es bueno: Quiza quieras mencionar tambien que el usuario va a tener que tener LiveServer para ejecutarlo en local. 

Tengo claro que la mayor limitacion fue el tiempo, y se lo que sos capaz de hacer cuando tenes el tiempo y las ganas para invertir en un trabajo. Para este TP, entre las funcionalidades faltantes y la desgana que noto en el JS, tengo que poner una nota "no tan buena". Se que esta nota no te representa, ni a lo que sabes, ni a tu potencial. Ojala puedas revisitar este trabajo en un futuro para dejarlo al nivel que se que podes dar. 

 
  ✔️ Respeta la consigna
  ✅ Respeta el diseño dado
  ✔️ Respeta el funcionamiento
  ❌ Responsive funciona correctamente

  ✅ HTML semántico
  ✔️ Código bien indentado
  ✅ Buenos nombres de clases
  ✅ Buenos nombres de funciones y variables
  ✔️ Uso de variables (SASS)

  ✅ Buena estructura y separación de archivos (SASS)
  ✅ Correcto uso de estilos anidados (SASS)
  ✅ Nombres de branchs adecuados

  ✅  Componentización de estilos (SASS)
  ❌ Funciones pequeñas
  ❌ Lógica clara y simple
  ✅ Separación clara de manejo de datos y visualización

  ❌ Reutilización de lógica / funciones
  ✅ Commits con mensajes adecuados

Nota final: **7**
