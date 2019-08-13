var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
        this.dataService = new DataService;
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
        var users = this.dataService.getFromLocalStorage('USER');
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
        // let persons = [15, 27, 6, 1, 0];
        var persons = [{ name: "Ivan", age: 17 }, { name: "Mariya", age: 35 }, { name: "Oleksei", age: 73 }, { name: "Dima", age: 12 }];
        for (var j = 0; j < persons.length; j++) {
            for (var i = 0; i < persons.length; i++) {
                if (persons[i] > persons[i + 1]) {
                    var temp = persons[i];
                    persons[i] = persons[i + 1];
                    persons[i + 1] = temp;
                }
            }
            console.log(persons);
        }
    };
    return IndexComponent;
}());
var indexComponent = new IndexComponent();
//# sourceMappingURL=index.js.map