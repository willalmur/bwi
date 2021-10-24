import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {
  checkList: boolean = true;
  progressList: boolean = false;
  itemList: boolean = false;

  constructor() {  }

  ngOnInit(): void {
  }

  btnClicked(btnClick: any){
    console.log(btnClick);
    if (btnClick === 'Done') {
      this.checkList = true;
      this.progressList = false;
      this.itemList = false;
    }
    else if (btnClick === 'Stop') {
      this.checkList = false;
      this.progressList = true;
      this.itemList = false;
    }
    else if (btnClick === 'Restart') {
      this.checkList = false;
      this.progressList = false;
      this.itemList = true;
    }
  }

}
