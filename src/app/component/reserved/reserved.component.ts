import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.css']
})
export class ReservedComponent implements OnInit {
  ordineList;
  dettaglioList;
  profiloList;
  selectedRow: any;
  displayedColumns: string[] = ['dataOrdine', 'costiConsegna', 'dettagli'];
  dataSource = new MatTableDataSource<any>();
  constructor(public dataService: DataService) { }
  ngOnInit(): void {
     this.getOrdineDati();
     this.getProfilodati();
 }
  getOrdineDati(){
      this.selectedRow = [];
      this.dataService.getOrdine().subscribe(data=>{
      this.ordineList = data;
      this.ordineList.map((val)=>{
        this.selectedRow.push(false);//all rows are false
      })
      this.dataSource = new MatTableDataSource<any>(this.ordineList);    
    }) 
  }
  getDettaglioDati(item, i){
    console.log(this.dettaglioList)
    this.dataService.getDettaglio(item).subscribe(data=>{
     this.dettaglioList = data;
   })
    this.selectedRow.map((val, j)=> {
      this.selectedRow[j] = false;  //all rows are false again
    });
    this.selectedRow[i] = true;// only selected row is true
  }
  getProfilodati(){
    
    this.dataService.getProfilo().subscribe(data=>{
    this.profiloList = data;
    })
  }
}
