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
            if ((this.inputEmail.value.toString().toLocaleLowerCase() == email.toLocaleLowerCase()) && (this.inputPassword.value.toString().toLocaleLowerCase() == password.toLocaleLowerCase())) {
                alert("User confirm:" + JSON.stringify(users[i]));
                return;
            }
        }
        alert("Error");
    };
    LoginComponent.prototype.validate = function () {
        var x = document.forms['form']['email'].value;
        var y = document.forms['form']['password'].value;
        if (x == null || x == "") {
            {
                alert("Имя обязательно должно быть введено");
                return false;
            }
        }
        if (y == null || y == "") {
            {
                alert("Имя обязательно должно быть введено");
                return false;
            }
        }
        var filter = (/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/);
        if (!filter.test(this.inputPassword.value)) {
            alert('Please provide a valid password');
            this.inputPassword.focus;
            return false;
        }
    };
    return LoginComponent;
}());
var loginComponent = new LoginComponent();
//# sourceMappingURL=login.js.map