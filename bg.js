$(document).ready(function() {




$("#execute").click(function(){

       alert($("#restaurant").val());

        $.ajax({url: "https://api.yelp.com/v3/businesses/gary-danko-san-francisco", 
	beforeSend: function(xhr){
	xhr.setRequestHeader("ACCESS_TOKEN", "DB0PU5ruppLWh3EYNI-gzvGAZY3y6mSEr7muVcQg40Z8VkAuhP…CpPOGcKukY-N_64nJnPk3Ioomki1NYZ3Vf1I6N5AqGBFEWXYx")
	},
	success: function(e){
            $("#result").val(e.rating + e.review_count );
        },
	failure: function(e){
            $("#result").val(e);
        },
	error:  function(e){
            $("#result").val(e);
        }
});
	});
});