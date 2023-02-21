import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

const httpOption = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) {

  }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.url);
  }

  updateTask(task: Task): Observable<Task>{
    const urlUpdate = `${this.url}/${task.id}`;
    return this.http.put<Task>(urlUpdate, task, httpOption);
  }

  deleteTask(task: Task): Observable<Task>{
    const urlDelete = `${this.url}/${task.id}`;
    return this.http.delete<Task>(urlDelete); 
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.url, task, httpOption);
  }
}
