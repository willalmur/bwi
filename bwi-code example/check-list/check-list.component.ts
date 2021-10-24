import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent implements OnInit {
  processes: object[] = [
    {functionName: 'function 1', isChecked: false},
    {functionName: 'function 2', isChecked: false},
    {functionName: 'function 3', isChecked: false},
    {functionName: 'function 4', isChecked: false},
    {functionName: 'function 5', isChecked: false},
    {functionName: 'function 6', isChecked: false},
    {functionName: 'function 7', isChecked: false},
    {functionName: 'function 8', isChecked: false},
    {functionName: 'function 9', isChecked: false},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
