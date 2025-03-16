import { Component, OnInit} from '@angular/core';
import { Text } from '../text';
import { ListeApp } from '../liste-app';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-top10',
  imports: [],
  templateUrl: './top10.component.html',
  styleUrl: './top10.component.css'
})
export class Top10Component implements OnInit {
  private url = "http://127.0.0.1:8000/api/centresactivite/top10byAp";
  public liste_app: ListeApp[] = [];
  private subscription!: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.subscription = this.http.get<ListeApp[]>(this.url).subscribe(app_api => {
      this.liste_app = app_api;
    });
  }
}
