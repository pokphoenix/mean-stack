import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  @Input() count = 0;
  @Output() change = new EventEmitter<number>(); 
  constructor(private app:AppComponent) {

  }

  ngOnInit() {
    setInterval(()=>{
      this.change.emit(Date.now())
    },1000)
  }

  onCallParent(){
    this.app.title = "Hi from com1";
  }


}
