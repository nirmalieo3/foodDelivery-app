import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MsgService } from 'src/app/service/msg.service';
import { LogintwoComponent } from '../logintwo/logintwo.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public observableArr: any;
   public studentForm: FormGroup;
   public password;
   public idUtente;
   public loginMessage;
  constructor( 
    public dialog: MatDialog, 
    public loginDialogRef: MatDialogRef<LoginComponent>,
    public msgService: MsgService) {}
  openDialog2() {
    const dialogRef = this.dialog.open(LogintwoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.studentForm.reset();
      this.loginMessage = '';
    });
  }
ngOnInit(): void {
  this.studentForm = new FormGroup({   
    username: new FormControl('',[
       Validators.required,
       Validators.minLength(6),]),  
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(14),])  
    })
  }
postDati(){
  const urlData = "http://l4com.labforweb.it/backend/web/test/ws/users/checkUser.php";
   let dataParam = {
     "username": this.studentForm.get('username').value,
     "password": this.studentForm.get('password').value
   }
   
    this.msgService.postPeople('POST', urlData, dataParam).subscribe(data=>{
     if(data && data.body) {
        this.idUtente = data.body.IdUtente;
      if(data.body.loggedIn){
        this.loginDialogRef.close(data.body.loggedIn);//logged in came from api
         } else {
          this.loginMessage = data.body.message;
       }
     }
     this.msgService.setIdUtente(this.idUtente);  
    })
  }
}
