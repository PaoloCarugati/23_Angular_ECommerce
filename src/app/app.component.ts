import { Component, OnInit } from '@angular/core';
import { ECommerce } from './models/ecommerce.model';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ECommerce';
  URL = "https://my-json-server.typicode.com/paolocarugati/PC_ecommerce/db";

  data: ECommerce;
  oECommerce: Observable<ECommerce>;

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.oECommerce = this.http.get<ECommerce>(this.URL);
    this.oECommerce.subscribe( d => { 
        this.data = d;
        //alert(this.data.magliette.length)
    });    
  }
}
