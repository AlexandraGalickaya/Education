var DateLocal = /** @class */ (function () {
    function DateLocal() {
        this.inputValue = document.getElementById('emailUser');
    }
    DateLocal.prototype.getValue = function () {
        this.inputValue = document.getElementById('emailUser');
    };
    DateLocal.prototype.sortData = function () {
        var users = JSON.parse(localStorage.getItem('USERS'));
        for (var j = 0; j < users.length; j++) {
            for (var i = 0; i < users.length - j - 1; i++) {
                if (users[i].email > users[i + 1].email) {
                    var temp = users[i];
                    users[i] = users[i + 1];
                    users[i + 1] = temp;
                }
            }
        }
        for (var i = 0; i < users.length; i++) {
            var node = document.createElement("li");
            node.innerHTML = users[i].email;
            document.getElementById("myList").appendChild(node);
        }
    };
    DateLocal.prototype.functionFilter = function () {
        var array = [];
        var input, filter, ul, li, txtValue;
        input = document.getElementById("emailUser");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myList");
        li = ul.getElementsByTagName("li");
        for (var i = 0; i < li.length; i++) {
            txtValue = li[i].innerText.toUpperCase();
            if (txtValue.indexOf(filter) > -1) {
                li[i].style.display = "";
            }
            else {
                li[i].style.display = "none";
            }
        }
    };
    return DateLocal;
}());
var dateLocal = new DateLocal();
//# sourceMappingURL=datelocal.js.map