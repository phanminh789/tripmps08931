// this function checks for input data and create an account for user
function doSignUp() {
	// variables
    var fullName = $("#TenTaiKhoan").val();
    var birthday = $('#sinhnhat').val();
	var career = $("#List").val();
	var id = $("#CMND").val();
	var email = $("#Email").val();
	var password = $("#MatKhau").val();
	
	
	if (fullName == "") {
		alert("Tên không được trống");
		$("#TenTaiKhoan").focus();
		return;
    }
    // var usernamePattern = /.*\\d+.*/;
    // if(usernamePattern.test(fullName) == false) {
    //     alert('Tên không được chứa chữ số nào');
    //     $('#TenTaiKhoan').focus();
    //     return false;
    // }
	
    var genderM = $("#GenderM").is(':checked');
    var genderF = $("#GenderF").is(':checked');
    if(genderM == false && genderF == false ) {
        alert("Bạn phải chọn giới tính");
        return;
    } 
    
    if(birthday == ""){
        alert("Sinh nhật không được trống");
        $('#sinhnhat').focus();
        return;
    }
	
	if (career == "") {
		alert("Nghề nghiệp không được trống");
		$("#List").focus();
        return;
	}
	
	var idPattern = new RegExp("^[0-9]{9,10}$");
	if (idPattern.test(id) == false) {
		alert("Số chứng minh phải là từ 9 tới 10 số");
		$("#CMND").focus();
        return;
    }
    if(email == ""){
        alert('Email không được để trống');
        $('#Email').focus();
        return;
    }
	
	var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (emailPattern.test(String(email).toLowerCase()) == false) {
		alert("Email không hợp lệ");
		$("#Email").focus();
        return;
	}
	
	if (password == "") {
		alert("Mặt khẩu không được trống");
		$("#MatKhau").focus();
		return;
	}
	var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
	if (passwordPattern.test(password) == false) {
		alert("Mặt khẩu phải có ít nhất 8 ký tự, trong đó ít nhất 1 kí tự thường, 1 kí tự hoa, và 1 số");
		$("#MatKhau").focus();
		return;
	}
	
	alert("Đăng ký thành công");
}
// end of doSignUp