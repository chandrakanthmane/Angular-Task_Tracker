import { Component, DoCheck, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { UIService} from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit, OnDestroy, OnChanges,DoCheck{
  @Output() onAddTask = new EventEmitter();
  text!:string;
  day!: string;
  remainder:boolean=false;
  showAddTask: boolean=false;
  subscription: Subscription;
  

  constructor(private uiService: UIService){
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
    //alert(this.showAddTask)
  }

ngOnChanges(changes: SimpleChanges): void {
  this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
}

ngDoCheck(): void {
  this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
}

  ngOnInit(): void {
    
  }

  addTask(){
    if(!this.text && !this.day) {
      alert('Please enter valid Details');
    }

    const task={
      text: this.text,
      time: this.day,
      remainder: this.remainder
    }
    if(this.text && this.day){
      this.onAddTask.emit(task);

   this.text='';
   this.day='';
   this.remainder=false;

    }
   
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
