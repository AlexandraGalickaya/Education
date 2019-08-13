

class LoginComponent {
    private inputName: HTMLInputElement;
    private inputAge: HTMLInputElement;

    login() {
        this.inputName = <HTMLInputElement>document.getElementById('nameInput')
        this.inputAge = <HTMLInputElement>document.getElementById('ageInput')

        let users: IUser[] = JSON.parse(localStorage.getItem('USERS'));


        for (let i = 0; i < users.length; i++) {
            let name = users[i].name;
            let age = users[i].age;
            if ((this.inputName.value.toString().toLocaleLowerCase() == name.toLocaleLowerCase()) && (this.inputAge.value.toString().toLocaleLowerCase() == age.toLocaleLowerCase())) {
                alert("User confirm:" + JSON.stringify(users[i]));
                return;
            }

        }
        alert("Error");
    }

    validate() {
        let x = document.forms['form']['name'].value;
        let y = document.forms['form']['age'].value;
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
        if (!filter.test(this.inputAge.value)) {
            alert('Please provide a valid password');
            this.inputAge.focus;
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
        
    //     }    
    //     console.log(persons);
    //     localStorage.setItem('PERSONS', JSON.stringify(persons));

    // }
}
let loginComponent: LoginComponent = new LoginComponent();