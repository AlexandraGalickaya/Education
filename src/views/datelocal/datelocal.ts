class DateLocal {
    dateLocal() {
        let users: IUser[] = JSON.parse(localStorage.getItem('USERS'));
        for (let i = 0; i < users.length; i++) {
            let node = document.createElement("li");
            node.innerHTML = users[i].email;
            document.getElementById("myList").appendChild(node);
        }
    }

    functionFilter(){
            let input, filter, ul, li, a, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            ul = document.getElementById("myUL");
            li = ul.getElementsByTagName("li");
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }
}
let dateLocal: DateLocal = new DateLocal();
