import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


export interface Champions {
  _id: number;
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
export class ChampionsTableComponent implements AfterViewInit  {

  public champions: Champions[] = [
    {_id: 0, name: 'Swain', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 1, name: 'Pyke', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 2, name: 'Gankplank', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 3, name: 'Ezreal', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 4, name: 'Blitzcrank', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 5, name: 'Sion', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 6, name: 'Darius', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 7, name: 'Aurélion Sol', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 8, name: 'Janna', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 9, name: 'Sona', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 10, name: 'Swain', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 11, name: 'Pyke', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 12, name: 'Gankplank', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 13, name: 'Ezreal', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 14, name: 'Blitzcrank', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 15, name: 'Sion', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 16, name: 'Darius', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 17, name: 'Aurélion Sol', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 18, name: 'Janna', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
    {_id: 19, name: 'Sona', games: '16V: 4L', kda: '9/2/1', cs: 161, quad: 3, pentakills: 5},
  ];

  displayedColumns: string[] = ['name', 'games', 'kda', 'cs', 'quad', 'pentakills'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Champions>;

  // @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.champions);
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
}
