import Chart from 'chart.js/auto';
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

  createChart(): void {

    createChart()
  :
    void {
      const ctx = document.getElementById('cinqplusgrand') as HTMLCanvasElement;
      this.chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: this.liste_app.map(app => app.NomClient),
          datasets: [{
            label: 'Total Prix',
            data: this.liste_app.map(app => app.total_prix),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      }),
    }
  }

}
