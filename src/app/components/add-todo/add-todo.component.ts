import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdDialog } from '@angular/material';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../interfaces/todo';

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
    showSpinner: boolean;
    todoRequest: Todo;
    title: string;
    description: string;
    userName: string;

    constructor(private snackBar: MdSnackBar, public dialog: MdDialog, private todoService: TodoService) {
        this.title = '';
        this.description = '';
        this.userName = 'sumeet';   // TODO - Add user authentication and pass in that info here
    }

    ngOnInit() {
    }

    addTodo() {
        this.todoRequest = {
            title: this.title,
            description: this.description,
            userName: this.userName
        };
        const successMessage = '(ADD): TODO added successfully';
        const errorMessage = '(ADD): ';
        this.todoService.addTodoService(this.todoRequest).subscribe(
            (result) => {
                this.showSpinner = false;
                this.dialog.closeAll();
                this.snackBar.open(successMessage, null, { duration: 5000, }); // TODO - Success Theme
            },
            (error) => {
                this.showSpinner = false;
                this.snackBar.open(errorMessage + error.message, null, { duration: 5000, }); // TODO - Error Theme
                console.log(error);
            }
        );
    }

}
