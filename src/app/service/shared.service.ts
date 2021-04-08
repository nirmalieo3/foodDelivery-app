import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../module/menu';
import { Products } from '../module/product';
const urlMenu = "http://l4com.labforweb.it/backend/web/index.php?r=ristoranti/ristoranti-prodotti&IdRistorante=3";
const urlMockServer = " http://l4com.labforweb.it/backend/web/index.php?r=ristoranti/list";
@Injectable({
  providedIn: 'root'
})
export class SharedService {
   cartItems:any=[];
   cartTotal:number;
  constructor(private http: HttpClient) { }
  getProducts():Observable<Products[]> {
    return this.http.get<Products[]>(urlMockServer);
  }

  getMenu():Observable<Menu[]> {
    return this.http.get<Menu[]>(urlMenu);
  }

  setCartItems(itemArray){
    this.cartItems = itemArray;
    //this.cartItems.push(itemArray); 
  }  

  getCartItems(){
    return this.cartItems;
  }
}
