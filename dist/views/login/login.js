var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.login = function () {
        this.inputEmail = document.getElementById('emailInput');
        this.inputPassword = document.getElementById('passwordInput');
        var users = JSON.parse(localStorage.getItem('USERS'));
        for (var i = 0; i < users.length; i++) {
            var email = users[i].email;
            var password = users[i].password;
            if ((this.inputEmail.value.toString().toLocaleLowerCase() == email.toLocaleLowerCase()) && (this.inputPassword.value) == password) {
                alert("User confirm:" + JSON.stringify(users[i]));
                return;
            }
        }
        alert("Error");
    };
    return LoginComponent;
}());
var loginComponent = new LoginComponent();
//# sourceMappingURL=login.js.map