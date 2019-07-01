//use header CORS 
/*var settings = {
          'cache': false,
          'dataType': "jsonp", 
          "async": true,
          "crossDomain": true, 
          "url": "http://muslimsalat.com/yogyakarta.json?key=bd099c5825cbedb9aa934e255a81a5fc",//url API
          "method": "GET", 
          "headers": { 
              "accept": "application/json",
              "Access-Control-Allow-Origin":"*"
          }
      }
      $.ajax(settings).done(function (response) {
        console.log(response)
     		let jadwal = response.items;
     		$.each(jadwal, function(i, time) {
     			$('#jadwal').append(`
     				<div class="jumbotron shadow-lg p-3 mb-5 bg-transparent mt-5 jumbotron-fluid">
					  <div class="container">
            <h3 class="text-left" style="font-family: 'Assistant', sans-serif; font-size: 25px;"><i><img src="src/img/clock.png" width="30px" height="30px"></i>&nbsp;
              Jadwal Sholat untuk wilayah<br><span style="margin-left:38px;margin-top:-20px;font-size: 20px" align="left">DI `+ response.state +`<br><span style="margin-left:38px;">`+ time.date_for +`</span></span></h3>
             <div class="clock">
             <div id="Date" class="text-center"></div>
                <ul>
                    <li id="hours"></li>
                    <li id="point">:</li>
                    <li id="min"></li>
                    <li id="point">:</li>
                   <li id="sec"></li>
                   <li id="Date"></li>
                </ul>
          </div>           
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
*/
function jadwal() {
jQuery(function($) {
   $.getJSON('http://muslimsalat.com/yogyakarta.json?key=bd099c5825cbedb9aa934e255a81a5fc&jsoncallback=?', function (x) {
    $('#jadwal').append(`
            <div class="jumbotron shadow-lg p-3 mb-5 bg-transparent mt-5 jumbotron-fluid">
            <div class="container">
            <h3 class="text-left" style="font-family: 'Assistant', sans-serif; font-size: 25px;"><i><img src="src/img/clock.png" width="30px" height="30px"></i>&nbsp;
              Jadwal Sholat untuk wilayah<br><span style="margin-left:38px;margin-top:-20px;font-size: 20px" align="left">DI `+ x.state +`<br><span style="margin-left:38px;">`+ x.items[0].date_for +`</span></span></h3>
             <div class="clock">
             <div id="Date" class="text-center"></div>
                <ul>
                    <li id="hours"></li>
                    <li id="point">:</li>
                    <li id="min"></li>
                    <li id="point">:</li>
                   <li id="sec"></li>
                   <li id="Date"></li>
                </ul>
          </div>           
            <h5 class="blue mx-auto" style="color:#fff;">Temperatur : `+x.today_weather.temperature+`°C</h5>
            </div>            
             <hr>
             <h1 class="text-center" style="color: #000; font-size:30px;font-family: 'Assistant', sans-serif; font-weight:600;">`+ x.items[0].fajr +`</h1>
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
   });
});
}

function detail() {
jQuery(function($) {
  $('#jadwal').on('click', '.target', function() {
   $.getJSON('http://muslimsalat.com/yogyakarta.json?key=bd099c5825cbedb9aa934e255a81a5fc&jsoncallback=?', function (y) {
    $('.modal-body').html(`
            <h5 align="center">&nbsp;Jadwal Sholat DI `+ y.state +`<br>`+ y.items[0].date_for +`</h5><hr>
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
      })
    })
}

//Digital Clock Plugin with jQuery CSS3
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
