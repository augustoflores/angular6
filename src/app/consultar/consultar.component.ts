import { Component, OnInit } from '@angular/core';
import {Log} from "../log";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
  logs: any;
  totales: Log[];
  constructor(private http: HttpClient) {
    http.get('http://augustoflores.pagekite.me/logs')
    .subscribe(res=>{
      this.logs=res
      let users = [];
      if (this.logs) {
          this.logs.forEach(log => {
              let nombre = log.name
              let cantidad = log.amount;
              let index = users.findIndex(u => u.name === log.name);
              if (index >= 0) {
                  users[index].amount += cantidad
              } else {
                  users.push(log);
              }
          });
      }
      this.totales= users;
    })
  }

  ngOnInit() {

    

  }

}
