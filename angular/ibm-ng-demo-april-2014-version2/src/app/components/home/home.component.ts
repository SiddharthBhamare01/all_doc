import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [FormsModule, CommonModule, ChildComponent],
    templateUrl: './home.component.html'
})
export class HomeComponent {

    parentData = 'Sonu';
    childDataInPrent: Event | any = '';

    receiveData = (data: Event) => {
        console.log(data);
        this.childDataInPrent = data;
    };
}






// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//     selector: 'app-home',
//     standalone: true,
//     imports: [FormsModule, CommonModule],
//     templateUrl: './home.component.html'
// })
// export class HomeComponent {


//     // empList = '';

//     empList = [
//         { firstName: 'Sonu', salary: 10.50 },
//         { firstName: 'Monu', salary: 15.25 },
//         { firstName: 'Tonu', salary: 12.75 }
//     ];


//     firstName: string = '';
//     salary: number = 10;
//     isDisabled: boolean = true;

//     increaseSalary = () => {
//         console.log(this.salary);
//         this.salary += 10;
//     };

//     constructor() {
//         console.log('constructor');
//         setTimeout(() => {
//             console.log('settimeout');
//             this.isDisabled = false;
//         }, 3000);
//     }
// }




