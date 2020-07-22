﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('http://localhost:8801/users');
    }

    register(user: User) {
        return this.http.post('http://localhost:8801/users/register', user);
    }

    delete(id: number) {
        return this.http.delete('http://localhost:8801/users/${id}');
    }
}