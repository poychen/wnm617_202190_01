



const checkSigninForm = () =>{
		let user = $("#signin-username").val();
		let pass = $("#signin-password").val();

		console.log(user,pass);

		if(user == 'user' && pass == 'pass') {
			console.log("sucess");
			sessionStorage.userId = 3;
			// numnrt doesnt matter
			$("#signin-form")[0].reset();
		}else{
			console.log("failure");
			sessionStorage.removeItem('userId');			
		}
		checkUserId();
} 


const checkUserId = () => {
	let p = ['#page-signin','page-signup',''];

	if(sessionStorage.userId === undefined) {
		//not log  in
		if(!p.some(o=>window.location.hash===o))
			$.mobile.navigate("#page-signin");
	}else{
		// log in 
		if(p.some(o=>window.location.hash===o))
			$.mobile.navigate("#page-recent");
	}
}