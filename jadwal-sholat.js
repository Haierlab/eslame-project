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
        //dua parameter i dan time
     		$.each(jadwal, function(i, time) {
          //menampilkan data api ke dalam bentuk html
     			$('#jadwal').append(`
     				<div class="jumbotron shadow-sm p-3 mb-5 bg-white mt-5 jumbotron-fluid">
					  <div class="container">
					    <h3 class="text-center">Jadwal Sholat untuk tanggal `+ time.date_for +` di `+ response.state +`</h3>
					    <h1 class="text-center">`+ time.fajr +`</h1>
					    <h4 class="text-center lead">Subuh</h4>
					    <div class="text-right">
					    <a href="#" class="card-link target" data-toggle="modal" data-target="#exampleModal">Selengkapnya..</a>
					  </div>
					  </div>
					</div>
     		`);

     		})
      });
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
     				<h5 align="center">&nbsp;Jadwal Sholat untuk tanggal `+ times.date_for +` di `+ data.state +`</h5><hr>
     				<h5>Subuh	: `+ times.fajr +`</h5>
     				<h5>Terbit	: `+ times.shurooq +`</h5>
     				<h5>Dhuhur	: `+ times.dhuhr +`</h5>
     				<h5>Ashar	: `+ times.asr +`</h5>
     				<h5>Maghrib	: `+ times.maghrib +`</h5>
     				<h5>Isha	: `+ times.isha +`</h5>
     			`);

     		})
      })	
 });

//menjalankan fungsi jadwal
$(document).ready(function() {
	jadwal();
});