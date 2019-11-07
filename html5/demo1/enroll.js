var isClick = false;
var enroll = document.getElementById("enroll");
enroll.onclick = function(e) {
	if (isClick) {
		isClick = false;
		e.preventDefault();
		enroll.innerHTML = "邀您参加";
		enroll.style.background = "transparent";
		enroll.style.borderColor = "#ffffff"
	} else {
		isClick = true;
		e.preventDefault();
		enroll.innerHTML = "报名成功";
		enroll.style.background = "#27cb8b";
		enroll.style.borderColor = "#27cb8b"
	}
}