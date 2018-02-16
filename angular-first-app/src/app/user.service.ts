import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {catchError, retry} from 'rxjs/operators';
import {Post} from './post';

@Injectable()
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/user';
  private postUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient)  { }

//version 1
  public getAllUser(): Observable<Object[]> {
    return this.http.get(this.url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(error.error.message);
    } else {
      console.error(
        `Status: ${error.status},\nText: ${error.statusText}\nMessage:${error.error}`
      );
    }
    return new ErrorObservable('Une erreur est survenue. Réessayez');
  }

 //version 2
 public getAllPost(): Observable<Post> {
    return this.http.get<Post>(this.postUrl);
 }
}
