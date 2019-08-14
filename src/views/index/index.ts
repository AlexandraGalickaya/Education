
class IndexComponent {
    // private dataService: DataService
    // constructor() {
    //     this.dataService = new DataService;
    // }
    public onChangeChoteTam(vale: number) {

    }
    register() {
        const inputName = <HTMLInputElement>document.getElementById('nameInput')
        const inputAge = <HTMLInputElement>document.getElementById('ageInput')
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
            name: inputName.value,
            age: parseFloat(inputAge.value),
            gender: genderValue,
        });
        console.log();

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

    bubbleSort() {

        let users: IUser[] = JSON.parse(localStorage.getItem('USERS'));

        for (let j = 0; j < users.length; j++) {
            for (let i = 0; i < users.length - j - 1; i++) {

                if (users[i].age > users[i + 1].age) {
                    let temp = users[i];
                    users[i] = users[i + 1];
                    users[i + 1] = temp;
                }
            }

        }

        console.log(users);
        for (let i = 0; i < users.length; i++) {
            let user = users[i];
            document.getElementById('result').innerHTML += user.name + " " + user.age + "</br>";

        }
        let x = String("Hello World");
        console.log(x);
    }
}

let indexComponent: IndexComponent = new IndexComponent();

