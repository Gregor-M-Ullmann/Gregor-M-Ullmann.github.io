$(function(){

	var username = localStorage.getItem("username");
	var password = localStorage.getItem("password");

	var $username = $('#username');
	var $password = $('#password');
	var $bottles = $('#bottles');
	var $submit = $('#submit');
	var $logout = $('#logout');

	var activeProfile;

	$username.val(username);
	$password.val(password);

	logIn();



	$submit.on('click',function(){
		logIn();
	})

	$logout.on('click',function(){
		$('#loginPage').fadeIn();
		localStorage.setItem("username", '');
		localStorage.setItem("password", '');
	})



	function logIn(){
		try{
			for(var i=0; i<=profiles.length; i++){
				if($username.val()===''||$password.val()===''){
					break;
				}
				if($username.val()===profiles[i].name&&$password.val()===profiles[i].password){
					localStorage.setItem("username", $username.val());
		        	localStorage.setItem("password", $password.val());
		           	activeProfile=profiles[i];
		        	$('#loginPage').fadeOut();
					$username.val('');
					$password.val('');
					break;
				}
			}
		}
		catch(err){
			$username.val('');
			$password.val('');
			alert("Falscher Name oder Passwort");
		}	
	}
});