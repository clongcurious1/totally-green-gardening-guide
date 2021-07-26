function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
alert("Bravo! Your email address is formatted correctly."); 
return true;
}
else
{
alert("Try again! A valid email address is required to submit this form.");
document.form1.text1.focus();
return false;
}
}

const form = document.getElementById('form');
const thanks = document.getElementById('thanks');

form.onsubmit = submit;

function submit(event) {
  form.setAttribute('hidden', '');
  thanks.removeAttribute('hidden');

  // For this example, don't actually submit the form
  event.preventDefault();
}