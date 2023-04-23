import { iniSourceOfTruth } from '../store';
import { checkIfConditionMet } from '../utilities';
import { ProjectObject } from './project-object';
import { SourceOfTruth } from './source-of-truth';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProjectState {
  private observerArray: SourceOfTruth = new Map();

  constructor() {
    iniSourceOfTruth.forEach((SourceOfTruthState) => {
      const { key, state } = SourceOfTruthState;
      this.createObservable(key, state);
    });
  }

  private createObservable(key: string, state: any) {
    const found = this.observerArray.has(key);
    if (found) {
      console.log(
        `The key ${key} already exist in the source of truth. Tha action will be ignored.`
      );
    } else {
      const projectObject = new ProjectObject(state);
      this.observerArray.set(key, projectObject);
    }
  }

    getEntity(key: string): ProjectObject {
    const found = checkIfConditionMet(
      { met: this.observerArray.has(key), value: this.observerArray.get(key) },
      `The key ${key} does not exist in the source of truth.`
    );
    return found;
  }
}
