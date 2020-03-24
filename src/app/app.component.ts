import { Component } from '@angular/core';
import { Goal } from './goal';
....
export class AppComponent {
  goals:Goal = [
    {id:1,name:'Watch finding Nemo'},
    {id:2,name:'Buy Cookies'},
    {id:3,name:'Get new Phone Case'},
    {id:4,name:'Get Dog Food'},
    {id:5,name:'Solve math homework'},
    {id:6,name:'Plot my world domination plan'},
  ];
}
