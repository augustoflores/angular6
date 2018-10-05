import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  @Input() name:string;
  @Input() amount:number;

  people:any;

  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
   
  }

  registra():void{
    this.http.post('http://augustoflores.pagekite.me/logs', {
      name: this.name,
      amount: this.amount * -1
    })
    .subscribe(res=>{
      this.http.post('http://augustoflores.pagekite.me/people', {
        name: this.name
      })
      .subscribe(res=>{
        console.log(res)
      }
    }
    
  }

}
