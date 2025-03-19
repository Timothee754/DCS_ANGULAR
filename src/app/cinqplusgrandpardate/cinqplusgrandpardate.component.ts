import Chart from 'chart.js/auto';
import {Component, inject} from '@angular/core';
import {Subscription} from 'rxjs';
import {ClientData} from '../clientdata';
import {HttpClient} from '@angular/common/http';
import {ClientdataService} from '../clientdata.service';

@Component({
  selector: 'app-cinqplusgrandpardate',
  imports: [],
  templateUrl: './cinqplusgrandpardate.component.html',
  styleUrl: './cinqplusgrandpardate.component.css'
})
export class CinqplusgrandpardateComponent {
  private url = "http://127.0.0.1:8000/api/centresactivite/cinqplusgrandpardate";
  private clientdataservice=inject(ClientdataService);
  liste_clients_data = this.clientdataservice.clients

  ngOnInit(): void {
    this.clientdataservice.getcinqgrandsclients().subscribe()
  }




}
