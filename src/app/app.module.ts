// External Libraries
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MdSidenavModule, MdToolbarModule, MdButtonModule, MdCardModule, MdProgressSpinnerModule, MdTooltipModule, MdSnackBarModule, MdTableModule, MdDialogModule, MdInputModule, MdIconModule, MdIconRegistry, MdMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BlockUIModule } from 'ng-block-ui';
import 'hammerjs';

// App Libraries
import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';
import { TodoInterceptor } from './services/todo.interceptor';
import { TodoComponent } from './components/todo/todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { UserAuthenticationComponent } from './components/user-authentication/user-authentication.component';

// Images
import '../assets/images/menu.svg';
import '../assets/images/home.svg';
import '../assets/images/info.svg';
import '../assets/images/add.svg';

const appRoutes: Routes = [
    { path: '', component: TodoComponent },
    { path: 'addTodo', component: AddTodoComponent },
    { path: '**', component: TodoComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        TodoComponent,
        AddTodoComponent,
        UserAuthenticationComponent
    ],
    imports: [BrowserModule, BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes), HttpClientModule, FormsModule,
        MdSidenavModule, MdToolbarModule, MdButtonModule, MdCardModule, MdProgressSpinnerModule, MdTooltipModule,
        MdSnackBarModule, MdTableModule, MdDialogModule, MdInputModule, MdIconModule, MdMenuModule, FlexLayoutModule, BlockUIModule],
    providers: [TodoService, { provide: HTTP_INTERCEPTORS, useClass: TodoInterceptor, multi: true, }, MdIconRegistry],
    bootstrap: [AppComponent],
    entryComponents: [AddTodoComponent, UserAuthenticationComponent]
})
export class AppModule { }
