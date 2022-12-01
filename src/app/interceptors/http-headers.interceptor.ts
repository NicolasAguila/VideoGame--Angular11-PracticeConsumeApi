import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
  constructor(){}

  intercept (
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'X-RapidAPI-Key': '44b2c75270msh4376ede2eee89a1p1a49b8jsnc60a54c61521',
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        key: 'c2b0681d5f224707bc709b48d1aa95bf',
      }
    });
    return next.handle(req);
  }
}
