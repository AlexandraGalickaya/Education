var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.login = function () {
        this.inputName = document.getElementById('nameInput');
        this.inputAge = document.getElementById('ageInput');
        var users = JSON.parse(localStorage.getItem('USERS'));
        for (var i = 0; i < users.length; i++) {
            var name_1 = users[i].name;
            var age = users[i].age;
            if ((this.inputName.value.toString().toLocaleLowerCase() == name_1.toLocaleLowerCase()) && (parseFloat(this.inputAge.value) == age)) {
                alert("User confirm:" + JSON.stringify(users[i]));
                return;
            }
        }
        alert("Error");
    };
    LoginComponent.prototype.validate = function () {
        var x = document.forms['form']['name'].value;
        var y = document.forms['form']['age'].value;
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
        if (!filter.test(this.inputAge.value)) {
            alert('Please provide a valid password');
            this.inputAge.focus;
            return false;
        }
    };
    return LoginComponent;
}());
var loginComponent = new LoginComponent();
//# sourceMappingURL=login.js.map