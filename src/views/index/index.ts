import { User } from "../../models/index";

class IndexComponent {
    register() {

        const inputEmail = <HTMLInputElement>document.getElementById('emailInput')
        const inputPassword = <HTMLInputElement>document.getElementById('passwordInput')
        const man = <HTMLInputElement>document.getElementById('man')
        const women = <HTMLInputElement>document.getElementById('women');
        let genderArray: Array<HTMLInputElement> = [];
        let genderValue: string;
        genderArray.push(man, women);
        console.log(genderArray);
        for (let i = 0; i < genderArray.length; i++) {
            if (genderArray[i].checked ) {
                genderValue = genderArray[i].id;
            }
        }
        let users: User[] = JSON.parse(localStorage.getItem('USERS'));        
        if (!users) {
            users = [];
            localStorage.setItem('USERS', JSON.stringify(users));
            return;
        }
        users.push({
            email: inputEmail.value,
            password: inputPassword.value,
            gender: genderValue,
        });
        localStorage.setItem('USERS', JSON.stringify(users));
        document.location.href = '../login/login.html';
    }
}

let indexComponent: IndexComponent = new IndexComponent;