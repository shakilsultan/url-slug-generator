var myArray = [];
$("#submit").on('click', function() {
	if ( $('#box').val() || $('#box').text() ) {
		myArray = $('#box').val().replace(/\.|,|'/g, '').split('\n');
		if ( $('#output').length === 0) {
			$('form').append('<textarea id="output" rows="20" cols="50"></textarea>');
		}
		for( var i = 0; i<myArray.length; i++ ) {
			var newValue = myArray[i].toLowerCase().replace(/ /g, "-");
				if ( i === myArray.length - 1) {
					$('#output').append(newValue);
					$('#submit').attr('disabled', 'disabled');
					$('#clipboard').removeAttr('disabled');
				} else {
					$('#output').append(newValue + '\n');
				}
			}
		} else {
			alert('This is a required field.');
		}
	}
);

// copy to clipboard code

$('#clipboard').click(function(){
    var output = document.getElementById('output');
    output.focus();
    document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
    output.blur();
});

$("#reset_button").on('click', function(value) {
	$('#submit').removeAttr('disabled');
	$('#output').remove();
	$('#clipboard').attr('disabled', 'disabled');
}
);

