import {inject, Injectable, signal} from '@angular/core';
import {ListeApp} from './liste-app'
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetTop10Service {

  private http = inject(HttpClient)
  public top10app = signal<ListeApp[]>([])
  readonly url = 'http://127.0.0.1:8000/api/centresactivite/top10byAp'

  getTop10apps():Observable<ListeApp[]>{
    return this.http.get<ListeApp[]>(this.url).pipe(
      tap(top10app=>this.top10app.set(top10app)),
    )}

}
