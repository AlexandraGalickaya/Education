

class LoginComponent {
    private inputEmail: HTMLInputElement;
    private inputPassword: HTMLInputElement;

    login() {
        this.inputEmail = <HTMLInputElement>document.getElementById('emailInput')
        this.inputPassword = <HTMLInputElement>document.getElementById('passwordInput')

        let users: IUser[] = JSON.parse(localStorage.getItem('USERS'));


        for (let i = 0; i < users.length; i++) {
            let email = users[i].email;
            let password = users[i].password;
            if ((this.inputEmail.value.toString().toLocaleLowerCase() == email.toLocaleLowerCase()) && (this.inputPassword.value.toString().toLocaleLowerCase() == password.toLocaleLowerCase())) {
                alert("User confirm:" + JSON.stringify(users[i]));
                return;
            }

        }
        alert("Error");
    }

    validate() {
        let x = document.forms['form']['email'].value;
        let y = document.forms['form']['password'].value;
        if (x == null || x == "") {
            {
                alert("Имя обязательно должно быть введено");
                return false;
            }

        }
        if (y == null || y == "") {
            {
                alert("Имя обязательно должно быть введено");
                return false;
            }
        }
        let filter = (/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/);
        if (!filter.test(this.inputPassword.value)) {
            alert('Please provide a valid password');
            this.inputPassword.focus;
            return false;
        }

    }
    // bubbleSort() {
    //     const inputName = <HTMLInputElement>document.getElementById('nameInput');
    //     const inputAge = <HTMLInputElement>document.getElementById('ageInput');
    //     let persons: IPerson[] = JSON.parse(localStorage.getItem('PERSONS'));
      
    //     persons.push({
    //         name: inputName.value,
    //         age: inputAge.value,
    //     });
    //     for (let j = 0; j < persons.length; j++) {
    //         for (let i = 0; i < persons.length; i++) {
    //             if (persons[i] > persons[i + 1]) {
    //                 let temp = persons[i];
    //                 persons[i] = persons[i + 1];
    //                 persons[i + 1] = temp;

    //             }
    //         }
    //         console.log(persons);
    //     }
    //     localStorage.setItem('PERSONS', JSON.stringify(persons));

    // }
}
let loginComponent: LoginComponent = new LoginComponent();