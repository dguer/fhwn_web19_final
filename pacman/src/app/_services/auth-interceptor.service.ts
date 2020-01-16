import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        if (req.url.endsWith('signin')) {
            return next.handle(req);
        }

        // Clone the request and set the new header in one step.
        const authReq = req.clone({ setHeaders: { Authorization: this.auth.token } });

        // send cloned request with header to the next handler.
        return next.handle(authReq);
    }
}
