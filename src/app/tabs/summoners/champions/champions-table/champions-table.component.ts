import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


export interface Champions {
  _id: number;
  imageUrl: string;
  name: string;
  games: string;
  kda: string;
  cs: number;
  quad: number;
  pentakills: number;
}


@Component({
  selector: 'app-champions-table',
  templateUrl: './champions-table.component.html',
  styleUrls: ['./champions-table.component.scss']
})
export class ChampionsTableComponent implements OnInit, AfterViewInit  {

  public champions: Champions[] = [
    {_id: 0, imageUrl:'../../../../../assets/img/Gnar.png', name: 'Swain', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 1, imageUrl:'../../../../../assets/img/Swain.png', name: 'Pyke', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 2, imageUrl:'../../../../../assets/img/Ornn.png', name: 'Ornn', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 3, imageUrl:'../../../../../assets/img/Ekko.png', name: 'Ekko', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 4, imageUrl:'../../../../../assets/img/Swain.png', name: 'Blitzcrank', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 5, imageUrl: '../../../../../assets/img/Gnar.png', name: 'Sion', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 6, imageUrl:'../../../../../assets/img/Swain.png', name: 'Darius', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 7, imageUrl: '../../../../../assets/img/Gnar.png', name: 'Aurélion Sol', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 8, imageUrl: '../../../../../assets/img/Gnar.png', name: 'Janna', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 9, imageUrl: '../../../../../assets/img/Gnar.png', name: 'Sona', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 10, imageUrl: '../../../../../assets/img/Gnar.png', name: 'Swain', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 11, imageUrl: '../../../../../assets/img/Gnar.png', name: 'Pyke', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 12, imageUrl: '../../../../../assets/img/Gnar.png', name: 'Gankplank', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 13, imageUrl: '../../../../../assets/img/Gnar.png', name: 'Ezreal', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 14, imageUrl: '../../../../../assets/img/Gnar.png', name: 'Blitzcrank', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 15, imageUrl: '../../../../../assets/img/Gnar.png', name: 'Sion', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 16, imageUrl: '../../../../../assets/img/Gnar.png', name: 'Darius', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 17, imageUrl: '../../../../../assets/img/Gnar.png', name: 'Aurélion Sol', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 18, imageUrl: '../../../../../assets/img/Gnar.png', name: 'Janna', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 19, imageUrl: '../../../../../assets/img/Gnar.png', name: 'Sona', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
  ];

  displayedColumns: string[] = ['imageUrl', 'games', 'kda', 'cs', 'quad', 'pentakills'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Champions>;


  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.champions);
  }

  ngAfterViewInit(): void {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
  }
}
