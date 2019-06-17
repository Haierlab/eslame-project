/*menggunakan JQuery dan menggunakan Ajax dalam request data berupa object yang terdapat pada file json*/ 
$(document).ready(function (){
	//membuat variable url yang diarahkan ke folder dan file json
	var url = 'json/artikel.json';
	//memanggil fungsi click
	click();
	//ajax method
	$.ajax({
		//mengambil url dari variable diatas
		url: url,
		//metode yang digunakan disini GET karena kita cuma mau mengambil data yang berada di dalam file json berupa text
		type: 'GET',
		//tipe callback/kembalian data dalam bentuk json supaya memudahkan dalam pengimplementasiannya
		dataType: 'json',

		success: function(data) {
			//melakukan looping pada data kembalian dengan memberi parameter i dan artikel
				$.each(data, function (i, artikel){
					$('#daftar-artikel').append(`
						<div class="card mx-auto mb-3 d-inline-block" style="width: 17rem;">
						  <img src="`+ artikel.gambar +`" class="card-img-top" alt="...">
							<div class="card-body">
								<h5 class="card-title" style="font-family: 'Roboto', sans-serif; font-size:17px; text-align:left;">`+ artikel.nama +`</h5>
								<p style="color:#000; font-family: 'Roboto', sans-serif; font-size:12px; margin-bottom:-10px;">
								<span><i class="fa fa-user" style="font-size:13px;"></i> <a id="author" style="text-decoration: none;" href="`+ artikel.author_link +`"> `+ artikel.penulis +`</a>
								</span><span style="margin-left:10px;"><i class="fa fa-clock-o" style="font-size:13px;"></i> `+ artikel.tanggal +`</p></span><hr>
								<p style="margin-top:-11px; margin-bottom:7px;"><span class="badge badge-primary" style="cursor:default;font-family: 'Roboto', sans-serif; color:#fff; 
								font-size:13px; font-weight:500;">`+ artikel.kategori +`</span></p>
								<p class="card-text" style="color:#000; font-size: 13px; font-family: 'Roboto', sans-serif;">`+ artikel.deskripsi +`</p>
								<a id="sumber" href="`+ artikel.sumber +`" class="btn btn-primary" style="margin-left:33px; margin-top:10px;">Baca Selengkapnya..</a>
							</div>
						</div>
					`);
				});
			}
	});
});

function daftar() {
	//membuat variable url yang diarahkan ke folder dan file json
	var url = 'json/artikel.json';
	//memanggil fungsi click
	click();
	//ajax method
	$.ajax({
		//mengambil url dari variable diatas
		url: url,
		//metode yang digunakan disini GET karena kita cuma mau mengambil data yang berada di dalam file json berupa text
		type: 'GET',
		//tipe callback/kembalian data dalam bentuk json supaya memudahkan dalam pengimplementasiannya
		dataType: 'json',

		success: function(data) {
			//melakukan looping pada data kembalian dengan memberi parameter i dan artikel
				$.each(data, function (i, artikel){
					$('#daftar-artikel').append(`
						<div class="card mx-auto mb-3 d-inline-block" style="width: 17rem;">
						  <img src="`+ artikel.gambar +`" class="card-img-top" alt="...">
							<div class="card-body">
								<h5 class="card-title" style="font-family: 'Roboto', sans-serif; font-size:17px; text-align:left;">`+ artikel.nama +`</h5>
								<p style="color:#000; font-family: 'Roboto', sans-serif; font-size:12px; margin-bottom:-10px;">
								<span><i class="fa fa-user" style="font-size:13px;"></i> <a id="author" style="text-decoration: none;" href="`+ artikel.author_link +`"> `+ artikel.penulis +`</a>
								</span><span style="margin-left:10px;"><i class="fa fa-clock-o" style="font-size:13px;"></i> `+ artikel.tanggal +`</p></span><hr>
								<p style="margin-top:-11px; margin-bottom:7px;"><span class="badge badge-primary" style="cursor:default;font-family: 'Roboto', sans-serif; color:#fff; 
								font-size:13px; font-weight:500;">`+ artikel.kategori +`</span></p>
								<p class="card-text" style="color:#000; font-size: 13px; font-family: 'Roboto', sans-serif;">`+ artikel.deskripsi +`</p>
								<a id="sumber" href="`+ artikel.sumber +`" class="btn btn-primary" style="margin-left:33px; margin-top:10px;">Baca Selengkapnya..</a>
							</div>
						</div>
					`);
				});
			}
	});
}

//pagination 
function prevPage() {
    debugger;
    if (page === 1) {
        page = Math.ceil($('.page-link #daftar-artikel').length/pageSize);
    } else {
        page--;
    }
    console.log(page);
    showPage(page);
}

function nextPage() {
    if (page == Math.ceil($('..page-link #daftar-artikel').length/pageSize)) {
        page = 1;
    } else {
        page++;
    }
    showPage(page);
}

//dibawah ini bertujuan untuk menampilkan new tab baru sesuai sumber link yang tertera pada file JSON 
//yang diintegrasikan melalui fungsi atau perintah GET data pada file JSON diatas
function click() {
$(document).on('click', '#sumber', function(e){
	e.preventDefault();
	var url = $(this).attr('href');
	window.open(url, '_blank');
});

$(document).on('click', '#author', function(e){
	e.preventDefault();
	var url = $(this).attr('href');
	window.open(url, '_blank');
});

$(document).on('click', '#link-artikel', function(e){ 
		    e.preventDefault(); 
		    var url = $(this).attr('href'); 
		    window.open(url, '_blank');
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
}

