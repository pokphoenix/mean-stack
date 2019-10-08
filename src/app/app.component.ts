import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mean';
  constructor(private http:HttpClient){

  }

  onSubmit(data){
    alert(JSON.stringify(data))
    this.http.post<any>('http://localhost:3000/api',data).subscribe(result=>{
      //alert(JSON.stringify(result))
    })
  }

  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  
  }
}
