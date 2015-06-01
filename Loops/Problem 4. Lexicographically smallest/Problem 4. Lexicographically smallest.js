function problem4() {
	var smallest = 'mmmm',
		biggest = '',
		result,
		property;

	for(property in document) {
		if(property < smallest) {
			smallest = property;
		}
		if(property > biggest) {
			biggest = property;
		}
	}
		result = 'Document: smallest ' + smallest + ' and biggest ' + biggest;
		smallest = 'mmmm';
		biggest = '';

	for(property in window) {
		if(property < smallest) {
			smallest = property;
		}
		if(property > biggest) {
			biggest = property;
		}
	}	

		result += '<br>Document: smallest ' + smallest + ' and biggest ' + biggest;		
		smallest = 'mmmm';
		biggest = '';

	for(property in navigator) {
		if(property < smallest) {
			smallest = property;
		}
		if(property > biggest) {
			biggest = property;
		}
	}

		result += '<br>Document: smallest ' + smallest + ' and biggest ' + biggest;

		document.getElementById('problemAnswerFour').innerHTML = result;	
}