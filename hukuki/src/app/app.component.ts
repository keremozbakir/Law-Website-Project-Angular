import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  constructor(private title:Title,private meta:Meta) { }
  
  ngOnInit(): void {
    this.title.setTitle("Safa Hukuk")
     this.meta.updateTag({name:"Safa Hukuk" , content:"Safa Hukuk Kocaeli"})
    
  }
}
