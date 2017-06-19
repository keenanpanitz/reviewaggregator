$(document).ready(function() {

$("#execute").click(function(){

       $.ajax({
         type: "POST",
         dataType: "json",
         url: "https://api.yelp.com/oauth2/token",
         data: {"grant_type": "client_credentials",
       "client_id": "F082j4auMp9t9WqXSQGIkg",
       "client_secret": "OK4NENiaXJDrvTTCg7BbGRzXUkx3gbE6oQu4ytR5qVBwrhL3u48gLRATcxwVfopA"},
         success: function(a){

           $.ajax({url: "https://api.yelp.com/v3/businesses/" + $("#restaurant").val(),
           dataType: "json",
           timeout: 10000,
           async: false,
           type: "GET",
               headers: {'Authorization': 'Bearer ' + a.access_token},
   	           success: function(e){
               $("#rating").html(e.rating);
               $("#reviewcount").html(e.review_count );
           }
   });

       }
       });
	});

$("#googletest").click(function(){

  $.ajax({
    type: "POST",
    dataType: "json",
    url: "https://www.googleapis.com/oauth2/v4/token",
    data: {"client_id": "904353858288-jes2um6k7nc5to0l9fj6tvk841l33jdd.apps.googleusercontent.com",
//"project_id":"review-aggregator-171018",
//"auth_uri":"https://accounts.google.com/o/oauth2/auth",
//"token_uri":"https://accounts.google.com/o/oauth2/token",
//"auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
  //  "code":"4%2FlZk8VnEntdwoAH-vOJlF9zb7E79z-qmBqazHE9PgsME",
    "grant_type" : "refresh_token",
  "scope": "https://www.googleapis.com/auth/plus.business.manage"},
    success: function(a){
      alert(a);
    }
  });





  $.ajax({url: "https://mybusiness.googleapis.com/v3/accounts/liyu+cafe/locations/reviews",
  dataType: "json",
  timeout: 10000,
  async: false,
  type: "GET",
      //headers: {'Authorization': 'Bearer ' + a.access_token},
      success: function(e){
        alert(e);
      //$("#rating").html(e.rating);
    //  $("#reviewcount").html(e.review_count );
  }
  });


});


});
