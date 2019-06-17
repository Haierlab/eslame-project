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
          "headers": { //menjalankan header CROS
              "accept": "application/json",
              "Access-Control-Allow-Origin":"*"
          }
      }
      //membuat fungsi ajax untuk melakukan eksekusi data request dan menjalankan variabel setting diatas
      //kemudian jika sukses menjalankan fungsi dengan parameter response
      $.ajax(settings).done(function (response) {
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
     				 <div id="mod" class="container">
                <ul style="display:inline;">
                  <li class="mb-1">Subuh   <span style="margin-left:31px;">:   `+times.fajr+`</span></li>
                  <li class="mb-1">Terbit  <span style="margin-left:35px;">:   `+times.shurooq+`</span></li>
                  <li class="mb-1">Dhuhur  <span style="margin-left:24px;">:   `+times.dhuhr+`</span></li>
                  <li class="mb-1">Ashar   <span style="margin-left:34px;">:   `+times.asr+`</span></li>
                  <li class="mb-1">Maghrib <span style="margin-left:17px;">:   `+times.maghrib+`</span></li>
                  <li class="mb-1">Isha    <span style="margin-left:45px;">:   `+times.isha+`</span></li>
                <ul>
              </div>
              <div class="col-md-6 ml-auto">  
              <span>Keterangan</span>
              <br>
              <span>am : 12 malam - 12 siang</span><br>
              <span>pm : 12 siang - 12 malam</span>
              </div>
     			`);

     		})
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