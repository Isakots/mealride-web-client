import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "../../messages/message.service";
import {SignupForm} from "../../domain/signupform";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {Message} from "../../domain/message";

const SIGNUP_URL = 'http://localhost:8080/mealride/api/signup';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    observe: 'tokenresponse.ts'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  doPost(signUpForm: SignupForm): Observable<Message> {
    return this.http.post<Message>(SIGNUP_URL, signUpForm, httpOptions);
  }

  doSignUp(signUpForm: SignupForm): void {
    this.doPost(signUpForm)
      .pipe(
        catchError(this.handleError<any>('signup', [])
        ))
      .subscribe(resp => {
        if (resp.message == "User registered successfully!") {
          console.log(resp.message);
          this.messageService.add(resp.message);
        } else {
          console.log(resp.message);
          this.messageService.add(resp.message);
        }
      });
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
