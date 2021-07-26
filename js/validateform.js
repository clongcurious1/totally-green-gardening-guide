function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
alert("Bravo! Your email address is formatted correctly. As this is only a demo site, none of your form data will be submitted to a server.");
document.form1.text1.focus();
return true;
}
else
{
alert("Try again! A valid email address is required to submit this form.");
document.form1.text1.focus();
return false;
}
}

