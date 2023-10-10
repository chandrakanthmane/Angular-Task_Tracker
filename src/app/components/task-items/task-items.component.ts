import { Component, EventEmitter, Input, Output } from '@angular/core';
import {task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent {
  @Input() task!: task;
  @Output() deleteTask = new EventEmitter();
  @Output() toggleRemainder = new EventEmitter();
  icon= faTimes;

  delete(task: task){
  this.deleteTask.emit(task);
  }

  onToggle(task:task){
    this.toggleRemainder.emit(task);
  }
}
