import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EmployeeService {

  private saveSubject = new BehaviorSubject<any>('');
  private discardSubject = new BehaviorSubject<any>('');

  constructor() { }

  sendSaveInstruction(data: any) {
    this.saveSubject.next(data);
  }

  receiveSaveInstruction() {
    return this.saveSubject.asObservable();
  }

  sendDiscardInstruction(data: any) {
    this.discardSubject.next(data);
  }

  receiveDiscardInstruction() {
    return this.discardSubject.asObservable();
  }


}
