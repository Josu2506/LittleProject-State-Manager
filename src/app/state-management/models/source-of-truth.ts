import { ProjectObject } from "./project-object";

export interface SourceOfTruthState {
  key: string;
  state: any;
}

export type SourceOfTruth = Map<string, ProjectObject>;
