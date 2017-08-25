import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    showSpinner: boolean;
    todoList: any;

    constructor(private snackBar: MdSnackBar, private todoService: TodoService) {
        this.showSpinner = false;
    }

    ngOnInit() {
        const successMessage = '(SEND): API response received';
        const errorMessage = '(SEND): ';
        this.todoService.getTodoService().subscribe(
            (result) => {
                this.showSpinner = false;
                this.todoList = result;
                console.log(result);
                this.snackBar.open(successMessage, null, { duration: 5000, }); // TODO - Success Theme
            },
            (error) => {
                this.showSpinner = false;
                this.snackBar.open(errorMessage, null, { duration: 5000, }); // TODO - Error Theme
                console.log(error);
            }
        );
    }

}
