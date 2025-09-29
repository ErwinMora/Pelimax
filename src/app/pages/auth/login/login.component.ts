import { Component } from '@angular/core';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    InputGroup,
    InputGroupAddon,
    InputGroupModule,
    InputGroupAddonModule,
    PasswordModule, 
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
