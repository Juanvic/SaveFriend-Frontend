import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { friendCode } from './friendCode.model';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FriendCodeService {

  baseUrl = "http://localhost:3001/friendCodes";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "bottom",
      panelClass: isError? ['msg-error'] : ['msg-success']
    })
  }

  create(friendCode: friendCode) : Observable<friendCode> {
    return this.http.post<friendCode>(this.baseUrl, friendCode).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read() : Observable<friendCode[]> {
    return this.http.get<friendCode[]>(this.baseUrl)
  }

  readById(id: string | null): Observable<friendCode> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<friendCode>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(friendCode: friendCode): Observable<friendCode> {
    const url = `${this.baseUrl}/${friendCode.id}`;
    return this.http.put<friendCode>(url, friendCode).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number | undefined): Observable<friendCode> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<friendCode>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler (e: any): Observable<any> {
    console.log(e);
    this.showMessage('Erro selvagem apareceu!', true);
    return EMPTY
  }

}
