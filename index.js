
  //forget password
  
  
  function forget(){
	  
	  var forget_email = document.getElementById("email_field").value;
		
		firebase.auth().sendPasswordResetEmail(forget_email)
		
		
		   // window.alert("We are successfully sended password reset link to your registered email")
		   
		  
		  // window.alert("We are sended a password link to your registered email")
		  
		  
		.catch(function(error) {
		   
		   
			var errorCode = error.code;
			var errorMessage = error.message;
		   
		   window.alert("Error : " + errorMessage);
		   window.alert("Error : Please enter only email field");
	  });
		   
  }
  
  
  
  
  //Register Account
  
  
  
  function signup(){
		var email = document.getElementById("email_field").value;
		var userpassword = document.getElementById("password_field").value;
		
		var ref = new Firebase('https://logindatabase-8156f.firebaseio.com/');
		

		

		var usersRef = ref.child("Users");
		usersRef.push ({
		   eMail:email,
		   paswd:userpassword
		});
		
		
		firebase.auth().createUserWithEmailAndPassword(email, userpassword).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
		   window.alert("Error : " + errorMessage);		   
		});  
  }
  
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

	document.body.style.backgroundImage = "url('img/bg5.jpg')";
    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome to our website <br> " + email_id;
		
	document.body.style.backgroundImage = "url('img/bg5.jpg')";
    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut()
	
   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')  
   });
}




var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
   firebase.auth()
   
   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token)
      console.log(user)
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      console.log(error.message)
   });
}