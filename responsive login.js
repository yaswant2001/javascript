function validateform(){
var username=document.getElementByid('username').value;
var password=document.getElementByid('password').value;
if(username=="admin" && password=="12345"){
alert("Login sucessful");
return false;
}
else
{
alert("Login failed")
}
}