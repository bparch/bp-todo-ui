import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdDialog } from '@angular/material';
import { TodoService } from '../../services/todo.service';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    showSpinner: boolean;
    todoList: any;
    todoDescriptionDisabled: boolean;

    constructor(private snackBar: MdSnackBar, public dialog: MdDialog,
        private todoService: TodoService) {
        this.showSpinner = false;
        this.todoDescriptionDisabled = true;
    }

    ngOnInit() {
        const successMessage = '(SEND): API response received';
        const errorMessage = '(SEND): ';
        this.todoService.getAllTodoService().subscribe(
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

    addTodo() {
        this.dialog.open(AddTodoComponent);
    }

    editTodo(todoId: string) {
        // TODO - hook updateTodoService() API call here
    }

    deleteTodo(todoId: string) {
        // TODO - hook deleteTodoService() API call here
    }
}
