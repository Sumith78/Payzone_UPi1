const signinBtn = document.getElementById("signin-btn");
const loginContainer = document.createElement("div");
loginContainer.classList.add("login-container");

signinBtn.addEventListener("click", function() {
    // Create the login form HTML code and append it to the login container
    loginContainer.innerHTML = `
		<h2>Login Form</h2>
		<form>
			<label for="username">Username:</label>
			<input type="text" id="username" name="username"><br><br>
			<label for="password">Password:</label>
			<input type="password" id="password" name="password"><br><br>
			<input type="submit" value="Submit">
		</form>
	`;
    // Append the login container to the body and show it
    document.body.appendChild(loginContainer);
    loginContainer.style.display = "block";
});