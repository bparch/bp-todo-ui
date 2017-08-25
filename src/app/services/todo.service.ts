import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {
    todoCoreUrl: string;

    constructor(public httpClient: HttpClient) {
        this.todoCoreUrl = 'http://localhost:8001/todos';
    }

    getAllTodoService() {
        return this.httpClient.get(this.todoCoreUrl, {});
    }

    getTodoService(todoId: string) {
        this.todoCoreUrl = this.todoCoreUrl + '/' + todoId;
        return this.httpClient.get(this.todoCoreUrl, {});
    }

    addTodoService(todo: {}) {
        return this.httpClient.post(this.todoCoreUrl, todo, {});
    }

    updateTodoService(todo: {}, todoId: string) {
        this.todoCoreUrl = this.todoCoreUrl + '/' + todoId;
        return this.httpClient.put(this.todoCoreUrl, todo, {});
    }

    deleteTodoService(todoId: string) {
        this.todoCoreUrl = this.todoCoreUrl + '/' + todoId;
        return this.httpClient.delete(this.todoCoreUrl, {});
    }
}
