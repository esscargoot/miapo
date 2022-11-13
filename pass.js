$(document).ready(function() {$("#p1","#p2").keyup(validate);});
function validate() {
  var pass1 = $("p1").val();
  var pass2 = $("p2").val();
  if (pass1==pass2) {$("#valid").text("Пароли совпадают");
} else {$("#valid").text("Пароли не совпадают!");
}
