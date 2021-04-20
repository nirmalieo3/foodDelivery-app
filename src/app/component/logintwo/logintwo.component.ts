import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MsgService } from 'src/app/service/msg.service';

@Component({
  selector: 'app-logintwo',
  templateUrl: './logintwo.component.html',
  styleUrls: ['./logintwo.component.css']
})
export class LogintwoComponent implements OnInit {
   productForm: FormGroup;
 constructor(public msgService: MsgService) { }
   ngOnInit(): void {
    this.productForm = new FormGroup({ 
      name: new FormControl('',[
        Validators.required,
        Validators.maxLength(10)]),  
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")]),
      username: new FormControl('',[
        Validators.required,
        Validators.minLength(6),]),  
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14),]), 
      confirmPassword: new FormControl('', [
        Validators.required]),
      security: new FormControl('', 
        Validators.requiredTrue), 
  })
  this.productForm.get('confirmPassword').valueChanges.subscribe(
    (val)=>{
      this.confirmPasswordMessage();
    }
  )
}
postDati(){
  const urlData = "http://l4com.labforweb.it/backend/web/test/ws/users/addUser.php";
   let dataParam = {
     "nominativo": this.productForm.get('name').value,
     "email": this.productForm.get('email').value,
     "username": this.productForm.get('username').value,
     "password": this.productForm.get('password').value
   }
   console.log('dataPram', dataParam);
    this.msgService.postPeople('POST', urlData, dataParam).subscribe(data=>{   
   })
 }

 confirmPasswordMessage(){
   console.log('value', this.productForm.get('confirmPassword').value);
   let password = this.productForm.get('password').value;
   let confirmPassword = this.productForm.get('confirmPassword').value;
   if(password == confirmPassword){
    this.productForm.get('confirmPassword').setErrors(null);
   } else {
    this.productForm.get('confirmPassword').setErrors({'confirmPassword': true});
   }
 }
}
