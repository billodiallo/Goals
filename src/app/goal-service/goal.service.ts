import { Injectable } from '@angular/core';
import { Goal } from '../goal';
import {GOALS  } from  '../goal'

@Injectable({
  providedIn: 'root'
})
export class GoalService {


  getGoals():Goal[]{
    return GOALS;
  }
 // getGoal(id){
  //  for (let goal of Goals){
  //    if (goal.id == id){
   //     return goal;
  //    }
  //  }
  //}

  constructor() { }
}