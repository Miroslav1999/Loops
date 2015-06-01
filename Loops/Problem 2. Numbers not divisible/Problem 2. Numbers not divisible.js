function problemtwo() {
	var number = document.getElementById('problemone').value,
		result;

	for (var i = 1; i <= number; i++) {
		if(i % 7 && i % 3) 
			document.getElementById('problemAnswerTwo').innerHTML =
			result = (i + '');
	}
}