import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mean';
  mDataArray:any[] = [];


  //interpolation 
  version = 10 ;
  isProduction = false; 
  account = { username : "poktest" ,age : 17 };
  getResult(){
    return "pok";
  }


  constructor(private http:HttpClient){

  }

  onSubmit(data){
    this.http.post<any>('http://localhost:3000/api',data).subscribe(result=>{
      this.getUser();
    })
  }

  getUser(){
    this.http.get<any>("http://localhost:3000/api").subscribe(result=>{
      this.mDataArray =  result.data;
    })
  }

  ngOnInit(): void {
    this.getUser();
  }
}
