

class LoginComponent {
    public inputEmail: HTMLInputElement = <HTMLInputElement>document.getElementById('emailInput');
   
    validateEmail() {
        let error = document.getElementById('error');
        let users: IUser[] = JSON.parse(localStorage.getItem('USERS'));
        for (let i = 0; i < users.length; i++) {
            let email = users[i].email;
            if (this.inputEmail.value.toString().toLocaleLowerCase() == email.toLocaleLowerCase()) {
                error.innerHTML = '*такой Email существует';
                return;
            }
        }

    }



}
let loginComponent: LoginComponent = new LoginComponent();