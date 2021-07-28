function thankUser() {
  var a = document.forms["contact"]["firstname"].value;
  var b = document.forms["contact"]["lastname"].value;

  alert ("Thank you "+a+" "+b+" for helping test our form. In this demonstration, no data was actually submitted to a server.");
}