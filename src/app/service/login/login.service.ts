import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {UserDTO} from '../../domain/userdto';
import {MessageService} from '../../messages/message.service';
import {TokenResponse} from '../../domain/tokenresponse';

const LOGIN_URL = 'http://localhost:8080/mealride/api/signin';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    observe: 'tokenresponse.ts'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  doPost(user: UserDTO): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(LOGIN_URL, user, httpOptions);
  }

  doAuthentication(user: UserDTO): boolean {
    this.doPost(user)
      .pipe(
        catchError(this.handleError<any>('login', [])
        ))
      .subscribe(resp => {
        if (resp.accessToken != null) {
          localStorage.setItem('Authorization', resp.accessToken);
        }
      });
    if (localStorage.getItem('Authorization') !== undefined && localStorage.getItem('Authorization') !== null) {
      return true;
    }
    return false;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`LoginService: ${message}`);
  }

}
