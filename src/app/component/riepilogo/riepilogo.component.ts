import { Component, OnInit } from '@angular/core';
import { MsgService } from 'src/app/service/msg.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-riepilogo',
  templateUrl: './riepilogo.component.html',
  styleUrls: ['./riepilogo.component.css']
})
export class RiepilogoComponent implements OnInit {
  personeList:any;
  nome;
  indirizzo;
  totale;
  
  public cartItems: any;
  cartTotal;
 
  constructor(public sharedService: SharedService, public msgService: MsgService) { }

  ngOnInit(): void {
    console.log(this.sharedService.getCartItems());
       this.cartItems = this.sharedService.getCartItems();
       this.getCardTotal();
  }
  getCardTotal(){
    console.log('cartItems', this.cartItems);
    this.cartTotal = 0;
    this.cartItems.forEach(item=>{
      this.cartTotal += (item.qty * item.price)
    })
  }


  getDati(){
    this.msgService.getPeople().subscribe(data=>{
    console.log(data, 'Dati');
     this.personeList = data;
    })
  };
  postDati(){
    this.msgService.postPeople({ "name": this.nome,
    "address": this.indirizzo,
    "items": this.cartItems,
    "total": this.cartTotal
    
    }).subscribe(data=>{
     
      this.nome = null;
      console.log(data, 'Dati2');
      this.getDati();
    })
  };

}
