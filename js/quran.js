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
						<div class="card mx-auto mb-3 d-inline-block bg-transparent" style="width: 17rem;">
							<div class="card-body">
							<h6 class="card-title">`+ sura.nomor +`. ( `+ sura.nama +` ) `+ sura.asma +`</h6>
							<span><strong>Jumlah Ayat : `+ sura.ayat +`</strong></span>
						    <h6 class="card-title">Murotal</h6>
						    <audio controls style="background-color: black; width: 200px; height = 100px;">
							  <source src="`+ sura.audio +`" type="audio/mpeg">
							</audio>
							<hr>
						    <a href="#" class="card-link keterangan" data-toggle="modal" data-target="#exampleModal" data-id="`+ sura.nomor +`">Keterangan Ayat</a>
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
		keterangan();
	});

  function keterangan () {
	$('#surah').on('click', '.keterangan', function(){
		var url = "https://al-quran-8d642.firebaseio.com/data.json?print=pretty";
		var data = $(this).data('id');

		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',

			success: function(response){
				let ke = response;
				  $.each(ke, function(x, ket) {
				  	if(ket.nomor == data) {
					$('.modal-body').html(`
						<div class="container-fluid">
							<div class="row">
				            <div class="col-md-12">
				              <h4 class="text-center">`+ ket.nama +` (`+ket.asma+`)<h4>
				              <h5 class="text-center">Diturunkan di Kota `+ ket.type +`<h5>
				              <h6 class="text-center">Jumlah Ayat : `+ ket.ayat +`<h6>
				              <hr>
				            </div>
				            <div class="col-md-12">
				              <p class="text-justify">`+ket.keterangan+`</p>
				              <hr>
				              <h6 class="text-center">Surah nomor ke `+ ket.nomor +` dalam Al-Qur'an<h6>
				              <h6 class="text-center">Surah ini memiliki arti "`+ ket.arti +`"<h6>
				            </div>
				          </div>
						</div>
					`);
				}
				  })
			   }
		});
	});
}

    $(document).ready(function() {
        $(window).scroll(function() {
          if($(this).scrollTop() > 80) { 
              $('#mnavbar').addClass('solid');
          } else {
              $('#mnavbar').removeClass('solid');
          }
        });
  });
    $(document).ready(function() {
        $(window).scroll(function() {
          if($(this).scrollTop() > 80) { 
              $('#pry').addClass('deaktif');
          } else {
              $('#pry').removeClass('deaktif');
          }
        });
		});

    $(document).on('click', '#sholat', function(e){ 
        e.preventDefault(); 
        var url = $(this).attr('href'); 
        window.open(url, 'http://bit.ly/linkjadwalsholatapi');
    });

    $(document).on('click', '#quran', function(e){ 
        e.preventDefault(); 
        var url = $(this).attr('href'); 
        window.open(url, 'http://bit.ly/linkquranapi');
    });

    $(document).on('click', '#support', function(e){ 
		    e.preventDefault(); 
		    var url = $(this).attr('href'); 
		    window.open(url, '_blank');
		});

    $(document).on('click', '#link-artikel', function(e){ 
		    e.preventDefault(); 
		    var url = $(this).attr('href'); 
		    window.open(url, '_blank');
	});
	$(document).on('click', '#support', function(e){ 
		    e.preventDefault(); 
		    var url = $(this).attr('href'); 
		    window.open(url, '_blank');
		});
	$(document).on('click', '#link-artikel', function(e){ 
        e.preventDefault(); 
        var url = $(this).attr('href'); 
        window.open(url, '_blank');
    });
    $(document).on('click', '#fb', function(e){ 
        e.preventDefault(); 
        var url = $(this).attr('href'); 
        window.open(url, '_blank');
    });
    $(document).on('click', '#twit', function(e){ 
        e.preventDefault(); 
        var url = $(this).attr('href'); 
        window.open(url, '_blank');
    });
    $(document).on('click', '#ig', function(e){ 
        e.preventDefault(); 
        var url = $(this).attr('href'); 
        window.open(url, '_blank');
    });

$('div.btn-group').hover(function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
		}, function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
		});
