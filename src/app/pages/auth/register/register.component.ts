import { Component } from '@angular/core';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    InputGroup,
    InputGroupAddon, 
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
