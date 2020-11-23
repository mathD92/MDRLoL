import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Game {
  id: string;
  summonerName: string;
  status: boolean;
}

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent implements OnInit {

  public games: Game[] = [
    {id: '1', summonerName: 'Niko', status: true},
    {id: '2', summonerName: 'Mathias', status: true},
    {id: '3', summonerName: 'Léo', status: false},
    {id: '4', summonerName: 'Paul', status: false},
    {id: '5', summonerName: 'Jean', status: true},
    {id: '6', summonerName: 'Pierre', status: true},
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
}
