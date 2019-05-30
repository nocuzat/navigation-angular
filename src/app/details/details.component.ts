import { Component, OnInit } from '@angular/core';
import { KeyService } from '../key.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private KeyProvider: KeyService) {
    this.KeyProvider.getNews().subscribe((data)=>{console.log(data)})
   }

  ngOnInit() {
  }

}
