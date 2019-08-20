

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
            if ((this.inputEmail.value.toString().toLocaleLowerCase() == email.toLocaleLowerCase()) && (this.inputPassword.value) == password) {
                alert("User confirm:" + JSON.stringify(users[i]));
                return;
            }

        }
        alert("Error");
    }


}
let loginComponent: LoginComponent = new LoginComponent();