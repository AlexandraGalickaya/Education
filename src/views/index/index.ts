import { IUser } from "../../models/index";
// import { DataService } from "../../service/data.service";


class IndexComponent {
    // private dataService: DataService
    // constructor( ){
    //     this.dataService = new DataService;
    // }
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
            if (genderArray[i].checked) {
                genderValue = genderArray[i].id;
            }
        }
        let users: IUser[] = JSON.parse(localStorage.getItem('USERS'));
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

    getCheckedCheckBoxes() {

        const checkbox1 = <HTMLInputElement>document.getElementById('checkbox1');
        const checkbox2 = <HTMLInputElement>document.getElementById('checkbox2');
        const checkbox3 = <HTMLInputElement>document.getElementById('checkbox3');
        const checkbox4 = <HTMLInputElement>document.getElementById('checkbox4');
        const checkbox5 = <HTMLInputElement>document.getElementById('checkbox5');
        let checkboxes = document.getElementsByClassName('box');
        let checkboxesChecked: Array<HTMLInputElement> = [];
        let checkboxesValue: string;
        let count = 0;
        checkboxesChecked.push(checkbox1, checkbox2, checkbox3, checkbox4, checkbox5);
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxesChecked[i].checked) {

                checkboxesValue = checkboxesChecked[i].id;
                count++;
                alert(checkboxesValue);
            }
        }
        alert(count);
    }

    
}
let indexComponent: IndexComponent = new IndexComponent();

