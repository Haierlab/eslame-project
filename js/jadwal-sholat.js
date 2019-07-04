//fungsi jadwal
function jadwal() {
  //menjalankan jquery pada saat kita klik id pilih dan pada kelas pilih
  $('#pilih').on('click','.pilih', function () {
    //var a sebagai variabel baru untuk menampung semua data pada kondisi diatas
    var a = $(this).val();
    //kemudian var url1 bertujuan untuk link 1 
    var url1 = "https://muslimsalat.com/";
    //dan var url2 bertujuan untuk link tambahan 
    var url2 = ".json?key=bd099c5825cbedb9aa934e255a81a5fc&jsoncallback=?";
    //melakukan request api
  jQuery(function($) {
    /*
     kita lihat diatas dimana terdapat 3 variabel baru yang mana url1 merupakan url awal kemudian 
     kita tambahkan variabel a yang mana variabel tersebut menampung data berupa variabel dari html
     contoh: pada element select(option) terdapat misal yogyakarta,bandung dll. nah variabel ini 
     berfungsi untuk menampung data tersebut sehingga kita tambahkan url2 untuk melengkapi link 
     request api dimana link tersebut akan berubah sewaktu kita merubah lokasi kota pada menu select
     di html.
    */
   $.getJSON(url1+a+url2, function (x) {
    //dibawah kita menambahkan tampilan di html
    $('#jadwal').html(`
            <div class="shadow-lg p-3 mb-5 bg-transparent mt-3">
            <div class="container" id="logo-jam">
            <h3 class="text-left" style="font-family: 'Assistant', sans-serif; font-size: 25px;"><i><img src="src/img/clock.png" width="30px" height="30px"></i>&nbsp;
              Jadwal Sholat untuk wilayah<br><span style="margin-left:38px;margin-top:-20px;font-size: 22px" align="left">`+ x.query +` dan sekitarnya.<br><span style="margin-left:38px;">`+ x.items[0].date_for +`</span></span></h3>
             <div class="mx-auto bg-transparent text-center">
                <ul class="mb-3">
                    <li id="hours"></li>
                    <li id="point">:</li>
                    <li id="min"></li>
                    <li id="point">:</li>
                    <li id="sec"></li>
                    <li id="Date"></li>
                </ul>
                <hr>
          </div>           
            </div>            
             <h1 class="text-center" style="color: #000; font-size:30px;font-family: 'Assistant', sans-serif; font-weight:600;">`+ x.items[0].fajr +`</h1>
              <h5 class="text-center">Subuh Besok</h5>
              <div class="col-md-6 col-lg-6 col-sm-6">
              <h4 class="text-center countdown"> </h4>
              </div>
              <div class="text-right">
              <a href="#" class="card-link target"data-toggle="modal" data-target="#exampleModal" data-id="`+a+`">Selengkapnya..</a>
            </div>
          </div>
        </div>
      `); 
   });
 });
});
}
/*
  catatan untuk x.items[0] itu maksudnya kita menjalankan parameter x kemudian kita masuk ke json 
  dengan menambah .items[0] artinya kita masuk ke array of object untuk mengambil ataupun menampilkan
  data ke html.
  pada <a href="#" class="card-link target"data-toggle="modal" data-target="#exampleModal" 
  data-id="`+a+`">Selengkapnya..</a>

  itu terdapat data-id="`+a+`", maksudnya kita menambah variabel a yang mana variabel tersebut terdapat
  value dari element select pada html. 
*/

//fungsu detail
function detail() {
  /*
    dibawah sama seperti diatas
  */
  $('#jadwal').on('click', '.target','.pilih', function() {
    console.log($(this).data('id'))
    /*
      var a berbeda dengan var a diatas karena kita sudah memasukkan atau menampung data-id="`+a+`"
      kedalam var a dengan penulisan $(this).data('id') maksudnya jika kita mengklik link a
      maka kita juga mengambil value nya, nah value nya kan sudah diisi dengan var a diatas maka 
      link a sudah memliki value yang sesuai dengan element select pada html
    */
    var a = $(this).data('id');
    jQuery(function($) {
    var url1 = "https://muslimsalat.com/";
    var url2 = ".json?key=bd099c5825cbedb9aa934e255a81a5fc&jsoncallback=?";
   $.getJSON(url1+a+url2, function (y) {
    console.log(y)
    $('.modal-body').html(`
            <h5 align="center">&nbsp;Jadwal Sholat DI `+y.query+`<br>`+ y.items[0].date_for +`</h5><hr>
             <div class="col-md-7 mr-auto"> 
              <div class="list-group tx">
                <p type="text" class="list-group-item list-group-item-action">Subuh : `+y.items[0].fajr+`</p>
                <p type="text" class="list-group-item list-group-item-action">Terbit  : `+y.items[0].shurooq+`</p>
                <p type="text" class="list-group-item list-group-item-action">Dhuhr   :`+y.items[0].dhuhr+`</p>
                <p type="text" class="list-group-item list-group-item-action">Ashar : `+y.items[0].asr+`</p>
                <p type="text" class="list-group-item list-group-item-action">Maghrib : `+y.items[0].maghrib+`</p>
                <p type="text" class="list-group-item list-group-item-action">Isha : `+y.items[0].isha+`</p>
              </div>
             </div>
              <div class="col-md-5 ml-auto">  
              <p class="text-center">Keterangan</p>
              <div class="list-group text-center">
                <p type="text" class="list-group-item list-group-item-action">AM : Jam 12 Malam - 12 Siang</p>
                <p type="text" class="list-group-item list-group-item-action">PM : Jam 12 Siang - 12 Malam</p>
                <hr>
              </div>
              
          `);
        })
      });
    });
}

//Digital Clock Plugin with jQuery CSS3 "http://www.alessioatzeni.com/blog/css3-digital-clock-with-jquery/"
function time() {
$(document).ready(function() {
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var newDate = new Date();
newDate.setDate(newDate.getDate());
$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

setInterval( function() {
  var seconds = new Date().getSeconds();
  $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
  },1000);

setInterval( function() {
  var minutes = new Date().getMinutes();
  $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);
setInterval( function() {
  var hours = new Date().getHours();
  $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);
});
}

 //request instagram Endpoints
 function ig() {
//request ig api menggunakan header CORS dengan tipe jsonp
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
    }


$(document).ready(function() {
	jadwal();
  detail();
  time();
  ig();
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

     $(document).on('click', '#igmedia', function(e){ 
        e.preventDefault(); 
        var url = $(this).attr('href'); 
        window.open(url, '_blank');
    });
