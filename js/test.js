function fun(){
	alert("button was pressed");
}

function setSuccessStyle(obj){
	var spanObj = document.getElementById(obj.id+"Span");
	obj.className="success";
	if (spanObj!=null) {
		console.log(obj.value);

		spanObj.innerHtml="<font color='green'>√</font>" ;
		console.log("setSuccessStyle"+obj.id);
	}

}
function setFailureStyle(obj){
	var spanObj = document.getElementById(obj.id+"Span");
	obj.className="failure";
	if (spanObj!=null) {
		console.log(obj.value);

		spanObj.innerHtml="<font color='red'>×</font>" ;//设置元素内部样式
		console.log("setFailureStyle"+obj.id);
	}


}
function validateEmpty(eleId){
	var obj = document.getElementById(eleId);
	if (obj != null) {
		if (obj.value=="") {
			console.log("setFailureStyle");
			return false;

		}
		else{

			return true;
		}
	}
	return false;
}

function validateRepeat(srcId,DstId)
{
	if (validateEmpty(srcId)&&validateEmpty(dstId)) {
		var srcObj=document.getElementById(srcId);
		var dstObj=document.getElementById(dstId);
		if (srcObj.value==dstObj.value) {
			return true;
		}
		else{
			return false;
		}
	}
}
function validateRegex(eleId,regex){
	if (validateEmpty(eleId)) {
		var obj =document.getElementById(eleId);
		var spanObj = document.getElementById(obj.id+"Span");
		if (!regex.test(obj.value)) {
			setFailureStyle(obj);
			return false;
		}
		else{
			setSuccessStyle(obj);
			return true;
		}
	}

}
window.onload = function(){

	var obj = document.getElementById('my_btn');
	if (obj != undefined) {
		obj.addEventListener("click",function()
		{
			fun();
		},false);
	}

	document.getElementById('showBut').addEventListener("click",function(){
		// var sexObj=document.getElementById('sex').value;
		var sexObj=document.all('sex')
		if (sexObj[0].checked) {
			alert('sex is: '+sexObj[0].value);
		}
		else
		{
			alert('sex is: '+sexObj[1].value);
		}

	},false)

	document.getElementById('loginForm').addEventListener("submit",function(e){
		// var sexObj=document.getElementById('sex').value;
		var emailObj=document.getElementById('email');
		if (emailObj.value=="") {
			alert("no input, forbidden login");
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
		else{
			if (/^\w+@\w+\.\w+$/.test(emailObj.value)) {
				this.submit();
			}
			else{
					alert("wrong input, forbidden login");
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
			}


	},false)
	window.onMouseMove
}