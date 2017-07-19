//var bu = document.getElementById("button").value;

//var buton = document.getElementById("button"); 

function mostrar(){
	var ema = document.getElementById("ema");
	var email = document.getElementById("inputEmail").value;
	var password = document.getElementById("inputPassword").value;
	var str =  "";
	ema.innerHTML;
	ema.innerHTML =  "<div>" + "<h3>" + "Datos del Formulario"  + "</h3>"+  "El correo electronico ingresado es: " +  "<br>"  + email + "<br>" + "La clave ingresada es: " + "<br>" +password + "</div>" ;
	 //ema.innerHTML = "";
	 //ema.innerHTML = html;
	//html += document.getElementById("email").value;
	//	html += "sdfgdfg";

}
//	document.write("sdgs");
//return "sdfnsi";
 //return ema.innerHTML;

function translate() {
var title = document.getElementById("form-signin-heading");
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var remenber = document.getElementsByTagName("span")[0];
var button = document.getElementsByClassName("btn")[0];


title.innerHTML = "Por favor incia sesion";
email.placeholder = "Correo electronico";
password.placeholder = "Contraseña";
button.innerHTML = "Inicia Sesion";
remenber.innerHTML = "Recuerdame";
ema.innerHTML;
} 
translate();