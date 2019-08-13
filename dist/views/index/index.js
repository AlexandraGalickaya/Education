var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
        this.dataService = new DataService;
    }
    IndexComponent.prototype.register = function () {
        var inputName = document.getElementById('nameInput');
        var inputAge = document.getElementById('ageInput');
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
            name: inputName.value,
            age: inputAge.value,
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
    return IndexComponent;
}());
var indexComponent = new IndexComponent();
//# sourceMappingURL=index.js.map