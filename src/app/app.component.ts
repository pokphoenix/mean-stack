import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { SharedService } from './services/shared.service';


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


  time1 = 0;

  @ViewChild("com1",{static:false}) com1:Page1Component;
  @ViewChild("com2",{static:false}) com2:Page2Component;
  
  ngOnInit(): void {
    this.getUser();
  }


  constructor(private http:HttpClient,private shared:SharedService){

  }

  onSubmit(data){
    this.http.post<any>('http://localhost:3000/api',data).subscribe(result=>{
      this.getUser();
    })
  }
  
  onChange1(event){
    this.time1 = event;
  }
   
  getUser(){
    this.http.get<any>("http://localhost:3000/api").subscribe(result=>{
      this.mDataArray =  result.data;
    })
  }

  onClick(){
    this.version++;
  }
  onResetVersion(){
    this.version = 0;
  }

  onClickViewChild(){ // this method for change variable in child
    this.com1.count = 10;
    this.com1.change.emit(1000);
    this.com2.reset.emit();
  }

  onObservableLoad(){
    let callback = result=>{
      alert(JSON.stringify(result));
    }
    this.http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe(callback);
  }

  onPromiseLoad(){
    this.http.get("https://jsonplaceholder.typicode.com/todos/1").toPromise().then(result=>{
      alert(JSON.stringify(result));
      // return result;
    }).then(()=>{
      alert("2")
    }).then(()=>{
      alert("3")
    })
  }

  onPromiseMultipleLoad(){
    let p1 = this.http.get("https://jsonplaceholder.typicode.com/todos/1").toPromise();
    let p2 = this.http.get("https://jsonplaceholder.typicode.com/todos/2").toPromise();
    let p3 = this.http.get("https://jsonplaceholder.typicode.com/todos/3").toPromise();
    Promise.all([p1,p2,p3]).then(result=>{
      alert(JSON.stringify(result[0]));
      alert(JSON.stringify(result[1]));
      alert(JSON.stringify(result[2]));
    })
  }

  async onAsyncAwaitLoad(){
    let result1 = await this.http.get("https://jsonplaceholder.typicode.com/todos/1").toPromise()
    alert(JSON.stringify(result1))

    let result2 = await this.http.get("https://jsonplaceholder.typicode.com/todos/2").toPromise()
    alert(JSON.stringify(result2))
    
    let result3 = await this.http.get("https://jsonplaceholder.typicode.com/todos/3").toPromise()
    alert(JSON.stringify(result3))
  }

}
