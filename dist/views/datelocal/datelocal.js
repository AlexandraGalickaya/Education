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
    return DateLocal;
}());
var dateLocal = new DateLocal();
//# sourceMappingURL=datelocal.js.map