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
        var man = document.getElementById('man');
        var women = document.getElementById('women');
        var genderArray = [];
        var genderValue;
        genderArray.push(man, women);
        debugger;
        console.log(this.inputEmail.value);
        console.log(genderArray);
        for (var i = 0; i < genderArray.length; i++) {
            if (genderArray[i].checked) {
                genderValue = genderArray[i].id;
            }
        }
        var users = JSON.parse(localStorage.getItem('USERS'));
        if (!users) {
            users = [];
            localStorage.setItem('USERS', JSON.stringify(users));
            return;
        }
        this.validateForm();
        users.push({
            email: this.inputEmail.value,
            password: this.inputPassword.value,
            gender: genderValue,
        });
        console.log();
        localStorage.setItem('USERS', JSON.stringify(users));
        // document.location.href = '../login/login.html';
    };
    IndexComponent.prototype.getCheckedCheckBoxes = function () {
        var checkbox1 = document.getElementById('checkbox1');
        var checkbox2 = document.getElementById('checkbox2');
        var checkbox3 = document.getElementById('checkbox3');
        var checkbox4 = document.getElementById('checkbox4');
        var checkbox5 = document.getElementById('checkbox5');
        var checkboxes = document.getElementsByClassName('box');
        var checkboxesChecked = [];
        var checkboxesValue;
        var count = 0;
        checkboxesChecked.push(checkbox1, checkbox2, checkbox3, checkbox4, checkbox5);
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxesChecked[i].checked) {
                checkboxesValue = checkboxesChecked[i].id;
                count++;
                alert(checkboxesValue);
            }
        }
        alert(count);
    };
    IndexComponent.prototype.bubbleSort = function () {
        var users = JSON.parse(localStorage.getItem('USERS'));
        for (var j = 0; j < users.length; j++) {
            for (var i = 0; i < users.length - j - 1; i++) {
                if (users[i].password > users[i + 1].password) {
                    var temp = users[i];
                    users[i] = users[i + 1];
                    users[i + 1] = temp;
                }
            }
        }
        console.log(users);
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            document.getElementById('result').innerHTML += user.email + " " + user.password + "</br>";
        }
    };
    IndexComponent.prototype.checkValidateEmail = function () {
        this.getValue();
        var error = document.getElementById('error');
        console.log(error);
        console.log(this.inputEmail.value);
        console.log(this.inputPassword.value);
        if (this.inputEmail.value === "") {
            error.innerHTML = '*все поля должны быть заполнены';
            return false;
        }
    };
    IndexComponent.prototype.checkValidatePassword = function () {
        this.getValue();
        var error = document.getElementById('error');
        console.log(error);
        console.log(this.inputEmail.value);
        console.log(this.inputPassword.value);
        if (this.inputPassword.value === "") {
            error.innerHTML = '*все поля должны быть заполнены';
            return false;
        }
    };
    IndexComponent.prototype.validateForm = function () {
        this.getValue();
        var error = document.getElementById('error');
        console.log(error);
        console.log(this.inputEmail.value);
        console.log(this.inputPassword.value);
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(this.inputEmail.value)) {
            this.inputEmail.focus;
            error.innerHTML = 'Пожалуйста, введите правильный email.';
            return false;
        }
        var filterpassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if (!filterpassword.test(this.inputPassword.value)) {
            this.inputPassword.focus;
            error.innerHTML = 'Пожалуйста, введите правильный password.';
            return false;
        }
    };
    IndexComponent.prototype.myFunction = function () {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName('li');
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "block";
            }
            else {
                li[i].style.display = "none";
            }
        }
    };
    return IndexComponent;
}());
var indexComponent = new IndexComponent();
//# sourceMappingURL=index.js.map