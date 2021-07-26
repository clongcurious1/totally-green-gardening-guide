function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
alert("Bravo! Your email address is valid!");
document.form1.text1.focus();
return true;
}
else
{
alert("Try again! You entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}

