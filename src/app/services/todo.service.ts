import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../interfaces/todo';

@Injectable()
export class TodoService {
    headers: HttpHeaders;
    todoCoreUrl: string;

    constructor(public httpClient: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Content-Type', 'application/json');
        /* this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers = this.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        this.headers = this.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); */
        this.todoCoreUrl = 'http://localhost:8001/todos';
    }

    getAllTodoService() {
        return this.httpClient.get(this.todoCoreUrl, {});
    }

    getTodoService(todoId: string) {
        this.todoCoreUrl = this.todoCoreUrl + '/' + todoId;
        return this.httpClient.get(this.todoCoreUrl, {});
    }

    addTodoService(todo: Todo) {
        return this.httpClient.post(this.todoCoreUrl, todo, { /* headers: this.headers */ });
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
