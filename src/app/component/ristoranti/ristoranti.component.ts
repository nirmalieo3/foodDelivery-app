import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-ristoranti',
  templateUrl: './ristoranti.component.html',
  styleUrls: ['./ristoranti.component.css']
})
export class RistorantiComponent implements OnInit {
   public productList: any;
constructor(public sharedService : SharedService,
    ) { }

  ngOnInit(): void {
    this.getDati();
  }
  getDati(){
    this.sharedService.getProducts().subscribe(data=>{
      this.productList = data;
    })
  }

  clickRistorante(item){
    this.sharedService.setRistoranteData(item);
  }
}
