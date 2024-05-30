import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, EditProfileComponent, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent implements OnInit {
  profileData: any;
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.getProfile()
      .subscribe({
        next: (resp: any) => {
          console.log(resp);
          this.profileData = resp;
          console.log(this.profileData);
        },
        error: (err: any) => {
          console.error(err);
        }
      });
  };
}

