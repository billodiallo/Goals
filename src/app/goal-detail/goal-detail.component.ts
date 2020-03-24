import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
...
export class GoalDetailComponent implements OnInit {

  @Input() goal: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
