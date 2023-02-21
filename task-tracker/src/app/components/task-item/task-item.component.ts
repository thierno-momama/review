import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit{

  @Input() task!: Task;
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  @Output() onDelete: EventEmitter<Task> = new EventEmitter();
  faTimes =  faTimes;


  constructor(){}

  ngOnInit(): void {
    
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }

}