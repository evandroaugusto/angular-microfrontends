import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  fullName: string = 'Evandro Oliveira';

  constructor() { }

  getFullName(): string {
    return this.fullName;
  }

  setFullname(fullName:string): void {
    this.fullName = fullName;
  }
}
