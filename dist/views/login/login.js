var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.inputEmail = document.getElementById('emailInput');
    }
    LoginComponent.prototype.validateEmail = function () {
        var error = document.getElementById('error');
        var users = JSON.parse(localStorage.getItem('USERS'));
        for (var i = 0; i < users.length; i++) {
            var email = users[i].email;
            if (this.inputEmail.value.toString().toLocaleLowerCase() == email.toLocaleLowerCase()) {
                error.innerHTML = '*такой Email существует';
                return;
            }
        }
    };
    return LoginComponent;
}());
var loginComponent = new LoginComponent();
//# sourceMappingURL=login.js.map