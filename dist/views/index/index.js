var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
        // private dataService: DataService
        // constructor() {
        //     this.dataService = new DataService;
        // }
        this.inputName = document.getElementById('nameInput');
        this.inputAge = document.getElementById('ageInput');
    }
    IndexComponent.prototype.onChangeChoteTam = function (vale) {
    };
    IndexComponent.prototype.getValue = function () {
        this.inputName = document.getElementById('nameInput');
        this.inputAge = document.getElementById('ageInput');
    };
    IndexComponent.prototype.register = function () {
        this.getValue();
        var man = document.getElementById('man');
        var women = document.getElementById('women');
        var genderArray = [];
        var genderValue;
        genderArray.push(man, women);
        console.log(this.inputName.value);
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
            name: this.inputName.value,
            age: parseFloat(this.inputAge.value),
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
                if (users[i].age > users[i + 1].age) {
                    var temp = users[i];
                    users[i] = users[i + 1];
                    users[i + 1] = temp;
                }
            }
        }
        console.log(users);
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            document.getElementById('result').innerHTML += user.name + " " + user.age + "</br>";
        }
    };
    IndexComponent.prototype.validateForm = function () {
        this.getValue();
        console.log(this.inputName.value);
        if (this.inputName.value === "") {
            alert('*данное поле обязательно для заполнения');
            return false;
        }
        if (this.inputAge.value === "") {
            alert('*данное поле обязательно для заполнения');
            return false;
        }
    };
    return IndexComponent;
}());
var indexComponent = new IndexComponent();
//# sourceMappingURL=index.js.map