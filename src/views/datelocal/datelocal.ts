class DateLocal {

    public inputValue: HTMLInputElement = <HTMLInputElement>document.getElementById('emailUser');
    public getValue() {
        this.inputValue = <HTMLInputElement>document.getElementById('emailUser');
    }
    sortData() {
        let users: IUser[] = JSON.parse(localStorage.getItem('USERS'));
        for (let j = 0; j < users.length; j++) {
            for (let i = 0; i < users.length - j - 1; i++) {
                if (users[i].email > users[i + 1].email) {
                    let temp = users[i];
                    users[i] = users[i + 1];
                    users[i + 1] = temp;
                }
            }
        }
        for (let i = 0; i < users.length; i++) {
            let node = document.createElement("li");
            node.innerHTML = users[i].email;
            document.getElementById("myList").appendChild(node);
        }
    }
    functionFilter() {
        let array = [];
        let input, filter, ul, li, txtValue;
        input = document.getElementById("emailUser");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myList");
        li = ul.getElementsByTagName("li");
        for (let i = 0; i < li.length; i++) {
            txtValue = li[i].innerText.toUpperCase();
            if (txtValue.indexOf(filter) > -1) {
                li[i].style.display = "";
            }
            else {
                li[i].style.display = "none";
            }
        }
    }
}
let dateLocal: DateLocal = new DateLocal();
