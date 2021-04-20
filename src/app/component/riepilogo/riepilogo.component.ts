import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { MatTableDataSource } from '@angular/material/table';
import { MsgService } from 'src/app/service/msg.service';
import { SharedService } from 'src/app/service/shared.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-riepilogo',
  templateUrl: './riepilogo.component.html',
  styleUrls: ['./riepilogo.component.css']
})
export class RiepilogoComponent implements OnInit {
  
  //personeList:any;
  nome;
  indirizzo;
  totale;
  public cartItems: any;
   cartTotal;
   disableArea:boolean = true;

   //ELEMENT_DATA: cartItems;
   //displayedColumns: string[] = ['Prodotto', 'Prezzo'];
   //dataSource = new MatTableDataSource<any>();
  constructor(public dialog: MatDialog, public sharedService: SharedService, public msgService: MsgService) { }
      
  ngOnInit(): void {

       this.cartItems = this.sharedService.getCartItems();
       this.getCardTotal();
       //this.dataSource = new MatTableDataSource<any>(this.cartItems);
  }
  getCardTotal(){
      this.cartTotal = 0;
      this.cartItems.forEach(item=>{
      this.cartTotal += (item.qty * item.price)
    })
  }

  postDati(){
    if(this.msgService.getIdUtente()){
      const urlData = "http://l4com.labforweb.it/backend/web/test/ws/users/insertOrdine.php";
      let dataParam = [];
      this.cartItems.map(val =>{
        dataParam.push(
          {
            "Ristorante": this.sharedService.getRistoranteData().Ristorante,
            "IdRistorante": this.sharedService.getRistoranteData().IdRistorante,
            "IdProdotto": val.idProdotto,
            "P_utente":  this.msgService.getIdUtente(),
            "Prezzo": val.price,
            "Prodotto": val.Prodotto,
            "Unita": val.qty,
            "Descrizione": val.descrizione
          }
        )
      }); 
      
      this.msgService.postPeople('POST', urlData, dataParam).subscribe(data=>{  
        this.disableArea = false;
      })
    }else{
      const dialogRef = this.dialog.open(LoginComponent);
      dialogRef.afterClosed().subscribe(result => {
       
      });
    }
  }
}

