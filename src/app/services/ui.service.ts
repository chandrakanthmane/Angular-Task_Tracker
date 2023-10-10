import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  private showAddtask:boolean= false;
  subject = new Subject<boolean>();
  buttonValue!: Observable<boolean>;
  constructor() { }

  onAddTask(): void{
    this.showAddtask= !this.showAddtask;
    //alert(this.showAddtask);
    this.subject.next(this.showAddtask);
  }

  onToggle(){
  //   this.subject.next(this.showAddtask);
         this.buttonValue=this.subject.asObservable();
        return this.buttonValue;

  }
}
