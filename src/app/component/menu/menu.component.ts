import { MsgService } from 'src/app/service/msg.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  cartItems = [];
  item;
  cartTotal=0;
  menuList:any;
  costoConsegna;
  ordineMinimo;
 
constructor(public sharedService: SharedService,
  public msgService: MsgService) { }

 ngOnInit(): void {
    this.getMenudati();
 }
  
addItemsToCart(item){
  let uniqueProductNames = this.cartItems.map(val => val.Prodotto);
    if(!uniqueProductNames.includes(item.Prodotto)){
     this.cartItems.push({
      Prodotto: item.Prodotto,
      qty:item.qty,
      price: item.Prezzo,
      idProdotto: item.IdProdotto,
      descrizione: item.Descrizione
     })
  } else {
  this.cartItems.map(val=>{
    if(val.Prodotto == item.Prodotto){
      val.qty += item.qty;
     }
    })
  }
    
this.getCardTotal();
    this.sharedService.setCartItems(this.cartItems);
  }

getCardTotal(){
  this.cartTotal = 0;
  this.cartItems.forEach(item=>{
  this.cartTotal += (item.qty * item.price)
  })
  this.cartTotal = Number(this.cartTotal);
}
   
inc(item){
 item.qty += 1;
 this.getCardTotal();
 console.log('inc cart items', this.cartItems);
}

dec(item){
  if(item.qty != 1){
    item.qty -= 1;
  }
  this.getCardTotal();
}
 
public deleteItem(item, index){
   this.cartItems.splice(index, 1);
   this.getCardTotal();
   this.sharedService.setCartItems(this.cartItems);
 }
  
 
getMenudati(){
 
 let idRistorante = null;
 if(this.sharedService.getRistoranteData()){
  idRistorante = this.sharedService.getRistoranteData().IdRistorante;
  this.costoConsegna = Number(this.sharedService.getRistoranteData().CostiConsegna);
  this.ordineMinimo = this.sharedService.getRistoranteData().OrdineMinimo;
}
 let urlData = "http://l4com.labforweb.it/backend/web/index.php?r=ristoranti/ristoranti-prodotti&IdRistorante=" + idRistorante;
   this.sharedService.getMenu(urlData).subscribe(data=>{
    this.menuList = data;
    this.menuList.map(val=> val.qty = 1); //added to array from api
   });
 }
}
