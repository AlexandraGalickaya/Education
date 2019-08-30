class DateLocal {
    dateLocal() {
        let users: IUser[] = JSON.parse(localStorage.getItem('USERS'));
        for (let i = 0; i < users.length; i++) {
            let node = document.createElement("li");
            node.innerHTML = users[i].email;
            document.getElementById("myList").appendChild(node);
        }
    }
}
let dateLocal: DateLocal = new DateLocal();
