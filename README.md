# Heading Reentrega Proyecto Final React - Armando Ismael
El presente proyecto está hecho en base a lo dado en las clases de CoderHouse dictadas por el profesor Pablo Moraga, el material complementario de google drive, los pps y mucho buscar en la red tanto googlear, visitar stackflow, videos de youtube y el material del MDN de Firefox, entres otros.
Si bien tuve un muy buen comienzo me encontré con problemas al implementar Firebase en el proyecto, pero gracias a estar sentado aprendiendo y la ayuda de los tutores de coderASK logro encontrar tanto la problemática como las vueltas de tuerca que deseaba darle al proyecto que no deja de ser un E-COMMERCE.
La reentrega se encuentra alojada en: [ReentregaProyectoReact-Armando](https://reentrega-proyecto-coder-armando.vercel.app/) 

## Composición / Componentes.
	
Como guía del proyecto se siguió lo propuesto en los videos de CODER aunque a medida que la complejidad avanzaba obviamente me fui apartando del mismo para darle la funcionalidad que yo quería, aunque siempre siguiendo lo solicitado como parte del proyecto. Es así que tenemos en general la siguiente estructura base:
 
● NavBar
● CartWidget
● ItemListContainer
● ItemList
● ItemDetailContainer
● ItemDetail
			○ ItemCount
			○ Description
			○ AddItemButton
● CheckOut

A lo cual por una cuestión práctica se agrega

 - Checkoutform: formulario para completar por el cliente, el cual puede seguir ampliándose con la info que consideremos que debamos preguntar al mismo. Por ahora solo nombre, celular y correo electrónico (el cual como pide Coder es ingresado dos veces para chequear que este bien escrito).
 - CheckoutPage: que es el checkout en si que generará la orden, le dara al cliente el n{umero de la misma y fuardara en firebase toda la informacion que se debe tener sobre la salida de mercader{ia y el cliente. 
 - En el SRC tenemos un directorio para estos componentes, uno para el context y otro para los servicios, dentro del cual solo tenemos Firebase (firebaseConfig).

## Librerias

Se utilizan las dadas a lo largo de la cursada y por una cuestión de estilo se agregan react-tostify y sweetalert2, ambas como elemento estético y se les da un uso muy genérico. También se utiliza bootstrap con elementos en css.

## Notas


 - El carrito esta accesible en todo momento ya que esta en el Navbar y se puede clickear y acceder al mismo en cualquier momento. Desde alli mismo se puede ir a la opción de compra cuando el carrito está vacío, vaciar el carrito en su totalidad o por elemento (con un botón con una cruz color verde generado para el caso). Los items comprados NO se pueden repetir, es decir se debe sacar el mismo y realizar una compra por la cantidad solicitada (se da un aviso de tostify), hallé prudente hacerlo de dicha manera para que el usuario/cliente no comuta error al realizar la compra. 
 - También desde el carrito se hace el CheckOut lo que implica dos cosas: Que se genere el elemento ORDERS en firebase (si no existía) y se registren todos los datos de la compra. Y que a través de un SweetAlert se haga saber al cliente el numero de Orden de su compra. Luego de ello se vuelve a la pagina de comprar productos nuevamente.
 - Se incluye un archivo .gif mostrando la funcionalidad del proyecto.
 
   Ismael Armando 

    

 
  

```
