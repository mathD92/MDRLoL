import { Component, OnInit } from '@angular/core';

export interface Season {
  name: string;
}

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {

  public seasons: Season[] = [
    {name: 'S10'},
    {name: 'S9'},
    {name: 'S8'},
    {name: 'S7'},
    {name: 'S6'},
    {name: 'S5'},
    {name: 'S4'},
    {name: 'S3'},
    {name: 'S2'},
    {name: 'S1'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
