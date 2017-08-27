import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdDialog } from '@angular/material';
import { TodoService } from '../../services/todo.service';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { Todo } from '../../interfaces/todo';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    position = 'above';
    showSpinner: boolean;
    todoList: any;
    todoDescriptionDisabled: boolean;
    todoRequest: Todo;

    constructor(private snackBar: MdSnackBar, public dialog: MdDialog,
        private todoService: TodoService) {
        this.showSpinner = false;
        this.todoDescriptionDisabled = true;
    }

    ngOnInit() {
        this.getAllTodos();
    }

    getAllTodos() {
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

    enableTodoforEdit(todo: any) {
        this.todoDescriptionDisabled = false;
        // TODO - call this.editTodo(todo) on SAVE button click which needs implementation as well
    }

    editTodo(todo: any) {
        this.todoRequest = {
            title: todo.title,
            description: todo.description,
            userName: todo.userName
        };

        const successMessage = '(EDIT): TODO was successfully updated';
        const errorMessage = '(EDIT): ';
        this.todoService.updateTodoService(this.todoRequest, todo._id).subscribe(
            (result) => {
                this.showSpinner = false;
                this.snackBar.open(successMessage, null, { duration: 5000, }); // TODO - Success Theme
                location.reload();
            },
            (error) => {
                this.showSpinner = false;
                this.snackBar.open(errorMessage, null, { duration: 5000, }); // TODO - Error Theme
            }
        );
    }

    deleteTodo(todoId: string) {
        const successMessage = '(DELETE): TODO was successfully deleted';
        const errorMessage = '(DELETE): ';
        this.todoService.deleteTodoService(todoId).subscribe(
            (result) => {
                this.showSpinner = false;
                this.snackBar.open(successMessage, null, { duration: 5000, }); // TODO - Success Theme
                location.reload();
            },
            (error) => {
                this.showSpinner = false;
                this.snackBar.open(errorMessage, null, { duration: 5000, }); // TODO - Error Theme
            }
        );
    }
}
