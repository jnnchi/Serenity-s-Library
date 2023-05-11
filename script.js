document.getElementById("password-form").style.display = "block"; 
document.getElementById("website").style.display = "none";

function checkPassword() {
			var password = document.getElementById("password").value;

	if (password !=""){
      document.getElementById("password-form").style.display = "none";
  document.getElementById("website").style.display = "block"; }
		}
