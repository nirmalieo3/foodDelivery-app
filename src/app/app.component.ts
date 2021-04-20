import { MsgService } from './service/msg.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './component/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'foodDelivery-app';
  constructor(public router:Router, public dialog: MatDialog, public msgSrv: MsgService) {}
  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => { //result= loggedin
      if(result){
        this.router.navigate(['/reserved']);
      }
    });
  }
  //to go to area reservata
  goAreaReservata(){
    if(this.msgSrv.getIdUtente()){
      this.router.navigate(['/reserved']);
    }else{
      this. openDialog();
    }
  }
}
