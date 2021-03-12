// Angular
import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token: string = "";
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    this.token = sessionStorage.getItem("token");

    var headers;
    if (this.token) {
      headers = {
        Authorization: "Bearer "+JSON.parse(this.token),
      };
    } else {
      headers = {};
    }

    const newRequest = request.clone({
      setHeaders: { ...headers }
    });
    return next.handle(newRequest);
  }
}
