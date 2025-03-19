import {Component, inject, OnInit} from '@angular/core';
import { Text } from '../text';
import { ListeApp } from '../liste-app';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import {GetTop10Service} from '../get-top10.service';
@Component({
  selector: 'app-top10',
  imports: [],
  templateUrl: './top10.component.html',
  styleUrl: './top10.component.css'
})
export class Top10Component implements OnInit {
  constructor() {}
  private top10service = inject(GetTop10Service)
  liste_app = this.top10service.top10app


  ngOnInit(): void {
    this.top10service.getTop10apps().subscribe()
  }
}
