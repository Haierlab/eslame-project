$(document).ready(function () {
  var url = "json/landing.json";
  
  $.getJSON(url, function (e) {
    $.each(e, function (x, y) {
      $('#konten').append(`
        <div class="card mx-auto mb-3 d-inline-flex" style="width: 20rem;">
          <img src="`+y.image+`" alt="icon" class="mx-auto mt-3" style="width:120px; height:120px;">
            <div class="card-body">
              <h6 class="card-title">`+ y.title +`</h6>
                <hr>
                <span>`+y.caption+`</span>
                <hr>
                <a href="`+y.link+`" class="btn btn-primary" target="_blank">Selengkapnya..</a>
              </div>
          </div>
        `);
    })
  });   
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

     $(document).on('click', '#igmedia', function(e){ 
        e.preventDefault(); 
        var url = $(this).attr('href'); 
        window.open(url, '_blank');
    });
     
		$('div.btn-group').hover(function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
		}, function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
		});