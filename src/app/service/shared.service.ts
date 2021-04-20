import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Menu } from '../module/menu';
import { Products } from '../module/product';

const urlMockServer = " http://l4com.labforweb.it/backend/web/index.php?r=ristoranti/list";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
   cartItems:any=[];
   cartTotal:number;
   ristoranteData;

constructor(private http: HttpClient, private router: Router) { }
  
getProducts():Observable<Products[]> {
    return this.http.get<Products[]>(urlMockServer);
  }

  getMenu(url):Observable<Menu[]> {
    return this.http.get<Menu[]>(url);
  }

  setCartItems(itemArray){
    this.cartItems = itemArray;
    console.log('service set cart items', this.cartItems);
  }  
  getCartItems(){
    console.log('service get cart items', this.cartItems);
    return this.cartItems;
   
  }
  

  setRistoranteData(item){
    this.ristoranteData = item;
    this.router.navigate(['/menu'])
  }

  getRistoranteData(){
    return this.ristoranteData;
  }
  
}

