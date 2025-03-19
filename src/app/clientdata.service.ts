import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClientData} from './clientdata';
import {Observable, tap} from 'rxjs';
import {ListeApp} from './liste-app';

@Injectable({
  providedIn: 'root'
})
export class ClientdataService {
  private http = inject(HttpClient)
  public clients = signal<ClientData[]>([]);
  readonly url = 'http://127.0.0.1:8000/api/centresactivite/cinqplusgrandpardate'

  getcinqgrandsclients():Observable<ClientData[]>{
    return this.http.get<ClientData[]>(this.url).pipe(
      tap(clients=>this.clients.set(clients)),
    )}

}
