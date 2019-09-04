class DateLocal {
    public array: Array<object> = [];
    public newArray: Array<object>;
    sortData() {
        let users: IUser[] = JSON.parse(localStorage.getItem('USERS'));
        // for (let j = 0; j < users.length; j++) {
        //     for (let i = 0; i < users.length - j - 1; i++) {
        //         if (users[i].email > users[i + 1].email) {
        //             let temp = users[i];
        //             users[i] = users[i + 1];
        //             users[i + 1] = temp;
        //         }
        //     }
        // }
        for (let i = 0; i < users.length; i++) {
            let node = document.createElement("li");
            node.innerHTML = users[i].email;
            document.getElementById("myList").appendChild(node);
        }
    }

    functionFilter() {

        let input, filter, ul, li, email;
        input = document.getElementById("emailUser");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myList");
        li = ul.getElementsByTagName("li");
        for (let i = 0; i < li.length; i++) {
            email = li[i].innerText.toUpperCase();
            if (email.indexOf(filter) > -1) {
                li[i].style.display = "block";
                this.array.push({ email });
            }
            else {
                li[i].style.display = "none";
            }
        }

    }

    functionSort() {
        this.newArray = this.array;
        for (let j = 0; j < this.newArray.length; j++) {
            for (let i = 0; i < this.newArray.length - j - 1; i++) {
                if (JSON.stringify(this.newArray[i]) > JSON.stringify(this.newArray[i + 1])) {
                    let temp = this.newArray[i];
                    this.newArray[i] = this.newArray[i + 1];
                    this.newArray[i + 1] = temp;
                }
            }
        }
        for (let i = 0; i < this.newArray.length; i++) {
            let node = document.createElement("li");
            node.innerHTML = JSON.stringify(this.newArray[i]);
            document.getElementById("myList").appendChild(node);
        }
    }

}
let dateLocal: DateLocal = new DateLocal();
