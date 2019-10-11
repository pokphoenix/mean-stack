import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  @Input("count2") count =0;
  @Output("reset2") reset = new EventEmitter<void>()    // void  = no return to parent
  constructor(private shared:SharedService) { }

  ngOnInit() {
  }

  onClickReset(){
    this.reset.emit();
  }

  onClickLogout(){
    this.shared.logout();
  }

  onClickToggleLogin(){
    if(this.shared.getStatus()){
      this.shared.logout();
    }else{
      this.shared.login();
    }
  }

}
