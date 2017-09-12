import { Component } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MdDialog } from '@angular/material';
import { UserAuthenticationComponent } from './components/user-authentication/user-authentication.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    position = 'below';

    @BlockUI() blockUI: NgBlockUI;

    constructor(public dialog: MdDialog) {
        this.blockUI.start('Loading...'); // Start blocking

        setTimeout(() => {
            this.blockUI.stop(); // Stop blocking
        }, 2000);
    }

    userAuthentication() {
        // TODO - Launch User Authentication PopUp screen
        this.dialog.open(UserAuthenticationComponent);
    }
}
