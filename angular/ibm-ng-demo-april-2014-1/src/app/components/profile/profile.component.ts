import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  profile={name:'',age:null, aadhar:''}
  postprofile:string=''

  onSubmit=()=>{
    console.log('Submitted Data:', this.profile);
    this.postprofile= `Name:${this.profile.name}\tAge: ${this.profile.age}\tAadhar: ${this.profile.aadhar}`
  }
}
