import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService: LoginService){
        
    }

    /* intercepta y/o muta solicitudes y respuestas http modificando las peticiones
    del httpmodule 
    @param HttpRequest<any>
    @return HttpRequest<any> modificada con headers de autenticacion
    */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authRequest = req;
        const token = this.loginService.getToken();
        if(token != null){
            authRequest = authRequest.clone({
                setHeaders : {Authorization: `Bearer ${token}`}
            })
        }
        return next.handle(authRequest);
    }
}

/* proveedor de interceptores que se importa en el app.module.ts */
export const authInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }
]