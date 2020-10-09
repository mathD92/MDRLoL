import { Component, OnInit } from '@angular/core';

interface Region {
  value: string;
  description: string;
}

@Component({
  selector: 'app-summoners',
  templateUrl: './summoners.component.html',
  styleUrls: ['./summoners.component.scss']
})
export class SummonersComponent implements OnInit {
  regions: Region[] = [
    {value: 'NA', description: 'North America'},
    {value: 'EUNE', description: 'Europe Nordic & East'},
    {value: 'EUW', description: 'Europe West'},
    {value: 'KR', description: 'Korea'},
    {value: 'LAN', description: 'Latin America North'},
    {value: 'LAS', description: 'Latin America South'},
    {value: 'OCE', description: 'Oceania'},
    {value: 'RU', description: 'Russia'},
    {value: 'TR', description: 'Turkey'},
    {value: 'BR', description: 'Brasil'},
    {value: 'JP', description: 'Japan'},
    {value: 'SEA', description: 'South East Asia'},
    {value: 'CN', description: 'China'}
  ];
  public isLogged: boolean;
  constructor() { }

  ngOnInit(): void {
    this.isLogged = true;
  }

}
