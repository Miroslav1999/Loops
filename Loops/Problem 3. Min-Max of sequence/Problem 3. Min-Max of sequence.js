function problemthree() {
	var input = document.getElementById('problemthree').value,
		value = input.split(' '),
		minValue = Number.MIN_VALUE,
		maxValue = Number.MAX_VALUE;

		for (var i = 0; i < value.length; i++) {
			var num = value[i];
			if(num < minValue)
				minValue = num;
			else(num > maxValue)
				maxValue = num;
		}
		document.getElementById('problemAnswerThree').innerHTML =
		"Min value is " + minValue + " and max value is " + maxValue;	
}