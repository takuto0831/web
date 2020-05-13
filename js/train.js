function clickBtn1(){
    // 値を取得
    const ta1 = document.form.textarea.value; 
    document.getElementById("span1").textContent = ta1;
}
function clickBtn2(){
    document.getElementById("span1").textContent = "";
}
function clickBtn3(){
	// 値を設定
	document.form.textarea.value = "Hello World!";
}
function clickBtn4(){
	// 値を設定
	alert(document.form.textarea.value)
}

function getSelectColor(){
	const str = document.getElementById("favoriteColor").value;
	document.getElementById("span2").textContent = str;
}