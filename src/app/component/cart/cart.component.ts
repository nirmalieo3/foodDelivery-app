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
  constructor(public sharedService: SharedService) { }

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
