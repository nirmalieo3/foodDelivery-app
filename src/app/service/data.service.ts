import { MsgService } from './msg.service';
import { SharedService } from './shared.service';
import { Dettaglio } from './../module/dettaglio';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profilo } from '../module/profilo';
import { Ordine } from '../module/ordine';

const urlDettaglio = "http://l4com.labforweb.it/backend/web/index.php?r=utenti/ordine&IdOrdine=1"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private msgSrv: MsgService) { }
  getProfilo():Observable<Profilo[]> {
    let idUser = this.msgSrv.getIdUtente();
    let urlProfilo = " http://l4com.labforweb.it/backend/web/index.php?r=utenti/profile&id_usr=" + idUser;
    return this.http.get<Profilo[]>(urlProfilo);
  }
  getOrdine():Observable<Ordine[]> {
    let idUser = this.msgSrv.getIdUtente();
    let urlOrdine =" http://l4com.labforweb.it/backend/web/index.php?r=utenti/ordini&id_usr=" + idUser;
    return this.http.get<Ordine[]>(urlOrdine);
  }
  getDettaglio(item):Observable<Dettaglio[]> {
    console.log('item', item);
    let urlDettaglio ="http://l4com.labforweb.it/backend/web/index.php?r=utenti/ordine&IdOrdine=" + item.IdOrdine;
    return this.http.get<Dettaglio[]>(urlDettaglio);
  }

}
