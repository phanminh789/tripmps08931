// this function checks the valiable account and responses arrcording to kind of account
function doSignIn() {
	// variables
    var kindOfAccount = "";
    var username = $('#taikhoan').val();
    var password = $('#matkhau').val();
	
	// program
    // check if teacher logins
    if(username == ""){
        alert('Username không được để trống');
        $('#taikhoan').focus();
        return;
    }
    if(password == ""){
        alert('Password không được để trống');
        $('#matkhau').focus();
        return;
    }

	if ($("#taikhoan").val() == "tri" && $("#matkhau").val() == "123") {
		// actionLogin("Giáo viên", afterLoginTeacher);
		// // we need to transfer to main page
        // $("#CaNhanChu").click();
        alert('Đăng nhập thành công')
		return;
	}
	
	// check if student logins
	// if ($("#TenTaiKhoan").val() == "hs" && $("#MatKhau").val() == "123") {
	// 	actionLogin("Học sinh", afterLoginStudent);
	// 	// we need to transfer to main page
	// 	$("#CaNhanKhachHang").click();
	// 	return;
	// }
	
	alert("Đăng nhập thất bại, hãy kiểm tra lại username và password");
	return;
};
// end of doSignIn

// this function responses based on the kind of account
function actionLogin(kindOfAccount, afterLoginItems) {
	alert(kindOfAccount + " đăng nhập thành công");
	$("#DangNhap, #DangKy").hide();
	$(afterLoginItems + ", #DangXuat").show();
}