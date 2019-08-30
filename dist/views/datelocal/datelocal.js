var DateLocal = /** @class */ (function () {
    function DateLocal() {
    }
    DateLocal.prototype.dateLocal = function () {
        var users = JSON.parse(localStorage.getItem('USERS'));
        for (var i = 0; i < users.length; i++) {
            var node = document.createElement("li");
            node.innerHTML = users[i].email;
            document.getElementById("myList").appendChild(node);
        }
    };
    DateLocal.prototype.functionFilter = function () {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
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