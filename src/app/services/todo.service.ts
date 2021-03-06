import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../interfaces/todo';

@Injectable()
export class TodoService {
    todoCoreUrl: string;

    constructor(public httpClient: HttpClient) {
        // this.todoCoreUrl = 'http://localhost:8001/todos';
        // this.todoCoreUrl = 'http://microservice-bp-todo-core.a3c1.starter-us-west-1.openshiftapps.com/todos';
        this.todoCoreUrl = 'https://microservice-bp-todo-core.a3c1.starter-us-west-1.openshiftapps.com/todos';
    }

    getAllTodoService() {
        return this.httpClient.get(this.todoCoreUrl, {});
    }

    getTodoService(todoId: string) {
        this.todoCoreUrl = this.todoCoreUrl + '/' + todoId;
        return this.httpClient.get(this.todoCoreUrl, {});
    }

    addTodoService(todo: Todo) {
        return this.httpClient.post(this.todoCoreUrl, todo, {});
    }

    updateTodoService(todo: Todo, todoId: string) {
        this.todoCoreUrl = this.todoCoreUrl + '/' + todoId;
        return this.httpClient.put(this.todoCoreUrl, todo, {});
    }

    deleteTodoService(todoId: string) {
        this.todoCoreUrl = this.todoCoreUrl + '/' + todoId;
        return this.httpClient.delete(this.todoCoreUrl, {});
    }
}
