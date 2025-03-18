import { Component } from '@angular/core';
import {Subscription} from 'rxjs';
import {ListeApp} from '../liste-app';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cinqplusgrandpardate',
  imports: [],
  templateUrl: './cinqplusgrandpardate.component.html',
  styleUrl: './cinqplusgrandpardate.component.css'
})
export class CinqplusgrandpardateComponent {
  private url = "http://127.0.0.1:8000/api/centresactivite/cinqplusgrandpardate";
  public liste_app: ListeApp[] = [];
  private subscription!: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.subscription = this.http.get<ListeApp[]>(this.url).subscribe(app_api => {
      this.liste_app = app_api;
    });
  }

}
