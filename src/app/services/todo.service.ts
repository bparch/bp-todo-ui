import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {
    todoCoreUrl: string;

    constructor(public httpClient: HttpClient) {
        this.todoCoreUrl = 'http://localhost:8001/todos';
    }

    getTodoService() {
        return this.httpClient.get(this.todoCoreUrl, {});
    }
}
