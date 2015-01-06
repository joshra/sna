$(document).ready(function(){
	var addfriend = function(){
		$('#add_friend_btn').on("click",function(){
			var friendid = $(this).parent('data-roleid').text();
			var friendname = $(this).parent().children('.content').children('.header').text();
			console.log(friendid);
			console.log(friendname);
			var r = confirm("Do you want to add " + friendname + " as a friend?");
			if (r==true){
				var currentuserfriends = Parse.User.current().get('friends');
				currentuserfriends.push(friendid);
				currentuserfriends.save();
			}
			else{
				alert("Please consider before you press the button!");
			}
		})
	}
})

$(document).on("click", "#add_friend_btn", addfriend);