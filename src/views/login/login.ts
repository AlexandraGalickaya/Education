

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
            if ((this.inputName.value.toString().toLocaleLowerCase() == name.toLocaleLowerCase()) && (parseFloat(this.inputAge.value) == age)) {
                alert("User confirm:" + JSON.stringify(users[i]));
                return;
            }

        }
        alert("Error");
    }


}
let loginComponent: LoginComponent = new LoginComponent();