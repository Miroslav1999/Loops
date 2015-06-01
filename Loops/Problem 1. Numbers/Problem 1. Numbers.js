function problemone() {
	var number = document.getElementById('problemone').value,
		result;

	for (var i = 1; i <= number; i++) {
		document.getElementById('problemAnswerOne').innerHTML =
			i;
	}
}	