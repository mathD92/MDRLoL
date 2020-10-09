import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summoners',
  templateUrl: './summoners.component.html',
  styleUrls: ['./summoners.component.scss']
})
export class SummonersComponent implements OnInit {
  public isLogged: boolean;
  constructor() { }

  ngOnInit(): void {
    this.isLogged = true;
  }

}
