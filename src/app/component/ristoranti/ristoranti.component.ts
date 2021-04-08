import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-ristoranti',
  templateUrl: './ristoranti.component.html',
  styleUrls: ['./ristoranti.component.css']
})
export class RistorantiComponent implements OnInit {
   productList: any;
  constructor(public sharedService : SharedService) { }

  ngOnInit(): void {
    this.getDati();
  }
  getDati(){
    this.sharedService.getProducts().subscribe(data=>{
      console.log(data,'Dati');
      this.productList = data;
    })
  }
}
