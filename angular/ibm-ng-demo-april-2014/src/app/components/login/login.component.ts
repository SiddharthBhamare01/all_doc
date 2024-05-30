import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData = { username: '', password: '' };
  postLoginMessage: string = '';


  submitLogin = () => {
    console.log(this.loginData);
    if (this.loginData.username === 'sonu' && this.loginData.password === 'sonu') {
      this.postLoginMessage = `Hi ${this.loginData.username}! You've logged in successfully.`;
      this.loginData = { username: '', password: '' };
    } else {
      this.postLoginMessage = 'Invalid credentials!';
      this.loginData = { username: '', password: '' };
    }
  };

}

