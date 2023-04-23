import { EmptyUserState } from "./states";

export enum SourceOfTruthKeys {
  'USER' = 'user',
}

export const iniSourceOfTruth = [
  {
    key: SourceOfTruthKeys.USER,
    state: EmptyUserState,
  },
];
