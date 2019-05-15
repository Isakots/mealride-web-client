import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "../../messages/message.service";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {CreditCard} from "../../domain/card";

const CARD_URL = 'http://localhost:8080/mealride/api/user/cards';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('Authorization'),
    //observe: 'CreditCard.ts'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CreditcardService {

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  /** GET CreditCards from the server */
  getCreditCards(): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>(CARD_URL, httpOptions)
      .pipe(
        tap(_ => this.log('fetched CreditCards')),
        catchError(this.handleError<CreditCard[]>('getCreditCards', []))
      );
  }

  /** POST: add a new CreditCard to the server */
  addCreditCard(creditCard: CreditCard): Observable<CreditCard> {
    return this.http.post<CreditCard>(CARD_URL, creditCard, httpOptions).pipe(
      tap((newCreditCard: CreditCard) => this.log(`added CreditCard w/ id=${newCreditCard.id}`)),
      catchError(this.handleError<CreditCard>('addCreditCard'))
    );
  }

  /** PUT: update the CreditCard on the server */
  updateCreditCard(creditCard: CreditCard): Observable<CreditCard> {
    return this.http.put(CARD_URL, creditCard, httpOptions).pipe(
      tap((updatedCreditCard: CreditCard) => this.log(`updated CreditCard id=${updatedCreditCard.id}`)),
      catchError(this.handleError<CreditCard>('updateCreditCard'))
    );
  }

  /** DELETE: delete the CreditCard from the server */
  deleteCreditCard(creditCardId: number): Observable<CreditCard> {
    const url = `${CARD_URL}/${creditCardId}`;

    return this.http.delete<CreditCard>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted CreditCard id=${creditCardId}`)),
      catchError(this.handleError<CreditCard>('deleteCreditCard'))
    );
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
