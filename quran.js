function surah(){

		var urlsurah = "https://al-quran-8d642.firebaseio.com/data.json?print=pretty";

		$.ajax({
			url: urlsurah,
			type: 'GET',
			dataType: 'json',

			success: function (data){
				
				let surah = data;
				$.each (surah, function(i, sura){
					$('#surah').append(`
					 <div class="col-md-3 d-inline-block">
						<div class="card mt-3" style="width: 16rem;">
							<div class="card-body">
							<h6 class="card-title">`+ sura.nomor +`. ( `+ sura.nama +` ) `+ sura.asma +`</h6>
						    <p class="card-subtitle mb-2 text-muted">Jumlah Ayat : `+ sura.ayat +`</p>
						    <h6 class="card-title">Murotal</h6>
						    <audio controls style="width: 200px; height = 100px;">
							  <source src="`+ sura.audio +`" type="audio/mpeg">
							</audio>
						    <a href="#" class="card-link keterangan" data-toggle="modal" data-target="#exampleModal" data-id="`+ sura.nomor +`">Keterangan Ayat</a>
						    <!--<a href="#" class="card-link">Baca Ayat</a>-->
							</div>
						</div>
					 </div>
				   `);
				});
			},
			error: function(err) {
            	console.log(err);
        }
		})
	}

	$(document).ready(function (){	
		surah();
	});

	$('#surah').on('click', '.keterangan', function(){
		console.log($(this).data('id'))

		var url = "https://al-quran-8d642.firebaseio.com/data.json?print=pretty";

		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',
			data: $(this).data('id'),

			success: function(response){
				let ke = response;
				  $.each(ke, function(x, ket) {
					$('.modal-body').append(`
						<div class="container-fluid">
							<h5 class="modal-title" id="exampleModalLabel">`+ket.nama+`</h5>
							<p class="justify">`+ ket.keterangan +`</p>
						</div>
					`);
				  })
			   }
		});
	});