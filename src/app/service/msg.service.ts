//import { MenuComponent } from './../component/menu/menu.component';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MsgService{
  public idUtente;
  public riepilogoData;

constructor(private http: HttpClient) { }

  setIdUtente(id){
     this.idUtente = id;
    }
  getIdUtente(){
    return this.idUtente;
  }
    
postPeople(paramMethod, url, oggetto):Observable<any>{
  let httpRequest = new HttpRequest(paramMethod, url,  oggetto, {responseType: 'json'});
  httpRequest = httpRequest.clone({
    headers: httpRequest.headers.set("Content-Type", "application/json")
    })
     return this.http.request(httpRequest);
  }

 getPeople(url):Observable<any>{
      return this.http.get(url );
  }
 }