import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{

  tasks: Task[] = [];

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(task => {
      this.tasks = task
    });
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }

  deleteTask(task: Task){
    if(confirm("Voulez vous vraiment supprimer ?")){
      this.taskService.deleteTask(task).subscribe(() => {
        this.tasks = this.tasks.filter(t => t.id !== task.id);
      });
    }
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe(task => {
      this.tasks.push(task);
      alert("Task adding successfully");
    })
  }

}
