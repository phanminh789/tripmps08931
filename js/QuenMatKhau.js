function doForgot(){
        var id = $('#TenTaiKhoan').val();
        var Username = $('#MatKhau').val();

    if(id == ""){
        alert('Id không được để trống');
        $('#TenTaiKhoan').focus();
        return;
    }
    if(Username == ""){
        alert('Username không được để trống');
        $('#MatKhau').focus();
        return;
    }
    alert('Hệ thống đã nhận, Vui lòng chờ trong giây lát');
    
}