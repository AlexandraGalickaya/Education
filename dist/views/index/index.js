var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
        // private dataService: DataService
        // constructor() {
        //     this.dataService = new DataService;
        // }
        this.inputEmail = document.getElementById('emailInput');
        this.inputPassword = document.getElementById('passwordInput');
    }
    IndexComponent.prototype.onChangeChoteTam = function (vale) {
    };
    IndexComponent.prototype.getValue = function () {
        this.inputEmail = document.getElementById('emailInput');
        this.inputPassword = document.getElementById('passwordInput');
    };
    IndexComponent.prototype.register = function () {
        this.getValue();
        console.log(this.inputEmail.value);
        console.log(this.inputPassword.value);
        var users = JSON.parse(localStorage.getItem('USERS'));
        if (!users) {
            users = [];
            localStorage.setItem('USERS', JSON.stringify(users));
            return false;
        }
        this.validateForm();
        if (this.inputEmail.value !== "" && this.inputPassword.value !== "" && this.validateForm()) {
            users.push({
                email: this.inputEmail.value,
                password: this.inputPassword.value,
            });
            localStorage.setItem('USERS', JSON.stringify(users));
            // document.location.href = '../login/login.html';
            document.location.href = '../datelocal/datelocal.html';
            return false;
        }
    };
    IndexComponent.prototype.checkValidateEmail = function () {
        this.getValue();
        var error = document.getElementById('error');
        if (this.inputEmail.value === "") {
            error.innerHTML = '*все поля должны быть заполнены';
            return false;
        }
        if (this.inputEmail.value !== "") {
            error.innerHTML = "";
            return false;
        }
    };
    IndexComponent.prototype.checkValidatePassword = function () {
        this.getValue();
        var errorBlock = document.getElementById('error-block');
        if (this.inputPassword.value === "") {
            errorBlock.innerHTML = '*все поля должны быть заполнены';
            return false;
        }
        if (this.inputPassword.value !== "") {
            errorBlock.innerHTML = "";
            return false;
        }
    };
    IndexComponent.prototype.validateForm = function () {
        this.getValue();
        var result = document.getElementById('result');
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(this.inputEmail.value)) {
            this.inputEmail.focus;
            result.innerHTML = 'Пожалуйста, введите правильный email.';
            return false;
        }
        var filterpassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if (!filterpassword.test(this.inputPassword.value)) {
            this.inputPassword.focus;
            result.innerHTML = 'Пожалуйста, введите правильный password.';
            return false;
        }
        if (!this.validateEmail()) {
            return false;
        }
        this.validateEmail();
        return true;
    };
    IndexComponent.prototype.validateEmail = function () {
        var users = JSON.parse(localStorage.getItem('USERS'));
        for (var i = 0; i < users.length; i++) {
            debugger;
            console.log(this.inputEmail.value);
            var email = users[i].email;
            if (this.inputEmail.value.toString().toLocaleLowerCase() == email.toLocaleLowerCase()) {
                // localStorage.setItem('USERS', JSON.stringify(users));
                return false;
            }
        }
        return true;
    };
    return IndexComponent;
}());
var indexComponent = new IndexComponent();
//# sourceMappingURL=index.js.map