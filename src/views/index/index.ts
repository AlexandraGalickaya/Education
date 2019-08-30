
class IndexComponent {
    // private dataService: DataService
    // constructor() {
    //     this.dataService = new DataService;
    // }
    public inputEmail: HTMLInputElement = <HTMLInputElement>document.getElementById('emailInput');
    public inputPassword: HTMLInputElement = <HTMLInputElement>document.getElementById('passwordInput');
    public onChangeChoteTam(vale: number) {
    }
    public getValue() {
        this.inputEmail = <HTMLInputElement>document.getElementById('emailInput');
        this.inputPassword = <HTMLInputElement>document.getElementById('passwordInput');
    }
    register() {
        this.getValue();
        console.log(this.inputEmail.value);
        console.log(this.inputPassword.value);
        let users: IUser[] = JSON.parse(localStorage.getItem('USERS'));
        if (!users) {
            users = [];
            localStorage.setItem('USERS', JSON.stringify(users));
            return false;
        }
        this.validateForm();
        if (this.inputEmail.value !== "" && this.inputPassword.value !== "" && this.validateForm()) {
            users.push({
                email: this.inputEmail.value,
                password: this.inputPassword.value,
            });
            localStorage.setItem('USERS', JSON.stringify(users));
            // document.location.href = '../login/login.html';
            document.location.href = '../datelocal/datelocal.html';
            return false;
        }

    }
    checkValidateEmail() {
        this.getValue();
        let error = document.getElementById('error');
        if (this.inputEmail.value === "") {
            error.innerHTML = '*все поля должны быть заполнены';
            return false;
        }
        if (this.inputEmail.value !== "" ) {
            error.innerHTML = "";
            return false;
        }
    }
    checkValidatePassword() {
        this.getValue();
        let errorBlock = document.getElementById('error-block');
      
        if (this.inputPassword.value === "") {
            errorBlock.innerHTML = '*все поля должны быть заполнены';
            return false;
        }
          if (this.inputPassword.value !== "") {
            errorBlock.innerHTML = "";
            return false;
        }
     
    }
    validateForm() {
        this.getValue();
        let result = document.getElementById('result');
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(this.inputEmail.value)) {
            this.inputEmail.focus;
            result.innerHTML = 'Пожалуйста, введите правильный email.';
            return false;
        }
        let filterpassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if (!filterpassword.test(this.inputPassword.value)) {
            this.inputPassword.focus;
            result.innerHTML = 'Пожалуйста, введите правильный password.';
            return false;
        }
        if(!this.validateEmail()){
            return false;
        }
        this.validateEmail()
        return true;
    }
    validateEmail() {
        let users: IUser[] = JSON.parse(localStorage.getItem('USERS'));
        for (let i = 0; i < users.length; i++) {
            debugger
            console.log(this.inputEmail.value);
            let email = users[i].email;
            if (this.inputEmail.value.toString().toLocaleLowerCase() == email.toLocaleLowerCase()) {
                // localStorage.setItem('USERS', JSON.stringify(users));

                return false;
            }
        }
        return true
    }
}
let indexComponent: IndexComponent = new IndexComponent();
