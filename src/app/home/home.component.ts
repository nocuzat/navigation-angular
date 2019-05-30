import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeyService } from '../key.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  arrayOne = [{path:"welcome",name:"welcome"},
  {path:"welcome/contact",name:"contact"},
  {path:"welcome/details",name:"details"},
  {path:"welcome/subject",name:"subject"}]
  
  constructor(private router : Router) { }

  ngOnInit() {
  }
  onNavigate(item){
    this.router.navigateByUrl(item.path)
  } 
  onLogin(){
    this.router.navigateByUrl("welcome")
  }
}
