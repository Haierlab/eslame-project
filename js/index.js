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

		$('div.btn-group').hover(function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
		}, function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
		});