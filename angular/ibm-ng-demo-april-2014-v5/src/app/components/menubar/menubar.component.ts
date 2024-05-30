import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-menubar',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './menubar.component.html'
})

export class MenubarComponent implements OnInit {

    isLoggedIn = false;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.isLoggedIn = this.userService.getLoginStatus();
    }
}
