import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public token = ''; // interceptor dies if undefined

    constructor() { }
}
