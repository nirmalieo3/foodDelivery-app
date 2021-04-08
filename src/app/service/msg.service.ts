import { MenuComponent } from './../component/menu/menu.component';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

/*const urlData = "https://run.mocky.io/v3/246a811f-c5f3-4c0c-b97f-c3425e918dac";*/
const urlData = " http://localhost:3000"
@Injectable({
    providedIn: 'root'
})
export class MsgService{
    cartItems:any = [];
    constructor(private http: HttpClient) { }
      
    setCartItems(itemArray){
       this.cartItems.push(itemArray); 
    }  

    getCartItems(){
      return this.cartItems;
    }
    
    postPeople(oggetto):Observable<any>{
      const headers = 
      new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.post<any>(urlData + '/people', oggetto , {headers})
    }

    getPeople():Observable<any>{
      return this.http.get(urlData + '/people' );
    }
}