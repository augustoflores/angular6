import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css']
})
export class DepositarComponent implements OnInit {

  @Input() name:string
  @Input() amount:number

  people:any

  constructor(private http: HttpClient) { 
    http.get('http://augustoflores.pagekite.me/people')
    .subscribe((res:any)=>{
      console.log(res)
      this.people=res
    }
  }

  ngOnInit() {
   
  }

  deposita() {
    this.http.post('http://augustoflores.pagekite.me/logs', {
      name: this.name,
      amount: this.amount 
    })
    .subscribe((res:any)=>{
      console.log(res)
    }
  }

}
