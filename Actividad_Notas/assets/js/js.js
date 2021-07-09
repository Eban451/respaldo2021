var nombre = prompt("Ingrese su nombre")
var carrera = prompt("Ingresa Carrera")

var nota1 = prompt("Nota HTML 1");
var nota2 = prompt("Nota HTML 2");
var nota3 = prompt("Nota HTML 3");

var nota4 = prompt("Nota CSS 1");
var nota5 = prompt("Nota CSS 2");
var nota6 = prompt("Nota CSS 3");

var nota7 = prompt("Nota JavaScript 1");
var nota8 = prompt("Nota JavaScript 2");

nota1 = parseInt(nota1);
nota2 = parseInt(nota2);
nota3 = parseInt(nota3);

nota4 = parseInt(nota4);
nota5 = parseInt(nota5);
nota6 = parseInt(nota6);

nota7 = parseInt(nota7);
nota8 = parseInt(nota8);

var TS1 = ((nota1 + nota2 + nota3)/3)
var TS2 = ((nota4 + nota5 + nota6)/3)
var TS3 = (12-(nota7 + nota8))

document.write("<h1> Notas Finales</h1>");

document.write("Nombre: " + nombre + "<br>" + " Carrera: " + carrera)

document.write("<div class='container'>");
document.write("<h1></h1>")
document.write("<table class='table'>");
document.write("<thead class='thead bg-dark text-white'>");
document.write("<tr>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Nota 4</th>");
document.write("</tr");
document.write("</thead>");
document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>HTML</th>");
document.write("<td>" + nota1 + "</td>");
document.write("<td> " + nota2 + "</td>");
document.write("<td> " + nota3 + "</td>");
document.write("<td>"+ TS1 +"</td>");
document.write("<tr>");
document.write("</tbody>");
document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>CSS</th>");
document.write("<td>" + nota4 + "</td>");
document.write("<td> " + nota5 + "</td>");
document.write("<td> " + nota6 + "</td>");
document.write("<td>"+ TS2 +"</td>");
document.write("<tr>");
document.write("</tbody>");
document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>HTML</th>");
document.write("<td>" + nota7 + "</td>");
document.write("<td> " + nota8 + "</td>");
document.write("<td> - </td>");
document.write("<td> - </td>");
document.write("<tr>");
document.write("</tbody>");
document.write("</table");

document.write("</div>");

document.write("Para aprobar el ramo Javascript con nota 4, necesitas obtener " + TS3 + " en la nota 3")






