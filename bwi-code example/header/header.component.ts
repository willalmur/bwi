import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() titleText: string = 'Select Function';
  @Output() buttonText: string = 'Done';
  @Output() statusText: string = 'Choose the functions you wish to apply:';
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.buttonText === 'Done') {
      this.buttonText = 'Stop';
      this.titleText = 'Validation';
      this.statusText = 'Configuration is being validated...'
    }
    else if (this.buttonText === 'Stop') {
      this.buttonText = 'Restart';
      this.titleText = 'Report';
      this.statusText = 'Configuration was validated successfully!'
    }
    else if (this.buttonText === 'Restart') {
      this.buttonText = 'Done';
      this.titleText = 'Select Function';
      this.statusText = 'Choose the functions you wish to apply:'
    }
    this.btnClick.emit(this.buttonText);
  }
}

