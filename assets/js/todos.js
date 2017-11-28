$("ul").on('click', 'li', function(){
	$(this).toggleClass("completed");
});

//click on X to delete Todo
$("ul").on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(){
	if(event.which === 13){
		// grabbing the text from input field
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
});