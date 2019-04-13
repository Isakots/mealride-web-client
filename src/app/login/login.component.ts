import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {LoginService} from '../service/login/login.service';
import {UserDTO} from '../domain/userdto';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    @Input() email: string;
    @Input() password: string;
    constructor(public router: Router, private loginService: LoginService) {}

    ngOnInit() {}

    onLoggedin() {
        if (this.loginService.doAuthentication(new UserDTO(this.email, this.password))) {
          localStorage.setItem('isLoggedin', 'true');
        }
    }
}
