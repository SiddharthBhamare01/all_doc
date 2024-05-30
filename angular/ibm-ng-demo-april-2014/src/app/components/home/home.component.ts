import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [FormsModule, CommonModule, ChildComponent],
    templateUrl: './home.component.html'
})
export class HomeComponent {

   parent = "sid ishwar" ;


    
}



