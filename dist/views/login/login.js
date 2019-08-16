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
    return LoginComponent;
}());
var loginComponent = new LoginComponent();
//# sourceMappingURL=login.js.map