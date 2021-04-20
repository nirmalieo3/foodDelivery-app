import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartItems: any;
  cartTotal;
  costoConsegna;
  ordineMinimo;
  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.cartItems = this.sharedService.getCartItems();
    console.log('carello cart items', this.cartItems);
    if(this.sharedService.getRistoranteData() && this.cartItems && this.cartItems.length){
      this.costoConsegna = Number(this.sharedService.getRistoranteData().CostiConsegna);
      this.ordineMinimo = this.sharedService.getRistoranteData().OrdineMinimo;
    } else {
      this.costoConsegna = 0;
    }
    this.getCardTotal();
  }
  getCardTotal(){
    console.log('cartItems', this.cartItems);
    this.cartTotal = 0;
    this.cartItems.forEach(item=>{
      this.cartTotal += (item.qty * item.price)
    })
  }
   
  inc(item){
    console.log('inc', item);
    item.qty += 1;
    this.getCardTotal();
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
    }
  
}
