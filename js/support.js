$(document).on('click', '#paypal', function(e){ 
	e.preventDefault(); 
	var url = $(this).attr('href'); 
	window.open(url, '_blank');
});
$(document).on('click', '#patreon', function(e){ 
	e.preventDefault(); 
	var url = $(this).attr('href'); 
	window.open(url, '_blank');
});

$('#send').on('click', function (){
	if('click') {
		$(document).on('click', '#send', function(e){ 
		location.reload();
	});
		if(confirm("apakah sudah selesai? :)")) {
		alert("Terima Kasih atas saran dan masukkannya :)");
	}
	} else {
		false;
	}
});
