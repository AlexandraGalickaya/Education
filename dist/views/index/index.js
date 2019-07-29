var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.register = function () {
        var inputEmail = document.getElementById('emailInput');
        var inputPassword = document.getElementById('passwordInput');
        var man = document.getElementById('man');
        var women = document.getElementById('women');
        var genderArray = [];
        var genderValue;
        genderArray.push(man, women);
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
        users.push({
            email: inputEmail.value,
            password: inputPassword.value,
            gender: genderValue,
        });
        localStorage.setItem('USERS', JSON.stringify(users));
        document.location.href = '../login/login.html';
    };
    return IndexComponent;
}());
var indexComponent = new IndexComponent;
//# sourceMappingURL=index.js.map