import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserMockService {

  users = [
    {
      id: 1,
      name: 'John',
      username: 'John Doe',
      email: 'john.doe@fai.fr'
    },

    {
      id: 2,
      name: 'Tina',
      username: 'Tina Doe',
      email: 'tina.doe@fai.fr'
    },

    {
      id: 3,
      name: 'Joe',
      username: 'Joe Doe',
      email: 'joe.doe@fai.fr'
    },

    {
      id: 4,
      name: 'Jonny',
      username: 'Jonny Doe',
      email: 'jonny.doe@fai.fr'
    },

  ];

  constructor() { }

  public getAllUser(): Observable<Object> {
    return Observable.create( subscriber => {
      subscriber.next(this.users);
    });
  }

}
