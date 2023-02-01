import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextProcessService {
  readonly apiUrl: string = '/api/TextProcess';

  orderedText: string[] = [];

   // Constructor
   constructor(private http: HttpClient) {}

  GetOrderedText(textToOrder: string, orderOption: string): Observable<any>  {
    return this.http.post(`${this.apiUrl}/Order?orderOption=${orderOption}`, JSON.stringify(textToOrder));
  }

  GetStatisticsText(textToAnalize: string): Observable<any>  {
    return this.http.post<any>(`${this.apiUrl}/Analize`, JSON.stringify(textToAnalize));
  }

  GetOrderOptions(): Observable<any>  {
    return this.http.get(`${this.apiUrl}`);
  }
}
