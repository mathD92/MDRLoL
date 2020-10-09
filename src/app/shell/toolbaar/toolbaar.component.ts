import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-toolbaar',
  templateUrl: './toolbaar.component.html',
  styleUrls: ['./toolbaar.component.scss']
})
export class ToolbaarComponent implements OnInit {
  isLogged: boolean;
  name: string;

  constructor(public dialog: MatDialog) {  }

  ngOnInit(): void {
    this.isLogged = false;
  }

  openDialogConnect(): void {
    const dialogRefConnect = this.dialog.open(ToolbarDialogConnect, {
      data: {name: this.name}
    });

    dialogRefConnect.afterClosed().subscribe(result => {
      this.name = result;
      console.log('name', this.name);
      console.log('result', result);
    });
  }
  openDialogInscription(): void {
    this.dialog.open(ToolbarDialogInscription);
  }
  openDialogDisconnect(): void {
    const dialogRefDisconnect = this.dialog.open(ToolbarDialogDisconnect, {
      data: {name: this.name}
  });
  }
}

@Component({
  selector: 'app-toolbar-dialog-inscription',
  templateUrl: 'toolbar-dialog-inscription.html',
})
// tslint:disable-next-line: component-class-suffix
export class ToolbarDialogInscription {

  constructor(
    public dialogRef: MatDialogRef<ToolbarDialogInscription>, public dialog: MatDialog) {}

    onNoClick(): void {
      this.dialogRef.close();
      this.dialog.open(ToolbarDialogConnect);
    }
 }

@Component({
  selector: 'app-toolbar-dialog-connect',
  templateUrl: 'toolbar-dialog-connect.html',
})
// tslint:disable-next-line: component-class-suffix
export class ToolbarDialogConnect {

  constructor(
    public dialogRefConnect: MatDialogRef<ToolbarDialogConnect>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onConfirm(): void {
      console.log('data', this.data);
      this.dialogRefConnect.close();
    }

    onNoClick(): void {
      this.dialogRefConnect.close();
      this.dialog.open(ToolbarDialogInscription);
    }
 }

@Component({
  selector: 'app-toolbar-dialog-disconnect',
  templateUrl: 'toolbar-dialog-disconnect.html',
})
// tslint:disable-next-line: component-class-suffix
export class ToolbarDialogDisconnect {

  constructor(
    public dialogRefDisconnect: MatDialogRef<ToolbarDialogDisconnect>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
      this.dialogRefDisconnect.close();
    }
}



