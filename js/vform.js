window.onload = function(){
//验证一般发生在失去焦点ob
	document.getElementById('uid').addEventListener("blur",function(e){
		validateUid();
	},false)
	document.getElementById('password').addEventListener("blur",function(e){
		validatePassword();
	},false)

	document.getElementById('login_form').addEventListener("submit",function(e){
		if (validateUid()&&validatePassword()) {
			this.submit();
		}
		else{
			alert("login_form wrong, forbidden login_form");
					if (e&&e.preventDefault) {
						e.preventDefault();
						// w3c standard
					}
					else
					{
						window.event.returnValue=false;
						//for ie browser

					}
		}
	},false)
}
function validateUid(){
	return validateRegex("uid",/^\w+@\w+\.\w+$/);

}
function validatePassword(){
	return validateEmpty("password");
}
