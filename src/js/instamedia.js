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

ig();
media();

function media() {
  var url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=15005923577.3bc7ce5.5bbc8170f44f42c883d32bd3b2274ae8";
  $.ajax({
    url:url,type:'GET',dataType:'json', success:function(x){
      console.log(x)
      let z = x.data;
      $.each(z, function (en, ig) {
        $('#media').append(`<div class="card mx-auto mb-4 d-inline-block" style="width: 19rem;">
        <img src="`+ig.images.low_resolution.url+`" class="card-img-top" alt="image" width = "300px" height="270px">
        <div class="card-body">
          <h6><i class="fa fa-heart"> `+ig.likes.count+` Like</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-comment"> `+ig.comments.count+` Comment</i></h6>
          <hr>
          <h6>Caption:</h6>
          <p class="card-text">`+ig.caption.text+`</p>
        </div>
        <div class="card-footer">
          <a href="`+ig.link+`" class="btn btn-primary" target="_blank">Ke Postingan</a>
        </div>
      </div>`);
      })
    }
  });
}
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
  $(document).ready(function() {
        $(window).scroll(function() {
          if($(this).scrollTop() > 80) { 
              $('#mnavbar').addClass('solid');
          } else {
              $('#mnavbar').removeClass('solid');
          }
        });
    });
