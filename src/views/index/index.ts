
class IndexComponent {
    private dataService: DataService
    constructor() {
        this.dataService = new DataService;
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
        let users: IUser[] = this.dataService.getFromLocalStorage('USER');
        if (!users) {
            users = [];
            localStorage.setItem('USERS', JSON.stringify(users));
            return;
        }
        users.push({
            name: inputName.value,
            age: inputAge.value,
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



    // bubbleSort() {
    //     // let persons = [15, 27, 6, 1, 0];
    //     let persons = [{ name: "Ivan", age: 17 }, { name: "Mariya", age: 35 }, { name: "Oleksei", age: 73 }, { name: "Dima", age: 12 }];
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
    // }


}

let indexComponent: IndexComponent = new IndexComponent();

