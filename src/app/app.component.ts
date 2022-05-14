import { Component, OnInit } from '@angular/core';

import { BdServiceService } from './bd-service.service';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ionic-angular-1FM045';

  constructor(private bd: BdServiceService) {}

  usuario: string = "";
  avatar: string = "";

  ngOnInit(): void {
    this.bd.getDatosUsuario().subscribe(res => {
      console.log(res);
      
    })
  }
}
