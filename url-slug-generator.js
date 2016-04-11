var myArray = [];

$("#submit").on('click', function() {
	if ( $('#box').val() || $('#box').text() ) {
		myArray = $('#box').val().split('\n');
		$('form').append('<textarea id="output" rows="20" cols="50"></textarea>');
		for( var i = 0; i<myArray.length; i++ ) {
			var newValue = myArray[i].toLowerCase().replace(/ /g, "-");
				if ( i === myArray.length - 1) {
					$('#output').append(newValue);
				} else {
					$('#output').append(newValue + '\n');
				}	
			}
		} else {
 			alert('This is a required field.');
		}
	}
);

$("#reset_button").on('click', function(value) {
	$('#output').remove();
}
);

