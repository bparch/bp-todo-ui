import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-authentication',
    templateUrl: './user-authentication.component.html',
    styleUrls: ['./user-authentication.component.css']
})
export class UserAuthenticationComponent implements OnInit {
    userName: string;
    password: string;

    constructor() {
        this.userName = '';
        this.password = '';
    }

    ngOnInit() {
    }

    clear() {
        this.userName = '';
        this.password = '';
    }

    logIn() {
        // TODO - LogIn user here and map set to service
    }

    logOut() {
        // TODO - Log Out user here and map set to service
    }

}
