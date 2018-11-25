let chooseBtn = document.getElementById('choose'),
		receiveBtn = document.getElementById('receive'),
		heading = document.getElementsByTagName('h2')[0],
		nameInput = document.getElementsByClassName('contactform_name')[0],
		phoneInput = document.getElementsByName('phone')[0],
		mailInput = document.getElementsByName('mail')[0],
		modal = document.querySelector('.modal'),
		close = document.querySelector('.close'),
		text = document.getElementsByName('message')[0];

function hover() {
	heading.textContent = "Дeйствительно все!";
}

function out() {
	heading.textContent = "Все включено!";
}

heading.addEventListener('click',hover);
heading.addEventListener('dblclick',function(){
	heading.textContent = "Все включено!";
});

receiveBtn.addEventListener('click',function(){
	modal.style.display = "block";
});

close.addEventListener('click',function(){
	modal.style.display = "none";
});

nameInput.addEventListener('input',function(){
	addText();
});

phoneInput.addEventListener('input',function(){
	addText();
});

mailInput.addEventListener('input',function(){
	addText();
});

function addText() {
	let name = (nameInput.value != "") ? "Меня зовут: " + nameInput.value + " " : "",
			phone = (phoneInput.value != "") ? "мой телефон: " + phoneInput.value + " " : "",
			mail = (mailInput.value != "") ? "моя почта: " + mailInput.value : "";
	text.value =  name + phone + mail;
}