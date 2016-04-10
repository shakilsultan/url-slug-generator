var myArray = [];
document.write("<ul style='list-style-type: none'>");
document.write("</ul>");
$("#submit").on('click', function(value) {
	myArray = $('textarea').val().split('\n');
	for( var i = 0; i<myArray.length; i++ ) {
	var newValue = myArray[i].toLowerCase().replace(/ /g, "-");
	$('ul').append("<li>" + newValue + "</li>");

	}

}
);

$("#reset_button").on('click', function(value) {
	$('li').remove();
}
);
