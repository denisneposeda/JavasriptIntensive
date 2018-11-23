function myFirstApp(name,age) {
	alert('Привет, меня зовут ' + name + ' и это моя первая программа!');

	function showSkills() {
		let skills = ['html','css','jquery'],
				skillsStr = "Я владею";
		for (let i = 0; i < skills.length; i++) {
			skillsStr+='<br>'+skills[i]
		}
		document.write(skillsStr);
	}

	showSkills();

	function checkAge() {
		(age > 18) ? alert('Ты взрослый уже!') : alert('Ты еще маленький!')
	}

	checkAge();

	function calcPow(num) {
		alert('Квадрат числа '+ num + ' = '  + Math.pow(num,2));
	}

	calcPow(4)

}

myFirstApp('Denis', 26);