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
						    <audio controls style="background-color: transparent; width: 200px;">
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

//request instagram Endpoints
var settings = {
          'cache': false,
          'dataType': "jsonp",
          "async": true,
          "crossDomain": true,
          "url": "https://api.instagram.com/v1/users/self/?access_token=15005923577.3bc7ce5.5bbc8170f44f42c883d32bd3b2274ae8",
          "method": "GET",
          "headers": {
              "accept": "application/json",
              "Access-Control-Allow-Origin":"*"
          }
      }

      $.ajax(settings).done(function (data) {
        let ig = data.data;
        console.log(ig);

        $.each(ig, function(x, y) {
          $('#insta').html(`
            <p class="text-white badge badge-danger">Instagram</p>
            <div class="row justify-content-center">
              <div class="badge badge-dark shadow-sm rounded">
              <img class="rounded-circle" src="`+ig.profile_picture+`" alt="profile" style="width:100px; margin-top:-60px">
              <p class="text-white mt-3 badge" style="font-size:14px;">&nbsp;<span class="ml-3">name : `+ig.full_name+`</span><br><br><span style="margin-left:40px">username : @`+ig.username+`</span><br><br><span class="ml-4">Bio : `+ig.bio+`</span></p>
            </div>
            </div>
            <p class="text-white mt-3 ml-3 badge badge-primary" style="font-size:14px;">Followers : `+ig.counts.followed_by+` | Media: `+ig.counts.media+`</p>
          `);

        })
      });

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
