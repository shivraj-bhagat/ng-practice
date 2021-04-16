import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getServiceData() {
    return {
      name: 'Shiv Raj Bhagat',
      age: 35,
      id: 100
    };
  };
}
