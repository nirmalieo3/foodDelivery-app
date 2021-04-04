import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards = [
   {
    
     img: "https://i.pinimg.com/originals/9f/c3/e8/9fc3e8a71a5cdebecf5b2dc35f0739e2.jpg"
   },
   {
   
    img: "https://www.silviocicchi.com/pizzachef/wp-content/uploads/2015/02/c1.png"
  },
  {
    img: "https://blog.giallozafferano.it/adryincucina/wp-content/uploads/2015/05/Collage-pizza-e1584710778650.jpg"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWgsitPP7w-CalNngLHFVFVaQuFUjQCgHSw&usqp=CAU"
  },
  {
   
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmzKJ1x-dpSq2vJ7lWtUU9fYMPUGst3HfEw&usqp=CAU"
  },
  {
   
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN8XnJH5FU4PB07MgoWN9FmAl3XLRU4qhk0w&usqp=CAU"
  }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
