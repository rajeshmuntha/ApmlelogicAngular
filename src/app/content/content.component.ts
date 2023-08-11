import { Component, OnInit } from '@angular/core';
// import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() {}



  
  ngOnInit(): void {  
  }  
  Showprogressbar()  
  {  
    this.Showprogress(); 
    // this.timer();  
  }  
  progress = 0;  
 Showprogress()  
 {  
 this.progress = 0;  
   setInterval(() => this.ProgressBar(), 200)  
   }  
  
 ProgressBar() {  
   
   if (this.progress == 0) {  
     this.progress = this.progress + 1  
   } else {  
     this.progress = this.progress + 1;  
     if (this.progress = this.progress + 10) {  
       this.progress == this.progress + 1;  
       if (this.progress >= 100) {  
         this.progress = 100;  
       }  
     }  
   }  
 }  
 
}  