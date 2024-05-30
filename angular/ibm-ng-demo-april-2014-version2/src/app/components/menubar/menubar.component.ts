import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-menubar',
    standalone: true,
    imports: [RouterLink,FormsModule],
    templateUrl: './menubar.component.html'
})

export class MenubarComponent {
    
    // "name":"";

}
