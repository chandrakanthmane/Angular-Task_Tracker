import { Component,OnInit } from '@angular/core';
import { TaskService} from '../../services/task.service'
import {task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: task[]= [];

  constructor(private taskService: TaskService){

  }

  ngOnInit(){
   this.taskService.getTask().subscribe((tasks)=> this.tasks= tasks);
  }

  deleteTask(task:task){
    this.taskService.delete(task)
    .subscribe(()=> this.tasks= this.tasks.filter(x => x.id !== task.id));
  }

  toggleRemainder(task:task){
    task.remainder= !task.remainder;
    this.taskService.updateRemainder(task).subscribe();
  }

  onAddTask(task:task){
    this.taskService.addTask(task).subscribe(
      (task)=> this.tasks.push(task)
    );
  }

}
