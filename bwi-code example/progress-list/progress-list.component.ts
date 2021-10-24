import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-list',
  templateUrl: './progress-list.component.html',
  styleUrls: ['./progress-list.component.scss']
})
export class ProgressListComponent implements OnInit {
  processes: string[] = ['function 0', 'function 1', 'function 2', 'function 3', 'function 4', 'function 5', 'function 6' , 'function 7', 'function 8', 'function 9', 'function 10']

  constructor() { }

  ngOnInit(): void {
  }

}
