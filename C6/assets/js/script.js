var nombre = prompt("Hola, coloque su nombre por favor", "Nombre por defecto");
alert("Hola, nos alegra que estés por aquí " + nombre);

document.write("<h1 id='color_letra'>Estoy aprendiendo JavaScript </h1>");

var dividendo = prompt("Hola, coloque un número dividendo");
var divisor = prompt("Hola, coloque un número divisor");

var color = prompt("Hola, escoja también un color de los colores por nombre de CSS \n Ejemplo: blue, yellow, green, red, etc...");

dividendo = parseInt(dividendo);
divisor = parseInt(divisor);

total_divi = dividendo / divisor;
total_modulo = dividendo % divisor;

document.write("La division entre los dos números es " + total_divi + "y su módulo es " + total_modulo + ".");
document.write("Además escogiste el color " + color + " lo cual cambia de color de letra al contenido de la etiqueta H1");

document.getElementById("color_letra").style.color = color;
