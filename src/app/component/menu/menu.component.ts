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
 
  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    
    this.getMenudati();
  
  }

  addItemsToCart(item){
    let uniqueProductNames = this.cartItems.map(val => val.Prodotto);
    if(!uniqueProductNames.includes(item.Prodotto)){
      this.cartItems.push({
        Prodotto: item.Prodotto,
        qty:item.qty,
        price: item.Prezzo
      })
    } else {
      this.cartItems.map(
        (val)=>{
          if(val.Prodotto == item.Prodotto){
            val.qty += item.qty;
          }
        }
      )
    }
    this.getCardTotal();
    console.log('cart unqiue', item);
    this.sharedService.setCartItems(this.cartItems);
  }

  getCardTotal(){
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
      this.sharedService.setCartItems(this.cartItems);
    }
  
 
  getMenudati(){
    this.sharedService.getMenu().subscribe(data=>{
      console.log(data,'Dati');
      this.menuList = data;
      this.menuList.map(val=> val.qty = 1); //added to array from api
    })
  }
}
