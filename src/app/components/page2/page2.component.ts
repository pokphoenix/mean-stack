import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  @Input("count2") count =0;
  @Output("reset2") reset = new EventEmitter<void>()    // void  = no return to parent   
  constructor() { }

  ngOnInit() {
  }

  onClickReset(){
    this.reset.emit();
  }

}
