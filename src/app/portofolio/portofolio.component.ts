
import { Component } from '@angular/core';
import { Event } from '@angular/router';
@Component({
  selector: 'app-portofolio',
  imports: [],
  templateUrl: './portofolio.component.html',
  styleUrl: './portofolio.component.css'
})
export class PortofolioComponent {
  Items:string[]=[
    "Images/poert1.png",
    "Images/port2.png",
    "Images/port3.png",
    "Images/poert1.png",
    "Images/port2.png",
    "Images/port3.png"
  ]
 


  ImageSrc:string="";
  flag:boolean=true;
  
  Hide(element:EventTarget|null,img:HTMLImageElement):void{
    if(element==img) return;
      this.flag=true
  }
   
}
