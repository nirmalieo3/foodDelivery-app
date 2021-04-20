import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchForm: FormGroup;
  cards = [
      {img: "assets/images/galary1.jpg"},
      {img: "assets/images/galary2.jpg"},
      {img: "assets/images/galary3_.jpg"},
      {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWgsitPP7w-CalNngLHFVFVaQuFUjQCgHSw&usqp=CAU"  },
      {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmzKJ1x-dpSq2vJ7lWtUU9fYMPUGst3HfEw&usqp=CAU"  },
      {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN8XnJH5FU4PB07MgoWN9FmAl3XLRU4qhk0w&usqp=CAU"  }
  ];
  constructor() { }
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      'search': new FormControl('', [])
    })
  }
}
