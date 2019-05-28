import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
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

}
