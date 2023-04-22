import { BehaviorSubject } from 'rxjs';

export class DataSharing {
  prop: boolean = false;
  propObservable = new BehaviorSubject(this.prop);

  constructor() {}

  getData() {
    return this.prop;
  }

  getAsyncData(){
    return this.propObservable.asObservable();
  }
  setData(prop: any) {
    this.prop = prop;
  }

  setAsyncData(prop: boolean) {
    this.propObservable.next(prop);
  }
}

const Store = {
  dialog: new BehaviorSubject(false),
  user: new BehaviorSubject({
    name: 'John Doe',
  }),
  equipos: new BehaviorSubject([
    {
      equipo1: {
        name: 'Equipo 1',
      },
    },
  ]),
};
