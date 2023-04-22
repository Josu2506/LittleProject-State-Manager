import { checkIfCondiitonMet } from '../utilities';
import { ProjectObject } from './project-object';
import { SourceOfTruth, SourceOfTruthState } from './source-of-truth';

export class ProjectState {
  private observerArray: SourceOfTruth = new Map();

  constructor(SourceOfTruth: SourceOfTruthState[]) {
    SourceOfTruth.forEach((SourceOfTruthState) => {
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
    const found = checkIfCondiitonMet(
      { met: this.observerArray.has(key), value: this.observerArray.get(key) },
      `The key ${key} does not exist in the source of truth.`
    );
    return found;
  }
}
