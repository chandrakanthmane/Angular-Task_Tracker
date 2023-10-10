import { Injectable } from '@angular/core';
import {TASKS} from '../mock-task';
import {task} from '../Task';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

const headerOptions= {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl='http://localhost:5000/tasks';
  constructor(private http: HttpClient) { }

  getTask(): Observable<task[]>{
    return this.http.get<task[]>(this.apiUrl);
  }

  delete(task:task): Observable<task>{
    const url= `${this.apiUrl}/${task.id}`;
    return this.http.delete<task>(url);
  }

  updateRemainder(task:task): Observable<task>{
    const url= `${this.apiUrl}/${task.id}`;
    return this.http.put<task>(url,task,headerOptions);
  }

  addTask(task:task): Observable<task>{
    return this.http.post<task>(this.apiUrl,task,headerOptions);
  }
}
