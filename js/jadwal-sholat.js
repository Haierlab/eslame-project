// membuat fungsi jadwal
function jadwal() {
//membuat variabel setting untuk membuat header CORS untuk mendapatkan API jadwal sholat
var settings = {
          'cache': false,
          'dataType': "jsonp", //tipe data kembalian dalam bentuk jsonp
          "async": true,
          "crossDomain": true, 
          "url": "http://muslimsalat.com/yogyakarta.json?key=bd099c5825cbedb9aa934e255a81a5fc",//url API
          "method": "GET", //method GET
          "headers": { //menjalankan header CORS
              "accept": "application/json",
              "Access-Control-Allow-Origin":"*"
          }
      }
      //membuat fungsi ajax untuk melakukan eksekusi data request dan menjalankan variabel setting diatas
      //kemudian jika sukses menjalankan fungsi dengan parameter response
      $.ajax(settings).done(function (response) {
        console.log(response)
     		//membuat variabel jadwal dengan menggunakan  fungsi let dan di inisialisasikan sebagai response 
        //response.items bertujuan untuk mengambil data object pada array sehingga menjadi array of object
     		let jadwal = response.items;
        //melakukan looping pada jquery dengan menjalankan variabel jadwal diatas dan menjalankan fungsi dengan
        //dua parameter i dan tim
     		$.each(jadwal, function(i, time) {
          //menampilkan data api ke dalam bentuk html
     			$('#jadwal').append(`
     				<div class="jumbotron shadow-lg p-3 mb-5 bg-transparent mt-5 jumbotron-fluid">
					  <div class="container">
            <h3 class="text-left" style="font-family: 'Assistant', sans-serif; font-size: 25px;"><i><img src="src/img/clock.png" width="30px" height="30px"></i>&nbsp;
              Jadwal Sholat untuk wilayah<br><span style="margin-left:38px;margin-top:-20px;font-size: 20px" align="left">DI `+ response.state +`<br><span style="margin-left:38px;">`+ time.date_for +`</span></span></h3>
             <div id="myclock" class="mx-auto p-3" style="margin-left: 440px"></div>
             <h5 class="blue mx-auto" style="color:#fff;">Temperatur : `+response.today_weather.temperature+`°C</h5>
            </div>				    
             <hr>
             <h1 class="text-center" style="color: #000; font-size:30px;font-family: 'Assistant', sans-serif; font-weight:600;">`+ time.fajr +`</h1>
					    <h5 class="text-center">Subuh Besok</h5>
              <div class="col-md-6 col-lg-6 col-sm-6">
              <h4 class="text-center countdown"> </h4>
              </div>
					    <div class="text-right">
					    <a href="#" class="card-link target" data-toggle="modal" data-target="#exampleModal">Selengkapnya..</a>
					  </div>
					  </div>
					</div>
     		`);
     		})
      });
}

var clock = 0;
  var interval_msec = 1000;

  $(function() {
    clock = setTimeout("UpdateClock()", interval_msec);
  });

  function UpdateClock(){

    clearTimeout(clock);

    var dt_now = new Date();
    var hh  = dt_now.getHours();
    var mm  = dt_now.getMinutes();
    var ss  = dt_now.getSeconds();

    if(hh < 10){
      hh = "0" + hh;
    }
    if(mm < 10){
      mm = "0" + mm;
    }
    if(ss < 10){
      ss = "0" + ss;
    }
    $("#myclock").html( hh + ":" + mm + ":" + ss);

    clock = setTimeout("UpdateClock()", interval_msec);

  }

//fungsi untuk memanggil modal
 $('#jadwal').on('click', '.target', function() {

 	var settings = {
          'cache': false,
          'dataType': "jsonp",
          "async": true,
          "crossDomain": true,
          "url": "http://muslimsalat.com/yogyakarta.json?key=bd099c5825cbedb9aa934e255a81a5fc",
          "method": "GET",
          "headers": {
              "accept": "application/json",
              "Access-Control-Allow-Origin":"*"
          }
      }

      $.ajax(settings).done(function (data) {
     		let waktu = data.items;

     		$.each(waktu, function(i, times) {
          //fungsi dibawah untuk memanggil class modal-body pada file html dan menampilkannya
     			$('.modal-body').html(`
     				<h5 align="center">&nbsp;Jadwal Sholat DI `+ data.state +`<br>`+ times.date_for +`</h5><hr>
     				 <div class="col-md-7 mr-auto"> 
             <ul class="list-group">
              <li class="list-group-item">Subuh : `+times.fajr+`</li>
              <li class="list-group-item">Terbit  : `+times.shurooq+`</li>
              <li class="list-group-item">Dhuhr   :`+times.dhuhr+`</li>
              <li class="list-group-item">Ashar : `+times.asr+`</li>
              <li class="list-group-item">Maghrib : `+times.maghrib+`</li>
              <li class="list-group-item">Isha : `+times.isha+`</li>
            </ul>
            </div>
              <div class="col-md-5 ml-auto">  
              <p class="text-center">Keterangan</p>
              <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">AM : Jam 12 Malam - 12 Siang</li>
                <li class="list-group-item">PM : Jam 12 Siang - 12 Malam</li>
                <hr>
              </ul>
              </div>
     			`);

     		})
      })	
 });

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

//menjalankan fungsi jadwal dan jam
$(document).ready(function() {
	jadwal();
  UpdateClock();
});

$(document).on('click', '#link-artikel', function(e){ 
        e.preventDefault(); 
        var url = $(this).attr('href'); 
        window.open(url, '_blank');
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

    $(document).ready(function() {
        $(window).scroll(function() {
          if($(this).scrollTop() > 80) { 
              $('#mnavbar').addClass('solid');
          } else {
              $('#mnavbar').removeClass('solid');
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

    $(document).on('click', '#contactus', function(e){ 
        e.preventDefault(); 
        var url = $(this).attr('href'); 
        window.open(url, '_blank');
    });

