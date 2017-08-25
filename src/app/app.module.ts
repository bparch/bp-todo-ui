// External Libraries
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MdSidenavModule, MdToolbarModule, MdButtonModule, MdCardModule, MdProgressSpinnerModule, MdTooltipModule, MdSnackBarModule, MdTableModule, MdDialogModule, MdInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

// App Libraries
import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';
import { TodoComponent } from './components/todo/todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

// Images
import '../assets/images/menu.svg';
import '../assets/images/home.svg';
import '../assets/images/info.svg';

const appRoutes: Routes = [
    { path: '', component: TodoComponent },
    { path: '**', component: TodoComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        TodoComponent,
        AddTodoComponent
    ],
    imports: [BrowserModule, BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes), HttpClientModule, FormsModule,
        MdSidenavModule, MdToolbarModule, MdButtonModule, MdCardModule, MdProgressSpinnerModule, MdTooltipModule,
        MdSnackBarModule, MdTableModule, MdDialogModule, MdInputModule, FlexLayoutModule],
    providers: [TodoService],
    bootstrap: [AppComponent],
    entryComponents: [AddTodoComponent]
})
export class AppModule { }
