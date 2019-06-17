var CORRECT_USER = "tri";
var CORRECT_PASS = "123";

var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');

var FormDangNhap = document.getElementById("FormDangNhap");

if(FormDangNhap.attachEvent){
    FormDangNhap.attachEvent('submit',onFormSubmit);
} else {
    FormDangNhap.attachEventListener('submit', onFormSubmit);
}

function onFormSubmit(e){
    var username = inputUsername.value;
    var password = inputPassword.value;

    if(username == CORRECT_USER && password == CORRECT_PASS){
        alert('Dang nhap that bai!');
    } else{
        alert('That bai trong qua trinh dang nhap');
    }
}

