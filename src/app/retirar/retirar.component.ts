import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-retirar',
  templateUrl: './retirar.component.html',
  styleUrls: ['./retirar.component.css']
})
export class RetirarComponent implements OnInit {

  @Input() name:string;
  @Input() amount:number;

  people:any;

  constructor(private http: HttpClient) { 
    http.get('http://augustoflores.pagekite.me/people')
    .subscribe(res=>{
      console.log(res)
      this.people=res
    }
  }

  ngOnInit() {
   
  }

  retira(){
    this.http.post('http://augustoflores.pagekite.me/logs', {
      name: this.name,
      amount: this.amount * -1
    })
    .subscribe(res=>{
      console.log(res)
    }
  }

}
