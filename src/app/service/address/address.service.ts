import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "../../messages/message.service";
import {Observable, of} from "rxjs";
import {Address} from "../../domain/address";
import {catchError, tap} from "rxjs/operators";

const ADDRESS_URL = 'http://localhost:8080/mealride/api/user/addresses';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('Authorization'),
    //observe: 'address.ts'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient, private messageService: MessageService) {

  }

  /** GET addresses from the server */
  getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(ADDRESS_URL, httpOptions)
      .pipe(
        tap(_ => this.log('fetched addresses')),
        catchError(this.handleError<Address[]>('getAddesses', []))
      );
  }

  /** POST: add a new address to the server */
  addAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(ADDRESS_URL, address, httpOptions).pipe(
      tap((newAddress: Address) => this.log(`added address w/ id=${newAddress.id}`)),
      catchError(this.handleError<Address>('addAddress'))
    );
  }

  /** PUT: update the address on the server */
  updateAddress(address: Address): Observable<Address> {
    return this.http.put(ADDRESS_URL, address, httpOptions).pipe(
      tap((updatedAddress: Address) => this.log(`updated address id=${updatedAddress.id}`)),
      catchError(this.handleError<Address>('updateAddress'))
    );
  }

  /** DELETE: delete the address from the server */
  deleteAddress(addressId: number): Observable<Address> {
    const url = `${ADDRESS_URL}/${addressId}`;

    return this.http.delete<Address>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted address id=${addressId}`)),
      catchError(this.handleError<Address>('deleteAddress'))
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
