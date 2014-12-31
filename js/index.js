jQuery(document).ready(function($){
	Parse.initialize("i3YYpkGy0zHRuBevYamiXHNZIGQO8Mmj7IjUxGXE", "sHviJS2dqoTQWIPM3Fx3Si2zv01YQ9KgMIQXMun5");

	//fblogin button
	$("#my-login-button").click(function(){
	    Parse.FacebookUtils.logIn("user_friends", {
	        success: function(user) {
	            if (!user.existed()){
	                alert("User signed up and logged in through Facebook!");
	                var fbid = user.get('authData')['facebook'].id;
	                user.set('facebookid', fbid);
	                user.save();
	            } 
	            else{
	                alert("User logged in through Facebook!");
	            }
	        },
	        error: function(user, error) {
	            alert("User cancelled the Facebook login or did not fully authorize.");
	        }
	    });
	});
	
});